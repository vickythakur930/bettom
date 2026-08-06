'use client';

import React, { useState } from 'react';
import { Match } from '@/types/sports';
import { Activity, Flame, Shield, Zap, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface LiveMatchTrackerProps {
  match: Match;
  onClose?: () => void;
}

export const LiveMatchTracker: React.FC<LiveMatchTrackerProps> = ({ match, onClose }) => {
  const [activeTab, setActiveTab] = useState<'court' | 'stats' | 'h2h'>('court');

  const { homeTeam, awayTeam, stats } = match;

  return (
    <div className="bg-bettom-card border border-bettom-border rounded-xl p-4 shadow-xl overflow-hidden text-bettom-text mb-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-bettom-border pb-3 mb-3">
        <div className="flex items-center space-x-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
          </span>
          <span className="font-bold text-xs uppercase tracking-wider text-rose-400">
            LIVE TRACKER • {match.liveStatus} ({match.liveClock})
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="flex bg-bettom-surface p-0.5 rounded-lg border border-bettom-border text-xs">
            <button
              onClick={() => setActiveTab('court')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeTab === 'court' ? 'bg-bettom-accent text-bettom-bg font-bold' : 'text-bettom-muted hover:text-bettom-text'
              }`}
            >
              Court
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeTab === 'stats' ? 'bg-bettom-accent text-bettom-bg font-bold' : 'text-bettom-muted hover:text-bettom-text'
              }`}
            >
              Stats
            </button>
          </div>
          {onClose && (
            <button onClick={onClose} className="p-1 hover:bg-bettom-surface rounded-lg text-bettom-muted hover:text-bettom-text">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Match Score Display */}
      <div className="grid grid-cols-3 items-center py-2 bg-bettom-header rounded-lg px-4 border border-bettom-border mb-4">
        {/* Home Team */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-bettom-surface border border-bettom-border flex items-center justify-center p-1 overflow-hidden">
            <img src={homeTeam.logo} alt={homeTeam.name} className="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <div className="font-bold text-sm text-bettom-text flex items-center gap-1.5">
              {homeTeam.name}
              {homeTeam.possession && <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" title="Possession" />}
            </div>
            <div className="text-[11px] text-bettom-muted">Home</div>
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="text-center">
          <div className="text-2xl font-black font-mono text-bettom-accent tracking-wider">
            {homeTeam.score} - {awayTeam.score}
          </div>
          <div className="flex justify-center space-x-2 text-[10px] text-bettom-muted mt-1">
            {(homeTeam.periodScores || []).map((score, idx) => (
              <span key={idx} className="bg-bettom-surface px-1.5 py-0.5 rounded border border-bettom-border">
                Q{idx + 1}: {score}-{(awayTeam.periodScores || [])[idx] || 0}
              </span>
            ))}
          </div>
        </div>

        {/* Away Team */}
        <div className="flex items-center justify-end space-x-3 text-right">
          <div>
            <div className="font-bold text-sm text-bettom-text flex items-center justify-end gap-1.5">
              {awayTeam.possession && <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" title="Possession" />}
              {awayTeam.name}
            </div>
            <div className="text-[11px] text-bettom-muted">Away</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-bettom-surface border border-bettom-border flex items-center justify-center p-1 overflow-hidden">
            <img src={awayTeam.logo} alt={awayTeam.name} className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>

      {/* Interactive Court Visualization */}
      {activeTab === 'court' && (
        <div className="relative w-full h-56 bg-emerald-900/40 rounded-xl border-2 border-emerald-500/30 overflow-hidden flex flex-col justify-between p-3 select-none">
          {/* Basketball Court Markings */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-lg pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/20 rounded-full pointer-events-none" />

          {/* Left Key area */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-24 h-32 border-2 border-white/20 rounded-r-lg pointer-events-none" />
          {/* Right Key area */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-24 h-32 border-2 border-white/20 rounded-l-lg pointer-events-none" />

          {/* Live Action Ticker overlay */}
          <div className="relative z-10 flex justify-between items-start">
            <span className="bg-bettom-header/80 backdrop-blur text-xs px-2.5 py-1 rounded-full border border-bettom-border text-bettom-text flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
              {homeTeam.possession ? `${homeTeam.shortName || homeTeam.name} in possession` : `${awayTeam.shortName || awayTeam.name} in possession`}
            </span>
            <span className="bg-bettom-header/80 backdrop-blur text-xs px-2.5 py-1 rounded-full border border-bettom-border font-mono text-bettom-accent">
              Shot Clock: 14s
            </span>
          </div>

          {/* Ball Animation */}
          <div className="relative z-10 flex justify-center items-center my-auto">
            <motion.div
              animate={{
                x: homeTeam.possession ? [-80, -40, -60] : [80, 40, 60],
                y: [-10, 10, -5],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="flex items-center space-x-2 bg-amber-500 text-slate-950 font-bold px-3 py-1.5 rounded-full text-xs shadow-lg shadow-amber-500/30"
            >
              <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
              <span>ATTACK PHASE</span>
            </motion.div>
          </div>

          {/* Play-by-play message */}
          <div className="relative z-10 bg-bettom-header/90 backdrop-blur px-3 py-1.5 rounded-lg border border-bettom-border text-xs text-center text-bettom-muted">
            Recent play: <span className="text-bettom-text font-medium">LeBron James missed 3pt jump shot</span> • Rebound by <span className="text-bettom-text font-medium">Jayson Tatum</span>
          </div>
        </div>
      )}

      {/* Match Statistics */}
      {activeTab === 'stats' && stats && (
        <div className="space-y-3 py-1">
          {/* Field Goals */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span>{(stats.home?.fieldGoalsMade || 0)}/{(stats.home?.fieldGoalsAttempted || 1)} ({Math.round(((stats.home?.fieldGoalsMade || 0) / (stats.home?.fieldGoalsAttempted || 1)) * 100)}%)</span>
              <span className="text-bettom-muted">Field Goals (FG %)</span>
              <span>{(stats.away?.fieldGoalsMade || 0)}/{(stats.away?.fieldGoalsAttempted || 1)} ({Math.round(((stats.away?.fieldGoalsMade || 0) / (stats.away?.fieldGoalsAttempted || 1)) * 100)}%)</span>
            </div>
            <div className="w-full h-2 bg-bettom-surface rounded-full overflow-hidden flex">
              <div className="bg-bettom-accent h-full" style={{ width: `${(((stats.home?.fieldGoalsMade || 0) / Math.max(1, (stats.home?.fieldGoalsMade || 0) + (stats.away?.fieldGoalsMade || 0)))) * 100}%` }} />
              <div className="bg-blue-500 h-full flex-1" />
            </div>
          </div>

          {/* 3-Pointers */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span>{(stats.home?.threePointersMade || 0)}/{(stats.home?.threePointersAttempted || 1)}</span>
              <span className="text-bettom-muted">3-Pointers</span>
              <span>{(stats.away?.threePointersMade || 0)}/{(stats.away?.threePointersAttempted || 1)}</span>
            </div>
            <div className="w-full h-2 bg-bettom-surface rounded-full overflow-hidden flex">
              <div className="bg-bettom-accent h-full" style={{ width: `${(((stats.home?.threePointersMade || 0) / Math.max(1, (stats.home?.threePointersMade || 0) + (stats.away?.threePointersMade || 0)))) * 100}%` }} />
              <div className="bg-blue-500 h-full flex-1" />
            </div>
          </div>

          {/* Rebounds */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span>{stats.home?.rebounds || 0}</span>
              <span className="text-bettom-muted">Rebounds</span>
              <span>{stats.away?.rebounds || 0}</span>
            </div>
            <div className="w-full h-2 bg-bettom-surface rounded-full overflow-hidden flex">
              <div className="bg-bettom-accent h-full" style={{ width: `${(((stats.home?.rebounds || 0) / Math.max(1, (stats.home?.rebounds || 0) + (stats.away?.rebounds || 0)))) * 100}%` }} />
              <div className="bg-blue-500 h-full flex-1" />
            </div>
          </div>

          {/* Turnovers */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span>{stats.home?.turnovers || 0}</span>
              <span className="text-bettom-muted">Turnovers</span>
              <span>{stats.away?.turnovers || 0}</span>
            </div>
            <div className="w-full h-2 bg-bettom-surface rounded-full overflow-hidden flex">
              <div className="bg-rose-500 h-full" style={{ width: `${(((stats.home?.turnovers || 0) / Math.max(1, (stats.home?.turnovers || 0) + (stats.away?.turnovers || 0)))) * 100}%` }} />
              <div className="bg-amber-500 h-full flex-1" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
