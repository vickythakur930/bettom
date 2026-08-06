'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000b58] text-white text-xs py-8 px-4 sm:px-6 mt-8 rounded-xl border-t-4 border-[#001489] select-none shadow-sm">
      <div className="w-full space-y-8">
        {/* Main Grid: Helpful Links on Left, Payment & Badges on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: HELPFUL LINKS */}
          <div className="lg:col-span-5 space-y-5">
            <div className="text-[11px] font-black uppercase tracking-widest text-slate-400">
              HELPFUL LINKS
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* THE COMPANY */}
              <div>
                <div className="font-extrabold text-white text-[11px] uppercase tracking-wider mb-2">
                  THE COMPANY
                </div>
                <ul className="space-y-2 text-[11px]">
                  <li>
                    <Link href="/about" className="hover:text-amber-300 flex items-center space-x-1.5 text-slate-200">
                      <BookOpen className="w-3.5 h-3.5 text-white/70" />
                      <span className="font-bold">ABOUT US</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/promotions" className="hover:text-amber-300 flex items-center space-x-1.5 text-slate-200">
                      <BookOpen className="w-3.5 h-3.5 text-white/70" />
                      <span className="font-bold">PROMOTIONS</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/affiliates" className="hover:text-amber-300 flex items-center space-x-1.5 text-slate-200">
                      <BookOpen className="w-3.5 h-3.5 text-white/70" />
                      <span className="font-bold">AFFILIATES</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* INFORMATION */}
              <div>
                <div className="font-extrabold text-white text-[11px] uppercase tracking-wider mb-2">
                  INFORMATION
                </div>
                <ul className="space-y-2 text-[11px]">
                  <li>
                    <Link href="/terms" className="hover:text-amber-300 flex items-center space-x-1.5 text-slate-200">
                      <BookOpen className="w-3.5 h-3.5 text-white/70" />
                      <span className="font-bold">TERMS &amp; CONDITIONS</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/safer-gambling" className="hover:text-amber-300 flex items-center space-x-1.5 text-slate-200">
                      <BookOpen className="w-3.5 h-3.5 text-white/70" />
                      <span className="font-bold">SAFER GAMBLING</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-amber-300 flex items-center space-x-1.5 text-slate-200">
                      <BookOpen className="w-3.5 h-3.5 text-white/70" />
                      <span className="font-bold">PRIVACY POLICY</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies" className="hover:text-amber-300 flex items-center space-x-1.5 text-slate-200">
                      <BookOpen className="w-3.5 h-3.5 text-white/70" />
                      <span className="font-bold">COOKIES POLICY</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rules" className="hover:text-amber-300 flex items-center space-x-1.5 text-slate-200">
                      <BookOpen className="w-3.5 h-3.5 text-white/70" />
                      <span className="font-bold">BETTING RULES</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-amber-300 flex items-center space-x-1.5 text-slate-200">
                      <BookOpen className="w-3.5 h-3.5 text-white/70" />
                      <span className="font-bold">BLOG</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* CONTACT */}
              <div>
                <div className="font-extrabold text-white text-[11px] uppercase tracking-wider mb-2">
                  CONTACT
                </div>
                <ul className="space-y-2 text-[11px]">
                  <li>
                    <Link href="/support" className="hover:text-amber-300 flex items-center space-x-1.5 text-slate-200">
                      <BookOpen className="w-3.5 h-3.5 text-white/70" />
                      <span className="font-bold">LIVE CHAT</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/support" className="hover:text-amber-300 flex items-center space-x-1.5 text-slate-200">
                      <BookOpen className="w-3.5 h-3.5 text-white/70" />
                      <span className="font-bold">CONTACT US</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* ACCOUNT */}
              <div>
                <div className="font-extrabold text-white text-[11px] uppercase tracking-wider mb-2">
                  ACCOUNT
                </div>
                <ul className="space-y-2 text-[11px]">
                  <li>
                    <Link href="/settings" className="hover:text-amber-300 flex items-center space-x-1.5 text-slate-200">
                      <BookOpen className="w-3.5 h-3.5 text-white/70" />
                      <span className="font-bold">ODDS SETTINGS</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/settings" className="hover:text-amber-300 flex items-center space-x-1.5 text-slate-200">
                      <BookOpen className="w-3.5 h-3.5 text-white/70" />
                      <span className="font-bold">LIMITS</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Payment Vendors, Compliance Badges & App Badges */}
          <div className="lg:col-span-7 space-y-6">
            {/* PAYMENT VENDORS Section */}
            <div>
              <div className="text-[11px] font-black uppercase tracking-widest text-slate-300 mb-2">
                PAYMENT VENDORS
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="bg-white/10 px-2.5 py-1 rounded font-black tracking-widest text-xs text-white border border-white/20">
                  VISA
                </div>
                <div className="bg-white/10 px-2.5 py-1 rounded font-black text-[11px] text-rose-400 border border-white/20">
                  mastercard
                </div>
                <div className="bg-white/10 px-2.5 py-1 rounded font-bold text-[11px] text-sky-400 border border-white/20">
                  trust payments
                </div>
                <div className="bg-white/10 px-2.5 py-1 rounded font-bold text-[11px] text-emerald-400 border border-white/20">
                  Trustly
                </div>
                <div className="bg-white/10 px-2.5 py-1 rounded font-mono text-[10px] text-white/80 border border-white/20">
                  Maestro / JCB / Bank Transfer
                </div>
              </div>
            </div>

            {/* Compliance Badges Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="bg-white/10 px-2.5 py-1 rounded text-[10px] font-bold text-white border border-white/20">
                I-B-A-S
              </div>
              <div className="bg-white/10 px-2.5 py-1 rounded text-[10px] font-bold text-sky-300 border border-white/20">
                GamCare <span className="text-[8px] block text-white/60 font-normal">Gambling Support Starts Here</span>
              </div>
              <div className="bg-white/10 px-2.5 py-1 rounded text-[10px] font-bold text-emerald-400 border border-white/20">
                GambleAware.org
              </div>
              <div className="bg-white/10 px-2.5 py-1 rounded text-[10px] font-bold text-[#FF2925] border border-white/20">
                GAMSTOP ONLINE
              </div>
              <div className="bg-white/10 px-2.5 py-1 rounded text-[10px] font-bold text-amber-300 border border-white/20">
                GAMBLING COMMISSION
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white/80 flex items-center justify-center font-extrabold text-[10px]">
                18+
              </div>
            </div>

            {/* App Download Text & Badges */}
            <div className="space-y-2 pt-1">
              <p className="text-[10px] text-slate-300 leading-relaxed">
                The app is now available on iOS and Android. Enjoy the full betting experience anywhere, with our mobile app for iOS &amp; Android.
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-white/10 px-2.5 py-1 rounded text-[10px] font-bold border border-white/20 cursor-pointer hover:bg-white/20">
                  Google Play
                </span>
                <span className="bg-white/10 px-2.5 py-1 rounded text-[10px] font-bold border border-white/20 cursor-pointer hover:bg-white/20">
                  App Store
                </span>
                <span className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 px-2.5 py-1 rounded text-[10px] font-bold">
                  419+ reviews ★ Trustpilot
                </span>
                <span className="text-white font-black text-xs flex items-center gap-1">
                  <span className="text-emerald-400 text-sm">●</span> EveryMatrix
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="border-t border-white/10 pt-4 flex justify-center items-center space-x-6">
          <a href="#" className="flex flex-col items-center group">
            <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center border border-white/20 group-hover:border-white transition-colors shadow-md">
              <Twitter className="w-4 h-4 text-white" />
            </div>
            <span className="text-[9px] text-slate-400 mt-1 font-bold group-hover:text-white">X / Twitter</span>
          </a>
          <a href="#" className="flex flex-col items-center group">
            <div className="w-9 h-9 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 rounded-lg flex items-center justify-center border border-white/20 group-hover:border-white transition-colors shadow-md">
              <Instagram className="w-4 h-4 text-white" />
            </div>
            <span className="text-[9px] text-slate-400 mt-1 font-bold group-hover:text-white">Instagram</span>
          </a>
        </div>

        {/* Legal & Regulatory Disclaimer Box */}
        <div className="bg-[#00083a] border border-white/10 rounded-xl p-4 text-[10px] text-slate-300 space-y-2 leading-relaxed">
          <p>
            <strong className="text-white font-bold">Sports:</strong> Please be aware that any data (such as current scores or elapsed time) that is displayed on the website or on our text screens is sourced from a &apos;live feed&apos; provided by a third party and may be subject to time delay and/or be inaccurate. If you rely on this data to place bets, you do so entirely at your own risk.
          </p>
          <p>
            <strong className="text-white font-bold">Casino:</strong> If you use our Gaming Facilities, any additional rules which appear within a Game&apos;s &apos;Help&apos; or &apos;Game Info&apos; tabs, including rules relating to any maximum payouts, shall apply (&quot;Game Rules&quot;).
          </p>
          <p>
            BetTom is a brand owned and operated by Bet Tom Ltd. Company number 15228173, registered address at 3a Kingfisher Court, Uckfield, England, TN22 1QQ. Bet Tom Ltd is licensed and regulated in Great Britain by the Gambling Commission under account number <span className="underline text-white font-mono font-bold">64959</span>.
          </p>
          <p className="text-slate-400">
            Over 18s only. Please be aware that underage gambling is a criminal offence.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-3 text-center text-[10px] text-slate-400">
          © 2024 BetTom. All rights reserved. Registered trademark. All rights reserved. Powered by EveryMatrix.
        </div>
      </div>
    </footer>
  );
};
