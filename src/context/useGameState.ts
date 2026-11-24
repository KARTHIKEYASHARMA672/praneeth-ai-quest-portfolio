import { createContext, useContext } from 'react';
import type { ZoneId } from '../data/projects';

export interface GameStateValue {
  collectedCores: ZoneId[];
  collectCore: (zoneId: ZoneId) => void;
  resetCores: () => void;
  activeZoneId: ZoneId;
  setActiveZoneId: (zoneId: ZoneId) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  bossHighScore: number;
  updateBossHighScore: (score: number) => void;
  rankTitle: string;
}

export const GameStateContext = createContext<GameStateValue | null>(null);

export function useGameState(): GameStateValue {
  const ctx = useContext(GameStateContext);
  if (!ctx) {
    throw new Error('useGameState must be used inside GameStateProvider');
  }
  return ctx;
}
