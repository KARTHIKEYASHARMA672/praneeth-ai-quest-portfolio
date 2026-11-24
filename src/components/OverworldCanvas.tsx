import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { WORLD_ZONES, type ZoneId } from '../data/projects';

interface OverworldCanvasProps {
  activeZoneId: ZoneId;
  collectedCores: ZoneId[];
  onSelectZone: (zoneId: ZoneId) => void;
  onCollectCore: (zoneId: ZoneId) => void;
  cameraMode: 'orbit' | 'follow' | 'top';
}

interface CoreObject {
  zoneId: ZoneId;
  mesh: THREE.Mesh;
  ring: THREE.Mesh;
  basePos: THREE.Vector3;
}

export function OverworldCanvas({
  activeZoneId,
  collectedCores,
  onSelectZone,
  onCollectCore,
  cameraMode,
}: OverworldCanvasProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  // Refs for syncing React props cleanly into the 60fps Three.js loop
  const activeZoneRef = useRef<ZoneId>(activeZoneId);
  const collectedRef = useRef<ZoneId[]>(collectedCores);
  const cameraModeRef = useRef(cameraMode);
  const targetBotPosRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0.55, 1.8));
  const keysPressedRef = useRef<Set<string>>(new Set());
  const dpadVectorRef = useRef<{ x: number; z: number }>({ x: 0, z: 0 });
  const onSelectZoneRef = useRef(onSelectZone);
  const onCollectCoreRef = useRef(onCollectCore);

  useEffect(() => {
    activeZoneRef.current = activeZoneId;
    const z = WORLD_ZONES.find((item) => item.id === activeZoneId);
    if (z) {
      targetBotPosRef.current.set(z.position[0], 0.55, z.position[2] + 1.8);
    }
  }, [activeZoneId]);

  useEffect(() => {
    collectedRef.current = collectedCores;
  }, [collectedCores]);

  useEffect(() => {
    cameraModeRef.current = cameraMode;
  }, [cameraMode]);

  useEffect(() => {
    onSelectZoneRef.current = onSelectZone;
    onCollectCoreRef.current = onCollectCore;
  }, [onSelectZone, onCollectCore]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId = 0;

    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    } catch {
      container.innerHTML =
        '<div style="display:flex;height:100%;align-items:center;justify-content:center;padding:24px;text-align:center;color:#352219;font-weight:700;">WebGL2 hardware acceleration is unavailable in this browser context. Use the Fast-Travel Zone buttons below to explore.</div>';
      return;
    }

    const width = container.clientWidth || 1000;
    const height = container.clientHeight || 560;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#F7E8D4');
    scene.fog = new THREE.Fog('#F7E8D4', 32, 72);

    const camera = new THREE.PerspectiveCamera(44, width / height, 0.1, 150);
    camera.position.set(0, 17, 23);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.maxPolarAngle = Math.PI / 2.18;
    controls.minDistance = 10;
    controls.maxDistance = 38;
    controls.target.set(0, 0.5, 2.5);

    // Warm Daylight Studio Lighting
    const hemi = new THREE.HemisphereLight('#FFF8E9', '#D6B89A', 1.15);
    scene.add(hemi);

    const sun = new THREE.DirectionalLight('#FFF3DC', 1.65);
    sun.position.set(16, 26, 14);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 2048;
    sun.shadow.mapSize.height = 2048;
    sun.shadow.camera.near = 2;
    sun.shadow.camera.far = 75;
    const d = 22;
    sun.shadow.camera.left = -d;
    sun.shadow.camera.right = d;
    sun.shadow.camera.top = d;
    sun.shadow.camera.bottom = -d;
    sun.shadow.bias = -0.0005;
    scene.add(sun);

    const bounce = new THREE.DirectionalLight('#FFD6A6', 0.45);
    bounce.position.set(-14, 8, -12);
    scene.add(bounce);

    // Warm Sand-Cream Sea Plane below islands
    const seaGeo = new THREE.PlaneGeometry(160, 160);
    const seaMat = new THREE.MeshStandardMaterial({
      color: '#EFD9C0',
      roughness: 0.92,
      metalness: 0.02,
    });
    const sea = new THREE.Mesh(seaGeo, seaMat);
    sea.rotation.x = -Math.PI / 2;
    sea.position.y = -1.35;
    sea.receiveShadow = true;
    scene.add(sea);

    // Subtle concentric board rings on the sea plane
    for (let r = 8; r <= 24; r += 8) {
      const ringGeo = new THREE.RingGeometry(r - 0.08, r + 0.08, 72);
      const ringMat = new THREE.MeshBasicMaterial({
        color: '#D6BEA5',
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.55,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = -1.32;
      scene.add(ring);
    }

    // Shared materials
    const inkMat = new THREE.MeshStandardMaterial({ color: '#352219', roughness: 0.6 });
    const creamMat = new THREE.MeshStandardMaterial({ color: '#FFFDF7', roughness: 0.55 });
    const terracottaMat = new THREE.MeshStandardMaterial({ color: '#C94F16', roughness: 0.45 });
    const goldMat = new THREE.MeshStandardMaterial({
      color: '#E6A23C',
      roughness: 0.25,
      metalness: 0.55,
    });
    const sageMat = new THREE.MeshStandardMaterial({ color: '#245B45', roughness: 0.6 });
    const woodMat = new THREE.MeshStandardMaterial({ color: '#8C5230', roughness: 0.7 });

    // Wooden Bridges connecting islands
    const bridgePairs: Array<[ZoneId, ZoneId]> = [
      ['citadel', 'foundry'],
      ['citadel', 'spatial'],
      ['citadel', 'vision'],
      ['citadel', 'guild'],
      ['citadel', 'arcade'],
      ['vision', 'arcade'],
      ['guild', 'arcade'],
    ];

    bridgePairs.forEach(([aId, bId]) => {
      const a = WORLD_ZONES.find((z) => z.id === aId);
      const b = WORLD_ZONES.find((z) => z.id === bId);
      if (!a || !b) return;
      const start = new THREE.Vector3(...a.position);
      const end = new THREE.Vector3(...b.position);
      const dir = new THREE.Vector3().subVectors(end, start);
      const len = dir.length();
      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);

      const plankGroup = new THREE.Group();
      plankGroup.position.set(mid.x, -0.08, mid.z);
      plankGroup.lookAt(end.x, -0.08, end.z);

      const deck = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.16, Math.max(len - 5.2, 1)), woodMat);
      deck.castShadow = true;
      deck.receiveShadow = true;
      plankGroup.add(deck);

      // Railings
      const railGeo = new THREE.BoxGeometry(0.1, 0.28, Math.max(len - 5.2, 1));
      const railL = new THREE.Mesh(railGeo, inkMat);
      railL.position.set(-0.64, 0.18, 0);
      const railR = new THREE.Mesh(railGeo, inkMat);
      railR.position.set(0.64, 0.18, 0);
      plankGroup.add(railL, railR);
      scene.add(plankGroup);
    });

    // Build the 6 Interactive Zone Islands + Landmarks + Collectible AI Cores
    const islandHitTargets: THREE.Mesh[] = [];
    const zoneRings: Map<ZoneId, THREE.Mesh> = new Map();
    const coreObjects: CoreObject[] = [];
    const animatedProps: Array<{ obj: THREE.Object3D; speed: number; axis: 'y' | 'z' | 'bob'; baseY: number }> = [];

    WORLD_ZONES.forEach((zone) => {
      const group = new THREE.Group();
      group.position.set(zone.position[0], zone.position[1], zone.position[2]);

      const zoneMat = new THREE.MeshStandardMaterial({ color: zone.color, roughness: 0.45 });

      // Island Base Pedestal
      const base = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 2.7, 1.1, 10), woodMat);
      base.position.y = -0.55;
      base.castShadow = true;
      base.receiveShadow = true;
      base.userData.zoneId = zone.id;
      group.add(base);
      islandHitTargets.push(base);

      // Top Surface Deck
      const deck = new THREE.Mesh(new THREE.CylinderGeometry(3.55, 3.45, 0.25, 10), creamMat);
      deck.position.y = 0.08;
      deck.receiveShadow = true;
      deck.castShadow = true;
      deck.userData.zoneId = zone.id;
      group.add(deck);
      islandHitTargets.push(deck);

      // Colored Accent Trim Ring
      const trim = new THREE.Mesh(
        new THREE.TorusGeometry(3.52, 0.09, 10, 32),
        zoneMat.clone(),
      );
      trim.rotation.x = Math.PI / 2;
      trim.position.y = 0.22;
      group.add(trim);
      zoneRings.set(zone.id, trim);

      // Tactile Mini Trees around perimeter
      const treePositions: Array<[number, number]> = [
        [-2.4, -1.6],
        [2.3, -1.7],
        [-2.2, 1.8],
      ];
      treePositions.forEach(([tx, tz], idx) => {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.14, 0.55, 6), woodMat);
        trunk.position.set(tx, 0.45, tz);
        trunk.castShadow = true;
        const crown = new THREE.Mesh(
          new THREE.ConeGeometry(0.45 + (idx % 2) * 0.1, 0.95, 7),
          sageMat,
        );
        crown.position.set(tx, 1.05, tz);
        crown.castShadow = true;
        group.add(trunk, crown);
      });

      // Zone-Specific Architectural Landmark
      const landmark = new THREE.Group();
      landmark.position.set(0, 0.2, -0.55);

      if (zone.landmarkType === 'citadel') {
        const keep = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.35, 1.9, 8), terracottaMat);
        keep.position.y = 0.95;
        keep.castShadow = true;
        const roof = new THREE.Mesh(new THREE.ConeGeometry(1.35, 1.15, 8), inkMat);
        roof.position.y = 2.45;
        roof.castShadow = true;
        const gyro = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.08, 12, 32), goldMat);
        gyro.position.y = 3.55;
        animatedProps.push({ obj: gyro, speed: 1.2, axis: 'y', baseY: 3.55 });
        landmark.add(keep, roof, gyro);
      } else if (zone.landmarkType === 'foundry') {
        const hall = new THREE.Mesh(new THREE.BoxGeometry(2.1, 1.3, 1.6), creamMat);
        hall.position.y = 0.65;
        hall.castShadow = true;
        const chimney1 = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.3, 1.8, 8), terracottaMat);
        chimney1.position.set(-0.55, 1.3, -0.35);
        chimney1.castShadow = true;
        const cog = new THREE.Mesh(new THREE.TorusGeometry(0.65, 0.16, 8, 12), goldMat);
        cog.position.set(0.65, 1.65, 0.35);
        animatedProps.push({ obj: cog, speed: 1.4, axis: 'z', baseY: 1.65 });
        landmark.add(hall, chimney1, cog);
      } else if (zone.landmarkType === 'spatial') {
        const towerA = new THREE.Mesh(new THREE.BoxGeometry(0.75, 2.2, 0.75), sageMat);
        towerA.position.set(-0.6, 1.1, -0.2);
        towerA.castShadow = true;
        const towerB = new THREE.Mesh(new THREE.BoxGeometry(0.85, 1.5, 0.85), creamMat);
        towerB.position.set(0.55, 0.75, 0.1);
        towerB.castShadow = true;
        const dome = new THREE.Mesh(new THREE.IcosahedronGeometry(0.55, 1), goldMat);
        dome.position.set(0.55, 2.15, 0.1);
        animatedProps.push({ obj: dome, speed: 0.9, axis: 'y', baseY: 2.15 });
        landmark.add(towerA, towerB, dome);
      } else if (zone.landmarkType === 'vision') {
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, 1.8, 8), zoneMat);
        pillar.position.y = 0.9;
        pillar.castShadow = true;
        const lensRim = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.12, 12, 24), creamMat);
        lensRim.position.set(0, 2.3, 0);
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 16), goldMat);
        eye.position.set(0, 2.3, 0);
        animatedProps.push({ obj: lensRim, speed: 1.0, axis: 'y', baseY: 2.3 });
        landmark.add(pillar, lensRim, eye);
      } else if (zone.landmarkType === 'guild') {
        const podium = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.6, 1.5), terracottaMat);
        podium.position.y = 0.3;
        podium.castShadow = true;
        const arch = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.14, 10, 24, Math.PI), creamMat);
        arch.position.y = 0.65;
        const codex = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.85, 0.18), goldMat);
        codex.position.set(0, 1.75, 0);
        animatedProps.push({ obj: codex, speed: 1.1, axis: 'y', baseY: 1.75 });
        landmark.add(podium, arch, codex);
      } else {
        // Arcade Voxel Trophy
        const steps = [1.8, 1.3, 0.8];
        steps.forEach((size, idx) => {
          const stepMesh = new THREE.Mesh(
            new THREE.BoxGeometry(size, 0.42, size),
            idx % 2 === 0 ? terracottaMat : creamMat,
          );
          stepMesh.position.y = 0.21 + idx * 0.42;
          stepMesh.castShadow = true;
          landmark.add(stepMesh);
        });
        const trophy = new THREE.Mesh(new THREE.OctahedronGeometry(0.55, 0), goldMat);
        trophy.position.y = 2.05;
        animatedProps.push({ obj: trophy, speed: 1.5, axis: 'y', baseY: 2.05 });
        landmark.add(trophy);
      }

      group.add(landmark);

      // Collectible Floating AI Core on the front deck of each island
      const corePedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 0.2, 12), inkMat);
      corePedestal.position.set(0, 0.28, 1.85);
      group.add(corePedestal);

      const coreMesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.38, 0),
        new THREE.MeshStandardMaterial({
          color: '#E6A23C',
          emissive: '#C94F16',
          emissiveIntensity: 0.25,
          metalness: 0.65,
          roughness: 0.2,
        }),
      );
      coreMesh.position.set(0, 1.05, 1.85);
      coreMesh.castShadow = true;
      group.add(coreMesh);

      const haloRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.55, 0.04, 8, 24),
        new THREE.MeshBasicMaterial({ color: '#E6A23C' }),
      );
      haloRing.rotation.x = Math.PI / 2;
      haloRing.position.set(0, 0.42, 1.85);
      group.add(haloRing);

      coreObjects.push({
        zoneId: zone.id,
        mesh: coreMesh,
        ring: haloRing,
        basePos: new THREE.Vector3(zone.position[0], 0, zone.position[2] + 1.85),
      });

      scene.add(group);
    });

    // Floating Stylized Clouds in the warm sky
    const clouds: THREE.Group[] = [];
    for (let i = 0; i < 7; i++) {
      const cloud = new THREE.Group();
      const puffMat = new THREE.MeshStandardMaterial({ color: '#FFFFFF', roughness: 0.95 });
      for (let p = 0; p < 3; p++) {
        const puff = new THREE.Mesh(new THREE.SphereGeometry(0.75 + p * 0.15, 10, 10), puffMat);
        puff.position.set((p - 1) * 0.8, p === 1 ? 0.25 : 0, 0);
        puff.scale.y = 0.65;
        cloud.add(puff);
      }
      cloud.position.set(-22 + i * 7.5, 9.8 + (i % 3) * 1.4, -15 - (i % 2) * 7);
      scene.add(cloud);
      clouds.push(cloud);
    }

    // Playable Explorer Bot ("KARTHIK-BOT")
    const bot = new THREE.Group();
    const botShadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.55, 20),
      new THREE.MeshBasicMaterial({ color: '#352219', transparent: true, opacity: 0.22 }),
    );
    botShadow.rotation.x = -Math.PI / 2;
    botShadow.position.y = -0.32;
    bot.add(botShadow);

    const chassis = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.72, 0.82), terracottaMat);
    chassis.position.y = 0.18;
    chassis.castShadow = true;
    bot.add(chassis);

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.48, 0.64), creamMat);
    head.position.y = 0.78;
    head.castShadow = true;
    bot.add(head);

    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.22, 0.08), inkMat);
    visor.position.set(0, 0.8, 0.32);
    bot.add(visor);

    const eyeGeo = new THREE.SphereGeometry(0.055, 10, 10);
    const eyeL = new THREE.Mesh(eyeGeo, goldMat);
    eyeL.position.set(-0.13, 0.8, 0.36);
    const eyeR = new THREE.Mesh(eyeGeo, goldMat);
    eyeR.position.set(0.13, 0.8, 0.36);
    bot.add(eyeL, eyeR);

    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.35, 8), inkMat);
    antenna.position.set(0, 1.18, 0);
    const antennaTip = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 10), goldMat);
    antennaTip.position.set(0, 1.38, 0);
    bot.add(antenna, antennaTip);

    bot.position.copy(targetBotPosRef.current);
    scene.add(bot);

    // Raycasting for clicking/hovering islands
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let pointerDownPos = { x: 0, y: 0 };

    const onPointerDown = (e: PointerEvent) => {
      pointerDownPos = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!renderer) return;
      const distMoved = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
      if (distMoved > 6) return; // Dragging camera, not clicking

      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(islandHitTargets, false);
      if (hits.length > 0) {
        const hitZone = hits[0].object.userData.zoneId as ZoneId | undefined;
        if (hitZone) {
          onSelectZoneRef.current(hitZone);
        }
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!renderer) return;
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(islandHitTargets, false);
      renderer.domElement.style.cursor = hits.length > 0 ? 'pointer' : 'grab';
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) {
        if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          keysPressedRef.current.add(k);
        }
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      keysPressedRef.current.delete(e.key.toLowerCase());
    };

    const onResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth || 1000;
      const h = container.clientHeight || 560;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.getElapsedTime();

      // Rotate landmarks
      animatedProps.forEach((item) => {
        if (item.axis === 'y') item.obj.rotation.y = elapsed * item.speed;
        if (item.axis === 'z') item.obj.rotation.z = elapsed * item.speed;
      });

      // Drift clouds
      clouds.forEach((c, idx) => {
        c.position.x += dt * (0.35 + (idx % 3) * 0.12);
        if (c.position.x > 28) c.position.x = -28;
      });

      // Keyboard / D-pad manual drive
      const keys = keysPressedRef.current;
      let moveX = dpadVectorRef.current.x;
      let moveZ = dpadVectorRef.current.z;
      if (keys.has('w') || keys.has('arrowup')) moveZ -= 1;
      if (keys.has('s') || keys.has('arrowdown')) moveZ += 1;
      if (keys.has('a') || keys.has('arrowleft')) moveX -= 1;
      if (keys.has('d') || keys.has('arrowright')) moveX += 1;

      if (moveX !== 0 || moveZ !== 0) {
        const len = Math.hypot(moveX, moveZ) || 1;
        const speed = 7.5 * dt;
        const nextX = THREE.MathUtils.clamp(bot.position.x + (moveX / len) * speed, -14, 14);
        const nextZ = THREE.MathUtils.clamp(bot.position.z + (moveZ / len) * speed, -10, 16);
        targetBotPosRef.current.set(nextX, 0.55, nextZ);
        const angle = Math.atan2(moveX, moveZ);
        bot.rotation.y = angle;
      } else {
        const dx = targetBotPosRef.current.x - bot.position.x;
        const dz = targetBotPosRef.current.z - bot.position.z;
        if (Math.hypot(dx, dz) > 0.12) {
          bot.rotation.y = Math.atan2(dx, dz);
        }
      }

      // Smoothly move Explorer Bot toward target
      bot.position.x = THREE.MathUtils.lerp(bot.position.x, targetBotPosRef.current.x, 0.085);
      bot.position.z = THREE.MathUtils.lerp(bot.position.z, targetBotPosRef.current.z, 0.085);
      bot.position.y = 0.55 + Math.sin(elapsed * 4.2) * 0.08;

      // Update Zone Rings & Collectible Cores
      zoneRings.forEach((ring, zId) => {
        const isActive = activeZoneRef.current === zId;
        const mat = ring.material as THREE.MeshStandardMaterial;
        mat.emissive.set(isActive ? '#E6A23C' : '#000000');
        mat.emissiveIntensity = isActive ? 0.5 + Math.sin(elapsed * 4) * 0.2 : 0;
        ring.scale.setScalar(isActive ? 1.03 : 1.0);
      });

      coreObjects.forEach((core) => {
        const isCollected = collectedRef.current.includes(core.zoneId);
        core.mesh.visible = !isCollected;
        core.ring.visible = !isCollected;
        if (!isCollected) {
          core.mesh.rotation.y = elapsed * 2.1;
          core.mesh.position.y = 1.05 + Math.sin(elapsed * 3.1) * 0.16;
          core.ring.scale.setScalar(1 + Math.sin(elapsed * 3.1) * 0.08);
          const dist = Math.hypot(bot.position.x - core.basePos.x, bot.position.z - core.basePos.z);
          if (dist < 2.25) {
            onCollectCoreRef.current(core.zoneId);
            onSelectZoneRef.current(core.zoneId);
          }
        }
      });

      // Camera Mode behavior
      if (cameraModeRef.current === 'follow') {
        const desiredCam = new THREE.Vector3(bot.position.x, 8.5, bot.position.z + 10.5);
        camera.position.lerp(desiredCam, 0.06);
        controls.target.lerp(new THREE.Vector3(bot.position.x, 0.8, bot.position.z), 0.08);
      } else if (cameraModeRef.current === 'top') {
        camera.position.lerp(new THREE.Vector3(0, 26, 7), 0.06);
        controls.target.lerp(new THREE.Vector3(0, 0, 2.5), 0.08);
      }

      controls.update();
      renderer?.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer?.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer?.domElement.removeEventListener('pointerup', onPointerUp);
      renderer?.domElement.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('resize', onResize);
      controls.dispose();
      renderer?.dispose();
      if (renderer && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative h-[490px] w-full overflow-hidden rounded-2xl border border-[#DEC9B4] bg-[#F7E8D4] shadow-[0_12px_32px_-12px_rgba(53,34,25,0.16)] sm:h-[560px]">
      <div ref={mountRef} className="h-full w-full" aria-label="Interactive 3D AI Portfolio World" />

      {/* On-Screen Navigation D-Pad for mouse/touch driving */}
      <div className="pointer-events-auto absolute bottom-4 left-4 hidden flex-col items-center gap-1 rounded-2xl border border-[#DEC9B4] bg-[#FFF7EC]/95 p-2 shadow-md backdrop-blur-sm sm:flex">
        <button
          type="button"
          onPointerDown={() => (dpadVectorRef.current = { x: 0, z: -1 })}
          onPointerUp={() => (dpadVectorRef.current = { x: 0, z: 0 })}
          onPointerLeave={() => (dpadVectorRef.current = { x: 0, z: 0 })}
          className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#352219] bg-white font-mono text-xs font-bold hover:bg-[#F9EBDC] cursor-pointer"
          aria-label="Drive Up"
        >
          ▲
        </button>
        <div className="flex gap-1">
          <button
            type="button"
            onPointerDown={() => (dpadVectorRef.current = { x: -1, z: 0 })}
            onPointerUp={() => (dpadVectorRef.current = { x: 0, z: 0 })}
            onPointerLeave={() => (dpadVectorRef.current = { x: 0, z: 0 })}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#352219] bg-white font-mono text-xs font-bold hover:bg-[#F9EBDC] cursor-pointer"
            aria-label="Drive Left"
          >
            ◀
          </button>
          <button
            type="button"
            onPointerDown={() => (dpadVectorRef.current = { x: 0, z: 1 })}
            onPointerUp={() => (dpadVectorRef.current = { x: 0, z: 0 })}
            onPointerLeave={() => (dpadVectorRef.current = { x: 0, z: 0 })}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#352219] bg-white font-mono text-xs font-bold hover:bg-[#F9EBDC] cursor-pointer"
            aria-label="Drive Down"
          >
            ▼
          </button>
          <button
            type="button"
            onPointerDown={() => (dpadVectorRef.current = { x: 1, z: 0 })}
            onPointerUp={() => (dpadVectorRef.current = { x: 0, z: 0 })}
            onPointerLeave={() => (dpadVectorRef.current = { x: 0, z: 0 })}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#352219] bg-white font-mono text-xs font-bold hover:bg-[#F9EBDC] cursor-pointer"
            aria-label="Drive Right"
          >
            ▶
          </button>
        </div>
        <span className="font-mono text-[9px] font-bold uppercase text-[#6C5B50]">WASD / Drive</span>
      </div>
    </div>
  );
}
