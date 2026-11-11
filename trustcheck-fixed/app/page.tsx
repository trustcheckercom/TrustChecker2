import Link from "next/link";
import { Shield, AlertTriangle, CheckCircle, Lock, Users, FileSearch } from "lucide-react";
import { PricingTable } from "@/components/PricingTable";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-gold-600/30 text-gold-400 text-sm mb-6">
          <Shield className="w-4 h-4" />
          Trusted by people who check before they trust
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Not sure if it's a scam?
          <span className="block text-gold-400 mt-2">Check before you trust.</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Investigate suspicious texts, emails, websites, invoices, job offers, and more. 
          Get clear explanations, warning signs, and official contact information — designed to be easy for everyone, including older adults.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="px-8 py-4 rounded-xl gold-gradient text-dark-900 font-semibold text-lg hover:opacity-90 transition"
          >
            Start 3-day free trial
          </Link>
          <Link
            href="/education"
            className="px-8 py-4 rounded-xl border border-dark-600 text-gray-200 hover:border-gold-600/50 transition"
          >
            Learn about common scams
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          No major red flags found ≠ definitely safe. We always recommend independent verification.
        </p>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How TrustCheck works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: FileSearch, title: "Submit anything suspicious", desc: "Paste text, enter a URL, upload a screenshot or PDF, or describe the situation." },
            { icon: AlertTriangle, title: "We investigate", desc: "AI + reputation checks identify warning signs, analyze domains, and look for impersonation." },
            { icon: CheckCircle, title: "Clear report + next steps", desc: "Percentage confidence, evidence-based findings, official company contacts, and what you should (and shouldn’t) do." },
          ].map((item) => (
            <div key={item.title} className="bg-dark-800 border border-dark-700 rounded-2xl p-6">
              <item.icon className="w-10 h-10 text-gold-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Everything you need to verify</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Text messages & emails",
            "Websites & payment links",
            "Screenshots & PDFs",
            "Invoices & payment requests",
            "Job offers",
            "Marketplace sellers",
            "Social media profiles",
            "Company impersonation checks",
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 bg-dark-800/50 border border-dark-700 rounded-xl p-4">
              <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-400">Start with a 3-day free trial. Cancel anytime.</p>
        </div>
        <PricingTable />
      </section>

      {/* Trust section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <Lock className="w-12 h-12 text-gold-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Built for safety and clarity</h2>
        <p className="text-gray-400">
          We never claim something is definitely safe. Every report distinguishes verified facts from suspicions. 
          You control your data and can delete any investigation at any time.
        </p>
      </section>

      <footer className="border-t border-dark-700 py-8 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-gold-400" />
            TrustCheck
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold-400">Privacy</Link>
            <Link href="/education" className="hover:text-gold-400">Education</Link>
          </div>
          <p>© {new Date().getFullYear()} TrustCheck. Check before you trust.</p>
        </div>
      </footer>
    </div>
  );
}