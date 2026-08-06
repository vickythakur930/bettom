'use client';

import React from 'react';
import { useSportsStore } from '@/store/useSportsStore';
import { OddsFormat } from '@/types/betslip';
import { Settings, ShieldCheck, Moon, Bell } from 'lucide-react';

export default function SettingsPage() {
  const { oddsFormat, setOddsFormat } = useSportsStore();

  return (
    <div className="max-w-3xl mx-auto py-6 space-y-6">
      <div className="bg-bettom-card border border-bettom-border rounded-2xl p-6 shadow-xl space-y-6">
        <h1 className="text-xl font-black text-bettom-text flex items-center gap-2">
          <Settings className="w-5 h-5 text-bettom-accent" />
          <span>User Preferences & Safer Gambling</span>
        </h1>

        {/* Odds Display Preferences */}
        <div className="space-y-3 border-b border-bettom-border pb-5">
          <h2 className="font-extrabold text-sm text-bettom-text uppercase tracking-wider">
            Odds Format Display
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {(['decimal', 'fractional', 'american'] as OddsFormat[]).map((fmt) => (
              <button
                key={fmt}
                onClick={() => setOddsFormat(fmt)}
                className={`py-3 rounded-xl text-xs font-extrabold capitalize border transition-all ${
                  oddsFormat === fmt
                    ? 'bg-bettom-accent text-bettom-bg border-bettom-accent shadow-md shadow-bettom-accent/20'
                    : 'bg-bettom-header text-bettom-muted border-bettom-border hover:text-bettom-text'
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        {/* Responsible Gambling Deposit Limits */}
        <div className="space-y-3">
          <h2 className="font-extrabold text-sm text-bettom-text uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Safer Gambling Deposit Limits</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-bettom-muted font-semibold mb-1">Daily Deposit Limit (£)</label>
              <input
                type="number"
                defaultValue="500"
                className="w-full bg-bettom-header border border-bettom-border rounded-xl px-3 py-2.5 text-bettom-text font-bold"
              />
            </div>

            <div>
              <label className="block text-bettom-muted font-semibold mb-1">Monthly Deposit Limit (£)</label>
              <input
                type="number"
                defaultValue="2000"
                className="w-full bg-bettom-header border border-bettom-border rounded-xl px-3 py-2.5 text-bettom-text font-bold"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
