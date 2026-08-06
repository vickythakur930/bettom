'use client';

import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  HelpCircle,
  FileText,
  CheckCircle2,
  ChevronRight,
  Zap,
  RefreshCw,
  MessageSquare,
  Lock,
  AlertCircle,
  SlidersHorizontal,
  Send,
} from 'lucide-react';

export type HelpTopic = 'betting-rules' | 'cashout' | 'bet-builder' | 'general' | null;

interface HelpSupportModalProps {
  initialTopic?: HelpTopic;
  onClose: () => void;
}

export const HelpSupportModal: React.FC<HelpSupportModalProps> = ({ initialTopic = 'betting-rules', onClose }) => {
  const [activeTopic, setActiveTopic] = useState<HelpTopic>(initialTopic || 'betting-rules');
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ sender: 'user' | 'agent'; text: string; time: string }[]>([
    {
      sender: 'agent',
      text: 'Welcome to BetTOM Customer Support! How can we assist your sportsbook experience today?',
      time: 'Just now',
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userText = chatMessage;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setChatHistory((prev) => [...prev, { sender: 'user', text: userText, time: now }]);
    setChatMessage('');

    // Automated helpful response simulation
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          sender: 'agent',
          text: `Thank you for reaching out regarding "${userText}". An official BetTOM support agent is reviewing your query. For immediate bet settlement or rules questions, please check the Betting Rules tabs above.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-3 sm:p-4 select-none animate-fadeIn">
      <div className="bg-[#031A9A] text-white border border-white/20 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-[#021373] px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#FD2839] flex items-center justify-center text-white shadow-md">
              <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black tracking-wide text-white uppercase flex items-center gap-2">
                <span>BetTOM Help & Support Center</span>
              </h2>
              <p className="text-xs text-slate-300">Official Sportsbook Terms, Betting Rules & 24/7 Live Assistance</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="bg-[#020E50] border-b border-white/10 px-4 py-2 flex items-center space-x-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTopic('betting-rules')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTopic === 'betting-rules'
                ? 'bg-[#FD2839] text-white shadow-sm font-black'
                : 'bg-white/5 text-white/80 hover:bg-white/15'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Betting Rules</span>
          </button>

          <button
            onClick={() => setActiveTopic('cashout')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTopic === 'cashout'
                ? 'bg-[#FD2839] text-white shadow-sm font-black'
                : 'bg-white/5 text-white/80 hover:bg-white/15'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            <span>Cashout Rules</span>
          </button>

          <button
            onClick={() => setActiveTopic('bet-builder')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTopic === 'bet-builder'
                ? 'bg-[#FD2839] text-white shadow-sm font-black'
                : 'bg-white/5 text-white/80 hover:bg-white/15'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Bet Builder</span>
          </button>

          <button
            onClick={() => setActiveTopic('general')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTopic === 'general'
                ? 'bg-[#FD2839] text-white shadow-sm font-black'
                : 'bg-white/5 text-white/80 hover:bg-white/15'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>24/7 Live Support</span>
          </button>
        </div>

        {/* Modal Content Area */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-100 scrollbar-thin">
          {activeTopic === 'betting-rules' && (
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <h3 className="font-extrabold text-[#22B04F] text-sm flex items-center gap-2">
                  <FileText className="w-4 h-4" /> 1. Wager Acceptance & Confirmation
                </h3>
                <p className="text-xs leading-relaxed text-slate-200">
                  All wagers submitted on BetTOM are subject to automated system review. A bet is officially accepted and binding once a valid Digital Receipt Ticket Number is issued in your active Bet Slip. The minimum stake per bet is <strong>€0.10</strong> or currency equivalent. Maximum payout per single/accumulator bet is <strong>€250,000</strong>.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <h3 className="font-extrabold text-[#22B04F] text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> 2. Match Postponement, Interruptions & Abandonment
                </h3>
                <p className="text-xs leading-relaxed text-slate-200">
                  If a sporting event is postponed, cancelled, or interrupted and does not resume within <strong>48 hours</strong> of the original scheduled start time, all unconfirmed selections for that event will be voided, and stakes will be returned 100% to your cash balance.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <h3 className="font-extrabold text-[#22B04F] text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> 3. Official Federation Settlement
                </h3>
                <p className="text-xs leading-relaxed text-slate-200">
                  All match markets (1X2, Over/Under, Handicap, Player Props) are settled strictly based on official governing body data (UEFA, FIFA, ATP, NBA, ICC, etc.) immediately upon match conclusion. Subsequent appeals or reversed decisions after official trophy presentations do not alter initial bet settlements.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <h3 className="font-extrabold text-[#22B04F] text-sm flex items-center gap-2">
                  <Lock className="w-4 h-4 text-amber-400" /> 4. Dead Heat Rules
                </h3>
                <p className="text-xs leading-relaxed text-slate-200">
                  In events where two or more competitors finish in a tie and draw odds were not offered for that market, Dead Heat rules apply: your stake is divided by the number of tying competitors and calculated at full odds.
                </p>
              </div>
            </div>
          )}

          {activeTopic === 'cashout' && (
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <h3 className="font-extrabold text-[#22B04F] text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-300 fill-amber-300" /> What is Cashout?
                </h3>
                <p className="text-xs leading-relaxed text-slate-200">
                  Cashout gives you complete control over your wagers. It allows you to lock in an early profit before a match finishes, or recover a portion of your stake if the match is not going your way. Available for pre-match and in-play single & accumulator bets on Football, Tennis, Basketball, Cricket, and top sports.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <h3 className="font-extrabold text-[#22B04F] text-sm flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" /> Live Market Delays & VAR Safeguards
                </h3>
                <ul className="text-xs leading-relaxed text-slate-200 list-disc list-inside space-y-1.5">
                  <li>Cashout values update in real-time based on live match events and dynamic odds.</li>
                  <li>A <strong>3 to 5 second security delay</strong> is applied to live in-play Cashout requests to protect against latency during VAR reviews, goals, or penalty decisions.</li>
                  <li>If market odds fluctuate significantly during the delay, the Cashout request will be re-quoted at updated market odds.</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <h3 className="font-extrabold text-[#22B04F] text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Partial & Auto Cashout Rules
                </h3>
                <p className="text-xs leading-relaxed text-slate-200">
                  You can choose to cash out a portion of your bet while leaving the remainder active in the game. With <strong>Auto Cashout</strong>, you can pre-set a target profit threshold; once the live cashout offer reaches your threshold, it automatically settles.
                </p>
              </div>
            </div>
          )}

          {activeTopic === 'bet-builder' && (
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <h3 className="font-extrabold text-[#22B04F] text-sm flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" /> Creating Custom Bet Builder Wagers
                </h3>
                <p className="text-xs leading-relaxed text-slate-200">
                  Bet Builder allows you to combine up to <strong>10 different selections</strong> from a single fixture (such as Match Winner + Total Goals + Both Teams to Score + Player to be Booked + Total Corners) into one single multi-bet ticket with custom combined odds.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <h3 className="font-extrabold text-[#22B04F] text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Non-Runner & Player Void Rules
                </h3>
                <p className="text-xs leading-relaxed text-slate-200">
                  If a player included in your Bet Builder (e.g. Player Goalscorer or Player Shots) does not take part in the match, that specific player leg will be voided, and the rest of the Bet Builder will recalculate odds based on remaining legs.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                <h3 className="font-extrabold text-[#22B04F] text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" /> Regular Time Exclusions
                </h3>
                <p className="text-xs leading-relaxed text-slate-200">
                  Unless explicitly marked as <i>"Includes Extra Time & Penalties"</i>, all Bet Builder football outcomes apply to <strong>90 minutes + injury time</strong> only.
                </p>
              </div>
            </div>
          )}

          {activeTopic === 'general' && (
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
                <h3 className="font-extrabold text-[#22B04F] text-sm flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" /> 24/7 Live Customer Support Chat
                </h3>
                
                {/* Chat History Box */}
                <div className="bg-[#020E50] border border-white/10 rounded-lg p-3 max-h-48 overflow-y-auto space-y-2 font-sans text-xs scrollbar-thin">
                  {chatHistory.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`px-3 py-2 rounded-xl max-w-[80%] leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-[#FD2839] text-white rounded-br-none'
                            : 'bg-white/10 text-slate-100 rounded-bl-none border border-white/10'
                        }`}
                      >
                        <p>{msg.text}</p>
                      </div>
                      <span className="text-[9px] text-slate-400 mt-0.5 px-1">{msg.time}</span>
                    </div>
                  ))}
                </div>

                {/* Input form */}
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2 pt-1">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Ask BetTOM Support a question..."
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-[#22B04F]"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-[#22B04F] hover:bg-emerald-600 text-white font-bold rounded-lg text-xs flex items-center space-x-1 cursor-pointer transition-colors shadow-sm"
                  >
                    <span>Send</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-1">
                  <h4 className="font-bold text-white text-xs flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-amber-400" /> Identity & KYC Verification
                  </h4>
                  <p className="text-[11px] text-slate-300">
                    Fast automated document verification for instant withdrawals & high betting limits.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-1">
                  <h4 className="font-bold text-white text-xs flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Responsible Gaming
                  </h4>
                  <p className="text-[11px] text-slate-300">
                    Set daily deposit limits, cool-off periods, or self-exclusion options anytime in account settings.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#021373] px-6 py-3 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-slate-300">Official BetTOM Licensed & Regulated Sportsbook Platform</span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 bg-[#FD2839] hover:bg-[#e02030] text-white font-bold rounded-lg text-xs transition-colors shadow-sm cursor-pointer"
          >
            Close Rules
          </button>
        </div>
      </div>
    </div>
  );
};
