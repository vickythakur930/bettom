'use client';

import React from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { formatCurrency, formatDate } from '@/utils/helpers';
import { Clock, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function TransactionHistoryPage() {
  const { transactions } = useAuthStore();

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-4">
      <div className="bg-bettom-card border border-bettom-border rounded-2xl p-6 shadow-xl space-y-4">
        <h1 className="text-xl font-black text-bettom-text flex items-center gap-2">
          <Clock className="w-5 h-5 text-bettom-accent" />
          <span>Full Transaction History</span>
        </h1>

        <div className="space-y-2">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-3.5 rounded-xl bg-bettom-header border border-bettom-border text-xs"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-bettom-surface flex items-center justify-center">
                  {tx.type === 'deposit' ? (
                    <ArrowDownLeft className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-rose-400" />
                  )}
                </div>
                <div>
                  <div className="font-bold text-bettom-text capitalize">{tx.type.replace('_', ' ')}</div>
                  <div className="text-[11px] text-bettom-muted">{formatDate(tx.date)} • Ref: {tx.referenceId || tx.id}</div>
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
                <div className="text-[10px] font-bold uppercase text-bettom-accent">{tx.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
