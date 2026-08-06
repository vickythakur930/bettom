'use client';

import React, { useState, useEffect } from 'react';
import {
  Trophy,
  Crown,
  Timer,
  Users,
  Gift,
  Play,
  ChevronRight,
  ChevronDown,
  Search,
  CheckCircle2,
  Sparkles,
  Flame,
  Award,
  Coins,
  X,
  Info,
  ShieldCheck,
} from 'lucide-react';

interface TournamentItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'casino' | 'live-casino' | 'sports';
  status: 'active' | 'upcoming' | 'finished';
  prizePool: string;
  topPrize: string;
  minBet: string;
  participantsCount: number;
  endTime: number; // timestamp in ms
  startTime?: string;
  image: string;
  provider: string;
  isExclusive?: boolean;
  eligibleGames: {
    title: string;
    image: string;
  }[];
  leaderboard: {
    rank: number;
    username: string;
    score: number;
    prize: string;
  }[];
  rules: string[];
}

export default function TournamentsPage() {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');
  const [activeStatusTab, setActiveStatusTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [optedInTournaments, setOptedInTournaments] = useState<string[]>(['weekly-slot-clash']);
  const [selectedTournamentForLeaderboard, setSelectedTournamentForLeaderboard] = useState<TournamentItem | null>(null);
  const [selectedTournamentForGames, setSelectedTournamentForGames] = useState<TournamentItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Time remaining state for active timers
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: { d: number; h: number; m: number; s: number } }>({});

  const sampleTournaments: TournamentItem[] = [
    {
      id: 'weekly-slot-clash',
      title: 'WEEKLY SLOTS CHAMPIONSHIP',
      subtitle: 'Spin select slot games to win a share of £25,000 cash + 5,000 Free Spins!',
      category: 'casino',
      status: 'active',
      prizePool: '£25,000',
      topPrize: '£5,000',
      minBet: '£0.20',
      participantsCount: 1420,
      endTime: Date.now() + 2 * 86400 * 1000 + 14 * 3600 * 1000 + 35 * 60 * 1000,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
      provider: 'Bettom Exclusive',
      isExclusive: true,
      eligibleGames: [
        { title: "MONOPOLY ROLL 'EM", image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500&q=80' },
        { title: 'THE GOONIES CASH INFERNO', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80' },
        { title: 'BIG BASS BLAST', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80' },
        { title: 'SUPREME ZEUS', image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=500&q=80' },
      ],
      leaderboard: [
        { rank: 1, username: 'SpinKing99', score: 28450, prize: '£5,000 Cash' },
        { rank: 2, username: 'LuckyJackpot_UK', score: 24100, prize: '£3,000 Cash' },
        { rank: 3, username: 'Vicky_R', score: 19850, prize: '£1,500 Cash' },
        { rank: 4, username: 'GoldSpinner88', score: 16200, prize: '£1,000 Cash' },
        { rank: 5, username: 'CasinoLegend', score: 14300, prize: '£750 Cash' },
        { rank: 6, username: 'SlotMaster_X', score: 12100, prize: '£500 Cash' },
        { rank: 7, username: 'DiamondPlayer', score: 10900, prize: '£250 Cash' },
        { rank: 8, username: 'HighRoller77', score: 9400, prize: '£150 Cash' },
        { rank: 9, username: 'RoyalBet21', score: 8750, prize: '100 Free Spins' },
        { rank: 10, username: 'JackpotSeeker', score: 8100, prize: '50 Free Spins' },
      ],
      rules: [
        'Opt-in required before placing qualifying bets.',
        'Minimum bet per spin to earn points is £0.20.',
        'Points are calculated based on highest single win multiplier (Win / Stake * 100).',
        'Prizes will be credited within 24 hours of tournament conclusion without wagering requirements.',
      ],
    },
    {
      id: 'live-roulette-masters',
      title: 'LIVE ROULETTE MASTERCLASS',
      subtitle: 'Hit the highest multiplier streak on Live Roulette tables for a chance at £15,000!',
      category: 'live-casino',
      status: 'active',
      prizePool: '£15,000',
      topPrize: '£3,500',
      minBet: '£1.00',
      participantsCount: 890,
      endTime: Date.now() + 1 * 86400 * 1000 + 8 * 3600 * 1000 + 12 * 60 * 1000,
      image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800&q=80',
      provider: 'Evolution Gaming',
      eligibleGames: [
        { title: 'LIGHTNING ROULETTE', image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&q=80' },
        { title: 'XXXTREME LIGHTNING ROULETTE', image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&q=80' },
        { title: 'IMMERSIVE ROULETTE', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80' },
        { title: 'SPEED ROULETTE', image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=500&q=80' },
      ],
      leaderboard: [
        { rank: 1, username: 'RoulettePro_UK', score: 4520, prize: '£3,500 Cash' },
        { rank: 2, username: 'WheelWizard', score: 3890, prize: '£2,000 Cash' },
        { rank: 3, username: 'RedBlackBetter', score: 3100, prize: '£1,250 Cash' },
        { rank: 4, username: 'ZeroHunter', score: 2750, prize: '£800 Cash' },
        { rank: 5, username: 'VIP_Spinner', score: 2400, prize: '£500 Cash' },
      ],
      rules: [
        'Qualifying tables: Evolution Live Roulette & Lightning Roulette.',
        'Min bet: £1.00 per round.',
        'Points awarded on total net wins divided by total stake.',
      ],
    },
    {
      id: 'premier-league-predictor',
      title: 'PREMIER LEAGUE SPORTS SHOWDOWN',
      subtitle: 'Build winning parlay bets on weekend Premier League matches to top the leaderboard!',
      category: 'sports',
      status: 'active',
      prizePool: '£10,000',
      topPrize: '£2,500',
      minBet: '£5.00',
      participantsCount: 2310,
      endTime: Date.now() + 3 * 86400 * 1000 + 20 * 3600 * 1000,
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80',
      provider: 'Bettom Sportsbook',
      isExclusive: true,
      eligibleGames: [
        { title: 'Premier League Match Bets', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&q=80' },
        { title: 'In-Play Live Football', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=80' },
      ],
      leaderboard: [
        { rank: 1, username: 'OddsGuru', score: 1840, prize: '£2,500 Free Bet' },
        { rank: 2, username: 'MatchPunter', score: 1520, prize: '£1,500 Free Bet' },
        { rank: 3, username: 'GoalSupreme', score: 1390, prize: '£1,000 Free Bet' },
      ],
      rules: [
        'Place accumulator bets containing at least 3 Premier League selections.',
        'Minimum odds per selection: 1.50.',
        'Highest winning accumulator odds score 1 point per 0.10 odds achieved.',
      ],
    },
    {
      id: 'blackjack-blitz-upcoming',
      title: 'BLACKJACK BLITZ TOURNAMENT',
      subtitle: 'Compete on Blackjack tables for consecutive winning hand streaks!',
      category: 'live-casino',
      status: 'upcoming',
      prizePool: '£20,000',
      topPrize: '£4,000',
      minBet: '£2.00',
      participantsCount: 650,
      startTime: 'Starts in 2 Days (Friday 18:00 UTC)',
      endTime: Date.now() + 5 * 86400 * 1000,
      image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=800&q=80',
      provider: 'Evolution Gaming',
      eligibleGames: [
        { title: 'Blackjack Lobby', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&q=80' },
        { title: 'Infinite Blackjack', image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&q=80' },
      ],
      leaderboard: [],
      rules: [
        'Registration opens 24 hours prior to launch.',
        'Rankings based on longest streak of winning hands in Blackjack.',
      ],
    },
    {
      id: 'pragmatic-drops-wins',
      title: 'PRAGMATIC DROPS & WINS',
      subtitle: 'Random daily cash drops and weekly tournaments across all Pragmatic slots!',
      category: 'casino',
      status: 'active',
      prizePool: '£100,000',
      topPrize: '£10,000',
      minBet: '£0.15',
      participantsCount: 5410,
      endTime: Date.now() + 6 * 86400 * 1000 + 4 * 3600 * 1000,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
      provider: 'Pragmatic Play',
      eligibleGames: [
        { title: 'Big Bass Blast', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80' },
        { title: 'Sweet Bonanza', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80' },
      ],
      leaderboard: [
        { rank: 1, username: 'DropMaster_1', score: 98400, prize: '£10,000 Cash' },
        { rank: 2, username: 'SpinStar', score: 81200, prize: '£6,000 Cash' },
      ],
      rules: [
        'Any spin on eligible games can trigger a random cash prize drop.',
        'Weekly leaderboards determined by highest single spin win adjusted to bet amount.',
      ],
    },
  ];

  // Update Countdown Timers
  useEffect(() => {
    const updateTimers = () => {
      const newTimeLeft: { [key: string]: { d: number; h: number; m: number; s: number } } = {};
      sampleTournaments.forEach((t) => {
        const diff = Math.max(0, t.endTime - Date.now());
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);
        newTimeLeft[t.id] = { d, h, m, s };
      });
      setTimeLeft(newTimeLeft);
    };

    updateTimers();
    const interval = setInterval(updateTimers, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleOptIn = (tournamentId: string) => {
    if (optedInTournaments.includes(tournamentId)) {
      setOptedInTournaments(optedInTournaments.filter((id) => id !== tournamentId));
    } else {
      setOptedInTournaments([...optedInTournaments, tournamentId]);
    }
  };

  const filteredTournaments = sampleTournaments.filter((t) => {
    // Filter Category
    if (activeCategoryTab !== 'all' && t.category !== activeCategoryTab) return false;
    // Filter Status
    if (activeStatusTab !== 'all' && t.status !== activeStatusTab) return false;
    // Search Query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        t.title.toLowerCase().includes(q) ||
        t.subtitle.toLowerCase().includes(q) ||
        t.provider.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const activeFeatured = sampleTournaments[0];

  return (
    <div className="space-y-6 select-none pb-12 font-sans bg-[#eef2f5] p-2 sm:p-4 rounded-2xl">
      {/* 1. Hero Spotlight Featured Tournament Banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-300/60 bg-[#020b38]">
        <img
          src={activeFeatured.image}
          alt={activeFeatured.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020E50] via-[#031A9A]/90 to-transparent"></div>

        <div className="relative z-10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#FD2839] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-md border border-white/20 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 fill-current text-yellow-300" />
                FEATURED TOURNAMENT
              </span>
              {activeFeatured.isExclusive && (
                <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-md">
                  BETTOM EXCLUSIVE
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-none drop-shadow-md">
              {activeFeatured.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 font-semibold leading-relaxed">
              {activeFeatured.subtitle}
            </p>

            {/* Countdown timer badge */}
            <div className="flex items-center space-x-4 pt-1 text-white">
              <div className="flex items-center space-x-1.5 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/20">
                <Timer className="w-4 h-4 text-yellow-400 animate-pulse" />
                <span className="text-xs font-mono font-bold">
                  {timeLeft[activeFeatured.id]
                    ? `${timeLeft[activeFeatured.id].d}d : ${timeLeft[activeFeatured.id].h}h : ${timeLeft[activeFeatured.id].m}m : ${timeLeft[activeFeatured.id].s}s`
                    : 'Loading...'}
                </span>
              </div>
              <div className="text-xs font-semibold text-slate-300">
                <Users className="w-3.5 h-3.5 inline mr-1 text-emerald-400" />
                {activeFeatured.participantsCount.toLocaleString()} Players Opted-in
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="bg-[#031473]/90 backdrop-blur-md border border-white/20 p-5 rounded-xl text-center space-y-3 shrink-0 w-full md:w-64 shadow-2xl">
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest block">
              TOTAL PRIZE POOL
            </span>
            <div className="text-3xl font-black text-yellow-300 font-mono tracking-tight drop-shadow-md">
              {activeFeatured.prizePool}
            </div>
            <div className="text-[11px] font-semibold text-white/90">
              1st Rank Prize: <strong className="text-white font-extrabold">{activeFeatured.topPrize}</strong>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => handleToggleOptIn(activeFeatured.id)}
                className={`w-full py-2.5 rounded-full font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer border ${
                  optedInTournaments.includes(activeFeatured.id)
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400'
                    : 'bg-[#FD2839] hover:bg-red-600 text-white border-red-400 hover:scale-105'
                }`}
              >
                {optedInTournaments.includes(activeFeatured.id) ? (
                  <span className="flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> OPTED IN
                  </span>
                ) : (
                  'OPT IN NOW'
                )}
              </button>

              <button
                onClick={() => setSelectedTournamentForLeaderboard(activeFeatured)}
                className="w-full py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-white/10"
              >
                VIEW LEADERBOARD
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Tournament Navigation & Filter Bar */}
      <div className="space-y-4">
        {/* Status Filters Bar */}
        <div className="bg-[#031A9A] rounded-xl p-1.5 shadow-md flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-1.5 overflow-x-auto scrollbar-none p-1">
            <button
              onClick={() => setActiveStatusTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                activeStatusTab === 'all' ? 'bg-white text-[#031A9A] shadow-md' : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              ALL TOURNAMENTS
            </button>
            <button
              onClick={() => setActiveStatusTab('active')}
              className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeStatusTab === 'active' ? 'bg-white text-[#031A9A] shadow-md' : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              ACTIVE NOW
            </button>
            <button
              onClick={() => setActiveStatusTab('upcoming')}
              className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                activeStatusTab === 'upcoming' ? 'bg-white text-[#031A9A] shadow-md' : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              UPCOMING
            </button>
            <button
              onClick={() => setActiveStatusTab('finished')}
              className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                activeStatusTab === 'finished' ? 'bg-white text-[#031A9A] shadow-md' : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              COMPLETED
            </button>
          </div>

          {/* Category Quick Pills */}
          <div className="flex items-center space-x-1.5 px-2">
            <button
              onClick={() => setActiveCategoryTab('all')}
              className={`px-3 py-1 rounded-full text-[11px] font-extrabold transition-all cursor-pointer ${
                activeCategoryTab === 'all' ? 'bg-yellow-400 text-slate-950 font-black' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              ALL CATEGORIES
            </button>
            <button
              onClick={() => setActiveCategoryTab('casino')}
              className={`px-3 py-1 rounded-full text-[11px] font-extrabold transition-all cursor-pointer ${
                activeCategoryTab === 'casino' ? 'bg-yellow-400 text-slate-950 font-black' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              CASINO SLOTS
            </button>
            <button
              onClick={() => setActiveCategoryTab('live-casino')}
              className={`px-3 py-1 rounded-full text-[11px] font-extrabold transition-all cursor-pointer ${
                activeCategoryTab === 'live-casino' ? 'bg-yellow-400 text-slate-950 font-black' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              LIVE DEALERS
            </button>
            <button
              onClick={() => setActiveCategoryTab('sports')}
              className={`px-3 py-1 rounded-full text-[11px] font-extrabold transition-all cursor-pointer ${
                activeCategoryTab === 'sports' ? 'bg-yellow-400 text-slate-950 font-black' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              SPORTSBOOK
            </button>
          </div>
        </div>

        {/* Search Field */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Tournaments by Name or Provider..."
            className="w-full pl-9 pr-4 py-2 bg-[#e2e8f0] border border-slate-300/80 rounded-lg text-xs font-semibold text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#031A9A] shadow-inner"
          />
        </div>
      </div>

      {/* 3. Tournament Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTournaments.map((t) => {
          const isOptedIn = optedInTournaments.includes(t.id);
          const tTime = timeLeft[t.id];

          return (
            <div
              key={t.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between group"
            >
              {/* Top Graphic Card Header */}
              <div className="relative h-44 overflow-hidden bg-slate-950">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/40 to-transparent"></div>

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span
                    className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-md border ${
                      t.status === 'active'
                        ? 'bg-emerald-600 text-white border-emerald-400'
                        : t.status === 'upcoming'
                        ? 'bg-sky-600 text-white border-sky-400'
                        : 'bg-slate-700 text-slate-300 border-slate-500'
                    }`}
                  >
                    {t.status === 'active' ? '● LIVE TOURNAMENT' : t.status.toUpperCase()}
                  </span>

                  <span className="bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded border border-white/20">
                    {t.provider}
                  </span>
                </div>

                {/* Prize Pool Tag on Bottom of Card Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] text-slate-300 font-extrabold uppercase block leading-none">
                      PRIZE POOL
                    </span>
                    <span className="text-2xl font-black text-yellow-300 font-mono tracking-tight drop-shadow-md">
                      {t.prizePool}
                    </span>
                  </div>

                  {t.status === 'active' && tTime && (
                    <div className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded border border-white/10 text-right">
                      <span className="text-[9px] text-slate-300 font-bold block leading-none">ENDS IN</span>
                      <span className="text-xs font-mono font-bold text-white">
                        {tTime.d}d {tTime.h}h {tTime.m}m
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body Info */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-base text-slate-900 uppercase tracking-tight group-hover:text-[#031A9A] transition-colors leading-tight">
                    {t.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-normal mt-1 line-clamp-2">
                    {t.subtitle}
                  </p>
                </div>

                {/* Tournament Stats */}
                <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-100 rounded-xl border border-slate-200/80 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">1ST PRIZE</span>
                    <span className="font-extrabold text-slate-900">{t.topPrize}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">MIN BET</span>
                    <span className="font-extrabold text-slate-900">{t.minBet}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleToggleOptIn(t.id)}
                      className={`py-2 rounded-xl font-black text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer border ${
                        isOptedIn
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500'
                          : 'bg-[#FD2839] hover:bg-red-600 text-white border-red-500'
                      }`}
                    >
                      {isOptedIn ? 'OPTED IN ✓' : 'OPT IN'}
                    </button>

                    <button
                      onClick={() => setSelectedTournamentForLeaderboard(t)}
                      className="py-2 rounded-xl bg-slate-900 hover:bg-[#031A9A] text-white font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      LEADERBOARD
                    </button>
                  </div>

                  <button
                    onClick={() => setSelectedTournamentForGames(t)}
                    className="w-full py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-[11px] uppercase tracking-wide transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>ELIGIBLE GAMES ({t.eligibleGames.length})</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. How Tournaments Work Explanation Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="w-10 h-10 rounded-full bg-[#031A9A] text-white inline-flex items-center justify-center mb-1">
            <Trophy className="w-5 h-5 text-yellow-300" />
          </span>
          <h2 className="text-2xl font-black text-[#031A9A] uppercase tracking-tight">
            HOW BETTOM TOURNAMENTS WORK
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Follow 4 simple steps to compete against fellow players and win instant cash prizes!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2 relative overflow-hidden">
            <span className="text-4xl font-black text-slate-200 font-mono absolute top-2 right-3">01</span>
            <div className="w-8 h-8 rounded-lg bg-[#031A9A] text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-extrabold text-sm text-slate-900">Opt In Free</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Browse active tournaments and click Opt In. It's completely free to enter!
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2 relative overflow-hidden">
            <span className="text-4xl font-black text-slate-200 font-mono absolute top-2 right-3">02</span>
            <div className="w-8 h-8 rounded-lg bg-[#031A9A] text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-extrabold text-sm text-slate-900">Play Eligible Games</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Place real-money bets on qualified slots, live tables, or sports matches with the minimum bet.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2 relative overflow-hidden">
            <span className="text-4xl font-black text-slate-200 font-mono absolute top-2 right-3">03</span>
            <div className="w-8 h-8 rounded-lg bg-[#031A9A] text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-extrabold text-sm text-slate-900">Climb Leaderboard</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Earn points for your highest win multipliers or consecutive wins to climb the live rankings.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2 relative overflow-hidden">
            <span className="text-4xl font-black text-slate-200 font-mono absolute top-2 right-3">04</span>
            <div className="w-8 h-8 rounded-lg bg-[#031A9A] text-white flex items-center justify-center font-bold text-sm">
              4
            </div>
            <h3 className="font-extrabold text-sm text-slate-900">Win Real Cash</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Top the leaderboard when the tournament ends to receive instant cash rewards directly to your account!
            </p>
          </div>
        </div>
      </div>

      {/* 5. Tournament Rules & FAQ Accordion Section */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl font-black text-[#031A9A]">
          Tournaments Terms &amp; Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
            <button
              onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
              className="w-full p-4 text-left font-extrabold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-2 hover:bg-slate-100 transition-colors"
            >
              <span>Are cash prizes subject to wagering requirements?</span>
              <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${openFaqIndex === 1 ? 'rotate-180 text-[#031A9A]' : 'text-slate-400'}`} />
            </button>
            {openFaqIndex === 1 && (
              <div className="p-4 text-xs text-slate-600 border-t border-slate-200 bg-white leading-relaxed font-medium">
                No! All cash prizes won in BetTOM tournaments are credited as withdrawable cash with 0x wagering requirements unless explicitly stated as bonus funds.
              </div>
            )}
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
            <button
              onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
              className="w-full p-4 text-left font-extrabold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-2 hover:bg-slate-100 transition-colors"
            >
              <span>How are leaderboard points calculated?</span>
              <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${openFaqIndex === 2 ? 'rotate-180 text-[#031A9A]' : 'text-slate-400'}`} />
            </button>
            {openFaqIndex === 2 && (
              <div className="p-4 text-xs text-slate-600 border-t border-slate-200 bg-white leading-relaxed font-medium">
                Points calculation depends on the tournament type. For slots, points equal (Win Amount / Stake Amount) x 100. For live roulette and sports, points are awarded per net win or winning win streaks. Check specific tournament rules for details.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 6. Leaderboard Modal */}
      {selectedTournamentForLeaderboard && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#020931] border border-white/20 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="bg-[#031A9A] p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center space-x-2.5">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <div>
                  <h3 className="font-black text-white text-sm uppercase tracking-wide">
                    {selectedTournamentForLeaderboard.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-[#8B95CB]">
                    LIVE LEADERBOARD • PRIZE POOL {selectedTournamentForLeaderboard.prizePool}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTournamentForLeaderboard(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FD2839] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Leaderboard Table */}
            <div className="p-4 overflow-y-auto scrollbar-thin space-y-2 flex-1">
              <div className="grid grid-cols-12 text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 py-1.5 border-b border-white/10">
                <div className="col-span-2">RANK</div>
                <div className="col-span-5">PLAYER</div>
                <div className="col-span-2 text-right">POINTS</div>
                <div className="col-span-3 text-right">PRIZE</div>
              </div>

              {selectedTournamentForLeaderboard.leaderboard.map((item) => (
                <div
                  key={item.rank}
                  className={`grid grid-cols-12 items-center text-xs font-semibold px-3 py-2.5 rounded-lg transition-colors ${
                    item.rank === 1
                      ? 'bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 font-bold'
                      : item.rank === 2
                      ? 'bg-slate-300/10 border border-slate-300/20 text-slate-200'
                      : item.rank === 3
                      ? 'bg-amber-700/20 border border-amber-700/30 text-amber-300'
                      : 'bg-white/5 text-slate-300 border border-white/5'
                  }`}
                >
                  <div className="col-span-2 flex items-center font-bold font-mono">
                    {item.rank === 1 ? (
                      <Crown className="w-4 h-4 text-yellow-400 mr-1" />
                    ) : item.rank === 2 ? (
                      <Award className="w-4 h-4 text-slate-300 mr-1" />
                    ) : item.rank === 3 ? (
                      <Award className="w-4 h-4 text-amber-500 mr-1" />
                    ) : (
                      `#${item.rank}`
                    )}
                  </div>
                  <div className="col-span-5 font-bold truncate">{item.username}</div>
                  <div className="col-span-2 text-right font-mono font-bold">{item.score.toLocaleString()}</div>
                  <div className="col-span-3 text-right font-black text-emerald-400">{item.prize}</div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-[#031A9A] border-t border-white/10 text-center text-xs text-white font-bold">
              Leaderboard updates in real-time every 60 seconds.
            </div>
          </div>
        </div>
      )}

      {/* 7. Eligible Games Modal */}
      {selectedTournamentForGames && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#020931] border border-white/20 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="bg-[#031A9A] p-4 flex items-center justify-between border-b border-white/10">
              <div>
                <h3 className="font-black text-white text-sm uppercase tracking-wide">
                  QUALIFYING GAMES FOR {selectedTournamentForGames.title}
                </h3>
                <p className="text-[11px] font-semibold text-[#8B95CB]">
                  Min Bet required: {selectedTournamentForGames.minBet}
                </p>
              </div>
              <button
                onClick={() => setSelectedTournamentForGames(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FD2839] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto scrollbar-thin grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1">
              {selectedTournamentForGames.eligibleGames.map((g, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-xl overflow-hidden shadow bg-slate-900 border border-slate-700 flex flex-col aspect-4/3 cursor-pointer"
                  onClick={() => setSelectedTournamentForGames(null)}
                >
                  <img src={g.image} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-2.5 flex items-end">
                    <span className="font-black text-xs text-white truncate group-hover:text-yellow-300">
                      {g.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
