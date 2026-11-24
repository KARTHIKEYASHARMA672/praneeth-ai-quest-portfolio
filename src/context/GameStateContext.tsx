import { useState, useCallback, useEffect, type ReactNode } from 'react';
import type { ZoneId } from '../data/projects';
import { WORLD_ZONES } from '../data/projects';
import { playCollectChime, playVictoryFanfare } from '../utils/sound';
import { GameStateContext } from './useGameState';

const STORAGE_CORES_KEY = 'praneeth_ai_quest_cores_v1';
const STORAGE_BOSS_KEY = 'praneeth_ai_quest_boss_score_v1';

export function GameStateProvider({ children }: { children: ReactNode }) {
  const [collectedCores, setCollectedCores] = useState<ZoneId[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_CORES_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ZoneId[];
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore storage errors
    }
    return ['citadel'];
  });

  const [bossHighScore, setBossHighScore] = useState<number>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_BOSS_KEY);
      return raw ? Number(raw) || 0 : 0;
    } catch {
      return 0;
    }
  });

  const [activeZoneId, setActiveZoneId] = useState<ZoneId>('citadel');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_CORES_KEY, JSON.stringify(collectedCores));
    } catch {
      // ignore
    }
  }, [collectedCores]);

  const collectCore = useCallback(
    (zoneId: ZoneId) => {
      setCollectedCores((prev) => {
        if (prev.includes(zoneId)) return prev;
        const next = [...prev, zoneId];
        if (next.length === WORLD_ZONES.length) {
          playVictoryFanfare(soundEnabled);
        } else {
          playCollectChime(soundEnabled);
        }
        return next;
      });
    },
    [soundEnabled],
  );

  const resetCores = useCallback(() => {
    setCollectedCores(['citadel']);
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev);
  }, []);

  const updateBossHighScore = useCallback((score: number) => {
    setBossHighScore((prev) => {
      const best = Math.max(prev, score);
      try {
        localStorage.setItem(STORAGE_BOSS_KEY, String(best));
      } catch {
        // ignore
      }
      return best;
    });
  }, []);

  const rankTitle =
    collectedCores.length >= 6
      ? 'Grandmaster AI Architect'
      : collectedCores.length >= 4
        ? 'Lead Agentic Builder'
        : collectedCores.length >= 2
          ? 'Neural Systems Explorer'
          : 'Quest Initiate';

  return (
    <GameStateContext.Provider
      value={{
        collectedCores,
        collectCore,
        resetCores,
        activeZoneId,
        setActiveZoneId,
        soundEnabled,
        toggleSound,
        bossHighScore,
        updateBossHighScore,
        rankTitle,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}
