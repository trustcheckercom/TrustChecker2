"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, CheckCircle, ExternalLink, Phone, Mail, Shield } from "lucide-react";

interface Report {
  id: string;
  summary: string;
  confidence: number;
  risk: string;
  warningSigns: { sign: string; why: string }[];
  officialContacts?: { name: string; website?: string; phone?: string; email?: string };
  recommendations: string[];
  whatNotToDo: string[];
  needsMoreContext?: boolean;
  input: string;
  createdAt: string;
}

export default function ReportPage() {
  const params = useParams();
  const [report, setReport] = useState<Report | null>(null);

  useEffect(() => {
    const reports: Report[] = JSON.parse(localStorage.getItem("trustcheck-reports") || "[]");
    const found = reports.find((r) => r.id === params.id);
    setReport(found || null);
  }, [params.id]);

  if (!report) {
    return (
      <div className="text-center py-20">
        <p>Report not found.</p>
        <Link href="/app" className="text-gold-400">Back to check</Link>
      </div>
    );
  }

  const riskColor =
    report.risk === "High" ? "text-red-400 bg-red-500/10 border-red-500/30" :
    report.risk === "Medium" ? "text-yellow-400 bg-yellow-500/10 border-yellow-500/30" :
    "text-green-400 bg-green-500/10 border-green-500/30";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Investigation Report</h1>
        <Link href="/app/history" className="text-sm text-gray-400 hover:text-white">← History</Link>
      </div>

      {/* Confidence badge */}
      <div className={`border rounded-2xl p-6 ${riskColor}`}>
        <div className="flex items-center gap-4">
          <Shield className="w-10 h-10" />
          <div>
            <div className="text-3xl font-bold">{report.confidence}%</div>
            <div className="text-sm opacity-80">Confidence this appears suspicious</div>
          </div>
        </div>
        <p className="mt-4 text-lg">{report.summary}</p>
        {report.needsMoreContext && (
          <p className="mt-3 text-sm bg-dark-900/50 rounded-lg p-3">
            We need more context to give a stronger assessment. Please provide additional details if possible.
          </p>
        )}
      </div>

      {/* Warning signs */}
      {report.warningSigns.length > 0 && (
        <section className="bg-dark-800 border border-dark-700 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-gold-400" /> Warning signs found
          </h2>
          <div className="space-y-4">
            {report.warningSigns.map((w, i) => (
              <div key={i} className="border-l-2 border-gold-600 pl-4">
                <p className="font-medium">{w.sign}</p>
                <p className="text-sm text-gray-400 mt-1">{w.why}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Official contacts */}
      {report.officialContacts && (
        <section className="bg-dark-800 border border-dark-700 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Official company contact (verify independently)</h2>
          <div className="space-y-2">
            <p className="font-medium">{report.officialContacts.name}</p>
            {report.officialContacts.website && (
              <a href={report.officialContacts.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gold-400 hover:underline">
                <ExternalLink className="w-4 h-4" /> {report.officialContacts.website}
              </a>
            )}
            {report.officialContacts.phone && (
              <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> {report.officialContacts.phone}</p>
            )}
            {report.officialContacts.email && (
              <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> {report.officialContacts.email}</p>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Always confirm these details yourself on the company’s real website. Do not use contact information from the suspicious message.
          </p>
        </section>
      )}

      {/* Recommendations */}
      <section className="bg-dark-800 border border-dark-700 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-gold-400" /> What you should do
        </h2>
        <ul className="space-y-2">
          {report.recommendations.map((r, i) => (
            <li key={i} className="flex gap-2"><span className="text-gold-400">•</span> {r}</li>
          ))}
        </ul>
      </section>

      <section className="bg-dark-800 border border-dark-700 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">What you should not do</h2>
        <ul className="space-y-2">
          {report.whatNotToDo.map((r, i) => (
            <li key={i} className="flex gap-2 text-red-300"><span>•</span> {r}</li>
          ))}
        </ul>
      </section>

      <div className="text-sm text-gray-500 bg-dark-800/50 rounded-xl p-4">
        Original submission: <span className="text-gray-300">{report.input.slice(0, 200)}{report.input.length > 200 ? "..." : ""}</span>
      </div>

      <p className="text-xs text-center text-gray-500">
        This is an AI-assisted investigation, not a definitive judgment. Always verify independently.
      </p>
    </div>
  );
}