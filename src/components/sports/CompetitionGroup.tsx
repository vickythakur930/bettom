'use client';

import React, { useCallback, memo } from 'react';
import { Match } from '@/types/sports';
import { MatchRow } from './MatchRow';
import { useSportsStore } from '@/store/useSportsStore';

interface CompetitionGroupProps {
  leagueId?: string;
  leagueName?: string;
  countryFlag?: string;
  matches?: Match[];
}

const CompetitionGroupComponent: React.FC<CompetitionGroupProps> = ({
  leagueId = '',
  leagueName = '',
  countryFlag = '',
  matches = [],
}) => {
  // Fine-grained Zustand selector to prevent re-rendering when other leagues toggle expansion
  const isExpanded = useSportsStore(
    useCallback((state) => state.expandedLeagues[leagueId] ?? true, [leagueId])
  );
  const toggleLeagueExpanded = useSportsStore((state) => state.toggleLeagueExpanded);

  if (!matches || matches.length === 0) return null;

  // Resolve webp flag URL or fallback
  const flagUrl = countryFlag?.startsWith('http')
    ? countryFlag
    : 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/67.webp';

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-2xs overflow-hidden mb-3 font-['Nunito_Sans',sans-serif]">
      {/* MatchListGroup__Header */}
      <div className="MatchListGroup__Header flex items-center justify-between w-full h-[44px] pl-[12px] pr-[6px] bg-white border-b border-slate-200 select-none">
        {/* MatchListGroup__Title */}
        <span className="MatchListGroup__Title flex items-center flex-1 py-[6px] pr-[6px] pl-0 overflow-hidden">
          <span
            className="OM-Icon OM-Icon--67 OM-Icon--AsBackground OM-Icon--flag w-5 h-5 rounded-full bg-cover bg-center shrink-0 border border-slate-200 shadow-2xs mr-2"
            style={{ backgroundImage: `url("${flagUrl}")` }}
          ></span>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="Anchor MatchListGroup__HeaderLink flex items-center gap-[6px] overflow-hidden no-underline"
          >
            <span className="MatchListGroup__Tournament text-[13px] font-semibold text-[#021A9A] hover:underline whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
              {leagueName} 2026
            </span>
            <span className="OM-Icon OM-Icon--Svg OM-Icon--general OM-Icon--arr-right shrink-0 flex items-center">
              <svg className="S w-3 h-3 fill-black text-black" viewBox="0 0 120 120">
                <path d="m30.32 96.64 36.64-36.64-36.64-36.8 11.36-11.2 48 48-48 48z"></path>
              </svg>
            </span>
          </a>
        </span>

        {/* MatchListGroup__OutcomesList */}
        <div className="MatchListGroup__OutcomesList hidden lg:flex items-center space-x-10 pr-4 text-[12px] text-slate-800 font-semibold">
          <div className="MatchList__OutcomeWrapper MatchList__OutcomeWrapper--Column-3 w-[150px] text-center">
            <span className="MatchList__MarketBetType">1x2</span>
          </div>
          <div className="MatchList__OutcomeWrapper MatchList__OutcomeWrapper--Column-2 w-[110px] text-center">
            <span className="MatchList__MarketBetType">Over/Under</span>
          </div>
          <div className="MatchList__OutcomeWrapper MatchList__OutcomeWrapper--Column-2">
            <div className="OM-Dropdown MarketSelector relative">
              <div className="OM-Dropdown__Header">
                <button className="OM-Button OM-Button--primary OM-Button--md OM-Dropdown__DropdownToggleButton flex items-center space-x-1 bg-transparent hover:bg-slate-100 px-1 py-0.5 rounded text-[12px] text-slate-900 font-semibold border border-transparent hover:border-slate-300">
                  <div className="OM-Dropdown__Title truncate max-w-[110px]">
                    <span className="OM-DropdownTitle__SingleValue text-[12px] font-semibold text-slate-900 truncate block" title="Both teams to score: Yes/No">
                      Both teams to score: Yes/No
                    </span>
                  </div>
                  <span className="OM-Icon OM-Icon--Svg OM-Icon--general OM-Icon--arr-down OM-Icon--Medium1 OM-Dropdown__SelectedIcon flex items-center shrink-0">
                    <svg className="S w-2.5 h-2.5 fill-black text-black ml-0.5" viewBox="0 0 120 120">
                      <path d="m96.8 30.32-36.8 36.64-36.8-36.64-11.2 11.36 48 48 48-48z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Collapse Button */}
        <button
          onClick={() => toggleLeagueExpanded(leagueId)}
          className="MatchListGroup__CollapseBtn p-1.5 hover:bg-slate-100 rounded text-slate-500 hover:text-black transition-colors"
          title={isExpanded ? "Collapse" : "Expand"}
        >
          <span className="OM-Icon OM-Icon--Svg OM-Icon--general OM-Icon--remove">
            <svg className="S w-3.5 h-3.5 fill-current" viewBox="0 0 126 126">
              <path d="M33 57.4h60v11.3H33z"></path>
            </svg>
          </span>
        </button>
      </div>

      {/* Match Rows List */}
      {isExpanded && (
        <div className="divide-y divide-slate-100">
          {matches.map((match) => (
            <MatchRow key={match.id} match={match} />
          ))}
        </div>
      )}
    </div>
  );
};

export const CompetitionGroup = memo(CompetitionGroupComponent);
