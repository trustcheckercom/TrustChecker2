"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: integrate Clerk or Auth.js + redirect to Stripe if no active sub
    alert("In the full version this connects to your auth provider (Clerk / Auth.js) and checks subscription status.");
    window.location.href = "/app";
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-dark-800 border border-dark-700 rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
        <p className="text-gray-400 mb-6">Log in to check suspicious content</p>

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
            Log in
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

        <p className="mt-6 text-center text-sm text-gray-400">
          No account?{" "}
          <Link href="/signup" className="text-gold-400 hover:underline">
            Start free trial
          </Link>
        </p>
      </div>
    </div>
  );
}