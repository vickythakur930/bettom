'use client';

import React, { useState } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { formatCurrency } from '@/utils/helpers';
import { Wallet, X, CreditCard, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DepositModal: React.FC<DepositModalProps> = ({ isOpen, onClose }) => {
  const { user, deposit } = useAuthStore();
  const [amount, setAmount] = useState<number>(50);
  const [selectedMethod, setSelectedMethod] = useState<string>('Visa / Mastercard');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !user) return null;

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount > 0) {
      deposit(amount, selectedMethod);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }
  };

  const paymentMethods = [
    { name: 'Visa / Mastercard', icon: '💳' },
    { name: 'PayPal', icon: '🅿️' },
    { name: 'Skrill', icon: '🟣' },
    { name: 'Neteller', icon: '🟢' },
    { name: 'Apple Pay', icon: '🍎' },
    { name: 'Bitcoin & Crypto', icon: '⚡' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-bettom-card border border-bettom-border rounded-2xl p-6 max-w-md w-full shadow-2xl relative text-bettom-text"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-xl bg-bettom-surface hover:bg-bettom-hover text-bettom-muted hover:text-bettom-text transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center space-x-2.5 mb-6">
          <div className="w-10 h-10 rounded-xl bg-bettom-accent flex items-center justify-center text-bettom-bg font-black">
            <Wallet className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-extrabold text-lg">Instant Deposit</h2>
            <p className="text-xs text-bettom-muted">Current Balance: {formatCurrency(user.balance, user.currency)}</p>
          </div>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
            <h3 className="font-bold text-lg text-bettom-text">Deposit Successful!</h3>
            <p className="text-xs text-bettom-muted">
              {formatCurrency(amount, user.currency)} added to your wallet.
            </p>
          </div>
        ) : (
          <form onSubmit={handleDeposit} className="space-y-5">
            {/* Amount Selection */}
            <div>
              <label className="block text-xs font-semibold text-bettom-muted mb-1.5">Deposit Amount (£)</label>
              <input
                type="number"
                min="10"
                max="10000"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                className="w-full bg-bettom-header border border-bettom-border focus:border-bettom-accent rounded-xl px-4 py-3 text-lg font-mono font-bold text-bettom-accent focus:outline-none"
              />
              <div className="grid grid-cols-4 gap-2 mt-2">
                {[20, 50, 100, 250].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset)}
                    className={`py-1.5 rounded-lg text-xs font-mono font-bold border transition-colors ${
                      amount === preset
                        ? 'bg-bettom-accent text-bettom-bg border-bettom-accent'
                        : 'bg-bettom-surface text-bettom-muted border-bettom-border hover:text-bettom-text'
                    }`}
                  >
                    +£{preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block text-xs font-semibold text-bettom-muted mb-1.5">Payment Method</label>
              <div className="grid grid-cols-2 gap-2">
                {paymentMethods.map((method) => (
                  <button
                    key={method.name}
                    type="button"
                    onClick={() => setSelectedMethod(method.name)}
                    className={`flex items-center space-x-2 p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                      selectedMethod === method.name
                        ? 'bg-bettom-accent/15 text-bettom-accent border-bettom-accent font-bold'
                        : 'bg-bettom-header text-bettom-muted border-bettom-border hover:text-bettom-text'
                    }`}
                  >
                    <span>{method.icon}</span>
                    <span className="truncate">{method.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={amount < 10}
              className="w-full py-3.5 bg-gradient-to-r from-bettom-accent to-emerald-400 hover:from-emerald-400 hover:to-bettom-accent text-bettom-bg font-black text-xs rounded-xl shadow-lg shadow-bettom-accent/20 transition-all uppercase tracking-wider flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>CONFIRM DEPOSIT OF {formatCurrency(amount, user.currency)}</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
