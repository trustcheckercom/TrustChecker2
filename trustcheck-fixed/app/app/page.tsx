"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, Link as LinkIcon, Type, FileText } from "lucide-react";

export default function CheckPage() {
  const [input, setInput] = useState("");
  const [type, setType] = useState<"text" | "url" | "description">("text");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: input, type }),
      });
      const data = await res.json();
      // Store in localStorage for demo history
      const reports = JSON.parse(localStorage.getItem("trustcheck-reports") || "[]");
      const report = { id: Date.now().toString(), ...data, createdAt: new Date().toISOString(), input };
      reports.unshift(report);
      localStorage.setItem("trustcheck-reports", JSON.stringify(reports.slice(0, 50)));
      router.push(`/app/report/${report.id}`);
    } catch (err) {
      alert("Analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Check before you trust</h1>
      <p className="text-gray-400 mb-8">
        Paste a message, enter a website, upload a screenshot, or describe the situation.
      </p>

      <div className="flex gap-2 mb-6">
        {[
          { id: "text", label: "Text / Email", icon: Type },
          { id: "url", label: "Website URL", icon: LinkIcon },
          { id: "description", label: "Describe", icon: FileText },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setType(t.id as any)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
              type === t.id
                ? "border-gold-500 bg-gold-600/10 text-gold-400"
                : "border-dark-600 text-gray-400"
            }`}
          >
            <t.icon className="w-4 h-4" />
            {t.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            type === "url"
              ? "https://example.com"
              : type === "description"
              ? "Describe the suspicious situation in as much detail as you can..."
              : "Paste the suspicious text message, email, or conversation here..."
          }
          className="w-full h-48 bg-dark-800 border border-dark-700 rounded-2xl p-4 focus:outline-none focus:border-gold-500 resize-none"
          required
        />

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <Upload className="w-4 h-4" />
          <span>Screenshot / PDF upload available in full production version (R2 storage)</span>
        </div>

        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="w-full sm:w-auto px-8 py-4 gold-gradient text-dark-900 font-semibold rounded-xl disabled:opacity-50"
        >
          {loading ? "Investigating..." : "Investigate"}
        </button>
      </form>

      <div className="mt-8 text-sm text-gray-500 bg-dark-800/50 border border-dark-700 rounded-xl p-4">
        We never claim something is definitely safe. If we find no major red flags we will still recommend independent verification.
      </div>
    </div>
  );
}