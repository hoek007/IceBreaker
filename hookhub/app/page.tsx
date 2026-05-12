const features = [
  {
    title: "Guaranteed Delivery",
    desc: "Every event is persisted and retried until confirmed. Zero-loss architecture with at-least-once semantics.",
    iconBg: "bg-violet-500/15",
    icon: (
      <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Smart Retries",
    desc: "Exponential backoff with jitter. Configurable retry windows, dead-letter queues, and alerting on failure.",
    iconBg: "bg-cyan-500/15",
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Real-time Logs",
    desc: "Live streaming event feed with full payload inspection, filtering, and one-click replay of any event.",
    iconBg: "bg-emerald-500/15",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Fan-out Routing",
    desc: "One incoming webhook, many destinations. Apply filters and route to the right services automatically.",
    iconBg: "bg-orange-500/15",
    icon: (
      <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
      </svg>
    ),
  },
  {
    title: "Payload Transforms",
    desc: "Modify events in-flight with lightweight JS transforms. Reshape, filter, or enrich payloads before delivery.",
    iconBg: "bg-pink-500/15",
    icon: (
      <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Verified Sources",
    desc: "Automatic signature verification for Stripe, GitHub, Shopify, Twilio, and 50+ providers out of the box.",
    iconBg: "bg-blue-500/15",
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const steps = [
  {
    title: "Point your provider at Hookhub",
    desc: "Replace your endpoint URL with a Hookhub ingress URL in any provider — Stripe, GitHub, Shopify, or your own service.",
    code: "https://in.hookhub.dev/e/your-endpoint-id",
  },
  {
    title: "Define routing and transforms",
    desc: "Set destinations, apply payload filters, write lightweight transforms, and configure retry policies — all from the dashboard or API.",
    code: null,
  },
  {
    title: "Monitor every delivery",
    desc: "Watch events flow in real-time, inspect full request and response payloads, and replay any failed event with a single click.",
    code: null,
  },
];

const feed = [
  { status: "200", method: "POST", path: "/webhooks/stripe/payment_intent", time: "2ms", ts: "12:41:03" },
  { status: "200", method: "POST", path: "/webhooks/github/push", time: "4ms", ts: "12:41:01" },
  { status: "retry", method: "POST", path: "/webhooks/shopify/order_created", time: "—", ts: "12:40:58" },
  { status: "200", method: "POST", path: "/webhooks/twilio/message_status", time: "1ms", ts: "12:40:55" },
  { status: "200", method: "POST", path: "/webhooks/stripe/charge_refunded", time: "3ms", ts: "12:40:52" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-x-hidden">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-black text-sm">
              H
            </div>
            <span className="font-bold text-lg tracking-tight">Hookhub</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            {["Features", "Docs", "Pricing", "Status"].map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:block">
              Sign in
            </button>
            <button className="text-sm px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 transition-colors font-medium">
              Get started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 hookhub-grid">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/15 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Now in public beta — free up to 10k events/mo
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.05]">
            Webhooks that{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              actually deliver
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hookhub is the webhook infrastructure layer your team never has to build.
            Guaranteed delivery, fan-out routing, real-time logs — in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 font-semibold transition-all shadow-lg shadow-violet-500/25">
              Start for free →
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/10 text-zinc-300 hover:bg-white/5 font-medium transition-all">
              View the docs
            </button>
          </div>

          {/* Mock terminal */}
          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/50 text-left">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/30">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-4 text-zinc-500 text-xs font-mono">hookhub — live event feed</span>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                live
              </span>
            </div>
            <div className="p-3 font-mono text-sm space-y-1">
              {feed.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-zinc-400 hover:bg-white/[0.04] rounded-lg px-3 py-2 transition-colors cursor-default"
                >
                  <span className="text-zinc-600 text-xs w-14 flex-shrink-0">{item.ts}</span>
                  <span
                    className={`w-11 text-center text-xs px-1.5 py-0.5 rounded font-semibold flex-shrink-0 ${
                      item.status === "200"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-yellow-500/15 text-yellow-400"
                    }`}
                  >
                    {item.status}
                  </span>
                  <span className="text-violet-400 text-xs w-10 flex-shrink-0">{item.method}</span>
                  <span className="text-zinc-300 flex-1 truncate">{item.path}</span>
                  <span className="text-zinc-600 text-xs flex-shrink-0">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <div className="border-y border-white/5 py-6 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-sm text-zinc-500">
          {["Stripe", "GitHub", "Shopify", "Twilio", "SendGrid", "PagerDuty", "Slack"].map((s) => (
            <span key={s} className="font-medium tracking-wide uppercase text-xs">{s}</span>
          ))}
          <span className="text-zinc-600 text-xs">+ 50 more providers</span>
        </div>
      </div>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything webhooks need</h2>
            <p className="text-zinc-400 text-lg">Built for reliability. Designed for developers.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-6 hover:border-violet-500/40 hover:bg-zinc-900/70 transition-all group cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${f.iconBg}`}>
                  {f.icon}
                </div>
                <h3 className="font-semibold text-base mb-2 group-hover:text-violet-300 transition-colors">
                  {f.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Up in three steps</h2>
            <p className="text-zinc-400 text-lg">From zero to production-grade webhook handling in minutes.</p>
          </div>
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center font-bold text-sm shadow-lg shadow-violet-500/30">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
                  {s.code && (
                    <div className="mt-3 rounded-lg bg-black/60 border border-white/5 px-4 py-3 font-mono text-sm text-emerald-400 break-all">
                      {s.code}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-950/40 to-cyan-950/30 p-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-600/15 rounded-full blur-3xl" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 relative">Ready to hook in?</h2>
          <p className="text-zinc-400 text-lg mb-8 relative">
            Free up to 10,000 events/month. No credit card required.
          </p>
          <button className="relative px-10 py-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 font-bold text-lg transition-all shadow-xl shadow-violet-500/30">
            Create your free account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-violet-500 to-cyan-500" />
            <span className="font-semibold">Hookhub</span>
          </div>
          <p className="text-zinc-500 text-sm">© 2025 Hookhub, Inc. Built for developers.</p>
          <div className="flex gap-6 text-sm text-zinc-500">
            {["Privacy", "Terms", "Status", "GitHub"].map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
