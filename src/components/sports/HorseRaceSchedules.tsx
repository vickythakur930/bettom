'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface RaceCourse {
  name: string;
  racesCount: string;
  status: string; // e.g. "Race ended", "Next Race in 5h 59m"
  times: { time: string; isNext?: boolean; isEnded?: boolean }[];
}

interface CountrySchedule {
  country: string;
  flag: string;
  courses: RaceCourse[];
}

export const HorseRaceSchedules: React.FC = () => {
  const [expandedCountries, setExpandedCountries] = useState<Record<string, boolean>>({
    'United Kingdom': true,
    Ireland: true,
    France: true,
    'United States': true,
    Australia: true,
    Argentina: true,
    Chile: true,
    Italy: true,
    'New Zealand': true,
    'South Africa': true,
  });

  const toggleCountry = (c: string) => {
    setExpandedCountries((prev) => ({ ...prev, [c]: !prev[c] }));
  };

  const schedules: CountrySchedule[] = [
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      courses: [
        {
          name: 'Leicester',
          racesCount: '3 races',
          status: 'Race ended',
          times: [
            { time: '00:07', isEnded: true },
            { time: '00:40', isEnded: true },
            { time: '01:10', isEnded: true },
          ],
        },
        {
          name: 'Sandown',
          racesCount: '2 races',
          status: 'Race ended',
          times: [
            { time: '00:30', isEnded: true },
            { time: '01:00', isEnded: true },
          ],
        },
        {
          name: 'Goodwood',
          racesCount: '8 races',
          status: 'Next Race in 5h 59m',
          times: [
            { time: '18:20', isNext: true },
            { time: '18:55' },
            { time: '19:30' },
            { time: '20:05' },
            { time: '20:40' },
            { time: '21:15' },
            { time: '21:50' },
            { time: '22:25' },
          ],
        },
        {
          name: 'Nottingham',
          racesCount: '7 races',
          status: 'Next Race in 6h 9m',
          times: [
            { time: '18:30', isNext: true },
            { time: '19:05' },
            { time: '19:40' },
            { time: '20:15' },
            { time: '20:50' },
            { time: '21:25' },
            { time: '21:55' },
          ],
        },
        {
          name: 'Wolverhampton',
          racesCount: '5 races',
          status: 'Next Race in 8h 44m',
          times: [
            { time: '21:05', isNext: true },
            { time: '21:40' },
            { time: '22:17' },
            { time: '22:52' },
            { time: '23:27' },
          ],
        },
        {
          name: 'Epsom Downs',
          racesCount: '4 races',
          status: 'Next Race in 9h 39m',
          times: [
            { time: '22:00', isNext: true },
            { time: '22:35' },
            { time: '23:10' },
            { time: '23:45' },
          ],
        },
      ],
    },
    {
      country: 'Ireland',
      flag: '🇮🇪',
      courses: [
        {
          name: 'Galway',
          racesCount: '10 races',
          status: 'Next Race in 6h 19m',
          times: [
            { time: '00:20', isEnded: true },
            { time: '00:50', isEnded: true },
            { time: '18:40', isNext: true },
            { time: '19:15' },
            { time: '19:50' },
            { time: '20:25' },
            { time: '21:00' },
            { time: '21:35' },
            { time: '22:10' },
            { time: '22:42' },
          ],
        },
      ],
    },
    {
      country: 'France',
      flag: '🇫🇷',
      courses: [
        {
          name: 'Enghien',
          racesCount: '5 races',
          status: 'Race ended',
          times: [
            { time: '00:13', isEnded: true },
            { time: '00:45', isEnded: true },
            { time: '01:15', isEnded: true },
            { time: '01:45', isEnded: true },
            { time: '02:12', isEnded: true },
          ],
        },
        {
          name: 'Vichy',
          racesCount: '8 races',
          status: 'Next Race in 1h 7m',
          times: [
            { time: '13:28', isNext: true },
            { time: '14:00' },
            { time: '14:32' },
            { time: '15:04' },
            { time: '15:36' },
            { time: '16:08' },
            { time: '16:40' },
            { time: '17:13' },
          ],
        },
        {
          name: 'La Capelle',
          racesCount: '8 races',
          status: 'Next Race in 4h 35m',
          times: [
            { time: '16:56', isNext: true },
            { time: '17:30' },
            { time: '18:05' },
            { time: '18:40' },
            { time: '19:15' },
            { time: '19:53' },
            { time: '20:40' },
            { time: '21:13' },
          ],
        },
        {
          name: 'Dieppe',
          racesCount: '7 races',
          status: 'Next Race in 8h 2m',
          times: [
            { time: '20:23', isNext: true },
            { time: '20:57' },
            { time: '21:30' },
            { time: '22:02' },
            { time: '22:34' },
            { time: '23:05' },
            { time: '23:45' },
          ],
        },
        {
          name: 'Pornichet',
          racesCount: '4 races',
          status: 'Next Race in 9h 25m',
          times: [
            { time: '21:46', isNext: true },
            { time: '22:18' },
            { time: '22:50' },
            { time: '23:20' },
          ],
        },
      ],
    },
    {
      country: 'United States',
      flag: '🇺🇸',
      courses: [
        {
          name: 'Belterra Park',
          racesCount: '5 races',
          status: 'Next Race in 9h 44m',
          times: [
            { time: '00:05', isEnded: true },
            { time: '00:35', isEnded: true },
            { time: '01:05', isEnded: true },
            { time: '01:35', isEnded: true },
            { time: '22:05', isNext: true },
            { time: '22:35' },
            { time: '23:05' },
            { time: '23:35' },
          ],
        },
        {
          name: 'Horseshoe Indianapolis',
          racesCount: '10 races',
          status: 'Next Race in 11h 19m',
          times: [
            { time: '00:11', isEnded: true },
            { time: '00:42', isEnded: true },
            { time: '01:13', isEnded: true },
            { time: '01:44', isEnded: true },
            { time: '02:15', isEnded: true },
            { time: '02:46', isEnded: true },
            { time: '03:17', isEnded: true },
            { time: '03:48', isEnded: true },
            { time: '04:16', isEnded: true },
            { time: '23:40', isNext: true },
          ],
        },
        {
          name: 'Thistledown',
          racesCount: '8 races',
          status: 'Next Race in 9h 59m',
          times: [
            { time: '00:20', isEnded: true },
            { time: '00:50', isEnded: true },
            { time: '01:20', isEnded: true },
            { time: '01:50', isEnded: true },
            { time: '22:20', isNext: true },
            { time: '22:50' },
            { time: '23:20' },
            { time: '23:50' },
          ],
        },
        {
          name: 'Delaware Park',
          racesCount: '9 races',
          status: 'Next Race in 9h 29m',
          times: [
            { time: '00:30', isEnded: true },
            { time: '01:02', isEnded: true },
            { time: '01:34', isEnded: true },
            { time: '02:06', isEnded: true },
            { time: '21:50', isNext: true },
            { time: '22:22' },
            { time: '22:54' },
            { time: '23:26' },
            { time: '23:58' },
          ],
        },
        {
          name: 'Colonial Downs',
          racesCount: '7 races',
          status: 'Next Race in 7h 54m',
          times: [
            { time: '20:15', isNext: true },
            { time: '20:50' },
            { time: '21:25' },
            { time: '22:05' },
            { time: '22:35' },
            { time: '23:05' },
            { time: '23:36' },
          ],
        },
        {
          name: 'Saratoga TB',
          racesCount: '3 races',
          status: 'Next Race in 10h 19m',
          times: [
            { time: '22:40', isNext: true },
            { time: '23:14' },
            { time: '23:49' },
          ],
        },
      ],
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      courses: [
        {
          name: 'Gatton',
          racesCount: '9 races',
          status: 'Race ended',
          times: [
            { time: '07:13', isEnded: true },
            { time: '07:45', isEnded: true },
            { time: '08:20', isEnded: true },
            { time: '08:55', isEnded: true },
            { time: '09:35', isEnded: true },
            { time: '10:10', isEnded: true },
            { time: '10:45', isEnded: true },
            { time: '11:20', isEnded: true },
            { time: '11:55', isEnded: true },
          ],
        },
        {
          name: 'Illawarra Grange',
          racesCount: '8 races',
          status: 'Result in',
          times: [
            { time: '08:05', isEnded: true },
            { time: '08:40', isEnded: true },
            { time: '09:15', isEnded: true },
            { time: '09:50', isEnded: true },
            { time: '10:25', isEnded: true },
            { time: '11:05', isEnded: true },
            { time: '11:40', isEnded: true },
            { time: '12:15', isEnded: true },
          ],
        },
        {
          name: 'Bunbury',
          racesCount: '8 races',
          status: 'Next Race in 0h 3m',
          times: [
            { time: '09:57', isEnded: true },
            { time: '10:34', isEnded: true },
            { time: '11:12', isEnded: true },
            { time: '11:47', isEnded: true },
            { time: '12:24', isNext: true },
            { time: '13:04' },
            { time: '13:40' },
            { time: '14:15' },
          ],
        },
      ],
    },
    {
      country: 'Argentina',
      flag: '🇦🇷',
      courses: [
        {
          name: 'San Isidro',
          racesCount: '9 races',
          status: 'Race ended',
          times: [
            { time: '00:00', isEnded: true },
            { time: '00:30', isEnded: true },
            { time: '01:00', isEnded: true },
            { time: '01:30', isEnded: true },
            { time: '02:00', isEnded: true },
            { time: '02:30', isEnded: true },
            { time: '03:00', isEnded: true },
            { time: '03:30', isEnded: true },
            { time: '04:00', isEnded: true },
          ],
        },
        {
          name: 'Palermo',
          racesCount: '4 races',
          status: 'Next Race in 9h 39m',
          times: [
            { time: '22:00', isNext: true },
            { time: '22:30' },
            { time: '23:00' },
            { time: '23:30' },
          ],
        },
      ],
    },
    {
      country: 'Chile',
      flag: '🇨🇱',
      courses: [
        {
          name: 'Valparaiso',
          racesCount: '13 races',
          status: 'Race ended',
          times: [
            { time: '00:00', isEnded: true },
            { time: '00:30', isEnded: true },
            { time: '01:00', isEnded: true },
            { time: '01:30', isEnded: true },
            { time: '02:00', isEnded: true },
            { time: '02:30', isEnded: true },
            { time: '03:00', isEnded: true },
            { time: '04:00', isEnded: true },
            { time: '04:30', isEnded: true },
            { time: '05:00', isEnded: true },
            { time: '05:30', isEnded: true },
            { time: '06:00', isEnded: true },
          ],
        },
        {
          name: 'Santiago',
          racesCount: '6 races',
          status: 'Next Race in 9h 9m',
          times: [
            { time: '21:30', isNext: true },
            { time: '21:55' },
            { time: '22:20' },
            { time: '22:46' },
            { time: '23:11' },
            { time: '23:36' },
          ],
        },
      ],
    },
    {
      country: 'Italy',
      flag: '🇮🇹',
      courses: [
        {
          name: 'Siracusa',
          racesCount: '5 races',
          status: 'Race ended',
          times: [
            { time: '00:10', isEnded: true },
            { time: '00:40', isEnded: true },
            { time: '01:15', isEnded: true },
            { time: '01:50', isEnded: true },
            { time: '02:20', isEnded: true },
          ],
        },
        {
          name: 'Livorno',
          racesCount: '6 races',
          status: 'Race ended',
          times: [
            { time: '00:23', isEnded: true },
            { time: '00:53', isEnded: true },
            { time: '01:23', isEnded: true },
            { time: '01:53', isEnded: true },
            { time: '02:23', isEnded: true },
            { time: '02:58', isEnded: true },
          ],
        },
      ],
    },
    {
      country: 'New Zealand',
      flag: '🇳🇿',
      courses: [
        {
          name: 'Otaki',
          racesCount: '8 races',
          status: 'Race ended',
          times: [
            { time: '05:15', isEnded: true },
            { time: '05:48', isEnded: true },
            { time: '06:26', isEnded: true },
            { time: '07:06', isEnded: true },
            { time: '07:45', isEnded: true },
            { time: '08:24', isEnded: true },
            { time: '09:01', isEnded: true },
            { time: '09:39', isEnded: true },
          ],
        },
      ],
    },
    {
      country: 'South Africa',
      flag: '🇿🇦',
      courses: [
        {
          name: 'Vaal',
          racesCount: '9 races',
          status: 'Next Race in 3h 9m',
          times: [
            { time: '15:30', isNext: true },
            { time: '16:05' },
            { time: '16:40' },
            { time: '17:15' },
            { time: '17:50' },
            { time: '18:25' },
            { time: '19:00' },
            { time: '19:35' },
            { time: '20:10' },
          ],
        },
      ],
    },
  ];

  return (
    <div className="space-y-4 select-none">
      {schedules.map((group) => {
        const isExpanded = expandedCountries[group.country] ?? true;

        return (
          <div key={group.country} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Accordion Country Bar matching PDF Pages 1, 2 & 3 */}
            <div
              onClick={() => toggleCountry(group.country)}
              className="flex items-center justify-between bg-white px-4 py-2.5 border-b border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <span className="text-base">{group.flag}</span>
                <span className="font-extrabold text-xs text-slate-900">{group.country}</span>
              </div>
              {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </div>

            {/* Courses List */}
            {isExpanded && (
              <div className="divide-y divide-slate-100 p-3 space-y-3">
                {group.courses.map((course, idx) => (
                  <div key={idx} className="pt-2 first:pt-0">
                    <div className="flex items-center space-x-2 text-xs mb-1">
                      <span className="font-extrabold text-slate-900">{course.name}</span>
                      <span className="text-[11px] text-slate-500 font-medium">{course.racesCount}</span>
                    </div>

                    <div className="text-[11px] font-medium text-slate-500 mb-1.5">{course.status}</div>

                    {/* Times Row matching PDF screenshot */}
                    <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
                      {course.times.map((t, tIdx) => (
                        <button
                          key={tIdx}
                          className={`px-2 py-0.5 rounded text-[11px] transition-colors border ${
                            t.isNext
                              ? 'bg-[#FF2925] text-white border-[#FF2925] font-extrabold'
                              : t.isEnded
                              ? 'bg-transparent text-slate-400 border-transparent'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
                          }`}
                        >
                          {t.time}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
