'use client';

import React from 'react';
import { useSportsStore } from '@/store/useSportsStore';
import { HelpCircle } from 'lucide-react';

interface SportGuideContent {
  title: string;
  intro1: string;
  intro2: string;
  championshipTitle: string;
  championshipText1: string;
  championshipText2: string;
  marketsText: string;
  popularBets: string[];
}

const sportGuideDatabase: Record<string, SportGuideContent> = {
  biathlon: {
    title: 'Biathlon',
    intro1:
      "If you are thinking of Biathlon betting, it's important you understand Biathlon odds before you actually bet on Biathlon. Here we will examine how to bet on Biathlon, get to grips with Biathlon betting and learn about Biathlon odds.",
    intro2:
      "Biathlon betting reflects the performance of competitors, and does so through Biathlon odds and if you choose to bet on Biathlon, you'll need to do your research. There are plenty of competitions available to bet on Biathlon, and you will soon become familiar with Biathlon betting and Biathlon odds.",
    championshipTitle: 'Biathlon World Cup betting',
    championshipText1:
      'The skills required in Biathlon and the fatigue competitors suffer from often mean that the margins may be a little wider than you are used to if you normally bet on mainstream sport. The combination of cross country racing and the stationary target shooting requires different skills.',
    championshipText2:
      'Biathlon World Cup betting is influenced by the different courses the competition takes place on during the season and, inevitably, the weather conditions the competitors experience. These can include high winds and severe snow conditions, which impact on both elements of the race. Some competitors may be famed for their ability to perform to their top levels in adverse conditions, and this will further impact their odds.',
    marketsText:
      'In Biathlon betting you can wager on Individual Sprint, Pursuit, Mass Start, and Relay events.',
    popularBets: ['Outright Winner', 'Podium Finish (Top 3)', 'Head-to-Head Matchups', 'Relay Gold Medalist'],
  },
  football: {
    title: 'Football',
    intro1:
      "If you are thinking of Football betting, it's important you understand Football odds before you actually bet on Football. Here we will examine how to bet on Football, get to grips with Football betting and learn about Football odds.",
    intro2:
      "Football betting reflects the performance of teams and players, and does so through Football odds and if you choose to bet on Football, you'll need to do your research. There are thousands of matches available to bet on in major leagues like the Premier League, LaLiga, and UEFA Champions League.",
    championshipTitle: 'Football World Cup & Champions League betting',
    championshipText1:
      'The tactical complexity in Football and team form often dictate market odds. The combination of tactical discipline, home/away advantage, and key player fitness produces dynamic odds movement across pre-match and in-play markets.',
    championshipText2:
      'World Cup and Champions League betting is influenced by knockout pressure, fixture congestion, and manager tactics. Factors such as VAR reviews, yellow/red card suspensions, and extra-time rules create unique betting opportunities for sharp punters.',
    marketsText:
      'In Football betting you can wager on 1X2 Match Betting, Both Teams to Score (BTTS), Asian Handicaps, Total Goals Over/Under, and Player Goalscorers.',
    popularBets: ['1X2 Match Winner', 'Both Teams to Score (BTTS)', 'Over/Under 2.5 Goals', 'Correct Score', 'First Goalscorer'],
  },
  cricket: {
    title: 'Cricket',
    intro1:
      "If you are thinking of Cricket betting, it's important you understand Cricket odds before you actually bet on Cricket. Here we will examine how to bet on Cricket, get to grips with Cricket betting and learn about Cricket odds.",
    intro2:
      "Cricket betting reflects team strategy, pitch conditions, and player form. Whether you are wagering on Test matches, One Day Internationals (ODIs), or fast-paced T20 leagues like the IPL, understanding pitch reports and weather is essential.",
    championshipTitle: 'Cricket World Cup & Test Series betting',
    championshipText1:
      'The multi-day structure of Test Cricket and the high-scoring nature of T20 matches create distinct betting dynamics. Toss results, pitch deterioration, and dew factors heavily influence match outcome odds.',
    championshipText2:
      'World Cup and Ashes betting demands careful study of top run-scorers and leading wicket-takers. In-play betting allows wagers on next wicket method, total runs per over, and boundary totals.',
    marketsText:
      'In Cricket betting you can wager on Match Winner, Top Batsman, Top Bowler, Total Match Sixes, and Highest Opening Partnership.',
    popularBets: ['Match Winner', 'Top Team Batsman', 'Top Team Bowler', 'Player Total Runs (Over/Under)', 'Method of Next Dismissal'],
  },
  tennis: {
    title: 'Tennis',
    intro1:
      "If you are thinking of Tennis betting, it's important you understand Tennis odds before you actually bet on Tennis. Here we will examine how to bet on Tennis, get to grips with Tennis betting and learn about Tennis odds.",
    intro2:
      "Tennis betting reflects individual player stamina, surface specialization (Clay, Grass, Hard court), and head-to-head records. From Grand Slams to ATP & WTA tour events, odds shift rapidly with every break of serve.",
    championshipTitle: 'Tennis Grand Slam betting',
    championshipText1:
      'Wimbledon, the US Open, French Open, and Australian Open represent the pinnacle of Tennis betting. Five-set men’s matches and three-set women’s matches require different endurance strategies.',
    championshipText2:
      'In-play Tennis betting is extremely popular, offering live markets on set winner, total games over/under, point-by-point outcomes, and tie-break occurrences.',
    marketsText:
      'In Tennis betting you can wager on Match Winner, Set Betting, Game Handicap, Total Games Over/Under, and First Set Winner.',
    popularBets: ['Match Winner', 'Set Handicap (-1.5 / +1.5)', 'Total Match Games Over/Under', 'Correct Set Score', 'First Set Winner'],
  },
  basketball: {
    title: 'Basketball',
    intro1:
      "If you are thinking of Basketball betting, it's important you understand Basketball odds before you actually bet on Basketball. Here we will examine how to bet on Basketball, get to grips with Basketball betting and learn about Basketball odds.",
    intro2:
      "Basketball betting reflects fast-paced scoring, point spreads, and individual player performance stats. Major leagues like the NBA and EuroLeague provide non-stop betting action every night.",
    championshipTitle: 'NBA Finals & EuroLeague betting',
    championshipText1:
      'Point spreads and total game points are the backbone of Basketball betting. Player rotations, back-to-back schedules, and tactical foul strategies in the final minutes heavily impact final scores.',
    championshipText2:
      'In-play Basketball betting allows wagers on quarter scores, race to 20 points, total team points, and individual player points, rebounds, and assists props.',
    marketsText:
      'In Basketball betting you can wager on Point Spread (Handicap), Moneyline (Match Winner), Total Points Over/Under, and Player Stat Props.',
    popularBets: ['Point Spread (Handicap)', 'Moneyline Winner', 'Total Points Over/Under', 'Player Points + Rebounds + Assists', 'Quarter 1 Winner'],
  },
  'horse-racing': {
    title: 'Horse Racing',
    intro1:
      "If you are thinking of Horse Racing betting, it's important you understand Horse Racing odds before you actually bet on Horse Racing. Here we will examine how to bet on Horse Racing, get to grips with Horse Racing betting and learn about Horse Racing odds.",
    intro2:
      "Horse Racing betting reflects jockey skill, horse pedigree, track ground conditions (Going), and distance suitability. From Flat racing to National Hunt Steeplechases, understanding form guides is key.",
    championshipTitle: 'Royal Ascot & Cheltenham Festival betting',
    championshipText1:
      'Majors like Cheltenham, the Grand National, and Royal Ascot attract global betting volume. Each-way betting allows you to profit if your selected horse wins or places in top finishing spots.',
    championshipText2:
      'Starting Price (SP) and Best Odds Guaranteed (BOG) ensure you receive the highest return regardless of market fluctuations prior to race start.',
    marketsText:
      'In Horse Racing betting you can wager on Win Only, Each-Way (Win + Place), Forecast (1st & 2nd), and Tricast (1st, 2nd & 3rd).',
    popularBets: ['Win Only', 'Each-Way (E/W)', 'Exacta / Forecast', 'Trifecta / Tricast', 'Placepot'],
  },
  greyhounds: {
    title: 'Greyhounds',
    intro1:
      "If you are thinking of Greyhound betting, it's important you understand Greyhound odds before you actually bet on Greyhounds. Here we will examine how to bet on Greyhounds, get to grips with Greyhound betting and learn about Greyhound odds.",
    intro2:
      "Greyhound racing provides high-speed action across UK & Irish tracks. Understanding trap draws (Traps 1 to 6), early speed, and track bias is vital for profitable wagering.",
    championshipTitle: 'English Greyhound Derby betting',
    championshipText1:
      'Trap statistics and bend maneuvering play a massive role in Greyhound outcomes. Raillinkers (Trap 1-2) vs Wide runners (Trap 5-6) dictate positional battles into the first corner.',
    championshipText2:
      'Daily race cards feature quick-turnaround races with Win, Place, and Combination quinella betting options.',
    marketsText:
      'In Greyhound betting you can wager on Trap Winner, Reverse Forecast, Combination Tricast, and Trap Handicaps.',
    popularBets: ['Trap Winner', 'Straight Forecast', 'Reverse Forecast', 'Tricast', 'Trap Handicap'],
  },
  darts: {
    title: 'Darts',
    intro1:
      "If you are thinking of Darts betting, it's important you understand Darts odds before you actually bet on Darts. Here we will examine how to bet on Darts, get to grips with Darts betting and learn about Darts odds.",
    intro2:
      "Darts betting reflects nerve, 180-scoring power, and checkout precision under high pressure. Major PDC tournaments like the World Darts Championship attract huge global audiences.",
    championshipTitle: 'PDC World Darts Championship betting',
    championshipText1:
      'Set play vs Leg play creates different betting strategy requirements. Three-dart averages, highest checkouts, and 180 count totals offer rich sub-markets.',
    championshipText2:
      'In-play Darts betting allows you to wager on next leg winner, 180 in current leg, and highest checkout in match.',
    marketsText:
      'In Darts betting you can wager on Match Winner, Most 180s, Highest Checkout Over/Under, and Correct Set Score.',
    popularBets: ['Match Winner', 'Most 180s', 'Highest Checkout (Over/Under 120.5)', 'Leg Handicap', '9-Dart Finish (Yes/No)'],
  },
};

export const SportInfoGuide: React.FC = () => {
  const selectedCategory = useSportsStore((state) => state.selectedCategory);
  const activeSport = useSportsStore((state) => state.activeSport);

  // Normalize sport key
  const key = (selectedCategory || activeSport || 'football').toLowerCase();
  
  // Retrieve custom copy or generate dynamic fallback for any sport
  const data: SportGuideContent = sportGuideDatabase[key] || {
    title: key.charAt(0).toUpperCase() + key.slice(1).replace(/-/g, ' '),
    intro1: `If you are thinking of ${key} betting, it's important you understand ${key} odds before you actually bet on ${key}. Here we will examine how to bet on ${key}, get to grips with ${key} betting and learn about ${key} odds.`,
    intro2: `${key.charAt(0).toUpperCase() + key.slice(1)} betting reflects the performance of competitors, and does so through ${key} odds and if you choose to bet on ${key}, you'll need to do your research. There are plenty of competitions available to bet on ${key}, and you will soon become familiar with ${key} betting and ${key} odds.`,
    championshipTitle: `${key.charAt(0).toUpperCase() + key.slice(1)} Championship & Major Events betting`,
    championshipText1: `The skills required in ${key} and competitive dynamics mean that odds fluctuate based on team/player form, strategy, and environmental conditions.`,
    championshipText2: `Major tournament betting is influenced by tournament structure, venue conditions, and live momentum. In-play markets offer real-time odds updates during ongoing fixtures.`,
    marketsText: `In ${key} betting you can wager on Outright Winners, Match Handicaps, Totals Over/Under, and Special Props.`,
    popularBets: ['Outright Winner', 'Match Winner', 'Handicap Betting', 'Over/Under Totals'],
  };

  return (
    <section className="bg-[#f8f9fa] border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 text-[#031A9A] font-sans select-none shadow-xs mt-6">
      {/* 1. Main Title & Intro */}
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-black text-[#031A9A] tracking-tight leading-tight">
          {data.title} Betting & Odds
        </h1>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          {data.intro1}
        </p>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          {data.intro2}
        </p>
      </div>

      {/* 2. Betting Odds Explained */}
      <div className="space-y-3 pt-2 border-t border-slate-200">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#031A9A] tracking-tight">
          {data.title} betting odds explained
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Before we look at some betting tips, it is important that you understand {data.title.toLowerCase()} odds comparison and how odds are displayed in {data.title.toLowerCase()} betting markets.
        </p>

        {/* 3. Odds Format Sub-section */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3 shadow-2xs">
          <h3 className="text-lg font-extrabold text-[#031A9A]">Odds Format</h3>
          <p className="text-xs sm:text-sm text-slate-700">
            You will find different odds formats depending on the site you are using to wager. This is what you can expect to see and how wins are calculated:
          </p>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
            <li className="flex items-start gap-2">
              <span className="font-extrabold text-[#031A9A] shrink-0">Fractional:</span>
              <span>Odds are displayed as, say, 5/1 — your return on a £10 bet outright win is a £50 win plus your £10 stake back, so the total return is £60.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-extrabold text-[#031A9A] shrink-0">Decimal:</span>
              <span>This will be shown as, say, 6.00, and the total return is £60 for a £10 bet.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-extrabold text-[#031A9A] shrink-0">American:</span>
              <span>The bet is displayed as +500, and a £10 bet pays £60 total return.</span>
            </li>
          </ul>

          <p className="text-xs text-slate-600 italic pt-1">
            Remember as you get closer to major events, you can check online for {data.title.toLowerCase()} odds comparison pages and live in-play market movements.
          </p>
        </div>
      </div>

      {/* 4. Tournament / Championship Betting */}
      <div className="space-y-3 pt-2 border-t border-slate-200">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#031A9A] tracking-tight">
          {data.championshipTitle}
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {data.championshipText1}
        </p>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {data.championshipText2}
        </p>
      </div>

      {/* 5. Betting Markets and Bet Types */}
      <div className="space-y-3 pt-2 border-t border-slate-200">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#031A9A] tracking-tight">
          {data.title} betting markets and bet types
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {data.marketsText}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          {data.popularBets.map((bet, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-lg p-3 text-center text-xs font-extrabold text-[#031A9A] shadow-2xs hover:border-[#031A9A] transition-colors"
            >
              {bet}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
