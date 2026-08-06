import { OddsValue, SportType } from './sports';

export type BetType = 'single' | 'accumulator' | 'system';
export type OddsFormat = 'decimal' | 'fractional' | 'american';

export interface BetSelection {
  id: string; // unique selection id e.g. matchId + marketId + outcomeId
  matchId: string;
  matchTitle: string; // e.g. "Los Angeles Lakers vs Boston Celtics"
  sport: SportType;
  marketId: string;
  marketName: string; // e.g. "Match Winner"
  outcome: OddsValue;
  stake: number;
  isLive: boolean;
  liveScore?: string;
}

export interface PlacedBet {
  id: string;
  ticketId: string;
  date: string;
  type: BetType;
  selections: BetSelection[];
  totalStake: number;
  totalOdds: number;
  potentialPayout: number;
  status: 'open' | 'won' | 'lost' | 'cashed_out';
  cashOutAmount?: number;
}
