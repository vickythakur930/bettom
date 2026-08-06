'use client';

import React from 'react';
import Link from 'next/link';
import { useAuthStore } from '@/store/useAuthStore';
import { formatCurrency, formatDate } from '@/utils/helpers';
import { Wallet, PlusCircle, ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react';

export default function WalletPage() {
  const { user, transactions } = useAuthStore();

  if (!user) return <div className="p-8 text-center text-bettom-muted text-xs">Please log in to access wallet.</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-4">
      {/* Wallet Balance Hero Banner */}
      <div className="bg-gradient-to-r from-bettom-card via-bettom-surface to-bettom-card border border-bettom-border rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-bettom-muted uppercase tracking-wider">Total Available Balance</span>
          <div className="text-3xl font-black font-mono text-bettom-accent mt-1">
            {formatCurrency(user.balance, user.currency)}
          </div>
          <div className="text-xs text-bettom-subtle mt-1">Ready for live sports wagers & instant withdrawal</div>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="/wallet/deposit"
            className="flex items-center space-x-2 bg-bettom-accent hover:bg-bettom-accent-hover text-bettom-bg font-black text-xs px-5 py-3 rounded-xl shadow-lg shadow-bettom-accent/20 transition-all uppercase tracking-wider"
          >
            <PlusCircle className="w-4 h-4" />
            <span>DEPOSIT</span>
          </Link>

          <Link
            href="/wallet/withdraw"
            className="flex items-center space-x-2 bg-bettom-surface hover:bg-bettom-hover text-bettom-text border border-bettom-border font-bold text-xs px-5 py-3 rounded-xl transition-all uppercase tracking-wider"
          >
            <ArrowUpRight className="w-4 h-4 text-bettom-accent" />
            <span>WITHDRAW</span>
          </Link>
        </div>
      </div>

      {/* Recent Transactions List */}
      <div className="bg-bettom-card border border-bettom-border rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-bettom-border pb-3">
          <h2 className="font-extrabold text-sm text-bettom-text uppercase tracking-wider flex items-center gap-2">
            <Clock className="w-4 h-4 text-bettom-accent" />
            <span>Recent Wallet Transactions</span>
          </h2>
          <Link href="/wallet/history" className="text-xs text-bettom-accent font-bold hover:underline">
            View All History
          </Link>
        </div>

        <div className="space-y-2">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-3 rounded-xl bg-bettom-header border border-bettom-border text-xs"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-bettom-surface flex items-center justify-center">
                  {tx.type === 'deposit' ? (
                    <ArrowDownLeft className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-rose-400" />
                  )}
                </div>
                <div>
                  <div className="font-bold text-bettom-text capitalize">{tx.type.replace('_', ' ')}</div>
                  <div className="text-[10px] text-bettom-muted">{formatDate(tx.date)}</div>
                </div>
              </div>

              <div className="text-right">
                <div
                  className={`font-mono font-bold text-sm ${
                    tx.type === 'deposit' || tx.type === 'bet_payout' || tx.type === 'cash_out'
                      ? 'text-emerald-400'
                      : 'text-rose-400'
                  }`}
                >
                  {tx.type === 'deposit' || tx.type === 'bet_payout' || tx.type === 'cash_out' ? '+' : '-'}
                  {formatCurrency(tx.amount)}
                </div>
                <div className="text-[10px] uppercase font-bold text-bettom-subtle">{tx.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
