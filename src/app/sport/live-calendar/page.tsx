'use client';

import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

interface CalendarEvent {
  id: string;
  time: string;
  sport: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  flag: string;
  isLive?: boolean;
}

const mockCalendarData: Record<string, CalendarEvent[]> = {
  Today: [
    {
      id: 'cal-1',
      time: '14:30',
      sport: 'Basketball',
      homeTeam: 'Los Angeles Lakers',
      awayTeam: 'Golden State Warriors',
      league: 'NBA Summer League',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
      isLive: true,
    },
    {
      id: 'cal-2',
      time: '16:00',
      sport: 'Football',
      homeTeam: 'Manchester United',
      awayTeam: 'Fiorentina',
      league: 'Club Friendly',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/67.webp',
    },
    {
      id: 'cal-3',
      time: '18:15',
      sport: 'Tennis',
      homeTeam: 'Carlos Alcaraz',
      awayTeam: 'Jannik Sinner',
      league: 'ATP Masters 1000',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/76.webp',
    },
    {
      id: 'cal-4',
      time: '20:00',
      sport: 'Cricket',
      homeTeam: 'Oval Invincibles',
      awayTeam: 'London Spirit',
      league: 'The Hundred',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
    },
  ],
  Tomorrow: [
    {
      id: 'cal-5',
      time: '12:00',
      sport: 'Football',
      homeTeam: 'Real Madrid',
      awayTeam: 'AC Milan',
      league: 'Pre-Season Tour',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/76.webp',
    },
    {
      id: 'cal-6',
      time: '15:30',
      sport: 'E-Sports',
      homeTeam: 'Natus Vincere',
      awayTeam: 'FaZe Clan',
      league: 'IEM Cologne 2026',
      flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/67.webp',
    },
  ],
};

export default function LiveCalendarPage() {
  const [selectedDay, setSelectedDay] = useState<'Today' | 'Tomorrow'>('Today');
  const [sportFilter, setSportFilter] = useState<string>('All');

  const events = mockCalendarData[selectedDay] || [];
  const filteredEvents = events.filter(
    (e) => sportFilter === 'All' || e.sport.toLowerCase() === sportFilter.toLowerCase()
  );

  return (
    <div className="LiveCalendarPage space-y-4 text-slate-800 select-none pb-8">
      {/* Top Banner Header matching EveryMatrix style */}
      <div className="bg-[#031A9A] text-white p-4 rounded-xl shadow-md flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-emerald-400" />
          <h1 className="text-lg font-black tracking-wide">LIVE CALENDAR</h1>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center space-x-1 bg-[#021375] p-1 rounded-lg border border-white/20">
          <button
            onClick={() => setSelectedDay('Today')}
            className={`px-4 py-1.5 rounded-md text-xs font-black transition-all cursor-pointer ${
              selectedDay === 'Today'
                ? 'bg-white text-[#031A9A] shadow-md'
                : 'text-white/80 hover:text-white'
            }`}
          >
            TODAY
          </button>
          <button
            onClick={() => setSelectedDay('Tomorrow')}
            className={`px-4 py-1.5 rounded-md text-xs font-black transition-all cursor-pointer ${
              selectedDay === 'Tomorrow'
                ? 'bg-white text-[#031A9A] shadow-md'
                : 'text-white/80 hover:text-white'
            }`}
          >
            TOMORROW
          </button>
        </div>

        {/* Sport Filter Pill Buttons */}
        <div className="flex items-center space-x-1 text-xs font-semibold">
          {['All', 'Football', 'Basketball', 'Tennis', 'Cricket', 'E-Sports'].map((sport) => (
            <button
              key={sport}
              onClick={() => setSportFilter(sport)}
              className={`px-3 py-1 rounded border transition-colors cursor-pointer ${
                sportFilter === sport
                  ? 'bg-emerald-500 text-white border-emerald-400 font-bold'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              }`}
            >
              {sport}
            </button>
          ))}
        </div>
      </div>

      {/* Events Schedule List */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <span className="font-extrabold text-sm text-slate-800">
            Upcoming Live Matches ({selectedDay})
          </span>
          <span className="text-xs font-bold text-slate-500">{filteredEvents.length} events scheduled</span>
        </div>

        <div className="divide-y divide-slate-100">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between flex-wrap gap-2"
            >
              <div className="flex items-center space-x-4">
                <span className="font-mono font-bold text-sm text-[#031A9A] bg-slate-100 px-2.5 py-1 rounded">
                  {evt.time}
                </span>
                <div>
                  <div className="flex items-center space-x-2">
                    <span
                      className="w-4 h-4 rounded-full bg-cover bg-center shrink-0 border border-slate-200"
                      style={{ backgroundImage: `url("${evt.flag}")` }}
                    ></span>
                    <span className="text-xs font-extrabold text-slate-900">
                      {evt.homeTeam} vs {evt.awayTeam}
                    </span>
                    {evt.isLive && (
                      <span className="bg-[#FF2925] text-white text-[10px] font-black px-2 py-0.5 rounded animate-pulse">
                        LIVE NOW
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">{evt.league}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                  {evt.sport}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
