'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSent(true);
    }
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <div className="bg-bettom-card border border-bettom-border rounded-2xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-xl font-black text-bettom-text">Reset Password</h1>
          <p className="text-xs text-bettom-muted">Enter your account email to receive reset instructions</p>
        </div>

        {sent ? (
          <div className="text-center space-y-3 py-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h2 className="font-bold text-sm text-bettom-text">Reset Link Sent!</h2>
            <p className="text-xs text-bettom-muted">Check {email} for instructions to reset your password.</p>
            <Link
              href="/login"
              className="inline-flex items-center space-x-1.5 text-xs text-bettom-accent font-bold hover:underline pt-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Login</span>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-bettom-muted mb-1">Email Address</label>
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

            <button
              type="submit"
              className="w-full py-3 bg-bettom-accent hover:bg-bettom-accent-hover text-bettom-bg font-black text-xs rounded-xl shadow-lg shadow-bettom-accent/20 transition-all uppercase tracking-wider"
            >
              SEND RESET LINK
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
