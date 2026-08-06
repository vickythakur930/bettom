import { create } from 'zustand';
import { OddsFormat } from '@/types/betslip';
import { SportType } from '@/types/sports';

export type TimeFilterValue = 'live' | '60min' | '2hrs' | 'today' | 'tomorrow' | '7days' | 'later';

const categoryToSportMap: Record<string, SportType> = {
  'the-hundred': 'cricket',
  'the-hundred-women': 'cricket',
  'uefa-super-cup': 'football',
  'community-shield': 'football',
  'premier-league': 'football',
  'efl-cup': 'football',
  'championship': 'football',
  'premiership': 'football',
  'laliga': 'football',
  'serie-a': 'football',
  'bundesliga': 'football',
  'ligue-1': 'football',
  'mlb': 'baseball',
  'nba': 'basketball',
  'euroleague': 'basketball',
};

interface SportsState {
  activeSport: SportType;
  selectedCategory: string;
  activeCategoryTab: 'all' | 'main' | 'handicap' | 'totals' | 'quarters' | 'props';
  activeRegion: string;
  activeTimeFilter: TimeFilterValue;
  oddsFormat: OddsFormat;
  searchQuery: string;
  expandedLeagues: Record<string, boolean>;
  expandedMatches: Record<string, boolean>;
  favorites: Record<string, boolean>;
  activeCountry: string;
  isLiveOnly: boolean;

  // Actions
  setActiveSport: (sport: SportType) => void;
  setSelectedCategory: (category: string) => void;
  setActiveCountry: (country: string) => void;
  setActiveRegion: (region: string) => void;
  setActiveTimeFilter: (timeFilter: TimeFilterValue) => void;
  setActiveCategoryTab: (tab: 'all' | 'main' | 'handicap' | 'totals' | 'quarters' | 'props') => void;
  setOddsFormat: (format: OddsFormat) => void;
  setSearchQuery: (query: string) => void;
  toggleLeagueExpanded: (leagueId: string) => void;
  toggleMatchExpanded: (matchId: string) => void;
  toggleFavorite: (matchId: string) => void;
  setIsLiveOnly: (liveOnly: boolean) => void;
  resetFilters: () => void;
}

export const useSportsStore = create<SportsState>((set, get) => ({
  activeSport: 'football',
  selectedCategory: 'premier-league',
  activeRegion: 'Popular',
  activeTimeFilter: 'today',
  activeCountry: 'topBets',
  activeCategoryTab: 'all',
  oddsFormat: 'decimal',
  searchQuery: '',
  expandedLeagues: {
    nba: true,
    euroleague: true,
    'liga-acb': true,
    ncaa: true,
    'premier-league': true,
    laliga: true,
  },
  expandedMatches: {},
  favorites: {},
  isLiveOnly: false,

  resetFilters: () =>
    set({
      selectedCategory: 'premier-league',
      activeSport: 'football',
      activeRegion: 'Popular',
      activeTimeFilter: 'today',
      activeCountry: 'topBets',
      searchQuery: '',
      activeCategoryTab: 'all',
      expandedMatches: {},
    }),

  setActiveSport: (sport) =>
    set({
      activeSport: sport,
      selectedCategory: sport,
      expandedMatches: {},
      searchQuery: '',
    }),

  setSelectedCategory: (category) => {
    const targetSport = categoryToSportMap[category] || (category as SportType);
    set({
      selectedCategory: category,
      activeSport: targetSport,
      expandedMatches: {},
      searchQuery: '',
    });
  },

  setActiveCountry: (country) => set({ activeCountry: country }),
  setActiveRegion: (region) => set({ activeRegion: region }),
  setActiveTimeFilter: (timeFilter) => set({ activeTimeFilter: timeFilter }),
  setActiveCategoryTab: (tab) => set({ activeCategoryTab: tab }),
  setOddsFormat: (format) => set({ oddsFormat: format }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  toggleLeagueExpanded: (leagueId) =>
    set({
      expandedLeagues: {
        ...get().expandedLeagues,
        [leagueId]: !get().expandedLeagues[leagueId],
      },
    }),
  toggleMatchExpanded: (matchId) =>
    set({
      expandedMatches: {
        ...get().expandedMatches,
        [matchId]: !get().expandedMatches[matchId],
      },
    }),
  toggleFavorite: (matchId) =>
    set({
      favorites: {
        ...get().favorites,
        [matchId]: !get().favorites[matchId],
      },
    }),
  setIsLiveOnly: (liveOnly) => set({ isLiveOnly: liveOnly }),
}));
