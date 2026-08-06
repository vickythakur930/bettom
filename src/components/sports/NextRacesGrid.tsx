'use client';

import React from 'react';
import { useBetSlipStore } from '@/store/useBetSlipStore';
import { ChevronRight } from 'lucide-react';

export const NextRacesGrid: React.FC = () => {
  const { toggleSelection } = useBetSlipStore();

  const raceCards = [
    {
      id: 'race-1',
      time: '12:24',
      course: 'Bunbury',
      countdown: '3 mins 3s to post',
      runnersCount: '16 Runners',
      runners: [
        { name: 'Cape Churchill', jockey: 'J: Lucy Fiore', odds: '15/8', decimalOdds: 2.88 },
        { name: 'Bazaactly', jockey: 'J: Clint Johnston-Porter', odds: '3/1', decimalOdds: 4.0 },
        { name: 'Win For Buster', jockey: 'J: William Pike', odds: '11/2', decimalOdds: 6.5 },
      ],
    },
    {
      id: 'race-2',
      time: '13:04',
      course: 'Bunbury',
      countdown: '43 mins 3s to post',
      runnersCount: '11 Runners',
      runners: [
        { name: 'Cinque Stelle', jockey: 'J: William Pike', odds: '5/4', decimalOdds: 2.25 },
        { name: 'Swansee', jockey: 'J: Clint Johnston-Porter', odds: '11/4', decimalOdds: 3.75 },
        { name: 'King Brew', jockey: 'J: Laqdar Ramoly', odds: '11/2', decimalOdds: 6.5 },
      ],
    },
    {
      id: 'race-3',
      time: '13:28',
      course: 'Vichy',
      countdown: '1 hr 7 mins 3s to post',
      runnersCount: '5 Runners',
      runners: [
        { name: 'Nouvlatiep', jockey: 'J: M Velon', odds: 'SP', decimalOdds: 2.0 },
        { name: 'Name Castle', jockey: 'J: H Lebouc', odds: 'SP', decimalOdds: 3.5 },
        { name: 'Nectar Vergoignan', jockey: 'J: C Gultraud', odds: 'SP', decimalOdds: 4.5 },
      ],
    },
  ];

  return (
    <div className="mb-4 select-none">
      <div className="text-xs font-bold text-slate-600 mb-2 px-1">Next Horse Races</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {raceCards.map((card) => (
          <div
            key={card.id}
            className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm hover:border-[#031A9A]/40 transition-all flex flex-col justify-between"
          >
            {/* Race Card Header */}
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                <div>
                  <div className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
                    <span>{card.time}</span>
                    <span>{card.course}</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">{card.countdown}</div>
                </div>
                <div className="text-[11px] font-semibold text-slate-500 flex items-center">
                  <span>{card.runnersCount}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>

              {/* Runners List matching Page 1 PDF */}
              <div className="space-y-2">
                {card.runners.map((r, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <div className="min-w-0 pr-2">
                      <div className="font-extrabold text-slate-900 truncate hover:text-[#031A9A] cursor-pointer">
                        {r.name}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium truncate">{r.jockey}</div>
                    </div>

                    <button
                      onClick={() =>
                        toggleSelection({
                          id: `${card.id}-r${idx}`,
                          matchId: card.id,
                          matchTitle: `${card.time} ${card.course}`,
                          sport: 'basketball',
                          marketId: 'winner',
                          marketName: 'Race Winner',
                          isLive: false,
                          outcome: { id: `${card.id}-r${idx}`, name: r.name, odds: r.decimalOdds },
                        })
                      }
                      className="w-12 h-8 bg-[#001489] hover:bg-[#020E50] text-white font-mono font-black text-xs rounded flex items-center justify-center shadow-sm shrink-0 transition-colors"
                    >
                      {r.odds}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
