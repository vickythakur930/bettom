'use client';

import React, { useState } from 'react';
import { Gamepad2, Shield, Swords, Crosshair, Trophy } from 'lucide-react';

export const EsportsDisciplinesRow: React.FC = () => {
  const [activeDiscipline, setActiveDiscipline] = useState('fc');

  const disciplines = [
    { id: 'cod', name: 'Call of Duty', icon: Crosshair },
    { id: 'cs', name: 'Counter-Strike', icon: Swords },
    { id: 'dota2', name: 'DOTA 2', icon: Trophy },
    { id: 'fc', name: 'FC', isRed: true, icon: Gamepad2 },
    { id: 'kog', name: 'King Of Glory', icon: Shield },
    { id: 'lol', name: 'LOL', icon: Swords },
    { id: 'nba2k', name: 'NBA2K', icon: Gamepad2 },
    { id: 'overwatch', name: 'Overwatch', icon: Shield },
    { id: 'r6', name: 'Rainbow Six', icon: Crosshair },
    { id: 'valorant', name: 'Valorant', icon: Swords },
  ];

  return (
    <div className="mb-4 select-none">
      <div className="flex items-center space-x-3 overflow-x-auto scrollbar-thin py-1 pr-2">
        {disciplines.map((d) => {
          const isActive = activeDiscipline === d.id;
          const Icon = d.icon;

          return (
            <button
              key={d.id}
              onClick={() => setActiveDiscipline(d.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all flex items-center space-x-1.5 border shadow-sm ${
                d.isRed
                  ? 'bg-[#FF2925] text-white border-[#FF2925] font-black ring-2 ring-[#FF2925]/30'
                  : isActive
                  ? 'bg-[#001489] text-white border-[#001489]'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{d.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
