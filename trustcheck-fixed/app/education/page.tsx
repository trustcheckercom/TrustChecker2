export default function EducationPage() {
  const scams = [
    {
      title: "Phishing emails claiming to be from banks",
      signs: ["Urgent language", "Mismatched sender domain", "Links that don’t match the real bank URL"],
    },
    {
      title: "Fake job offers",
      signs: ["Too-good-to-be-true pay", "Requests for personal info or payment upfront", "No official company email"],
    },
    {
      title: "Marketplace seller scams",
      signs: ["Pressure to pay outside the platform", "Unusually low prices", "Refusal to use buyer protection"],
    },
    {
      title: "Invoice and payment fraud",
      signs: ["Changed bank details", "Urgent payment requests", "Slightly misspelled company names"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Scam Education Center</h1>
      <p className="text-gray-400 mb-10">
        Learn the most common warning signs. TrustCheck helps you investigate, but knowledge is your first defense.
      </p>

      <div className="space-y-6">
        {scams.map((s) => (
          <div key={s.title} className="bg-dark-800 border border-dark-700 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-3">{s.title}</h2>
            <ul className="space-y-2">
              {s.signs.map((sign) => (
                <li key={sign} className="flex gap-2 text-gray-300">
                  <span className="text-gold-400">•</span> {sign}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gold-600/10 border border-gold-600/30 rounded-2xl p-6">
        <h3 className="font-semibold mb-2">Remember</h3>
        <p className="text-gray-300">
          Always verify using official contact information you find yourself — never trust contact details sent in the suspicious message.
        </p>
      </div>
    </div>
  );
}