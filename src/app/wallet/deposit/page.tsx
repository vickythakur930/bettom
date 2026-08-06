'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { formatCurrency } from '@/utils/helpers';
import { Wallet, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function DepositPage() {
  const router = useRouter();
  const { user, deposit } = useAuthStore();
  const [amount, setAmount] = useState<number>(50);
  const [method, setMethod] = useState<string>('Visa / Mastercard');
  const [done, setDone] = useState(false);

  if (!user) return <div className="p-8 text-center text-bettom-muted text-xs">Please log in to deposit.</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount > 0) {
      deposit(amount, method);
      setDone(true);
      setTimeout(() => {
        router.push('/wallet');
      }, 2000);
    }
  };

  return (
    <div className="max-w-md mx-auto py-8">
      <div className="bg-bettom-card border border-bettom-border rounded-2xl p-6 shadow-2xl space-y-5">
        <div className="flex items-center space-x-3 border-b border-bettom-border pb-4">
          <div className="w-10 h-10 rounded-xl bg-bettom-accent flex items-center justify-center text-bettom-bg font-black">
            <Wallet className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-black text-lg text-bettom-text">Deposit Funds</h1>
            <p className="text-xs text-bettom-muted">Current Balance: {formatCurrency(user.balance, user.currency)}</p>
          </div>
        </div>

        {done ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
            <h2 className="font-bold text-lg text-bettom-text">Deposit Completed!</h2>
            <p className="text-xs text-bettom-muted">
              {formatCurrency(amount, user.currency)} added instantly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-bettom-muted mb-1">Deposit Amount (£)</label>
              <input
                type="number"
                min="10"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                className="w-full bg-bettom-header border border-bettom-border focus:border-bettom-accent rounded-xl px-4 py-3 text-lg font-mono font-bold text-bettom-accent focus:outline-none"
              />
              <div className="grid grid-cols-4 gap-2 mt-2">
                {[20, 50, 100, 250].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setAmount(val)}
                    className="py-1 rounded-lg text-xs font-mono font-bold bg-bettom-surface border border-bettom-border hover:border-bettom-accent text-bettom-text"
                  >
                    +£{val}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-bettom-muted mb-1">Select Payment Method</label>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full bg-bettom-header border border-bettom-border focus:border-bettom-accent rounded-xl px-3 py-2.5 text-xs text-bettom-text font-semibold focus:outline-none"
              >
                <option value="Visa / Mastercard">Visa / Mastercard</option>
                <option value="PayPal">PayPal</option>
                <option value="Skrill">Skrill</option>
                <option value="Neteller">Neteller</option>
                <option value="Apple Pay">Apple Pay</option>
                <option value="Bitcoin & Crypto">Bitcoin & Crypto</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-bettom-accent hover:bg-bettom-accent-hover text-bettom-bg font-black text-xs rounded-xl shadow-lg shadow-bettom-accent/20 transition-all uppercase tracking-wider flex items-center justify-center space-x-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>CONFIRM DEPOSIT</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
