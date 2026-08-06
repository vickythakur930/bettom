'use client';

import React, { useEffect } from 'react';
import { LiveSportsBanner } from '@/components/sports/LiveSportsBanner';
import { MarketTabs } from '@/components/sports/MarketTabs';
import { CompetitionGroup } from '@/components/sports/CompetitionGroup';
import { useLiveOddsStore } from '@/store/useLiveOddsStore';
import { useSportsStore } from '@/store/useSportsStore';
import { mockLeagues } from '@/mock/leaguesData';

export default function BasketballPage() {
  const { matches } = useLiveOddsStore();
  const { setActiveSport, isLiveOnly, searchQuery } = useSportsStore();

  useEffect(() => {
    setActiveSport('basketball');
  }, [setActiveSport]);

  const filteredMatches = matches.filter((match) => {
    if (match.sport !== 'basketball') return false;
    if (isLiveOnly && !match.isLive) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchText = `${match.homeTeam.name} ${match.awayTeam.name} ${match.leagueName}`.toLowerCase();
      if (!matchText.includes(q)) return false;
    }
    return true;
  });

  const basketballLeagues = mockLeagues.filter((l) => l.sport === 'basketball');

  return (
    <div className="space-y-4">
      <LiveSportsBanner />
      <MarketTabs />

      {basketballLeagues.map((league) => {
        const leagueMatches = filteredMatches.filter((m) => m.leagueId === league.id);
        return (
          <CompetitionGroup
            key={league.id}
            leagueId={league.id}
            leagueName={league.name}
            countryFlag={league.countryFlag}
            matches={leagueMatches}
          />
        );
      })}
    </div>
  );
}
