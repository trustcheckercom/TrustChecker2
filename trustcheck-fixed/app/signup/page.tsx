"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Production: create account → Stripe Checkout with 3-day trial
    alert("In production this creates your account and redirects to Stripe Checkout for the 3-day trial (card required).");
    window.location.href = "/app";
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-dark-800 border border-dark-700 rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-2">Start your 3-day free trial</h1>
        <p className="text-gray-400 mb-6">Card required. Cancel anytime. Full access during trial.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500"
            />
          </div>
          <button type="submit" className="w-full py-3 gold-gradient text-dark-900 font-semibold rounded-lg">
            Continue to payment
          </button>
        </form>

        <div className="my-6 text-center text-sm text-gray-500">or</div>

        <div className="space-y-3">
          <button className="w-full py-3 border border-dark-600 rounded-lg hover:border-gold-600/50">
            Continue with Google
          </button>
          <button className="w-full py-3 border border-dark-600 rounded-lg hover:border-gold-600/50">
            Continue with Apple
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-500 text-center">
          By continuing you agree to our Terms and Privacy Policy. You can delete your data at any time.
        </p>
        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-gold-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}