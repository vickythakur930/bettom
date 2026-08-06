import { League } from '@/types/sports';

export const mockLeagues: League[] = [
  { id: 'nba', name: 'NBA', country: 'USA', countryFlag: '🇺🇸', sport: 'basketball', matchCount: 6, isPopular: true },
  { id: 'euroleague', name: 'EuroLeague', country: 'Europe', countryFlag: '🇪🇺', sport: 'basketball', matchCount: 4, isPopular: true },
  { id: 'liga-acb', name: 'Liga ACB', country: 'Spain', countryFlag: '🇪🇸', sport: 'basketball', matchCount: 3, isPopular: true },
  { id: 'ncaa', name: 'NCAA College Basketball', country: 'USA', countryFlag: '🇺🇸', sport: 'basketball', matchCount: 8, isPopular: false },
  { id: 'fiba-wc', name: 'FIBA World Cup', country: 'International', countryFlag: '🌐', sport: 'basketball', matchCount: 2, isPopular: true },
  { id: 'bbl', name: 'Basketball Bundesliga', country: 'Germany', countryFlag: '🇩🇪', sport: 'basketball', matchCount: 3, isPopular: false },
  { id: 'premier-league', name: 'Premier League', country: 'England', countryFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', sport: 'football', matchCount: 10, isPopular: true },
  { id: 'champions-league', name: 'UEFA Champions League', country: 'Europe', countryFlag: '🇪🇺', sport: 'football', matchCount: 8, isPopular: true },
];
