'use client';

import React, { useState, useMemo, memo } from 'react';
import { Match } from '@/types/sports';
import { OddsButton } from './OddsButton';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, ChevronRight, Radio } from 'lucide-react';
import { useSportsStore } from '@/store/useSportsStore';

interface MatchRowProps {
  match: Match;
}

const MatchRowComponent: React.FC<MatchRowProps> = ({ match }) => {
  const [showAllMarkets, setShowAllMarkets] = useState(false);
  const { favorites, toggleFavorite } = useSportsStore();
  const isFavorite = !!favorites[match.id];

  const mainMarket = match.markets.find((m) => m.category === 'main');
  const totalsMarket = match.markets.find((m) => m.category === 'totals');

  // Outcome helpers memoized to maintain stable object references for OddsButton
  const homeOutcome = useMemo(
    () => mainMarket?.outcomes[0] || { id: `${match.id}-h`, name: match.homeTeam.name, odds: 1.85 },
    [mainMarket?.outcomes, match.id, match.homeTeam.name]
  );
  const drawOutcome = useMemo(
    () => mainMarket?.outcomes[1] || { id: `${match.id}-d`, name: 'Draw', odds: 3.40 },
    [mainMarket?.outcomes, match.id]
  );
  const awayOutcome = useMemo(
    () => mainMarket?.outcomes[2] || mainMarket?.outcomes[1] || { id: `${match.id}-a`, name: match.awayTeam.name, odds: 2.15 },
    [mainMarket?.outcomes, match.id, match.awayTeam.name]
  );

  const overOutcome = useMemo(
    () => totalsMarket?.outcomes[0] || { id: `${match.id}-o`, name: 'Over 2.5', odds: 1.75 },
    [totalsMarket?.outcomes, match.id]
  );
  const underOutcome = useMemo(
    () => totalsMarket?.outcomes[1] || { id: `${match.id}-u`, name: 'Under 2.5', odds: 2.05 },
    [totalsMarket?.outcomes, match.id]
  );

  const bttsYesOutcome = useMemo(
    () => ({ id: `${match.id}-btts-y`, name: 'Yes', odds: 1.80 }),
    [match.id]
  );
  const bttsNoOutcome = useMemo(
    () => ({ id: `${match.id}-btts-n`, name: 'No', odds: 1.95 }),
    [match.id]
  );

  const matchTitle = `${match.homeTeam.name} vs ${match.awayTeam.name}`;

  return (
    <div className="bg-white border-b border-slate-100 hover:bg-slate-50/90 transition-colors font-sans text-slate-800">
      {/* EventItem Main Bar */}
      <div className="py-2.5 px-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 text-xs">
        {/* Match Info & Teams */}
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          {/* Favorite Star Button */}
          <button
            onClick={() => toggleFavorite(match.id)}
            className="p-1 text-slate-300 hover:text-amber-400 transition-colors shrink-0"
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Star className={`w-4 h-4 ${isFavorite ? 'fill-amber-400 text-amber-400' : ''}`} />
          </button>

          {/* Time & Live Indicator */}
          <div className="flex flex-col shrink-0 text-slate-500 font-medium text-[11px] leading-tight w-14">
            {match.isLive ? (
              <span className="flex items-center text-[#FF2925] font-black text-[10px] space-x-1">
                <Radio className="w-3 h-3 animate-pulse" />
                <span>{match.liveClock || 'LIVE'}</span>
              </span>
            ) : (
              <>
                <span className="text-slate-400 text-[10px] font-semibold">{match.startTime ? match.startTime.split(' ')[0] : 'Today'}</span>
                <span className="font-mono font-bold text-slate-800 text-[11px]">
                  {match.startTime?.includes(' ') ? match.startTime.split(' ')[1] : match.startTime || '19:30'}
                </span>
              </>
            )}
          </div>

          {/* Team Names & Live Scores */}
          <div className="flex flex-col min-w-0 flex-1 space-y-1">
            <div className="flex items-center justify-between min-w-0 pr-2">
              <span className="font-bold text-slate-900 truncate text-[13px] hover:text-[#031A9A]">
                {match.homeTeam.name}
              </span>
              {match.isLive && (
                <span className="font-mono font-black text-[#031A9A] text-[13px] ml-2">
                  {match.homeTeam.score}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between min-w-0 pr-2">
              <span className="font-bold text-slate-900 truncate text-[13px] hover:text-[#031A9A]">
                {match.awayTeam.name}
              </span>
              {match.isLive && (
                <span className="font-mono font-black text-[#031A9A] text-[13px] ml-2">
                  {match.awayTeam.score}
                </span>
              )}
            </div>
          </div>

          {/* Expand Markets Button */}
          <button
            onClick={() => setShowAllMarkets((prev) => !prev)}
            className="flex items-center space-x-1 text-slate-600 hover:text-[#031A9A] font-bold text-[11px] bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md shrink-0 transition-colors"
          >
            <span>+{match.markets.length + 34} Markets</span>
            {showAllMarkets ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Odds Group */}
        <div className="flex items-center shrink-0 space-x-2 self-end sm:self-auto pt-1 sm:pt-0">
          {/* Main Market 1X2 / Moneyline */}
          <div className="flex items-center space-x-1">
            <OddsButton
              matchId={match.id}
              matchTitle={matchTitle}
              sport={match.sport}
              marketId="1x2"
              marketName="1X2"
              outcome={homeOutcome}
              label="1"
              isLive={match.isLive}
            />
            {drawOutcome && (
              <OddsButton
                matchId={match.id}
                matchTitle={matchTitle}
                sport={match.sport}
                marketId="1x2"
                marketName="1X2"
                outcome={drawOutcome}
                label="X"
                isLive={match.isLive}
              />
            )}
            <OddsButton
              matchId={match.id}
              matchTitle={matchTitle}
              sport={match.sport}
              marketId="1x2"
              marketName="1X2"
              outcome={awayOutcome}
              label="2"
              isLive={match.isLive}
            />
          </div>

          {/* Over / Under */}
          <div className="hidden lg:flex items-center space-x-1 border-l border-slate-200 pl-2">
            <OddsButton
              matchId={match.id}
              matchTitle={matchTitle}
              sport={match.sport}
              marketId="totals"
              marketName="Total"
              outcome={overOutcome}
              label="O 2.5"
              isLive={match.isLive}
            />
            <OddsButton
              matchId={match.id}
              matchTitle={matchTitle}
              sport={match.sport}
              marketId="totals"
              marketName="Total"
              outcome={underOutcome}
              label="U 2.5"
              isLive={match.isLive}
            />
          </div>
        </div>
      </div>

      {/* Expanded Multi-Markets View */}
      <AnimatePresence>
        {showAllMarkets && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-slate-200 bg-slate-50/90 p-3 sm:p-4 space-y-4"
          >
            {match.markets.map((market) => (
              <div key={market.id} className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
                <div className="font-extrabold text-xs text-slate-800 uppercase tracking-wider mb-2.5 flex items-center justify-between border-b border-slate-100 pb-1.5">
                  <span>{market.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono">Market ID: {market.id}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {market.outcomes.map((outcome) => (
                    <OddsButton
                      key={outcome.id}
                      matchId={match.id}
                      matchTitle={matchTitle}
                      sport={match.sport}
                      marketId={market.id}
                      marketName={market.name}
                      outcome={outcome}
                      label={outcome.name}
                      isLive={match.isLive}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MatchRow = memo(MatchRowComponent);
