'use client';

import React from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { formatCurrency } from '@/utils/helpers';
import { User, ShieldCheck, Mail, Wallet, Settings, Bell, CheckCircle2 } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useAuthStore();

  if (!user) return <div className="p-8 text-center text-bettom-muted text-xs">Please log in to view your profile.</div>;

  return (
    <div className="max-w-3xl mx-auto space-y-6 py-4">
      {/* Profile Header Card */}
      <div className="bg-bettom-card border border-bettom-border rounded-2xl p-6 shadow-xl flex items-center space-x-4">
        <div className="w-16 h-16 rounded-2xl bg-bettom-surface border border-bettom-border overflow-hidden flex items-center justify-center">
          {user.avatar ? (
            <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
          ) : (
            <User className="w-8 h-8 text-bettom-muted" />
          )}
        </div>

        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-black text-bettom-text">{user.username}</h1>
            <span className="flex items-center space-x-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] px-2 py-0.5 rounded font-bold uppercase">
              <CheckCircle2 className="w-3 h-3" />
              <span>KYC VERIFIED</span>
            </span>
          </div>
          <p className="text-xs text-bettom-muted">{user.email}</p>
          <p className="text-xs font-mono font-bold text-bettom-accent mt-1">
            Wallet Balance: {formatCurrency(user.balance, user.currency)}
          </p>
        </div>
      </div>

      {/* Account Details Form */}
      <div className="bg-bettom-card border border-bettom-border rounded-2xl p-6 shadow-xl space-y-4">
        <h2 className="font-extrabold text-sm text-bettom-text uppercase tracking-wider border-b border-bettom-border pb-3">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-bettom-muted mb-1 font-semibold">First Name</label>
            <input
              type="text"
              readOnly
              value={user.firstName}
              className="w-full bg-bettom-header border border-bettom-border rounded-xl px-3 py-2.5 text-bettom-text font-medium"
            />
          </div>

          <div>
            <label className="block text-bettom-muted mb-1 font-semibold">Last Name</label>
            <input
              type="text"
              readOnly
              value={user.lastName}
              className="w-full bg-bettom-header border border-bettom-border rounded-xl px-3 py-2.5 text-bettom-text font-medium"
            />
          </div>

          <div>
            <label className="block text-bettom-muted mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              readOnly
              value={user.email}
              className="w-full bg-bettom-header border border-bettom-border rounded-xl px-3 py-2.5 text-bettom-text font-medium"
            />
          </div>

          <div>
            <label className="block text-bettom-muted mb-1 font-semibold">Currency</label>
            <input
              type="text"
              readOnly
              value={user.currency}
              className="w-full bg-bettom-header border border-bettom-border rounded-xl px-3 py-2.5 text-bettom-text font-medium font-mono"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
