'use client';

import React, { useCallback, memo } from 'react';
import { useBetSlipStore } from '@/store/useBetSlipStore';
import { useSportsStore } from '@/store/useSportsStore';
import { useLiveOddsStore } from '@/store/useLiveOddsStore';
import { OddsValue, SportType } from '@/types/sports';
import { formatOdds } from '@/utils/oddsFormatter';
import { cn } from '@/utils/helpers';

interface OddsButtonProps {
  matchId: string;
  matchTitle: string;
  sport: SportType;
  marketId: string;
  marketName: string;
  outcome: OddsValue;
  label?: string; // e.g. "Home", "Draw", "Away", "Over", "Under", "Yes", "No"
  isLive?: boolean;
  className?: string;
  progressPercent?: number; // e.g. 80, 65, 20
  progressValid?: boolean; // true = red bar, false = grey bar
}

const OddsButtonComponent: React.FC<OddsButtonProps> = ({
  matchId,
  matchTitle,
  sport,
  marketId,
  marketName,
  outcome,
  label,
  isLive = false,
  className,
  progressPercent,
  progressValid,
}) => {
  // Fine-grained atomic Zustand selectors to prevent unnecessary re-renders across unaffected buttons
  const isSelected = useBetSlipStore(
    useCallback((state) => state.selections.some((s) => s.id === outcome.id), [outcome.id])
  );
  const toggleSelection = useBetSlipStore((state) => state.toggleSelection);
  const oddsFormat = useSportsStore((state) => state.oddsFormat);
  const liveTick = useLiveOddsStore(
    useCallback((state) => state.ticks[outcome.id], [outcome.id])
  );

  const tick = liveTick || outcome.tick;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (outcome.suspended) return;
    toggleSelection({
      id: outcome.id,
      matchId,
      matchTitle,
      sport,
      marketId,
      marketName,
      outcome,
      isLive,
    });
  };

  const showAccent = isSelected || progressValid;

  return (
    <button
      onClick={handleClick}
      disabled={outcome.suspended}
      className={cn(
        'OddsButton UBTOddsButton relative flex flex-col items-center justify-between py-1 px-1.5 rounded-md bg-[#F2F2F2] hover:bg-[#E6E6E6] active:scale-95 transition-all duration-150 select-none min-w-[46px] h-[40px] border border-transparent cursor-pointer overflow-hidden touch-manipulation',
        isSelected && 'shadow-2xs bg-[#F2F2F2] ring-1 ring-[#FF2925]',
        outcome.suspended && 'opacity-50 cursor-not-allowed bg-slate-100',
        tick === 'up' && 'animate-odds-up text-emerald-700 font-bold',
        tick === 'down' && 'animate-odds-down text-rose-700 font-bold',
        className
      )}
    >
      {outcome.suspended ? (
        <div className="flex flex-col items-center justify-center w-full h-full text-slate-400">
          <svg className="w-3.5 h-3.5 fill-current opacity-60" viewBox="0 0 24 24">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </svg>
        </div>
      ) : (
        <>
          <div className="OM-ValueChanger flex flex-col items-center justify-between w-full h-full">
            {label && (
              <span className="OddsButton__ShortText text-[9px] font-normal text-slate-500 leading-none mt-0.5">
                {label}
              </span>
            )}
            <span className="OddsButton__Odds font-mono font-bold text-[12px] text-[#121D29] leading-none mb-1">
              {formatOdds(outcome.odds, oddsFormat)}
            </span>
          </div>

          {/* Progress / Accent indicator bar */}
          <div className="OddsButton__ProgressBar w-full flex justify-center pb-0.5">
            <div
              className={cn(
                'OddsButton__ProgressBarIndicator h-[3px] rounded-full transition-all duration-300',
                showAccent
                  ? 'OddsButton__ProgressBarIndicator--valid bg-[#FF2925] w-7'
                  : 'OddsButton__ProgressBarIndicator--invalid bg-slate-300 w-5'
              )}
            ></div>
          </div>
        </>
      )}
    </button>
  );
};

export const OddsButton = memo(OddsButtonComponent);
