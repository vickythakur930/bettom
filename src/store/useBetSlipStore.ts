import { create } from 'zustand';
import { BetSelection, BetType, PlacedBet } from '@/types/betslip';

interface BetSlipState {
  selections: BetSelection[];
  betType: BetType;
  accumulatorStake: number;
  placedBets: PlacedBet[];
  isSlipOpen: boolean;
  
  // Actions
  toggleSelection: (selection: Omit<BetSelection, 'stake'>) => void;
  removeSelection: (id: string) => void;
  updateStake: (id: string, stake: number) => void;
  setAccumulatorStake: (stake: number) => void;
  setBetType: (type: BetType) => void;
  clearSlip: () => void;
  toggleSlipOpen: () => void;
  placeBet: () => { success: boolean; ticketId?: string; message?: string };
  cashOutBet: (betId: string) => void;
}

export const useBetSlipStore = create<BetSlipState>((set, get) => ({
  selections: [],
  betType: 'single',
  accumulatorStake: 10,
  placedBets: [
    {
      id: 'pb-001',
      ticketId: 'BET-8849120',
      date: new Date(Date.now() - 3600000 * 3).toISOString(),
      type: 'single',
      selections: [
        {
          id: 'out-101-1',
          matchId: 'match-bsk-101',
          matchTitle: 'Los Angeles Lakers vs Boston Celtics',
          sport: 'basketball',
          marketId: 'mkt-winner-101',
          marketName: 'Match Winner',
          outcome: { id: 'out-101-1', name: 'Los Angeles Lakers', odds: 1.75 },
          stake: 25,
          isLive: true,
          liveScore: '78 - 75',
        },
      ],
      totalStake: 25,
      totalOdds: 1.75,
      potentialPayout: 43.75,
      status: 'open',
      cashOutAmount: 29.50,
    },
  ],
  isSlipOpen: false,

  toggleSelection: (selection) => {
    const { selections } = get();
    const existingIndex = selections.findIndex((s) => s.id === selection.id);

    if (existingIndex > -1) {
      // Remove selection if already selected
      set({ selections: selections.filter((s) => s.id !== selection.id) });
    } else {
      // If selection from same match & same market exists, replace it
      const filtered = selections.filter(
        (s) => !(s.matchId === selection.matchId && s.marketId === selection.marketId)
      );
      set({
        selections: [...filtered, { ...selection, stake: 10 }],
        isSlipOpen: true,
      });
    }
  },

  removeSelection: (id) => {
    set({ selections: get().selections.filter((s) => s.id !== id) });
  },

  updateStake: (id, stake) => {
    set({
      selections: get().selections.map((s) =>
        s.id === id ? { ...s, stake: Math.max(0, stake) } : s
      ),
    });
  },

  setAccumulatorStake: (stake) => {
    set({ accumulatorStake: Math.max(0, stake) });
  },

  setBetType: (type) => {
    set({ betType: type });
  },

  clearSlip: () => {
    set({ selections: [] });
  },

  toggleSlipOpen: () => {
    set({ isSlipOpen: !get().isSlipOpen });
  },

  placeBet: () => {
    const { selections, betType, accumulatorStake } = get();
    if (selections.length === 0) return { success: false, message: 'Bet slip is empty' };

    let totalStake = 0;
    let totalOdds = 1;
    let potentialPayout = 0;

    if (betType === 'single') {
      totalStake = selections.reduce((acc, s) => acc + s.stake, 0);
      potentialPayout = selections.reduce((acc, s) => acc + s.stake * s.outcome.odds, 0);
      totalOdds = selections.length > 0 ? selections[0].outcome.odds : 1;
    } else {
      totalStake = accumulatorStake;
      totalOdds = selections.reduce((acc, s) => acc * s.outcome.odds, 1);
      potentialPayout = totalStake * totalOdds;
    }

    const ticketId = `BET-${Math.floor(1000000 + Math.random() * 9000000)}`;
    const newBet: PlacedBet = {
      id: `pb-${Date.now()}`,
      ticketId,
      date: new Date().toISOString(),
      type: betType,
      selections: [...selections],
      totalStake,
      totalOdds,
      potentialPayout,
      status: 'open',
      cashOutAmount: totalStake * 0.9,
    };

    set((state) => ({
      placedBets: [newBet, ...state.placedBets],
      selections: [],
    }));

    return { success: true, ticketId };
  },

  cashOutBet: (betId) => {
    set((state) => ({
      placedBets: state.placedBets.map((b) =>
        b.id === betId ? { ...b, status: 'cashed_out' } : b
      ),
    }));
  },
}));
