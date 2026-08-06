export type SportType =
  | 'basketball'
  | 'football'
  | 'tennis'
  | 'cricket'
  | 'ice-hockey'
  | 'volleyball'
  | 'esports'
  | 'darts'
  | 'golf'
  | 'american-football'
  | 'aussie-rules'
  | 'badminton'
  | 'baseball'
  | 'biathlon'
  | 'boxing'
  | 'chess'
  | 'cycling'
  | 'field-hockey'
  | 'formula-1'
  | 'futsal'
  | 'gaelic-football'
  | 'handball'
  | 'hurling'
  | 'mma'
  | 'motor-racing'
  | 'padel'
  | 'pesapallo'
  | 'politics'
  | 'rugby-league'
  | 'rugby-union'
  | 'sailing'
  | 'snooker'
  | 'specials'
  | 'speedway'
  | 'table-tennis'
  | 'water-polo'
  | 'horse-racing'
  | 'greyhounds'
  | 'price-boost'
  | string;

export interface OddsValue {
  id: string;
  name: string; // e.g. "1", "2", "Over 214.5", "Lakers -4.5"
  odds: number; // decimal odds e.g. 1.85
  previousOdds?: number;
  tick?: 'up' | 'down' | null;
  suspended?: boolean;
}

export interface Market {
  id: string;
  name: string; // e.g. "Winner", "Handicap", "Total Points"
  category?: 'main' | 'handicap' | 'totals' | 'quarters' | 'props' | string;
  outcomes: OddsValue[];
}

export interface MatchTeam {
  id: string;
  name: string;
  shortName?: string;
  logo?: string;
  icon?: string;
  score: number;
  periodScores?: number[]; // e.g. [24, 28, 18]
  possession?: boolean;
}

export interface LiveStats {
  fieldGoalsMade?: number;
  fieldGoalsAttempted?: number;
  threePointersMade?: number;
  threePointersAttempted?: number;
  freeThrowsMade?: number;
  freeThrowsAttempted?: number;
  rebounds?: number;
  assists?: number;
  turnovers?: number;
  fouls?: number;
  timeoutsLeft?: number;
}

export interface Match {
  id: string;
  sport: SportType;
  categoryId?: string;
  leagueId: string;
  leagueName: string;
  country?: string;
  countryFlag?: string;
  isPopular?: boolean;
  isLive: boolean;
  liveStatus?: string;
  liveClock?: string;
  minute?: string;
  quarter?: string;
  timeRemaining?: string;
  overs?: string;
  setInfo?: string;
  period?: string;
  inning?: string;
  statusText?: string;
  startTime?: string;
  homeTeam: MatchTeam;
  awayTeam: MatchTeam;
  markets: Market[];
  stats?: {
    home: LiveStats;
    away: LiveStats;
  };
  hasLiveTracker?: boolean;
  hasStream?: boolean;
}

export interface League {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  sport: SportType;
  matchCount: number;
  isPopular?: boolean;
}

export interface SportCategory {
  id: SportType;
  name: string;
  iconName: string;
  liveCount: number;
  totalCount: number;
}
