'use client';

import React from 'react';
import { EsportsDisciplinesRow } from '@/components/sports/EsportsDisciplinesRow';
import { EsportsMatchesGrid } from '@/components/sports/EsportsMatchesGrid';
import { Home } from 'lucide-react';

export default function EsportsFcDisciplinePage() {
  return (
    <div className="space-y-4 select-none pb-8">
      {/* Breadcrumb Bar matching Page 1 eSports PDF */}
      <div className="flex items-center space-x-2 text-xs font-bold text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200 shadow-sm">
        <Home className="w-4 h-4 text-[#001489]" />
        <span>/</span>
        <span className="text-slate-500">eSports</span>
        <span>/</span>
        <span className="text-[#001489] font-black">FC Discipline</span>
      </div>

      {/* Game Discipline Chips (Call of Duty, CS, DOTA 2, FC red active badge, etc.) */}
      <EsportsDisciplinesRow />

      {/* Tournament Filters Bar */}
      <div className="flex items-center space-x-2 text-xs font-bold">
        <span className="bg-[#FF2925] text-white px-3 py-1 rounded-md font-black border border-[#FF2925]">
          All
        </span>
        <span className="bg-white text-slate-700 px-3 py-1 rounded-md border border-slate-200 hover:bg-slate-100 cursor-pointer">
          Champions VOLTA League
        </span>
        <span className="bg-white text-slate-700 px-3 py-1 rounded-md border border-slate-200 hover:bg-slate-100 cursor-pointer">
          ESoccer Battle (8 Minutes Play)
        </span>
      </div>

      {/* Matches Grid (Champions VOLTA League & ESoccer Battle) */}
      <EsportsMatchesGrid />
    </div>
  );
}
