'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { formatCurrency } from '@/utils/helpers';
import { ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function WithdrawPage() {
  const router = useRouter();
  const { user, withdraw } = useAuthStore();
  const [amount, setAmount] = useState<number>(100);
  const [method, setMethod] = useState<string>('Bank Transfer (Faster Payments)');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  if (!user) return <div className="p-8 text-center text-bettom-muted text-xs">Please log in to withdraw.</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = withdraw(amount, method);
    if (success) {
      setDone(true);
      setTimeout(() => {
        router.push('/wallet');
      }, 2000);
    } else {
      setError('Insufficient balance for withdrawal.');
    }
  };

  return (
    <div className="max-w-md mx-auto py-8">
      <div className="bg-bettom-card border border-bettom-border rounded-2xl p-6 shadow-2xl space-y-5">
        <div className="flex items-center space-x-3 border-b border-bettom-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-bettom-surface border border-bettom-border flex items-center justify-center text-rose-400 font-black">
            <ArrowUpRight className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-black text-lg text-bettom-text">Withdraw Funds</h1>
            <p className="text-xs text-bettom-muted">Available: {formatCurrency(user.balance, user.currency)}</p>
          </div>
        </div>

        {done ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
            <h2 className="font-bold text-lg text-bettom-text">Withdrawal Submitted!</h2>
            <p className="text-xs text-bettom-muted">
              {formatCurrency(amount, user.currency)} is being processed via {method}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-bettom-muted mb-1">Withdrawal Amount (£)</label>
              <input
                type="number"
                min="10"
                max={user.balance}
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                className="w-full bg-bettom-header border border-bettom-border focus:border-bettom-accent rounded-xl px-4 py-3 text-lg font-mono font-bold text-bettom-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-bettom-muted mb-1">Withdrawal Method</label>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full bg-bettom-header border border-bettom-border focus:border-bettom-accent rounded-xl px-3 py-2.5 text-xs text-bettom-text font-semibold focus:outline-none"
              >
                <option value="Bank Transfer (Faster Payments)">Bank Transfer (Faster Payments)</option>
                <option value="Visa Card Direct">Visa Card Direct</option>
                <option value="PayPal">PayPal</option>
                <option value="Crypto Wallet">Crypto Wallet</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={amount > user.balance || amount <= 0}
              className="w-full py-3.5 bg-bettom-accent hover:bg-bettom-accent-hover text-bettom-bg font-black text-xs rounded-xl shadow-lg shadow-bettom-accent/20 transition-all uppercase tracking-wider disabled:opacity-50"
            >
              CONFIRM WITHDRAWAL
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
