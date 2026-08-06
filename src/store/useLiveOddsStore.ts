import { create } from 'zustand';
import { mockAllSportsMatches } from '@/mock/allSportsMatches';
import { Match } from '@/types/sports';

interface LiveOddsState {
  matches: Match[];
  ticks: Record<string, 'up' | 'down'>; // key: outcomeId -> 'up' | 'down'
  
  // Actions
  updateOdds: () => void;
  getMatchById: (id: string) => Match | undefined;
}

export const useLiveOddsStore = create<LiveOddsState>((set, get) => ({
  matches: mockAllSportsMatches,
  ticks: {},

  getMatchById: (id) => get().matches.find((m) => m.id === id),

  updateOdds: () => {
    const { matches } = get();
    const newTicks: Record<string, 'up' | 'down'> = {};
    let hasAnyChanges = false;

    const updatedMatches = matches.map((match) => {
      if (!match.isLive) return match;

      let matchChanged = false;

      // Randomly update match score
      let updatedHomeScore = match.homeTeam.score;
      let updatedAwayScore = match.awayTeam.score;

      if (Math.random() > 0.75) {
        matchChanged = true;
        if (Math.random() > 0.5) {
          updatedHomeScore += Math.random() > 0.5 ? 2 : 3;
        } else {
          updatedAwayScore += Math.random() > 0.5 ? 2 : 3;
        }
      }

      // Randomly tweak odds for live markets
      const updatedMarkets = match.markets.map((market) => {
        let marketChanged = false;
        const updatedOutcomes = market.outcomes.map((outcome) => {
          if (Math.random() > 0.8) {
            const change = (Math.random() * 0.15 - 0.07).toFixed(2);
            const delta = parseFloat(change);
            const newOdds = Math.max(1.05, parseFloat((outcome.odds + delta).toFixed(2)));

            if (newOdds !== outcome.odds) {
              matchChanged = true;
              marketChanged = true;
              const tick: 'up' | 'down' = newOdds > outcome.odds ? 'up' : 'down';
              newTicks[outcome.id] = tick;
              return {
                ...outcome,
                previousOdds: outcome.odds,
                odds: newOdds,
                tick,
              };
            }
          }
          return outcome;
        });

        return marketChanged ? { ...market, outcomes: updatedOutcomes } : market;
      });

      if (!matchChanged) return match;

      hasAnyChanges = true;
      return {
        ...match,
        homeTeam: { ...match.homeTeam, score: updatedHomeScore },
        awayTeam: { ...match.awayTeam, score: updatedAwayScore },
        markets: updatedMarkets,
      };
    });

    if (!hasAnyChanges && Object.keys(newTicks).length === 0) return;

    set({ matches: updatedMatches, ticks: newTicks });

    // Reset tick effects after 1s
    setTimeout(() => {
      set({ ticks: {} });
    }, 1000);
  },
}));
