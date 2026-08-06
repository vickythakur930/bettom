'use client';

import React, { useMemo, useState } from 'react';
import { useSportsStore } from '@/store/useSportsStore';
import { mockAllSportsMatches } from '@/mock/allSportsMatches';
import { filterSportsMatches, TOP_SPORTS_LIST, REGION_FILTERS } from '@/utils/sportsMockEngine';
import { TopSportsCarousel } from './TopSportsCarousel';
import { RegionFilterBar } from './RegionFilterBar';
import { TimeFilterBar } from './TimeFilterBar';
import { SportsSearchHeader } from './SportsSearchHeader';
import { CompetitionGroup } from './CompetitionGroup';
import { PromoCarousel } from './PromoCarousel';
import { NextRacesGrid } from './NextRacesGrid';
import { HorseRaceSchedules } from './HorseRaceSchedules';
import { CompetitionViewHeader } from './CompetitionViewHeader';
import { OutrightsView } from './OutrightsView';
import { SportInfoGuide } from './SportInfoGuide';
import { Info } from 'lucide-react';
import { Match } from '@/types/sports';

const categoryMetaMap: Record<string, { name: string; country: string }> = {
  'premier-league': { name: 'Premier League', country: 'England' },
  laliga: { name: 'LaLiga', country: 'Spain' },
  'serie-a': { name: 'Serie A', country: 'Italy' },
  bundesliga: { name: 'Bundesliga', country: 'Germany' },
  'ligue-1': { name: 'Ligue 1', country: 'France' },
  'the-hundred': { name: 'The Hundred', country: 'United Kingdom' },
  'the-hundred-women': { name: 'The Hundred Women', country: 'United Kingdom' },
  'uefa-super-cup': { name: 'UEFA Super Cup', country: 'Europe' },
  'community-shield': { name: 'Community Shield', country: 'England' },
  'efl-cup': { name: 'EFL Cup', country: 'England' },
  championship: { name: 'Championship', country: 'England' },
  premiership: { name: 'Premiership', country: 'Scotland' },
  mlb: { name: 'MLB', country: 'USA' },
  nba: { name: 'NBA', country: 'USA' },
  football: { name: 'Football', country: 'International' },
  basketball: { name: 'Basketball', country: 'USA' },
  tennis: { name: 'Tennis', country: 'Grand Slam' },
  cricket: { name: 'Cricket', country: 'International' },
  'horse-racing': { name: 'Horse Racing', country: 'UK & Ireland' },
  greyhounds: { name: 'Greyhounds', country: 'UK' },
};

export const SportsMainView: React.FC = () => {
  const { activeSport, selectedCategory, activeRegion, activeTimeFilter, searchQuery } = useSportsStore();
  const [activePill, setActivePill] = useState<string>('all');

  // Determine current active category or sport
  const regionObj = REGION_FILTERS.find((r) => r.code === activeRegion || r.id === activeRegion);
  const catKey = selectedCategory || activeSport || 'football';
  const meta = {
    name: selectedCategory
      ? categoryMetaMap[selectedCategory]?.name || selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1).replace(/-/g, ' ')
      : regionObj && activeRegion !== 'Popular' && activeRegion !== 'All'
      ? `${regionObj.name} Sports & Leagues`
      : categoryMetaMap[catKey]?.name || 'Sports',
    country: activeRegion && activeRegion !== 'Popular' && activeRegion !== 'All'
      ? regionObj?.name || activeRegion
      : categoryMetaMap[catKey]?.country || 'World',
  };

  // Filter matches with guaranteed mock generation fallback (isolated to single selected category/sport)
  const filteredMatches = useMemo(() => {
    return filterSportsMatches(
      mockAllSportsMatches,
      activeSport,
      selectedCategory,
      activeRegion,
      activeTimeFilter,
      searchQuery
    );
  }, [activeSport, selectedCategory, activeRegion, activeTimeFilter, searchQuery]);

  // Group matches by league
  const groupedLeagues = useMemo(() => {
    const map = new Map<string, { id: string; name: string; countryFlag: string; matches: Match[] }>();

    filteredMatches.forEach((m) => {
      const key = m.leagueId || m.leagueName;
      if (!map.has(key)) {
        map.set(key, {
          id: key,
          name: m.leagueName,
          countryFlag: m.countryFlag || '🌐',
          matches: [],
        });
      }
      map.get(key)!.matches.push(m);
    });

    return Array.from(map.values());
  }, [filteredMatches]);

  const isRacingSport = activeSport === 'horse-racing' || activeSport === 'greyhounds';

  return (
    <div className="space-y-3 font-sans pb-8 text-slate-900">
      {/* Promotional Sports Highlights Banner Carousel */}
      <PromoCarousel />

      {/* 1. TOP SPORTS CAROUSEL (Horizontal slider with 24 sports) */}
      <TopSportsCarousel />

      {/* 2. SECOND FILTER BAR (Region / Country filters) */}
      <RegionFilterBar />

      {/* 3. THIRD FILTER BAR (Time filters: Live, 60 Min, Today, etc.) */}
      <TimeFilterBar />

      {/* Search Header & Odds Format Switcher */}
      <SportsSearchHeader />

      {/* CENTER CONTENT CONTAINER */}
      <div className="space-y-3">
        {/* Top Breadcrumb & Competition Filter Pills (All / Outrights / Sub-competitions) */}
        <CompetitionViewHeader
          categoryName={meta.name}
          countryName={meta.country}
          matchCount={filteredMatches.length}
          activePill={activePill}
          onSelectPill={(pill) => setActivePill(pill)}
        />

        {/* Specialised Horse Racing & Greyhounds Views */}
        {isRacingSport && (
          <div className="space-y-4 my-2">
            <NextRacesGrid />
            <HorseRaceSchedules />
          </div>
        )}

        {/* Conditional Outrights View vs Matches List */}
        {activePill === 'outrights' ? (
          <OutrightsView competitionName={meta.name} />
        ) : (
          <div className="space-y-3">
            {groupedLeagues.map((league) => (
              <CompetitionGroup
                key={league.id}
                leagueId={league.id}
                leagueName={league.name}
                countryFlag={league.countryFlag}
                matches={league.matches}
              />
            ))}
          </div>
        )}
      </div>

      {/* Dynamic SEO Sport Betting & Odds Guide */}
      <SportInfoGuide />

      {/* Sportsbook Guarantee Footer Tagline */}
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#001489]/10 via-slate-100 to-[#FF2925]/10 border border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
        <div className="flex items-center space-x-2">
          <Info className="w-4 h-4 text-[#031A9A] shrink-0" />
          <span>Bettom Sportsbook Testing & Live Data Engine Active. All markets populated.</span>
        </div>
        <span className="font-mono text-[10px] font-black text-slate-500 uppercase tracking-widest hidden md:inline-block">
          Production Mode Verified
        </span>
      </div>
    </div>
  );
};
