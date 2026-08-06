'use client';

import React, { useState } from 'react';
import { TopPromotionalSlider } from '@/components/common/TopPromotionalSlider';
import { Gift, ChevronLeft, ChevronRight, X, ShieldAlert, Award, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PromoItem {
  id: string;
  title: string;
  badgeLeft?: string;
  tagType?: 'offer' | 'casino' | 'sports' | 'age';
  image: string;
  bgGradient?: string;
  description: string;
  fullTerms: string[];
  claimCode?: string;
  actionText?: string;
  actionLink?: string;
}

export default function PromotionsPage() {
  const [selectedPromo, setSelectedPromo] = useState<PromoItem | null>(null);

  // 9 Promotional Cards matching exact Bettom HTML snippet & Google Storage URLs
  const promotionsList: PromoItem[] = [
    {
      id: 'wazdan-multiplier',
      title: 'Wazdan Mystery Multiplier Drop. Opt in via Game. Full T&Cs Apply.',
      image: 'https://storage.googleapis.com/stateless-bettom/2026/06/6ca512ef-wazdan-mystery-multiplier-drop-network-promotion-banner-27th-july-4-3.webp',
      description: 'Wazdan Mystery Multiplier Drop. Opt in via Game. Full T&Cs Apply.',
      fullTerms: [
        'Promotion runs from 27th July to 16th August 2026.',
        'Opt-in required directly inside any qualifying Wazdan slot game.',
        'Total prize pool: £1,125,000 across random mystery multiplier drops.',
        'No minimum bet requirement applies to qualify for mystery prizes.',
        'Prizes will be credited as real cash with 0x wagering requirements within 72 hours.',
      ],
      actionText: 'OPT IN VIA GAME',
    },
    {
      id: 'sports-welcome',
      title: 'Min 3 bets £10+ Separate Events EVS (2.0) or Bigger. Full Ts and Cs Apply.',
      image: 'https://storage.googleapis.com/stateless-bettom/2026/01/1adb130b-bettom_newcustomerwelcomeoffer.webp',
      description: 'Min 3 bets £10+ Separate Events EVS (2.0) or Bigger. Full Ts and Cs Apply.',
      fullTerms: [
        'New UK customers only. 18+.',
        'Place a minimum of 3 separate bets of £10 or more at odds of Evens (2.0) or greater on your first day.',
        'Get 50% of your total net losses back on your first day as a Free Bet up to £25.',
        'Free Bets valid for 7 days upon issue and non-refundable.',
      ],
      claimCode: 'SPORTS25',
      actionText: 'CLAIM OFFER',
    },
    {
      id: 'casino-welcome',
      title: '50% 1st Day Casino Losses Refunded as Bonus (£50 Max) Full Ts & Cs Apply.',
      image: 'https://storage.googleapis.com/stateless-bettom/2025/10/9b0a8da0-bettom_promotionalbanners_casino_welcomeoffer.webp',
      description: '50% 1st Day Casino Losses Refunded as Bonus (£50 Max) Full Ts & Cs Apply.',
      fullTerms: [
        'New Casino accounts only. 18+.',
        'Play qualifying Casino slots or table games on your first deposit day.',
        'If you end the day in a net loss position, receive 50% back as Bonus Funds up to £50.',
        'Bonus funds carry a 35x wagering requirement before withdrawal.',
      ],
      claimCode: 'CASINO50',
      actionText: 'CLAIM CASINO BONUS',
    },
    {
      id: 'acca-boost',
      title: 'Daily 25% ACCA Boost, Min 4 legs, Min total odds 2/1 (3.0+), Min odds per leg 1/2 (1.5+), Full T&Cs Apply',
      image: 'https://storage.googleapis.com/stateless-bettom/2026/06/aa620e44-sports-promotion-daily-acca-boost-banner-16-9.webp',
      description: 'Daily 25% ACCA Boost, Min 4 legs, Min total odds 2/1 (3.0+), Min odds per leg 1/2 (1.5+), Full T&Cs Apply',
      fullTerms: [
        'Applies to accumulator bets with 4 or more selections.',
        'Minimum odds per individual leg: 1/2 (1.5). Minimum combined odds: 2/1 (3.0).',
        '25% boost will be added to net profit on winning accas up to £1,000 daily maximum.',
      ],
      actionText: 'BUILD ACCA NOW',
    },
    {
      id: 'drops-and-wins',
      title: 'Opt-in required via qualifying games. Runs from 4th March 2026 until 3rd March 2027. Full T&Cs apply.',
      image: 'https://storage.googleapis.com/stateless-bettom/2026/03/f259c0d4-drops-wins-casino-promotion-banner-16-9.webp',
      description: 'Opt-in required via qualifying games. Runs from 4th March 2026 until 3rd March 2027. Full T&Cs apply.',
      fullTerms: [
        'Network promotion by Pragmatic Play with £25,000,000 total prize pool.',
        'Daily Prize Drops and Weekly Tournaments across qualifying Pragmatic slots.',
        'Opt-in required once inside any participating Pragmatic game.',
      ],
      actionText: 'PLAY QUALIFYING SLOTS',
    },
    {
      id: 'sub-on-bet-on',
      title: 'Sub On, Bet On Full Ts & Cs Apply.',
      image: 'https://storage.googleapis.com/stateless-bettom/2026/02/2b715eb4-bettom_subonbeton_promotionbannerno18.webp',
      description: 'Sub On, Bet On Full Ts & Cs Apply.',
      fullTerms: [
        'Applies to player prop markets including First Goalscorer, Anytime Goalscorer, and Player to be Booked.',
        'If your selected player is substituted off, your bet automatically transfers to the player replacing them.',
      ],
      actionText: 'BET ON FOOTBALL',
    },
    {
      id: 'bog-greyhounds',
      title: 'All UK & Irish Greyhound Racing From 10am Daily. Full Ts and Cs Apply.',
      image: 'https://storage.googleapis.com/stateless-bettom/2025/10/b4fae3d5-bettom_promotionalbanners_bog_greyhounds.webp',
      description: 'All UK & Irish Greyhound Racing From 10am Daily. Full Ts and Cs Apply.',
      fullTerms: [
        'Take an Early Price (EP) or Board Price on any UK & Irish greyhound race.',
        'If the Starting Price (SP) is higher, we pay you out at the bigger odds!',
      ],
      actionText: 'VIEW GREYHOUND RACES',
    },
    {
      id: 'double-result',
      title: 'On All UK and Irish Horse Racing. Full Ts and Cs Apply.',
      image: 'https://storage.googleapis.com/stateless-bettom/2025/10/edacd653-bettom_promotionalbanners_doubleresultpayout.webp',
      description: 'On All UK and Irish Horse Racing. Full Ts and Cs Apply.',
      fullTerms: [
        'We pay out on both the official winner first past the post AND the amended official winner after any steward inquiry.',
        'Applies to Win or Each-Way single and multiple bets on UK & Irish horse racing.',
      ],
      actionText: 'VIEW HORSE RACING',
    },
    {
      id: 'bog-horseracing',
      title: 'All UK & Irish Horse Racing From 10am Daily. Full Ts and Cs Apply.',
      image: 'https://storage.googleapis.com/stateless-bettom/2025/10/7a7ae357-bettom_promotionalbanners_bog_horseracing.webp',
      description: 'All UK & Irish Horse Racing From 10am Daily. Full Ts and Cs Apply.',
      fullTerms: [
        'Take an Early Price (EP) or Board Price on any UK & Irish horse race.',
        'If the Starting Price (SP) is higher, we pay you out at the bigger odds!',
      ],
      actionText: 'BET ON HORSE RACING',
    },
  ];

  return (
    <div className="bg-[#eef2f5] min-h-screen pb-16 font-['Nunito_Sans',sans-serif] select-none text-slate-900">
      <div className="max-w-[1700px] mx-auto px-2 sm:px-4 py-4 space-y-6">
        {/* 1. Top Carousel Slider matching exact EveryMatrix DOM snippet & photo */}
        <TopPromotionalSlider />

        {/* 2. Page Title Header matching PDF Page 1 */}
        <div className="flex items-center space-x-3 pt-2">
          <div className="w-10 h-10 rounded-full border-2 border-[#031A9A] bg-white text-[#031A9A] flex items-center justify-center shadow-sm">
            <Gift className="w-5 h-5 text-[#031A9A]" />
          </div>
          <h1 className="text-2xl font-black text-[#031A9A] tracking-tight">Promotions</h1>
        </div>

        {/* 3. 9 Promotions Card Grid matching exact Bettom HTML snippet & photo */}
        <div className="promotions__grid">
          {promotionsList.map((promo) => (
            <div key={promo.id} className="promo group">
              {/* Question mark info button matching exact SVG from DOM snippet */}
              <div className="promo__info">
                <button
                  type="button"
                  onClick={() => setSelectedPromo(promo)}
                  title="View Terms & Conditions"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 302.967 302.967">
                    <path d="M151.483,302.967C67.956,302.967,0,235.017,0,151.483S67.956,0,151.483,0 s151.483,67.956,151.483,151.483S235.017,302.967,151.483,302.967z M151.483,24.416c-70.066,0-127.067,57.001-127.067,127.067 s57.001,127.067,127.067,127.067s127.067-57.001,127.067-127.067S221.555,24.416,151.483,24.416z"></path>
                    <path d="M116.586,118.12c1.795-4.607,4.297-8.588,7.511-11.961c3.225-3.389,7.114-6.016,11.667-7.898 c4.547-1.904,9.633-2.845,15.262-2.845c7.261,0,13.32,0.995,18.183,2.997c4.857,1.996,8.768,4.482,11.738,7.441 c2.964,2.97,5.091,6.168,6.369,9.584c1.273,3.432,1.915,6.636,1.915,9.595c0,4.901-0.642,8.947-1.915,12.118 c-1.278,3.171-2.866,5.88-4.759,8.131c-1.898,2.252-3.987,4.172-6.293,5.755c-2.295,1.588-4.471,3.171-6.516,4.759 c-2.045,1.583-3.862,3.394-5.445,5.439c-1.588,2.04-2.589,4.601-2.991,7.664v5.831H140.6v-6.908 c0.305-4.395,1.153-8.072,2.529-11.036c1.382-2.964,2.991-5.499,4.83-7.598c1.844-2.089,3.786-3.911,5.836-5.445 c2.04-1.539,3.927-3.073,5.673-4.591c1.73-1.545,3.144-3.225,4.221-5.069c1.071-1.833,1.556-4.15,1.452-6.908 c0-4.705-1.148-8.18-3.454-10.427c-2.295-2.257-5.493-3.378-9.589-3.378c-2.758,0-5.134,0.533-7.131,1.605 s-3.628,2.513-4.911,4.302c-1.278,1.795-2.225,3.894-2.834,6.288c-0.615,2.415-0.919,4.982-0.919,7.756h-22.55 C113.85,127.785,114.791,122.732,116.586,118.12z M162.536,183.938v23.616h-24.09v-23.616H162.536z"></path>
                  </svg>
                </button>
              </div>

              {/* Promo Banner WebP Picture matching HTML snippet */}
              <picture className="promo__picture">
                <source srcSet={promo.image} media="(max-width: 435px)" />
                <source srcSet={promo.image} media="(max-width: 875px)" />
                <source srcSet={promo.image} media="()" />
                <img src={promo.image} alt={promo.title} />
              </picture>

              {/* Promo Details Overlay matching HTML snippet */}
              <div className="promo__details">
                <h2 className="promo__title">{promo.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Terms & Conditions Modal */}
      {selectedPromo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full p-6 text-white shadow-2xl relative space-y-5">
            <button
              onClick={() => setSelectedPromo(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#FD2839] text-white flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-lg text-white leading-tight">{selectedPromo.title}</h3>
                <p className="text-xs text-yellow-300 font-bold">Terms & Conditions Summary</p>
              </div>
            </div>

            <div className="space-y-3 bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed max-h-[300px] overflow-y-auto scrollbar-thin">
              <h4 className="font-black text-white text-sm uppercase tracking-wide border-b border-slate-800 pb-2">Key Terms & Rules:</h4>
              <ul className="space-y-2">
                {selectedPromo.fullTerms.map((term, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedPromo.claimCode && (
              <div className="flex items-center justify-between bg-blue-950/80 border border-blue-800 p-3 rounded-xl">
                <span className="text-xs text-blue-200 font-bold">Promo Code Required:</span>
                <span className="font-black text-yellow-300 font-mono text-sm px-3 py-1 bg-blue-900 rounded-lg border border-yellow-300/30">
                  {selectedPromo.claimCode}
                </span>
              </div>
            )}

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => setSelectedPromo(null)}
                className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Promo option "${selectedPromo.title}" triggered!`);
                  setSelectedPromo(null);
                }}
                className="flex-1 py-2.5 bg-[#FD2839] hover:bg-rose-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg border border-white/20 transition-all cursor-pointer"
              >
                {selectedPromo.actionText || 'CLAIM NOW'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
