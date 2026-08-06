'use client';

import React, { useState, useMemo } from 'react';
import { Search, Calendar, ChevronDown, CheckCircle } from 'lucide-react';

interface ResultItem {
  id: string;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  country: string;
  flag: string;
  tournament: string;
  sport: string;
  scores: {
    home: number;
    away: number;
    halftimeHome?: number;
    halftimeAway?: number;
    fulltimeHome?: number;
    fulltimeAway?: number;
    extraHome?: number;
    extraAway?: number;
  };
  period: string; // e.g. '1H', 'FT', 'FINISHED'
  status: 'completed' | 'in_progress';
}

interface TournamentResultItem {
  id: string;
  date: string;
  country: string;
  flag: string;
  tournament: string;
  winner: string;
  details?: string;
}

const mockResultsData: ResultItem[] = [
  {
    id: 'res-1',
    date: '04.08',
    time: '11:30',
    homeTeam: 'Pathum Thani University',
    awayTeam: 'Nakhon Sawan Rajabhat University',
    country: 'Thailand',
    flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/67.webp',
    tournament: 'University League',
    sport: 'Football',
    scores: {
      home: 1,
      away: 2,
      halftimeHome: 2,
      halftimeAway: 2,
      fulltimeHome: 2,
      fulltimeAway: 3,
    },
    period: '1H',
    status: 'completed',
  },
  {
    id: 'res-2',
    date: '04.08',
    time: '07:30',
    homeTeam: 'Municipal Perez Zeledon',
    awayTeam: 'CS Cartagines',
    country: 'Costa Rica',
    flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/76.webp',
    tournament: 'Primera Division Apertura',
    sport: 'Football',
    scores: {
      home: 1,
      away: 4,
      halftimeHome: 0,
      halftimeAway: 0,
      fulltimeHome: 1,
      fulltimeAway: 4,
    },
    period: '1H',
    status: 'completed',
  },
  {
    id: 'res-3',
    date: '04.08',
    time: '07:30',
    homeTeam: 'Club Xelaju',
    awayTeam: 'Aurora FC',
    country: 'Guatemala',
    flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
    tournament: 'Liga Nacional',
    sport: 'Football',
    scores: {
      home: 0,
      away: 0,
      halftimeHome: 2,
      halftimeAway: 2,
      fulltimeHome: 0,
      fulltimeAway: 1,
    },
    period: '1H',
    status: 'completed',
  },
  {
    id: 'res-4',
    date: '04.08',
    time: '06:30',
    homeTeam: 'Santos Laguna (W)',
    awayTeam: 'Club America (W)',
    country: 'Mexico',
    flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/67.webp',
    tournament: 'Liga MX Femenil',
    sport: 'Football',
    scores: {
      home: 3,
      away: 2,
      halftimeHome: 0,
      halftimeAway: 0,
      fulltimeHome: 13,
      fulltimeAway: 2,
    },
    period: '1H',
    status: 'completed',
  },
  {
    id: 'res-5',
    date: '04.08',
    time: '06:30',
    homeTeam: 'Independiente de la Chorrera',
    awayTeam: 'Herrera FC',
    country: 'Panama',
    flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/76.webp',
    tournament: 'LPF',
    sport: 'Football',
    scores: {
      home: 2,
      away: 1,
      halftimeHome: 0,
      halftimeAway: 0,
      fulltimeHome: 0,
      fulltimeAway: 0,
    },
    period: '1H',
    status: 'completed',
  },
  {
    id: 'res-6',
    date: '04.08',
    time: '06:30',
    homeTeam: 'CD Marathon',
    awayTeam: 'CA Independiente Siguatepeque',
    country: 'Honduras',
    flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
    tournament: 'Liga Nacional',
    sport: 'Football',
    scores: {
      home: 1,
      away: 0,
      halftimeHome: 0,
      halftimeAway: 0,
      fulltimeHome: 1,
      fulltimeAway: 0,
    },
    period: '1H',
    status: 'completed',
  },
  {
    id: 'res-7',
    date: '04.08',
    time: '06:30',
    homeTeam: 'Atletico Bucaramanga',
    awayTeam: 'Cucuta Deportivo',
    country: 'Colombia',
    flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/67.webp',
    tournament: 'Primera A',
    sport: 'Football',
    scores: {
      home: 5,
      away: 5,
      halftimeHome: 0,
      halftimeAway: 1,
      fulltimeHome: 3,
      fulltimeAway: 1,
      extraHome: 1,
      extraAway: 1,
    },
    period: '1H',
    status: 'completed',
  },
  {
    id: 'res-8',
    date: '04.08',
    time: '05:45',
    homeTeam: 'Atletico Huracan',
    awayTeam: 'Atletico Tucuman',
    country: 'Argentina',
    flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/76.webp',
    tournament: 'Liga Profesional - Clausura',
    sport: 'Football',
    scores: {
      home: 2,
      away: 3,
      halftimeHome: 0,
      halftimeAway: 0,
      fulltimeHome: 4,
      fulltimeAway: 6,
      extraHome: 0,
      extraAway: 0,
    },
    period: '1H',
    status: 'completed',
  },
  {
    id: 'res-9',
    date: '04.08',
    time: '05:45',
    homeTeam: 'Central Cordoba De Santiago',
    awayTeam: 'San Lorenzo',
    country: 'Argentina',
    flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/76.webp',
    tournament: 'Liga Profesional - Clausura',
    sport: 'Football',
    scores: {
      home: 5,
      away: 3,
      halftimeHome: 0,
      halftimeAway: 0,
      fulltimeHome: 3,
      fulltimeAway: 6,
      extraHome: 0,
      extraAway: 0,
    },
    period: '1H',
    status: 'completed',
  },
  {
    id: 'res-10',
    date: '04.08',
    time: '05:30',
    homeTeam: 'Deportes Temuco',
    awayTeam: 'Copiapo',
    country: 'Chile',
    flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
    tournament: 'Primera B',
    sport: 'Football',
    scores: {
      home: 1,
      away: 1,
      halftimeHome: 0,
      halftimeAway: 0,
      fulltimeHome: 9,
      fulltimeAway: 1,
      extraHome: 1,
      extraAway: 4,
    },
    period: '1H',
    status: 'completed',
  },
];

const mockTournamentResultsData: TournamentResultItem[] = [
  {
    id: 'tourn-1',
    date: '03.08',
    country: 'Hungary',
    flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/67.webp',
    tournament: 'NB I, 2nd round (6 matches) - Number of goals (17.5) 2026',
    winner: 'Winner: Over 17.5',
    details: 'Details',
  },
  {
    id: 'tourn-2',
    date: '02.08',
    country: 'England',
    flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/77.webp',
    tournament: 'Community Shield 2026 - Outright Winner',
    winner: 'Winner: Manchester City',
    details: 'Details',
  },
  {
    id: 'tourn-3',
    date: '01.08',
    country: 'Spain',
    flag: 'https://static.glastcoper.com/omfe-widgets/p/assets/1.10.396/bettom/icons/flag/76.webp',
    tournament: 'LaLiga 2026 - Opening Round Goals (24.5)',
    winner: 'Winner: Over 24.5',
    details: 'Details',
  },
];

export default function EventResultsPage() {
  const [selectedSport, setSelectedSport] = useState<string>('Football');
  const [selectedLocation, setSelectedLocation] = useState<string>('Location');
  const [selectedTournament, setSelectedTournament] = useState<string>('Tournament');
  const [dateRange] = useState<string>('02.08.2026 - 04.08.2026');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(10);

  const filteredResults = useMemo(() => {
    return mockResultsData.filter((item) => {
      const matchSearch =
        !searchQuery ||
        item.homeTeam.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.awayTeam.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tournament.toLowerCase().includes(searchQuery.toLowerCase());

      const matchSport = selectedSport === 'All' || item.sport === selectedSport;
      const matchLocation = selectedLocation === 'Location' || item.country === selectedLocation;
      const matchTournament = selectedTournament === 'Tournament' || item.tournament === selectedTournament;

      return matchSearch && matchSport && matchLocation && matchTournament;
    });
  }, [searchQuery, selectedSport, selectedLocation, selectedTournament]);

  return (
    <div className="EventResultsPage w-full flex flex-col space-y-4 text-slate-800 select-none pb-8">
      {/* 1. Header Filter Controls Container matching exact royal blue background (#031A9A) */}
      <div className="FilterBar bg-[#031A9A] text-white p-3 rounded-lg shadow-md flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto flex-1">
          {/* Date Picker Range button */}
          <div className="relative flex items-center bg-[#021375] border border-white/20 rounded px-3 py-1.5 text-xs font-semibold cursor-pointer hover:bg-[#021060] transition-colors">
            <Calendar className="w-3.5 h-3.5 mr-2 text-white/80" />
            <span>{dateRange}</span>
          </div>

          {/* Sport Dropdown */}
          <div className="relative">
            <select
              value={selectedSport}
              onChange={(e) => setSelectedSport(e.target.value)}
              className="appearance-none bg-[#021375] border border-white/20 rounded px-3 py-1.5 pr-8 text-xs font-semibold text-white focus:outline-none cursor-pointer hover:bg-[#021060] transition-colors"
            >
              <option value="Football">Football</option>
              <option value="Basketball">Basketball</option>
              <option value="Tennis">Tennis</option>
              <option value="Cricket">Cricket</option>
              <option value="E-Sports">E-Sports</option>
              <option value="All">All Sports</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-white/80" />
          </div>

          {/* Location Dropdown */}
          <div className="relative">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="appearance-none bg-[#021375] border border-white/20 rounded px-3 py-1.5 pr-8 text-xs font-semibold text-white focus:outline-none cursor-pointer hover:bg-[#021060] transition-colors"
            >
              <option value="Location">Location</option>
              <option value="Thailand">Thailand</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Mexico">Mexico</option>
              <option value="Panama">Panama</option>
              <option value="Honduras">Honduras</option>
              <option value="Colombia">Colombia</option>
              <option value="Argentina">Argentina</option>
              <option value="Chile">Chile</option>
              <option value="Hungary">Hungary</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-white/80" />
          </div>

          {/* Tournament Dropdown */}
          <div className="relative">
            <select
              value={selectedTournament}
              onChange={(e) => setSelectedTournament(e.target.value)}
              className="appearance-none bg-[#021375] border border-white/20 rounded px-3 py-1.5 pr-8 text-xs font-semibold text-white focus:outline-none cursor-pointer hover:bg-[#021060] transition-colors"
            >
              <option value="Tournament">Tournament</option>
              <option value="University League">University League</option>
              <option value="Primera Division Apertura">Primera Division Apertura</option>
              <option value="Liga Nacional">Liga Nacional</option>
              <option value="Liga MX Femenil">Liga MX Femenil</option>
              <option value="LPF">LPF</option>
              <option value="Primera A">Primera A</option>
              <option value="Liga Profesional - Clausura">Liga Profesional - Clausura</option>
              <option value="Primera B">Primera B</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-white/80" />
          </div>
        </div>

        {/* Search Bar Input */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="w-full bg-white text-xs text-slate-900 placeholder:text-slate-400 rounded px-3 py-1.5 pl-8 focus:outline-none border border-slate-300 font-medium"
          />
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* 2. Main Results Section */}
      <div className="ResultsCard bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <h2 className="text-sm font-extrabold text-slate-800 tracking-tight">Results</h2>
          <span className="text-xs font-bold text-slate-500">{filteredResults.length} matches found</span>
        </div>

        {/* Results Table Header */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/80 text-slate-600 font-bold border-b border-slate-200 text-[11px] uppercase tracking-wider">
                <th className="py-2.5 px-4 w-28">Date</th>
                <th className="py-2.5 px-4 min-w-[220px]">Event</th>
                <th className="py-2.5 px-4 min-w-[200px]">Tournament</th>
                <th className="py-2.5 px-4 text-right min-w-[150px]">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredResults.slice(0, visibleCount).map((res) => (
                <tr key={res.id} className="hover:bg-slate-50/80 transition-colors">
                  {/* Date & Time */}
                  <td className="py-3 px-4 align-middle font-medium text-slate-500 whitespace-nowrap">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                      <span>{res.date}</span>
                      <span className="text-slate-400 text-[11px]">{res.time}</span>
                    </div>
                  </td>

                  {/* Teams / Event */}
                  <td className="py-3 px-4 align-middle">
                    <div className="flex flex-col space-y-0.5">
                      <span className="font-bold text-slate-900 hover:text-[#031A9A] transition-colors cursor-pointer">
                        {res.homeTeam}
                      </span>
                      <span className="font-bold text-slate-900 hover:text-[#031A9A] transition-colors cursor-pointer">
                        {res.awayTeam}
                      </span>
                    </div>
                  </td>

                  {/* Tournament & Country Flag */}
                  <td className="py-3 px-4 align-middle">
                    <div className="flex items-center space-x-2">
                      <span
                        className="w-4 h-4 rounded-full bg-cover bg-center shrink-0 border border-slate-200 shadow-2xs"
                        style={{ backgroundImage: `url("${res.flag}")` }}
                      ></span>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-slate-500 leading-tight">{res.country}</span>
                        <span className="text-xs font-semibold text-slate-800 leading-tight">{res.tournament}</span>
                      </div>
                    </div>
                  </td>

                  {/* Detailed Scores & Period Badges matching exact screenshot */}
                  <td className="py-3 px-4 align-middle text-right whitespace-nowrap">
                    <div className="flex items-center justify-end space-x-3">
                      {/* Period Breakdown (Halftime / Fulltime detail) */}
                      <div className="flex flex-col text-[10px] text-slate-500 font-mono font-medium leading-tight text-right">
                        {res.scores.halftimeHome !== undefined && (
                          <span>
                            {res.scores.halftimeHome} {res.scores.halftimeAway}
                          </span>
                        )}
                        {res.scores.fulltimeHome !== undefined && (
                          <span>
                            {res.scores.fulltimeHome} {res.scores.fulltimeAway}
                          </span>
                        )}
                        {res.scores.extraHome !== undefined && (
                          <span>
                            {res.scores.extraHome} {res.scores.extraAway}
                          </span>
                        )}
                      </div>

                      {/* Main Match Score Badge */}
                      <div className="flex items-center space-x-1.5 font-black text-sm text-slate-900 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                        <span>{res.scores.home}</span>
                        <span className="text-slate-400 font-normal">-</span>
                        <span>{res.scores.away}</span>
                      </div>

                      {/* 1H / Status Badge matching exact screenshot icon */}
                      <div className="flex items-center space-x-1">
                        <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-black text-[10px]">
                          {res.period}
                        </span>
                        <span className="text-slate-400 hover:text-slate-600 cursor-pointer">
                          <CheckCircle className="w-3.5 h-3.5 text-slate-400" />
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Show More Button */}
        {visibleCount < filteredResults.length && (
          <div className="p-3 border-t border-slate-200 flex justify-center bg-slate-50">
            <button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="px-6 py-1.5 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs rounded border border-slate-300 shadow-2xs transition-colors cursor-pointer"
            >
              Show more
            </button>
          </div>
        )}
      </div>

      {/* 3. Tournament Results Section matching screenshot lower table */}
      <div className="TournamentResultsCard bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden mt-6">
        <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
          <h2 className="text-sm font-extrabold text-slate-800 tracking-tight">Tournament results</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/80 text-slate-600 font-bold border-b border-slate-200 text-[11px] uppercase tracking-wider">
                <th className="py-2.5 px-4 w-20">Date</th>
                <th className="py-2.5 px-4 w-36">Location</th>
                <th className="py-2.5 px-4 min-w-[300px]">Tournament</th>
                <th className="py-2.5 px-4 min-w-[200px]">Winner</th>
                <th className="py-2.5 px-4 text-right w-24">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {mockTournamentResultsData.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 px-4 align-middle font-medium text-slate-500">{t.date}</td>
                  <td className="py-3 px-4 align-middle">
                    <div className="flex items-center space-x-1.5">
                      <span
                        className="w-4 h-4 rounded-full bg-cover bg-center shrink-0 border border-slate-200"
                        style={{ backgroundImage: `url("${t.flag}")` }}
                      ></span>
                      <span className="font-semibold text-slate-700">{t.country}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 align-middle font-semibold text-slate-800">{t.tournament}</td>
                  <td className="py-3 px-4 align-middle font-medium text-slate-600">
                    <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold text-[11px]">
                      {t.winner}
                    </span>
                  </td>
                  <td className="py-3 px-4 align-middle text-right">
                    <button className="text-xs font-semibold text-slate-500 hover:text-[#031A9A] underline cursor-pointer">
                      {t.details || 'Details'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
