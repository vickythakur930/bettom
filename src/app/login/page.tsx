'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { Trophy, Mail, Lock, LogIn } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      login(email);
      router.push('/');
    }
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <div className="bg-bettom-card border border-bettom-border rounded-2xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-bettom-accent flex items-center justify-center text-bettom-bg font-black mx-auto">
            <Trophy className="w-7 h-7" />
          </div>
          <h1 className="text-xl font-black text-bettom-text">Log In to Bettom</h1>
          <p className="text-xs text-bettom-muted">Access your wallet, live bets, and cash out features</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-bettom-muted mb-1">Email or Username</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-bettom-subtle" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex.rider@bettom.com"
                className="w-full bg-bettom-header border border-bettom-border focus:border-bettom-accent rounded-xl pl-9 pr-3 py-2.5 text-xs text-bettom-text focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-semibold text-bettom-muted">Password</label>
              <Link href="/forgot-password" className="text-[11px] text-bettom-accent hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-bettom-subtle" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-bettom-header border border-bettom-border focus:border-bettom-accent rounded-xl pl-9 pr-3 py-2.5 text-xs text-bettom-text focus:outline-none transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-bettom-accent hover:bg-bettom-accent-hover text-bettom-bg font-black text-xs rounded-xl shadow-lg shadow-bettom-accent/20 transition-all uppercase tracking-wider flex items-center justify-center space-x-2"
          >
            <LogIn className="w-4 h-4" />
            <span>LOG IN</span>
          </button>
        </form>

        <div className="text-center text-xs text-bettom-muted border-t border-bettom-border pt-4">
          New to Bettom?{' '}
          <Link href="/register" className="text-bettom-accent font-bold hover:underline">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}
