import Link from "next/link";
import { FileSearch, History, BookOpen } from "lucide-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="border-b border-dark-700 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 flex gap-6 text-sm">
          <Link href="/app" className="py-3 border-b-2 border-gold-500 text-gold-400">
            Check
          </Link>
          <Link href="/app/history" className="py-3 text-gray-400 hover:text-white">
            History
          </Link>
          <Link href="/education" className="py-3 text-gray-400 hover:text-white">
            Education
          </Link>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-8">{children}</div>
    </div>
  );
}