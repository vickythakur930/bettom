'use client';

import React from 'react';
import { voltaLeagueMatches, esoccerBattleMatches, EsportsMatch } from '@/mock/esportsFcData';
import { useBetSlipStore } from '@/store/useBetSlipStore';
import { Play, Lock, ChevronRight } from 'lucide-react';

export const EsportsMatchesGrid: React.FC = () => {
  const { toggleSelection } = useBetSlipStore();

  const renderMatchRow = (m: EsportsMatch) => (
    <div key={m.id} className="p-3 hover:bg-slate-50 transition-colors border-b border-slate-100 text-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
        {/* Match Title & Play Icon */}
        <div className="lg:col-span-5 flex items-start space-x-2.5">
          <button className="w-5 h-5 rounded-full bg-slate-100 hover:bg-[#001489] text-slate-600 hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors border border-slate-200">
            <Play className="w-3 h-3 fill-current ml-0.5" />
          </button>

          <div className="min-w-0 flex-1">
            <div className="flex items-center space-x-2 font-black text-slate-900 leading-snug">
              <div className="flex-1 truncate">
                <div>{m.homeTeam}</div>
                <div>{m.awayTeam}</div>
              </div>
              {m.homeScore !== undefined && m.awayScore !== undefined && (
                <div className="font-mono text-[#FF2925] font-black text-xs px-1.5 py-0.5 bg-rose-50 rounded border border-rose-200">
                  <div>{m.homeScore}</div>
                  <div>{m.awayScore}</div>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2 text-[10px] text-slate-500 mt-1 font-medium">
              <span>{m.status}</span>
              {m.marketsCount > 0 && (
                <span className="font-mono font-bold text-slate-700 bg-slate-100 px-1 rounded hover:text-[#001489] cursor-pointer">
                  {m.marketsCount} &gt;
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 1x2 Odds Column */}
        <div className="lg:col-span-3 grid grid-cols-3 gap-1 text-center">
          {m.isLocked || !m.homeOdds ? (
            <div className="col-span-3 bg-slate-100 p-2 rounded flex items-center justify-center text-slate-400">
              <Lock className="w-3.5 h-3.5" />
            </div>
          ) : (
            <>
              <button
                onClick={() =>
                  m.homeDecimal &&
                  toggleSelection({
                    id: `${m.id}-home`,
                    matchId: m.id,
                    matchTitle: `${m.homeTeam} vs ${m.awayTeam}`,
                    sport: 'esports',
                    marketId: '1x2',
                    marketName: '1x2',
                    isLive: true,
                    outcome: { id: `${m.id}-home`, name: m.homeTeam, odds: m.homeDecimal },
                  })
                }
                className="bg-slate-100 hover:bg-[#001489] text-slate-900 hover:text-white p-1.5 rounded border border-slate-200 flex flex-col items-center justify-center transition-colors"
              >
                <span className="text-[9px] text-slate-500 font-semibold uppercase">Home</span>
                <span className="font-mono font-black text-xs">{m.homeOdds}</span>
              </button>

              <button
                onClick={() =>
                  m.drawDecimal &&
                  toggleSelection({
                    id: `${m.id}-draw`,
                    matchId: m.id,
                    matchTitle: `${m.homeTeam} vs ${m.awayTeam}`,
                    sport: 'esports',
                    marketId: '1x2',
                    marketName: '1x2',
                    isLive: true,
                    outcome: { id: `${m.id}-draw`, name: 'Draw', odds: m.drawDecimal },
                  })
                }
                className="bg-slate-100 hover:bg-[#001489] text-slate-900 hover:text-white p-1.5 rounded border border-slate-200 flex flex-col items-center justify-center transition-colors"
              >
                <span className="text-[9px] text-slate-500 font-semibold uppercase">Draw</span>
                <span className="font-mono font-black text-xs">{m.drawOdds}</span>
              </button>

              <button
                onClick={() =>
                  m.awayDecimal &&
                  toggleSelection({
                    id: `${m.id}-away`,
                    matchId: m.id,
                    matchTitle: `${m.homeTeam} vs ${m.awayTeam}`,
                    sport: 'esports',
                    marketId: '1x2',
                    marketName: '1x2',
                    isLive: true,
                    outcome: { id: `${m.id}-away`, name: m.awayTeam, odds: m.awayDecimal },
                  })
                }
                className="bg-slate-100 hover:bg-[#001489] text-slate-900 hover:text-white p-1.5 rounded border border-slate-200 flex flex-col items-center justify-center transition-colors"
              >
                <span className="text-[9px] text-slate-500 font-semibold uppercase">Away</span>
                <span className="font-mono font-black text-xs">{m.awayOdds}</span>
              </button>
            </>
          )}
        </div>

        {/* Over/Under Column */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-1 text-center">
          {m.isOverUnderLocked || !m.overOdds ? (
            <div className="col-span-2 bg-slate-100 p-2 rounded flex items-center justify-center text-slate-400">
              <Lock className="w-3.5 h-3.5" />
            </div>
          ) : (
            <>
              <button
                onClick={() =>
                  m.overDecimal &&
                  toggleSelection({
                    id: `${m.id}-over`,
                    matchId: m.id,
                    matchTitle: `${m.homeTeam} vs ${m.awayTeam}`,
                    sport: 'esports',
                    marketId: 'ou',
                    marketName: `Over ${m.overUnderValue}`,
                    isLive: true,
                    outcome: { id: `${m.id}-over`, name: `Over ${m.overUnderValue}`, odds: m.overDecimal },
                  })
                }
                className="bg-slate-100 hover:bg-[#001489] text-slate-900 hover:text-white p-1.5 rounded border border-slate-200 flex flex-col items-center justify-center transition-colors"
              >
                <span className="text-[9px] text-slate-500 font-semibold uppercase">Over {m.overUnderValue}</span>
                <span className="font-mono font-black text-xs">{m.overOdds}</span>
              </button>

              <button
                onClick={() =>
                  m.underDecimal &&
                  toggleSelection({
                    id: `${m.id}-under`,
                    matchId: m.id,
                    matchTitle: `${m.homeTeam} vs ${m.awayTeam}`,
                    sport: 'esports',
                    marketId: 'ou',
                    marketName: `Under ${m.overUnderValue}`,
                    isLive: true,
                    outcome: { id: `${m.id}-under`, name: `Under ${m.overUnderValue}`, odds: m.underDecimal },
                  })
                }
                className="bg-slate-100 hover:bg-[#001489] text-slate-900 hover:text-white p-1.5 rounded border border-slate-200 flex flex-col items-center justify-center transition-colors"
              >
                <span className="text-[9px] text-slate-500 font-semibold uppercase">Under {m.overUnderValue}</span>
                <span className="font-mono font-black text-xs">{m.underOdds}</span>
              </button>
            </>
          )}
        </div>

        {/* Handicap Column */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-1 text-center">
          {m.isHcapLocked || !m.hcapHomeOdds ? (
            <div className="col-span-2 bg-slate-100 p-2 rounded flex items-center justify-center text-slate-400">
              <Lock className="w-3.5 h-3.5" />
            </div>
          ) : (
            <>
              <button
                onClick={() =>
                  m.hcapHomeDecimal &&
                  toggleSelection({
                    id: `${m.id}-hcap-home`,
                    matchId: m.id,
                    matchTitle: `${m.homeTeam} vs ${m.awayTeam}`,
                    sport: 'esports',
                    marketId: 'hcap',
                    marketName: `Handicap ${m.hcapHomeValue}`,
                    isLive: true,
                    outcome: { id: `${m.id}-hcap-home`, name: `Home ${m.hcapHomeValue}`, odds: m.hcapHomeDecimal },
                  })
                }
                className="bg-slate-100 hover:bg-[#001489] text-slate-900 hover:text-white p-1.5 rounded border border-slate-200 flex flex-col items-center justify-center transition-colors"
              >
                <span className="text-[9px] text-slate-500 font-semibold">{m.hcapHomeValue}</span>
                <span className="font-mono font-black text-xs">{m.hcapHomeOdds}</span>
              </button>

              <button
                onClick={() =>
                  m.hcapAwayDecimal &&
                  toggleSelection({
                    id: `${m.id}-hcap-away`,
                    matchId: m.id,
                    matchTitle: `${m.homeTeam} vs ${m.awayTeam}`,
                    sport: 'esports',
                    marketId: 'hcap',
                    marketName: `Handicap ${m.hcapAwayValue}`,
                    isLive: true,
                    outcome: { id: `${m.id}-hcap-away`, name: `Away ${m.hcapAwayValue}`, odds: m.hcapAwayDecimal },
                  })
                }
                className="bg-slate-100 hover:bg-[#001489] text-slate-900 hover:text-white p-1.5 rounded border border-slate-200 flex flex-col items-center justify-center transition-colors"
              >
                <span className="text-[9px] text-slate-500 font-semibold">{m.hcapAwayValue}</span>
                <span className="font-mono font-black text-xs">{m.hcapAwayOdds}</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 select-none">
      {/* Champions VOLTA League 2026 Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-[#001489] text-white px-4 py-2.5 font-black text-xs uppercase tracking-wider flex items-center justify-between">
          <span>Champions VOLTA League 2026</span>
          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded font-mono">
            {voltaLeagueMatches.length} Matches
          </span>
        </div>

        <div className="hidden lg:grid lg:grid-cols-12 gap-2 bg-slate-100 px-4 py-2 text-[11px] font-black text-slate-700 border-b border-slate-200 uppercase tracking-wider text-center">
          <div className="col-span-5 text-left">Match</div>
          <div className="col-span-3">1x2</div>
          <div className="col-span-2">Over / Under</div>
          <div className="col-span-2">Handicap</div>
        </div>

        <div>{voltaLeagueMatches.map((m) => renderMatchRow(m))}</div>
      </div>

      {/* ESoccer Battle (8 minutes play) 2026 Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-[#001489] text-white px-4 py-2.5 font-black text-xs uppercase tracking-wider flex items-center justify-between">
          <span>ESoccer Battle (8 minutes play) 2026</span>
          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded font-mono">
            {esoccerBattleMatches.length} Matches
          </span>
        </div>

        <div className="hidden lg:grid lg:grid-cols-12 gap-2 bg-slate-100 px-4 py-2 text-[11px] font-black text-slate-700 border-b border-slate-200 uppercase tracking-wider text-center">
          <div className="col-span-5 text-left">Match</div>
          <div className="col-span-3">1x2</div>
          <div className="col-span-2">Over / Under</div>
          <div className="col-span-2">Handicap</div>
        </div>

        <div>{esoccerBattleMatches.map((m) => renderMatchRow(m))}</div>
      </div>
    </div>
  );
};
