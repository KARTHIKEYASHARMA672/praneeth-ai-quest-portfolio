import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { WORLD_ZONES, type ZoneId } from '../data/projects';

interface NeuralStudio3DProps {
  activeZoneId: ZoneId;
  onSelectZone: (zoneId: ZoneId) => void;
}

const DOMAIN_ANGLES: Record<ZoneId, number> = {
  citadel: 0,
  foundry: (Math.PI * 2) / 6,
  spatial: ((Math.PI * 2) / 6) * 2,
  vision: ((Math.PI * 2) / 6) * 3,
  guild: ((Math.PI * 2) / 6) * 4,
  arcade: ((Math.PI * 2) / 6) * 5,
};

export function NeuralStudio3D({ activeZoneId, onSelectZone }: NeuralStudio3DProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const activeZoneRef = useRef<ZoneId>(activeZoneId);
  const onSelectZoneRef = useRef(onSelectZone);

  useEffect(() => {
    activeZoneRef.current = activeZoneId;
  }, [activeZoneId]);

  useEffect(() => {
    onSelectZoneRef.current = onSelectZone;
  }, [onSelectZone]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animId = 0;

    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    } catch {
      container.innerHTML =
        '<div style="display:flex;height:100%;align-items:center;justify-content:center;padding:24px;text-align:center;color:#102A56;font-weight:600;">Interactive 3D Studio View requires WebGL2. Use the domain tabs below to inspect all 40 AI projects.</div>';
      return;
    }

    const width = container.clientWidth || 640;
    const height = container.clientHeight || 420;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#F3EFE6');

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 5.2, 11.5);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.enablePan = false;
    controls.minDistance = 7;
    controls.maxDistance = 16;
    controls.minPolarAngle = Math.PI / 5;
    controls.maxPolarAngle = Math.PI / 2.2;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.55;

    // Studio Three-Point Daylight Lighting
    const hemi = new THREE.HemisphereLight('#FFFFFF', '#D5CBB8', 1.25);
    scene.add(hemi);

    const keyLight = new THREE.DirectionalLight('#FFFDF8', 1.75);
    keyLight.position.set(7, 11, 8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight('#D8B56D', 0.65);
    rimLight.position.set(-8, 4, -6);
    scene.add(rimLight);

    // Subtle Architectural Plinth Floor
    const floor = new THREE.Mesh(
      new THREE.CylinderGeometry(5.6, 5.8, 0.25, 64),
      new THREE.MeshStandardMaterial({ color: '#FAF8F4', roughness: 0.85, metalness: 0.05 }),
    );
    floor.position.y = -2.2;
    floor.receiveShadow = true;
    scene.add(floor);

    const floorRing = new THREE.Mesh(
      new THREE.TorusGeometry(5.5, 0.03, 12, 72),
      new THREE.MeshStandardMaterial({ color: '#D2CBB9', roughness: 0.5, metalness: 0.3 }),
    );
    floorRing.rotation.x = Math.PI / 2;
    floorRing.position.y = -2.06;
    scene.add(floorRing);

    // Central Sculpted AI Systems Core (Sapphire + Champagne Brass)
    const coreGroup = new THREE.Group();
    const sapphireMat = new THREE.MeshPhysicalMaterial({
      color: '#1746A2',
      roughness: 0.18,
      metalness: 0.25,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
    });
    const brassMat = new THREE.MeshStandardMaterial({
      color: '#C79B4B',
      roughness: 0.28,
      metalness: 0.78,
    });
    const ivoryMat = new THREE.MeshStandardMaterial({
      color: '#FFFFFF',
      roughness: 0.35,
      metalness: 0.1,
    });
    const navyMat = new THREE.MeshStandardMaterial({
      color: '#102A56',
      roughness: 0.4,
      metalness: 0.4,
    });

    const centralPoly = new THREE.Mesh(new THREE.IcosahedronGeometry(1.18, 1), sapphireMat);
    centralPoly.castShadow = true;
    coreGroup.add(centralPoly);

    const coreCage = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.36, 1),
      new THREE.MeshBasicMaterial({ color: '#D8B56D', wireframe: true, transparent: true, opacity: 0.42 }),
    );
    coreGroup.add(coreCage);

    const gyroA = new THREE.Mesh(new THREE.TorusGeometry(1.95, 0.04, 14, 64), brassMat);
    gyroA.rotation.x = Math.PI / 3;
    const gyroB = new THREE.Mesh(new THREE.TorusGeometry(2.35, 0.03, 14, 64), navyMat);
    gyroB.rotation.y = Math.PI / 4;
    coreGroup.add(gyroA, gyroB);
    scene.add(coreGroup);

    // 6 Orbital Domain Nodes
    const nodeHitTargets: THREE.Mesh[] = [];
    const nodeEntries: Array<{
      zoneId: ZoneId;
      group: THREE.Group;
      orb: THREE.Mesh;
      halo: THREE.Mesh;
      baseAngle: number;
    }> = [];

    const radius = 3.85;
    WORLD_ZONES.forEach((zone) => {
      const angle = DOMAIN_ANGLES[zone.id];
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const group = new THREE.Group();
      group.position.set(x, 0, z);

      // Pedestal disc
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.72, 0.14, 24), ivoryMat);
      disc.position.y = -0.6;
      disc.castShadow = true;
      disc.receiveShadow = true;
      disc.userData.zoneId = zone.id;
      group.add(disc);
      nodeHitTargets.push(disc);

      // Sculpted domain polyhedron
      const orb = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.42, 1),
        new THREE.MeshPhysicalMaterial({
          color: '#1746A2',
          roughness: 0.2,
          metalness: 0.35,
          clearcoat: 0.9,
        }),
      );
      orb.position.y = 0.15;
      orb.castShadow = true;
      orb.userData.zoneId = zone.id;
      group.add(orb);
      nodeHitTargets.push(orb);

      const halo = new THREE.Mesh(new THREE.TorusGeometry(0.66, 0.035, 10, 36), brassMat.clone());
      halo.rotation.x = Math.PI / 2;
      halo.position.y = -0.48;
      group.add(halo);

      // Connector line to center core
      const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, -0.45, z)];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: '#C7BFA9',
        transparent: true,
        opacity: 0.75,
      });
      scene.add(new THREE.Line(lineGeo, lineMat));

      scene.add(group);
      nodeEntries.push({ zoneId: zone.id, group, orb, halo, baseAngle: angle });
    });

    // Raycasting for node selection
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let downPos = { x: 0, y: 0 };

    const onPointerDown = (e: PointerEvent) => {
      downPos = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!renderer) return;
      if (Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y) > 6) return;
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(nodeHitTargets, false);
      if (hits.length > 0) {
        const zId = hits[0].object.userData.zoneId as ZoneId | undefined;
        if (zId) onSelectZoneRef.current(zId);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!renderer) return;
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(nodeHitTargets, false);
      renderer.domElement.style.cursor = hits.length > 0 ? 'pointer' : 'grab';
    };

    const onResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth || 640;
      const h = container.clientHeight || 420;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      centralPoly.rotation.y = t * 0.25;
      centralPoly.rotation.x = Math.sin(t * 0.4) * 0.12;
      coreCage.rotation.y = -t * 0.16;
      gyroA.rotation.z = t * 0.35;
      gyroB.rotation.x = t * 0.24;

      nodeEntries.forEach((entry, idx) => {
        const isActive = activeZoneRef.current === entry.zoneId;
        entry.orb.rotation.y = t * 0.7 + idx;
        entry.orb.position.y = (isActive ? 0.45 : 0.15) + Math.sin(t * 1.8 + idx) * 0.08;
        const orbMat = entry.orb.material as THREE.MeshPhysicalMaterial;
        orbMat.color.set(isActive ? '#B88A3B' : '#1746A2');
        entry.group.scale.setScalar(THREE.MathUtils.lerp(entry.group.scale.x, isActive ? 1.16 : 0.96, 0.08));
        const haloMat = entry.halo.material as THREE.MeshStandardMaterial;
        haloMat.emissive.set(isActive ? '#B88A3B' : '#000000');
        haloMat.emissiveIntensity = isActive ? 0.35 : 0;
      });

      controls.update();
      renderer?.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      renderer?.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer?.domElement.removeEventListener('pointerup', onPointerUp);
      renderer?.domElement.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      controls.dispose();
      renderer?.dispose();
      if (renderer && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative h-[380px] w-full overflow-hidden rounded-2xl border border-[#D2CBB9] bg-[#F3EFE6] shadow-sm sm:h-[440px]">
      <div ref={mountRef} className="h-full w-full" aria-label="Interactive 3D AI Systems Architecture" />
      <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg border border-[#D2CBB9] bg-white/90 px-3 py-1 font-mono text-[11px] font-medium text-[#525D70] backdrop-blur-sm">
        Drag to orbit · Click any 3D domain node to inspect systems
      </div>
    </div>
  );
}
