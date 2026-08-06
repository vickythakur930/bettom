'use client';

import React, { useState } from 'react';
import { useLiveOddsStore } from '@/store/useLiveOddsStore';
import { MatchRow } from '@/components/sports/MatchRow';
import { Search, Trophy } from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const { matches } = useLiveOddsStore();

  const searchResults = query
    ? matches.filter(
        (m) =>
          m.homeTeam.name.toLowerCase().includes(query.toLowerCase()) ||
          m.awayTeam.name.toLowerCase().includes(query.toLowerCase()) ||
          m.leagueName.toLowerCase().includes(query.toLowerCase())
      )
    : matches;

  return (
    <div className="space-y-5 max-w-4xl mx-auto py-4">
      <div className="bg-bettom-card border border-bettom-border rounded-2xl p-6 shadow-xl">
        <h1 className="text-xl font-black text-bettom-text uppercase tracking-wide mb-2 flex items-center gap-2">
          <Search className="w-5 h-5 text-bettom-accent" />
          <span>Global Sportsbook Search</span>
        </h1>
        <p className="text-xs text-bettom-muted mb-4">
          Find teams, leagues, players, or match wagers across all sports.
        </p>

        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-bettom-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search e.g. Lakers, Boston, NBA, EuroLeague..."
            className="w-full bg-bettom-header border border-bettom-border focus:border-bettom-accent rounded-xl pl-12 pr-4 py-3.5 text-sm text-bettom-text placeholder-bettom-subtle focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Results */}
      <div>
        <div className="text-xs font-bold uppercase text-bettom-muted tracking-wider mb-3 px-1">
          {searchResults.length} Match Results
        </div>
        {searchResults.length === 0 ? (
          <div className="bg-bettom-card border border-bettom-border rounded-xl p-8 text-center text-bettom-muted text-xs">
            No matches matching &quot;{query}&quot; found.
          </div>
        ) : (
          searchResults.map((match) => <MatchRow key={match.id} match={match} />)
        )}
      </div>
    </div>
  );
}
