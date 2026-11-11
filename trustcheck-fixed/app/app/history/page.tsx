"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";

interface Report {
  id: string;
  summary: string;
  confidence: number;
  risk: string;
  createdAt: string;
  input: string;
}

export default function HistoryPage() {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("trustcheck-reports") || "[]");
    setReports(stored);
  }, []);

  const deleteReport = (id: string) => {
    const updated = reports.filter((r) => r.id !== id);
    setReports(updated);
    localStorage.setItem("trustcheck-reports", JSON.stringify(updated));
  };

  const deleteAll = () => {
    if (confirm("Delete all investigation history? This cannot be undone.")) {
      setReports([]);
      localStorage.removeItem("trustcheck-reports");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Investigation History</h1>
        {reports.length > 0 && (
          <button onClick={deleteAll} className="text-sm text-red-400 hover:text-red-300 flex items-center gap-1">
            <Trash2 className="w-4 h-4" /> Delete all
          </button>
        )}
      </div>

      {reports.length === 0 ? (
        <p className="text-gray-400">No investigations yet. Start by checking something suspicious.</p>
      ) : (
        <div className="space-y-3">
          {reports.map((r) => (
            <div key={r.id} className="bg-dark-800 border border-dark-700 rounded-xl p-4 flex justify-between items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-sm font-medium px-2 py-0.5 rounded ${
                    r.risk === "High" ? "bg-red-500/20 text-red-400" :
                    r.risk === "Medium" ? "bg-yellow-500/20 text-yellow-400" :
                    "bg-green-500/20 text-green-400"
                  }`}>
                    {r.confidence}% confidence
                  </span>
                  <span className="text-xs text-gray-500">{new Date(r.createdAt).toLocaleString()}</span>
                </div>
                <p className="text-sm line-clamp-2">{r.summary}</p>
                <Link href={`/app/report/${r.id}`} className="text-gold-400 text-sm hover:underline mt-1 inline-block">
                  View full report
                </Link>
              </div>
              <button onClick={() => deleteReport(r.id)} className="text-gray-500 hover:text-red-400">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}