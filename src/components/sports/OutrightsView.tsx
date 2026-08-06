'use client';

import React from 'react';
import { useBetSlipStore } from '@/store/useBetSlipStore';
import { Trophy } from 'lucide-react';

interface OutrightsViewProps {
  competitionName: string;
}

export const OutrightsView: React.FC<OutrightsViewProps> = ({ competitionName }) => {
  const { toggleSelection } = useBetSlipStore();

  const outrightOptions: Record<string, { team: string; odds: number; previousOdds?: number }[]> = {
    'premier-league': [
      { team: 'Manchester City', odds: 2.10 },
      { team: 'Arsenal', odds: 2.80 },
      { team: 'Liverpool', odds: 3.50 },
      { team: 'Chelsea', odds: 12.00 },
      { team: 'Tottenham Hotspur', odds: 18.00 },
      { team: 'Manchester United', odds: 25.00 },
    ],
    'laliga': [
      { team: 'Real Madrid', odds: 1.65 },
      { team: 'Barcelona', odds: 2.50 },
      { team: 'Atletico Madrid', odds: 9.00 },
      { team: 'Athletic Bilbao', odds: 34.00 },
    ],
    'serie-a': [
      { team: 'Inter Milan', odds: 1.80 },
      { team: 'Juventus', odds: 3.20 },
      { team: 'AC Milan', odds: 5.50 },
      { team: 'Napoli', odds: 8.00 },
    ],
    'bundesliga': [
      { team: 'Bayern Munich', odds: 1.45 },
      { team: 'Bayer Leverkusen', odds: 3.80 },
      { team: 'Borussia Dortmund', odds: 8.50 },
    ],
    'the-hundred': [
      { team: 'Sunrisers Leeds', odds: 3.20 },
      { team: 'London Spirit', odds: 4.00 },
      { team: 'Manchester Super Giants', odds: 4.50 },
      { team: 'Welsh Fire', odds: 5.50 },
      { team: 'Trent Rockets', odds: 6.50 },
      { team: 'Birmingham Phoenix', odds: 7.00 },
    ],
    default: [
      { team: 'Favorite Alpha', odds: 2.25 },
      { team: 'Contender Beta', odds: 3.50 },
      { team: 'Challenger Gamma', odds: 5.00 },
      { team: 'Underdog Delta', odds: 11.00 },
    ],
  };

  const key = competitionName.toLowerCase().replace(/\s+/g, '-');
  const contenders = outrightOptions[key] || outrightOptions['default'];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 mb-3 font-sans shadow-2xs">
      <div className="flex items-center space-x-2 border-b border-slate-100 pb-3 mb-3">
        <Trophy className="w-5 h-5 text-amber-500" />
        <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
          {competitionName} 2026 - Outright Winner
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {contenders.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100/80 rounded-lg border border-slate-200 transition-colors"
          >
            <span className="font-extrabold text-xs text-slate-900 truncate mr-2">
              {item.team}
            </span>
            <button
              onClick={() =>
                toggleSelection({
                  id: `outright-${key}-${idx}`,
                  matchId: `outright-${key}`,
                  matchTitle: `${competitionName} Winner`,
                  sport: 'football',
                  marketId: 'outright-winner',
                  marketName: 'Outright Winner',
                  isLive: false,
                  outcome: { id: `outright-${key}-${idx}`, name: item.team, odds: item.odds },
                })
              }
              className="px-3 py-1.5 bg-[#031A9A] hover:bg-[#020E50] text-white font-mono font-black text-xs rounded-md shadow-2xs transition-colors shrink-0"
            >
              {item.odds.toFixed(2)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
