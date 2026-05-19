export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          YouTube Growth Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          A/B Test Your YouTube Thumbnails&nbsp;&amp;&nbsp;Skyrocket Your CTR
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload multiple thumbnail variations, let real viewers decide, and automatically promote the winner — all from one dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start A/B Testing — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Social proof strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          <div>
            <p className="text-2xl font-bold text-white">3.2×</p>
            <p className="text-xs text-[#8b949e] mt-1">Average CTR lift</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">12k+</p>
            <p className="text-xs text-[#8b949e] mt-1">Tests run</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">4,800+</p>
            <p className="text-xs text-[#8b949e] mt-1">Creators</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 text-center shadow-lg">
          <p className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited A/B thumbnail tests",
              "YouTube Analytics API integration",
              "Auto-promote winning thumbnail",
              "Real-time CTR dashboard",
              "Up to 50 active videos",
              "Email alerts on test completion"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the thumbnail A/B test work?",
              a: "You upload 2–4 thumbnail variations. ThumbnailAB rotates them on your video using the YouTube Data API and measures impressions and click-through rate for each via YouTube Analytics. After reaching statistical significance, the winner is automatically set as the permanent thumbnail."
            },
            {
              q: "Will this violate YouTube's Terms of Service?",
              a: "No. ThumbnailAB uses official YouTube Data API and YouTube Analytics API with OAuth 2.0. Thumbnail updates are a standard API operation explicitly supported by Google."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. You can cancel anytime from your billing portal powered by Lemon Squeezy. You'll retain access until the end of your billing period with no hidden fees."
            }
          ].map(({ q, a }) => (
            <details
              key={q}
              className="border border-[#30363d] rounded-lg bg-[#161b22] group"
            >
              <summary className="cursor-pointer px-5 py-4 font-semibold text-[#c9d1d9] list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] text-lg group-open:rotate-45 transition-transform inline-block">+</span>
              </summary>
              <p className="px-5 pb-4 text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} ThumbnailAB. Not affiliated with YouTube or Google.
      </footer>
    </main>
  );
}
