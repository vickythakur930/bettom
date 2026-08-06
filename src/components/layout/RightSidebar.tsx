'use client';

import React, { useState, memo } from 'react';
import { useBetSlipStore } from '@/store/useBetSlipStore';
import { useSportsStore } from '@/store/useSportsStore';
import { useAuthStore } from '@/store/useAuthStore';
import { formatOdds } from '@/utils/oddsFormatter';
import { formatCurrency } from '@/utils/helpers';
import { Trash2, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RightSidebarComponent: React.FC = () => {
  const selections = useBetSlipStore((state) => state.selections);
  const betType = useBetSlipStore((state) => state.betType);
  const setBetType = useBetSlipStore((state) => state.setBetType);
  const accumulatorStake = useBetSlipStore((state) => state.accumulatorStake);
  const setAccumulatorStake = useBetSlipStore((state) => state.setAccumulatorStake);
  const removeSelection = useBetSlipStore((state) => state.removeSelection);
  const updateStake = useBetSlipStore((state) => state.updateStake);
  const clearSlip = useBetSlipStore((state) => state.clearSlip);
  const placeBet = useBetSlipStore((state) => state.placeBet);
  const placedBets = useBetSlipStore((state) => state.placedBets);
  const isSlipOpen = useBetSlipStore((state) => state.isSlipOpen);

  const oddsFormat = useSportsStore((state) => state.oddsFormat);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const openLoginModal = useAuthStore((state) => state.openLoginModal);
  const openRegisterModal = useAuthStore((state) => state.openRegisterModal);

  const [activeTab, setActiveTab] = useState<'betslip' | 'mybets'>('betslip');
  const [betSuccess, setBetSuccess] = useState<{ ticketId: string } | null>(null);

  // Calculations
  const totalSingleStake = selections.reduce((sum, s) => sum + s.stake, 0);
  const totalSinglePayout = selections.reduce((sum, s) => sum + s.stake * s.outcome.odds, 0);

  const accumulatorOdds = selections.reduce((acc, s) => acc * s.outcome.odds, 1);
  const totalAccumulatorPayout = accumulatorStake * accumulatorOdds;

  const currentTotalStake = betType === 'single' ? totalSingleStake : accumulatorStake;
  const currentTotalPayout = betType === 'single' ? totalSinglePayout : totalAccumulatorPayout;

  const handlePlaceBet = () => {
    if (!isAuthenticated) {
      openLoginModal();
      return;
    }
    const res = placeBet();
    if (res.success && res.ticketId) {
      setBetSuccess({ ticketId: res.ticketId });
      setTimeout(() => {
        setBetSuccess(null);
      }, 5000);
    }
  };

  return (
    <aside
      className={`Sidebar Sidebar--Right w-[325px] shrink-0 bg-white border-l border-slate-200 h-full overflow-hidden flex flex-col z-30 select-none shadow-sm ${
        isSlipOpen ? 'block' : 'hidden xl:flex'
      }`}
    >
      <div className="Sidebar__Wrapper flex-1 flex flex-col overflow-hidden">
        <div className="BettingAreaOpenBets RightSideBarTab flex-1 flex flex-col overflow-hidden">
          {/* STATIC TOP SECTION: BetslipTabs + BettingArea__Header (Fixed, Never Moves) */}
          <div className="StaticHeaderGroup shrink-0 z-20 bg-white shadow-2xs">
            {/* BetslipTabs matching exact inspect DOM snippet & photo */}
            <div className="OM-Nav OM-Nav--SingleRow OM-NavStatic BetslipTabs bg-[#031A9A] text-white">
              <div className="OM-Slider OM-Slider--ItemFullEqualWidth">
                <div className="OM-Slider__Bar">
                  <div className="OM-Slider__Scroll">
                    <div className="OM-Slider__Container flex items-center h-[44px]">
                      <div className="OM-Slider__Item BetslipTabs--BetSlip flex-1 h-full">
                        <button
                          onClick={() => setActiveTab('betslip')}
                          className={`OM-WidgetsLink OM-WidgetsLink--NonAnchorLink OM-NavItem OM-NavStaticItem__NavItem BetslipTabs__OpenBetsCounter w-full h-full flex items-center justify-center relative text-xs cursor-pointer transition-colors ${
                            activeTab === 'betslip'
                              ? 'isSelected text-white font-extrabold'
                              : 'text-white/70 hover:text-white font-semibold'
                          }`}
                        >
                          <span className="OM-NavItem__Name">
                            Betslip {selections.length > 0 && `(${selections.length})`}
                          </span>
                          {activeTab === 'betslip' && (
                            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#FF2925]"></div>
                          )}
                        </button>
                      </div>

                      <div className="OM-Slider__Item BetslipTabs--OpenBets flex-1 h-full">
                        <button
                          onClick={() => setActiveTab('mybets')}
                          className={`OM-WidgetsLink OM-WidgetsLink--NonAnchorLink OM-NavItem OM-NavStaticItem__NavItem BetslipTabs__OpenBetsCounter w-full h-full flex items-center justify-center relative text-xs cursor-pointer transition-colors ${
                            activeTab === 'mybets'
                              ? 'isSelected text-white font-extrabold'
                              : 'text-white/70 hover:text-white font-semibold'
                          }`}
                        >
                          <span className="OM-NavItem__Name">
                            My bets {placedBets.filter((b) => b.status === 'open').length > 0 && `(${placedBets.filter((b) => b.status === 'open').length})`}
                          </span>
                          {activeTab === 'mybets' && (
                            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#FF2925]"></div>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BettingArea Header bar: Betslip icon + Help link */}
            <div className="BettingArea__Header flex items-center justify-between px-3 py-2.5 bg-slate-100 border-b border-slate-200">
              <div className="BettingArea__HeaderSection flex items-center space-x-1.5 text-xs font-bold text-slate-800">
                <span className="OM-Icon OM-Icon--Svg OM-Icon--general OM-Icon--betslip OM-Icon--Medium1 BettingArea__HeaderIcon">
                  <svg className="S w-4 h-4 fill-[#031A9A]" viewBox="0 0 120 120">
                    <path d="m105.87 72.528-0.10617-0.53084zm-93.853-45.865 2.5481 14.439 5.3085-0.95552c0.95552-0.21234 2.0172 0.53085 2.1234 1.4864l0.10617 0.74318c0.21234 0.95552-0.53084 2.0172-1.4864 2.1234l-5.3085 0.95552 1.274 7.1133 7.2195 40.875 0.10617 0.84935v-71.452l-10.617 1.911c-0.74318 0.10617-1.3802 0.95552-1.274 1.911zm2.1234 23.994 0.10617 0.53084zm73.469-38.433h-18.261c0 5.0961-4.1406 9.3429-9.3429 9.3429-5.2023 0-9.3429-4.1406-9.3429-9.3429h-18.261c-1.1679 0-2.1234 0.95552-2.1234 2.1234v18.261h6.6886c1.274 0 2.3357 1.0617 2.3357 2.3357v0.84935c0 1.274-1.0617 2.3357-2.3357 2.3357h-6.6886v67.524c0 1.1679 0.95552 2.1234 2.1234 2.1234h18.261c0-5.0961 4.1406-9.3429 9.3429-9.3429 5.2023 0 9.3429 4.1406 9.3429 9.3429h18.261c1.1679 0 2.1234-0.95553 2.1234-2.1234v-67.524h-6.6886c-1.274 0-2.3357-1.0617-2.3357-2.3357v-0.84935c0-1.274 1.0617-2.3357 2.3357-2.3357h6.6886v-18.261c-0.10617-1.1679-0.95552-2.1234-2.1234-2.1234zm-25.056 22.72c0-1.274 1.0617-2.3357 2.3357-2.3357h8.4935c1.274 0 2.3357 1.0617 2.3357 2.3357v0.84935c0 1.274-1.0617-2.3357-2.3357 2.3357h-8.4935c-1.274 0-2.3357-1.0617-2.3357-2.3357zm-18.155 0c0-1.274 1.0617-2.3357 2.3357-2.3357h8.4935c1.274 0 2.3357 1.0617 2.3357 2.3357v0.84935c0 1.274-1.0617-2.3357-2.3357 2.3357h-8.4935c-1.274 0-2.3357-1.0617-2.3357-2.3357zm-2.3357 15.501h35.991v7.6442h-35.991zm0 14.97h35.991v7.6442h-35.991zm0 15.076h35.991v7.6442h-35.991zm65.931 13.165-2.5481-14.439-5.3084 0.95552c-0.95552 0.21234-2.0172-0.53084-2.1234-1.4864l-0.10617-0.74318c-0.21234-0.95552 0.53085-2.0172 1.4864-2.1234l5.3084-0.95552-1.274-7.1133-7.2195-40.875-0.21234-0.84935v71.452l10.617-1.911c0.84935-0.10617 1.4864-0.95552 1.3802-1.911z"></path>
                  </svg>
                </span>
                <span className="BettingArea__HeaderText font-extrabold">Betslip</span>
              </div>
              <a href="/support" className="Anchor BettingArea__HeaderLink text-[11px] text-[#031A9A] font-bold hover:underline">
                Help
              </a>
            </div>
          </div>

          {/* SCROLLABLE CONTENT AREA (ONLY THIS SCROLLS BELOW THE STATIC HEADER) */}
          <div className="BettingArea__BetslipContent flex-1 overflow-y-auto scrollbar-thin p-4 bg-slate-50/50">
            {activeTab === 'betslip' ? (
              selections.length === 0 ? (
                <div className="Betslip font-['Nunito_Sans',sans-serif]">
                  <form className="Betslip__Form">
                    <div className="Betslip__EmptyList text-center my-auto py-8 text-slate-600 space-y-2">
                      <p className="font-bold text-xs text-slate-900">Betslip is empty</p>
                      <p className="text-[11px] leading-snug">
                        To place a bet,{' '}
                        <span className="Betslip__Register text-[#031A9A] font-bold cursor-pointer hover:underline" onClick={openRegisterModal}>
                          join
                        </span>{' '}
                        or{' '}
                        <span className="Betslip__Login text-[#031A9A] font-bold cursor-pointer hover:underline" onClick={openLoginModal}>
                          login
                        </span>{' '}
                        and click on any odds.
                      </p>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex bg-slate-200 p-0.5 rounded text-xs font-bold">
                        <button
                          onClick={() => setBetType('single')}
                          className={`px-2.5 py-1 rounded ${
                            betType === 'single' ? 'bg-[#031A9A] text-white' : 'text-slate-700'
                          }`}
                        >
                          Single ({selections.length})
                        </button>
                        {selections.length > 1 && (
                          <button
                            onClick={() => setBetType('accumulator')}
                            className={`px-2.5 py-1 rounded ${
                              betType === 'accumulator' ? 'bg-[#031A9A] text-white' : 'text-slate-700'
                            }`}
                          >
                            Combo ({selections.length})
                          </button>
                        )}
                      </div>

                      <button
                        onClick={clearSlip}
                        className="flex items-center space-x-1 text-[11px] text-slate-500 hover:text-[#FF2925] transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Clear</span>
                      </button>
                    </div>

                    <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                      <AnimatePresence>
                        {selections.map((item) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white border border-slate-200 rounded-lg p-2.5 shadow-sm relative"
                          >
                            <button
                              onClick={() => removeSelection(item.id)}
                              className="absolute top-2 right-2 text-slate-400 hover:text-rose-600"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>

                            <div className="text-[10px] font-bold text-[#031A9A] uppercase tracking-wider mb-0.5">
                              {item.marketName}
                            </div>
                            <div className="flex justify-between font-bold text-xs text-slate-900 pr-5">
                              <span>{item.outcome.name}</span>
                              <span className="font-mono text-[#031A9A]">
                                {formatOdds(item.outcome.odds, oddsFormat)}
                              </span>
                            </div>
                            <div className="text-[10px] text-slate-500 truncate mb-2">
                              {item.matchTitle}
                            </div>

                            {betType === 'single' && (
                              <div className="flex items-center justify-between bg-slate-100 p-1 rounded border border-slate-200">
                                <span className="text-[10px] font-semibold text-slate-600 pl-1">Stake (£):</span>
                                <input
                                  type="number"
                                  value={item.stake || ''}
                                  onChange={(e) => updateStake(item.id, parseFloat(e.target.value) || 0)}
                                  placeholder="0.00"
                                  className="w-16 bg-white text-right font-mono font-bold text-xs text-slate-900 px-1.5 py-0.5 rounded border border-slate-300 focus:outline-none focus:border-[#031A9A]"
                                />
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Bottom Summary */}
                  <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-3 shadow-sm">
                    {betType === 'accumulator' && (
                      <div className="flex items-center justify-between bg-slate-100 p-1.5 rounded border border-slate-200">
                        <span className="text-xs font-bold text-slate-700">Combo Stake (£):</span>
                        <input
                          type="number"
                          value={accumulatorStake || ''}
                          onChange={(e) => setAccumulatorStake(parseFloat(e.target.value) || 0)}
                          className="w-20 bg-white text-right font-mono font-bold text-xs text-slate-900 px-2 py-0.5 rounded border border-slate-300 focus:outline-none"
                        />
                      </div>
                    )}

                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between text-slate-600">
                        <span>Total Stake:</span>
                        <span className="font-mono font-bold text-slate-900">{formatCurrency(currentTotalStake)}</span>
                      </div>
                      <div className="flex justify-between text-slate-900 font-extrabold">
                        <span>Potential Payout:</span>
                        <span className="font-mono text-emerald-600 text-sm">{formatCurrency(currentTotalPayout)}</span>
                      </div>
                    </div>

                    {betSuccess && (
                      <div className="p-2 bg-emerald-50 text-emerald-700 rounded text-xs font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Bet Placed! ID: {betSuccess.ticketId}</span>
                      </div>
                    )}

                    <button
                      onClick={handlePlaceBet}
                      disabled={currentTotalStake <= 0}
                      className="w-full py-2.5 bg-[#031A9A] hover:bg-[#020E50] text-white font-extrabold text-xs rounded uppercase tracking-wider shadow transition-all disabled:opacity-50"
                    >
                      {isAuthenticated ? 'PLACE BET' : 'LOGIN TO PLACE BET'}
                    </button>
                  </div>
                </div>
              )
            ) : (
              <div className="space-y-3 text-xs">
                <div className="font-bold text-slate-500 uppercase tracking-wider text-[11px]">ACTIVE BETS</div>
                {placedBets.length === 0 ? (
                  <div className="text-center py-8 text-slate-400">No active bets</div>
                ) : (
                  placedBets.map((bet) => (
                    <div key={bet.id} className="bg-white border border-slate-200 rounded p-2.5 space-y-1.5 shadow-sm">
                      <div className="flex justify-between font-mono text-[10px] font-bold text-[#031A9A]">
                        <span>{bet.ticketId}</span>
                        <span className="uppercase text-emerald-600">{bet.status}</span>
                      </div>
                      {bet.selections.map((s) => (
                        <div key={s.id} className="text-slate-800 font-semibold">
                          {s.outcome.name} @ {s.outcome.odds}
                        </div>
                      ))}
                      <div className="text-slate-500 font-mono text-[10px] flex justify-between border-t border-slate-100 pt-1">
                        <span>Stake: £{bet.totalStake}</span>
                        <span className="font-bold text-slate-900">Payout: £{bet.potentialPayout.toFixed(2)}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export const RightSidebar = memo(RightSidebarComponent);
