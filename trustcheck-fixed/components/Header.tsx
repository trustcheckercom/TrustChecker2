"use client";

import Link from "next/link";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-dark-700 bg-dark-900/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center">
              <Shield className="w-5 h-5 text-dark-900" />
            </div>
            <span className="text-xl font-semibold tracking-tight">
              Trust<span className="text-gold-400">Check</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/education" className="text-sm text-gray-300 hover:text-gold-400 transition">
              Education
            </Link>
            <Link href="/#pricing" className="text-sm text-gray-300 hover:text-gold-400 transition">
              Pricing
            </Link>
            <Link
              href="/login"
              className="text-sm px-4 py-2 rounded-lg border border-gold-600 text-gold-400 hover:bg-gold-600/10 transition"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-sm px-4 py-2 rounded-lg gold-gradient text-dark-900 font-medium hover:opacity-90 transition"
            >
              Start free trial
            </Link>
          </nav>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-dark-700 space-y-3">
            <Link href="/education" className="block text-gray-300" onClick={() => setOpen(false)}>Education</Link>
            <Link href="/#pricing" className="block text-gray-300" onClick={() => setOpen(false)}>Pricing</Link>
            <Link href="/login" className="block text-gold-400" onClick={() => setOpen(false)}>Log in</Link>
            <Link href="/signup" className="block gold-gradient text-dark-900 font-medium px-4 py-2 rounded-lg text-center" onClick={() => setOpen(false)}>
              Start free trial
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}