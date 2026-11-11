export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-invert">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-400">
        TrustCheck is designed with privacy in mind. You control your data.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-3">What we collect</h2>
      <p className="text-gray-300">Account information (email) and the content you submit for investigation. We never ask for passwords, authentication codes, or full payment credentials.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">Retention & deletion</h2>
      <p className="text-gray-300">You can delete any investigation and your entire history at any time from your account. Uploaded files are treated as untrusted data and are never executed.</p>
      <h2 className="text-xl font-semibold mt-8 mb-3">Security</h2>
      <p className="text-gray-300">All analysis happens on secure backend infrastructure. API keys are never exposed to the frontend. We recommend using strong, unique passwords.</p>
    </div>
  );
}