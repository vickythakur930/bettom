'use client';

import React, { useState, useMemo } from 'react';
import { Search, Lock, Play, ChevronRight, ChevronDown, Check } from 'lucide-react';
import { useBetSlipStore } from '@/store/useBetSlipStore';
import { useSportsStore } from '@/store/useSportsStore';
import { SportInfoGuide } from './SportInfoGuide';

interface InPlaySportTile {
  id: string;
  name: string;
  icon: string;
  count: number;
}

const IN_PLAY_SPORTS: InPlaySportTile[] = [
  { id: 'basketball', name: 'Basketball', icon: '🏀', count: 4 },
  { id: 'tennis', name: 'Tennis', icon: '🎾', count: 6 },
  { id: 'cricket', name: 'Cricket', icon: '🏏', count: 1 },
  { id: 'badminton', name: 'Badminton', icon: '🏸', count: 3 },
  { id: 'baseball', name: 'Baseball', icon: '⚾', count: 1 },
  { id: 'esports', name: 'eSports', icon: '🎮', count: 25 },
  { id: 'table-tennis', name: 'Table Te...', icon: '🏓', count: 20 },
  { id: 'volleyball', name: 'Volleyball', icon: '🏐', count: 2 },
  { id: 'football', name: 'Football', icon: '⚽', count: 18 },
  { id: 'handball', name: 'Handball', icon: '🤾', count: 5 },
];

interface InPlayRegionPill {
  id: string;
  code: string;
  flag: string;
  count?: number;
}

const IN_PLAY_REGIONS: InPlayRegionPill[] = [
  { id: 'all', code: 'All', flag: '' },
  { id: 'int', code: 'INT', flag: '🌐', count: 2 },
  { id: 'chn', code: 'CHN', flag: '🇨🇳', count: 2 },
  { id: 'usa', code: 'USA', flag: '🇺🇸', count: 4 },
  { id: 'eur', code: 'EUR', flag: '🇪🇺', count: 3 },
  { id: 'eng', code: 'ENG', flag: '🇬🇧', count: 5 },
];

interface InPlayMatchData {
  id: string;
  leagueId: string;
  leagueName: string;
  leagueFlag: string;
  period: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  marketCount: number;
  homeOdds: string;
  awayOdds: string;
  homeOddsActive?: boolean;
  awayOddsActive?: boolean;
  homeLocked?: boolean;
  awayLocked?: boolean;
  overOdds: string;
  underOdds: string;
  totalLine: string;
  overTrend?: 'up' | 'down';
  underTrend?: 'up' | 'down';
  handicapHome: string;
  handicapAway: string;
  handicapHomeOdds: string;
  handicapAwayOdds: string;
  handicapLocked?: boolean;
}

const mockInPlayMatches: Record<string, InPlayMatchData[]> = {
  basketball: [
    {
      id: 'bskt-1',
      leagueId: 'bskt-cup',
      leagueName: 'BSKT Cup 2026',
      leagueFlag: '🌐',
      period: '4th Quarter',
      homeTeam: 'Tigers',
      awayTeam: 'Lions',
      homeScore: 62,
      awayScore: 56,
      marketCount: 22,
      homeOdds: '1/7',
      awayOdds: '15/4',
      homeOddsActive: true,
      overOdds: '5/6',
      underOdds: '5/6',
      totalLine: '149.5',
      underTrend: 'up',
      handicapHome: '-7.5',
      handicapAway: '+7.5',
      handicapHomeOdds: '5/6',
      handicapAwayOdds: '5/6',
      handicapLocked: true,
    },
    {
      id: 'bskt-2',
      leagueId: 'bskt-cup',
      leagueName: 'BSKT Cup 2026',
      leagueFlag: '🌐',
      period: '3rd Quarter',
      homeTeam: 'Athletic Basket',
      awayTeam: 'Union Kremin',
      homeScore: 69,
      awayScore: 49,
      marketCount: 30,
      homeOdds: '1/12',
      awayOdds: '7/1',
      homeLocked: true,
      awayLocked: true,
      overOdds: '5/6',
      underOdds: '5/6',
      totalLine: '174.5',
      overTrend: 'down',
      handicapHome: '-18.5',
      handicapAway: '+18.5',
      handicapHomeOdds: '5/6',
      handicapAwayOdds: '5/6',
      handicapLocked: true,
    },
    {
      id: 'bskt-3',
      leagueId: 'u19-chn',
      leagueName: 'U19 Championship 2026',
      leagueFlag: '🇨🇳',
      period: "< 3' 1st Quarter",
      homeTeam: 'Jilin Northeast Tigers U19',
      awayTeam: 'Beijing Shougang Ducks U19',
      homeScore: 15,
      awayScore: 14,
      marketCount: 5,
      homeOdds: '7/5',
      awayOdds: '4/9',
      awayOddsActive: true,
      overOdds: '17/20',
      underOdds: '4/5',
      totalLine: '156.5',
      underTrend: 'down',
      handicapHome: '+3.5',
      handicapAway: '-3.5',
      handicapHomeOdds: '5/6',
      handicapAwayOdds: '5/6',
      handicapLocked: true,
    },
    {
      id: 'bskt-4',
      leagueId: 'u19-chn',
      leagueName: 'U19 Championship 2026',
      leagueFlag: '🇨🇳',
      period: "< 3' 1st Quarter",
      homeTeam: 'Heilongjiang U19',
      awayTeam: 'Changsha Wantian Yongsheng U19',
      homeScore: 8,
      awayScore: 13,
      marketCount: 5,
      homeOdds: '6/5',
      awayOdds: '11/20',
      awayOddsActive: true,
      overOdds: '5/6',
      underOdds: '4/5',
      totalLine: '143.5',
      handicapHome: '+3.5',
      handicapAway: '-3.5',
      handicapHomeOdds: '4/5',
      handicapAwayOdds: '17/20',
    },
  ],
  tennis: [
    {
      id: 'ten-1',
      leagueId: 'atp-master',
      leagueName: 'ATP Masters Live Championship',
      leagueFlag: '🌐',
      period: '2nd Set',
      homeTeam: 'Carlos Alcaraz',
      awayTeam: 'Jannik Sinner',
      homeScore: 1,
      awayScore: 0,
      marketCount: 18,
      homeOdds: '2/5',
      awayOdds: '7/4',
      homeOddsActive: true,
      overOdds: '5/6',
      underOdds: '5/6',
      totalLine: '22.5',
      handicapHome: '-2.5',
      handicapAway: '+2.5',
      handicapHomeOdds: '4/5',
      handicapAwayOdds: '9/10',
    },
  ],
  football: [
    {
      id: 'ftb-1',
      leagueId: 'ucl-live',
      leagueName: 'UEFA Champions League Live',
      leagueFlag: '🇪🇺',
      period: "2nd Half 68'",
      homeTeam: 'Real Madrid',
      awayTeam: 'Bayern Munich',
      homeScore: 2,
      awayScore: 1,
      marketCount: 45,
      homeOdds: '1/3',
      awayOdds: '6/1',
      homeOddsActive: true,
      overOdds: '4/5',
      underOdds: '9/10',
      totalLine: '3.5',
      handicapHome: '-1.0',
      handicapAway: '+1.0',
      handicapHomeOdds: '5/6',
      handicapAwayOdds: '5/6',
    },
  ],
};

export const InPlayMainView: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState<string>('basketball');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const toggleSelection = useBetSlipStore((state) => state.toggleSelection);

  // Matches for active sport
  const matches = mockInPlayMatches[selectedSport] || mockInPlayMatches.basketball;

  // Filter by region & search
  const filteredMatches = useMemo(() => {
    return matches.filter((m) => {
      if (selectedRegion !== 'all' && selectedRegion !== 'INT') {
        const flagMatch = m.leagueFlag.toLowerCase().includes(selectedRegion.toLowerCase());
        const idMatch = m.leagueId.toLowerCase().includes(selectedRegion.toLowerCase());
        if (!flagMatch && !idMatch) return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          m.homeTeam.toLowerCase().includes(q) ||
          m.awayTeam.toLowerCase().includes(q) ||
          m.leagueName.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [matches, selectedRegion, searchQuery]);

  // Group by league
  const groupedByLeague = useMemo(() => {
    const map = new Map<string, InPlayMatchData[]>();
    filteredMatches.forEach((m) => {
      if (!map.has(m.leagueName)) {
        map.set(m.leagueName, []);
      }
      map.get(m.leagueName)!.push(m);
    });
    return Array.from(map.entries());
  }, [filteredMatches]);

  const handleOddsClick = (match: InPlayMatchData, marketName: string, outcomeName: string, oddsVal: string) => {
    if (oddsVal === 'LOCK' || !oddsVal) return;

    // Convert fractional to decimal for slip engine
    let numOdds = 2.0;
    if (oddsVal.includes('/')) {
      const [num, den] = oddsVal.split('/').map(Number);
      if (den > 0) numOdds = Number((num / den + 1).toFixed(2));
    } else {
      numOdds = parseFloat(oddsVal) || 2.0;
    }

    toggleSelection({
      id: `${match.id}-mkt-${marketName}-out-${outcomeName}`,
      matchId: match.id,
      matchTitle: `${match.homeTeam} vs ${match.awayTeam}`,
      sport: selectedSport as any,
      marketId: `mkt-${marketName}`,
      marketName,
      outcome: {
        id: `out-${outcomeName}`,
        name: outcomeName,
        odds: numOdds,
      },
      isLive: true,
      liveScore: `${match.homeScore}-${match.awayScore}`,
    });
  };

  return (
    <div className="w-full font-sans select-none pb-8 text-slate-900 space-y-3">
      {/* 1. TOP IN-PLAY SPORT TILES ICON STRIP */}
      <div className="bg-[#020E50] p-2 rounded-xl mb-3 flex items-center space-x-2 overflow-x-auto scrollbar-none shadow-md">
        {/* Search Tile */}
        <button
          onClick={() => setIsSearchOpen((prev) => !prev)}
          className={`shrink-0 w-[58px] h-[58px] rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer border ${
            isSearchOpen
              ? 'bg-[#FD2839] text-white border-white'
              : 'bg-[#031A9A] text-white hover:bg-[#031A9A]/80 border-white/20'
          }`}
          title="Search Live Games"
        >
          <Search className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-black tracking-tight">Search</span>
        </button>

        {/* Sport Tiles */}
        {IN_PLAY_SPORTS.map((sport) => {
          const isActive = selectedSport === sport.id;

          return (
            <button
              key={sport.id}
              onClick={() => setSelectedSport(sport.id)}
              className={`shrink-0 w-[58px] h-[58px] rounded-xl flex flex-col items-center justify-between p-1.5 relative transition-all duration-150 cursor-pointer active:scale-95 border ${
                isActive
                  ? 'bg-[#FD2839] text-white border-[#FD2839] shadow-md font-black'
                  : 'bg-[#031A9A] text-white/90 hover:bg-[#031A9A]/80 border-white/10'
              }`}
            >
              {/* Badge */}
              <span className="absolute top-1 right-1 text-[9px] font-black leading-none bg-white/20 px-1 py-0.5 rounded-full text-white">
                {sport.count}
              </span>

              <span className="text-base mt-1">{sport.icon}</span>
              <span className="text-[10px] font-extrabold tracking-tight truncate w-full text-center">
                {sport.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Conditional Search Input Bar */}
      {isSearchOpen && (
        <div className="mb-3 animate-fadeIn">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search team, player, or league..."
            className="w-full bg-white border-2 border-[#031A9A] rounded-xl px-4 py-2 text-xs font-bold text-[#031A9A] placeholder:text-slate-400 focus:outline-none shadow-sm"
          />
        </div>
      )}

      {/* 2. REGION / COMPETITION PILLS */}
      <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none mb-3 py-1">
        {IN_PLAY_REGIONS.map((region) => {
          const isActive = selectedRegion === region.id;

          return (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`shrink-0 flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer border ${
                isActive
                  ? 'bg-[#FD2839] text-white border-[#FD2839] shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-[#031A9A] border-slate-300'
              }`}
            >
              {region.flag && <span className="text-xs">{region.flag}</span>}
              <span>{region.code}</span>
              {region.count !== undefined && (
                <span className="text-[10px] opacity-80">{region.count}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* 3. IN-PLAY MATCHES CONTAINER */}
      <div className="space-y-4">
        {groupedByLeague.map(([leagueName, matchesList]) => {
          const firstMatch = matchesList[0];

          return (
            <div
              key={leagueName}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs"
            >
              {/* Competition Header */}
              <div className="bg-[#f8f9fa] border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center space-x-2 cursor-pointer group">
                  <span className="text-base">{firstMatch.leagueFlag}</span>
                  <h3 className="font-extrabold text-sm text-[#031A9A] group-hover:underline flex items-center gap-1">
                    <span>{leagueName}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </h3>
                </div>

                {/* Right Column Header Titles */}
                <div className="hidden md:flex items-center space-x-6 text-[11px] font-extrabold text-slate-500 pr-2">
                  <span className="w-24 text-center">Home Away</span>
                  <span className="w-28 text-center">Over/Under</span>
                  <span className="w-28 text-center flex items-center justify-center gap-0.5">
                    <span>Asian Handicap</span>
                    <ChevronDown className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Match Rows List */}
              <div className="divide-y divide-slate-100">
                {matchesList.map((match) => (
                  <div
                    key={match.id}
                    className="p-3 sm:p-4 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3"
                  >
                    {/* Left Details: Status + Teams + Live Scores */}
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      {/* Live Play Icon & Period */}
                      <div className="flex flex-col items-center justify-center w-12 shrink-0">
                        <div className="w-6 h-6 rounded-md bg-slate-100 border border-slate-300 flex items-center justify-center text-[#031A9A] mb-0.5">
                          <Play className="w-3 h-3 fill-[#031A9A]" />
                        </div>
                        <span className="text-[9px] font-extrabold text-slate-500 text-center leading-tight">
                          {match.period}
                        </span>
                      </div>

                      {/* Team Names */}
                      <div className="flex-1 min-w-0 font-extrabold text-xs text-[#031A9A] space-y-1">
                        <div className="truncate">{match.homeTeam}</div>
                        <div className="truncate">{match.awayTeam}</div>
                      </div>

                      {/* Live Red Scores */}
                      <div className="font-black text-sm text-[#FD2839] px-2 flex flex-col items-center justify-center space-y-1 shrink-0">
                        <div>{match.homeScore}</div>
                        <div>{match.awayScore}</div>
                      </div>

                      {/* Extra Markets Count */}
                      <button className="text-xs font-bold text-slate-400 hover:text-[#031A9A] flex items-center space-x-0.5 px-2 py-1 rounded hover:bg-slate-100 shrink-0 cursor-pointer">
                        <span>{match.marketCount}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Right Odds Columns */}
                    <div className="flex items-center space-x-2 shrink-0 self-end md:self-auto">
                      {/* Market 1: Home / Away */}
                      <div className="flex items-center space-x-1 bg-[#f2f4f7] p-1 rounded-lg border border-slate-200">
                        {/* Home Odds */}
                        <button
                          disabled={match.homeLocked}
                          onClick={() => handleOddsClick(match, 'Home/Away', match.homeTeam, match.homeOdds)}
                          className={`w-12 h-10 rounded flex flex-col items-center justify-center cursor-pointer transition-all ${
                            match.homeLocked
                              ? 'bg-slate-200/60 text-slate-400 cursor-not-allowed'
                              : match.homeOddsActive
                              ? 'bg-white text-[#031A9A] shadow-xs border-b-2 border-[#FD2839]'
                              : 'bg-white hover:bg-[#031A9A] hover:text-white text-[#031A9A]'
                          }`}
                        >
                          <span className="text-[9px] font-semibold opacity-70">Home</span>
                          {match.homeLocked ? (
                            <Lock className="w-3 h-3 text-slate-400" />
                          ) : (
                            <span className="text-xs font-black">{match.homeOdds}</span>
                          )}
                        </button>

                        {/* Away Odds */}
                        <button
                          disabled={match.awayLocked}
                          onClick={() => handleOddsClick(match, 'Home/Away', match.awayTeam, match.awayOdds)}
                          className={`w-12 h-10 rounded flex flex-col items-center justify-center cursor-pointer transition-all ${
                            match.awayLocked
                              ? 'bg-slate-200/60 text-slate-400 cursor-not-allowed'
                              : match.awayOddsActive
                              ? 'bg-white text-[#031A9A] shadow-xs border-b-2 border-[#FD2839]'
                              : 'bg-white hover:bg-[#031A9A] hover:text-white text-[#031A9A]'
                          }`}
                        >
                          <span className="text-[9px] font-semibold opacity-70">Away</span>
                          {match.awayLocked ? (
                            <Lock className="w-3 h-3 text-slate-400" />
                          ) : (
                            <span className="text-xs font-black">{match.awayOdds}</span>
                          )}
                        </button>
                      </div>

                      {/* Market 2: Over / Under */}
                      <div className="flex items-center space-x-1 bg-[#f2f4f7] p-1 rounded-lg border border-slate-200">
                        {/* Over */}
                        <button
                          onClick={() => handleOddsClick(match, 'Over/Under', `Over ${match.totalLine}`, match.overOdds)}
                          className="w-12 h-10 bg-white hover:bg-[#031A9A] hover:text-white text-[#031A9A] rounded flex flex-col items-center justify-center cursor-pointer transition-all"
                        >
                          <span className="text-[9px] font-semibold opacity-70 flex items-center gap-0.5">
                            Over
                            {match.overTrend === 'down' && <span className="text-red-500 font-bold">↓</span>}
                          </span>
                          <span className="text-xs font-black">{match.overOdds}</span>
                        </button>

                        {/* Line Value */}
                        <div className="w-10 text-center text-xs font-black text-[#031A9A]">
                          {match.totalLine}
                        </div>

                        {/* Under */}
                        <button
                          onClick={() => handleOddsClick(match, 'Over/Under', `Under ${match.totalLine}`, match.underOdds)}
                          className="w-12 h-10 bg-white hover:bg-[#031A9A] hover:text-white text-[#031A9A] rounded flex flex-col items-center justify-center cursor-pointer transition-all"
                        >
                          <span className="text-[9px] font-semibold opacity-70 flex items-center gap-0.5">
                            Under
                            {match.underTrend === 'up' && <span className="text-emerald-600 font-bold">↑</span>}
                          </span>
                          <span className="text-xs font-black">{match.underOdds}</span>
                        </button>
                      </div>

                      {/* Market 3: Asian Handicap */}
                      <div className="flex items-center space-x-1 bg-[#f2f4f7] p-1 rounded-lg border border-slate-200">
                        <button
                          disabled={match.handicapLocked}
                          onClick={() =>
                            handleOddsClick(
                              match,
                              'Asian Handicap',
                              `Home (${match.handicapHome})`,
                              match.handicapHomeOdds
                            )
                          }
                          className={`w-14 h-10 rounded flex flex-col items-center justify-center cursor-pointer transition-all ${
                            match.handicapLocked
                              ? 'bg-slate-200/60 text-slate-400 cursor-not-allowed'
                              : 'bg-white hover:bg-[#031A9A] hover:text-white text-[#031A9A]'
                          }`}
                        >
                          <span className="text-[9px] font-semibold opacity-70">
                            Home ({match.handicapHome})
                          </span>
                          {match.handicapLocked ? (
                            <Lock className="w-3 h-3 text-slate-400" />
                          ) : (
                            <span className="text-xs font-black">{match.handicapHomeOdds}</span>
                          )}
                        </button>

                        <button
                          disabled={match.handicapLocked}
                          onClick={() =>
                            handleOddsClick(
                              match,
                              'Asian Handicap',
                              `Away (${match.handicapAway})`,
                              match.handicapAwayOdds
                            )
                          }
                          className={`w-14 h-10 rounded flex flex-col items-center justify-center cursor-pointer transition-all ${
                            match.handicapLocked
                              ? 'bg-slate-200/60 text-slate-400 cursor-not-allowed'
                              : 'bg-white hover:bg-[#031A9A] hover:text-white text-[#031A9A]'
                          }`}
                        >
                          <span className="text-[9px] font-semibold opacity-70">
                            Away ({match.handicapAway})
                          </span>
                          {match.handicapLocked ? (
                            <Lock className="w-3 h-3 text-slate-400" />
                          ) : (
                            <span className="text-xs font-black">{match.handicapAwayOdds}</span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* SEO Guide Footer */}
      <SportInfoGuide />
    </div>
  );
};
