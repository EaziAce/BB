// pages/kfx.tsx
import Head from "next/head";
import Image from "next/image";


export default function KFXPage() {
  return (
    <>
      <Head>
        <title>KFX — Kickfixx Reward Token</title>
        <meta
          name="description"
          content="KFX is the official reward token of Kickfixx — unlocking perks, discounts, and early access to tokenized vending machine ownership."
        />
      </Head>

      <main className="bg-[#0A0A0A] text-white">
        {/* Section 1: Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30"
                 style={{ background: "radial-gradient(closest-side, #00B8FF, transparent)" }} />
            <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full blur-3xl opacity-20"
                 style={{ background: "radial-gradient(closest-side, #00B8FF, transparent)" }} />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
            <div className="mx-auto w-40 h-40 md:w-56 md:h-56 relative mb-8">
              <Image
                src="/kfx-token.png"
                alt="KFX Token"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(0,184,255,0.35)]"
                priority
              />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Fuel the Future of Wellness with <span className="text-[#00B8FF]">KFX</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-zinc-300 max-w-2xl mx-auto">
              The official reward token of Kickfixx — unlocking exclusive perks, discounts,
              and early access to revenue-generating vending machine ownership.
            </p>
            <p className="mt-2 text-sm md:text-base text-zinc-400">
              This isn’t just a rewards point. It’s your entry into the world’s first decentralized wellness ecosystem.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#join" className="inline-flex items-center justify-center rounded-2xl bg-[#00B8FF] px-6 py-3 font-semibold text-black hover:opacity-90 transition">
                Join Early Access
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-2xl border border-zinc-700 px-6 py-3 font-medium hover:border-zinc-500 transition">
                Learn How It Works
              </a>
            </div>
          </div>
        </section>

        {/* Section 2: What is KFX */}
        <section id="what-is-kfx" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">What Is KFX? Your Key to the Kickfixx Ecosystem</h2>
              <p className="mt-4 text-zinc-300">
                KFX is the <span className="text-white font-medium">official utility token</span> of Kickfixx. It rewards early supporters,
                customers, and future investors for helping us build the world’s first{" "}
                <span className="text-white font-medium">decentralized wellness network</span>.
              </p>
              <ul className="mt-5 space-y-2 text-zinc-300">
                <li>• <span className="text-white">Earn it</span> via socials, referrals, and purchases (vending coming soon).</li>
                <li>• <span className="text-white">Use it</span> for discounts, free items, exclusive access, and priority to invest.</li>
                <li>• <span className="text-white">Grow with us</span> as KFX unlocks governance and deeper participation over time.</li>
              </ul>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <div className="rounded-xl border border-zinc-800 p-3 bg-zinc-900/40">⚡ <span className="text-zinc-400">Symbol:</span> KFX</div>
                <div className="rounded-xl border border-zinc-800 p-3 bg-zinc-900/40">🧱 <span className="text-zinc-400">Network:</span> Base (L2)</div>
                <div className="rounded-xl border border-zinc-800 p-3 bg-zinc-900/40">💸 <span className="text-zinc-400">Fees:</span> Ultra-low</div>
                <div className="rounded-xl border border-zinc-800 p-3 bg-zinc-900/40">🛠️ <span className="text-zinc-400">Use:</span> Rewards → Access → Governance</div>
              </div>

              <div className="mt-6">
                <a href="#how" className="text-[#00B8FF] hover:underline">Learn How KFX Works →</a>
              </div>
            </div>

            <div className="relative h-64 md:h-[420px]">
              <Image
                src="/kfx-token.png"
                alt="KFX Token"
                fill
                className="object-contain drop-shadow-[0_0_35px_rgba(0,184,255,0.35)]"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Why KFX Exists */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#0A0A0A] to-[#0E0F12]">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Why KFX Exists</h2>
            <p className="mt-4 text-zinc-300">
              The world is shifting toward transparency, community ownership, and decentralized control. Traditional brands keep all the profits.
              <span className="text-white font-medium"> Kickfixx is doing the opposite</span> — we’re building an ecosystem where the people who fuel the movement, benefit from the movement.
            </p>
            <ul className="mt-6 space-y-2 text-zinc-300">
              <li>• Reward early supporters who believe before it’s mainstream.</li>
              <li>• Replace outdated point systems with something that actually holds value.</li>
              <li>• Build the foundation for decentralized ownership, not just fandom.</li>
              <li>• Create a gateway to future revenue participation and governance.</li>
            </ul>

            <div className="mt-8 rounded-2xl border border-[#00B8FF]/40 bg-[#0B0F12] p-5 text-center">
              <p className="text-zinc-200">
                <span className="font-semibold text-white">KFX is not just a loyalty token.</span> It is your access pass into the ownership era of physical wellness infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: How to Earn */}
        <section id="how" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold">How to Earn KFX</h2>
            <p className="mt-3 text-zinc-300">Start earning now — no machine required.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Join the Early Access List" badge="Available now" detail="+50 KFX on signup" />
              <Card title="Follow & Engage on Socials" badge="Available now" detail="+5–20 KFX per action" />
              <Card title="Refer a Gym / Wellness Location" badge="Coming soon" detail="+500 KFX after acceptance" />
              <Card title="Pay with Crypto (On Launch)" badge="Coming soon" detail="+10% KFX bonus on purchases" />
            </div>

            <div className="mt-8">
              <a href="#join" className="inline-flex items-center justify-center rounded-2xl bg-[#00B8FF] px-6 py-3 font-semibold text-black hover:opacity-90 transition">
                Start Earning Today
              </a>
            </div>
          </div>
        </section>

        {/* Section 5: What KFX Unlocks */}
        <section className="py-16 md:py-24 bg-[#0E0F12]">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold">What KFX Unlocks</h2>
            <p className="mt-3 text-zinc-300">KFX grows in power as the network expands.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <UnlockCard phase="Phase 1" title="Rewards & Discounts" desc="Redeem tokens for free items, merch, and exclusive perks." />
              <UnlockCard phase="Phase 2" title="Early Investor Access" desc="Priority allocation in tokenized vending ownership rounds." />
              <UnlockCard phase="Phase 3" title="Governance & Voting" desc="Help decide new locations, product mix, and ecosystem direction." />
              <UnlockCard phase="Phase 4" title="Revenue Participation" desc="Gateway to owning fractional revenue in a decentralized network." />
            </div>

            <div className="mt-8 rounded-2xl border border-[#00B8FF]/40 bg-[#0B0F12] p-5 text-center">
              <p className="text-zinc-200">
                <span className="font-semibold text-white">Holding KFX today</span> gives you early access, priority advantages, and potential future ownership of revenue-generating assets.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Early Access / Email Capture */}
        <section id="join" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Get Your First KFX Tokens — Before Public Release</h2>
            <p className="mt-3 text-zinc-300">
              Founding members receive bonus KFX, priority access to vending ownership rounds, and insider updates.
            </p>

            <form
              className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3"
              method="POST"
              action="https://formspree.io/f/mpwyjqgq"
            >
              <input
                type="text"
                name="name"
                placeholder="First name (optional)"
                className="rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                className="rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#00B8FF]"
              />
              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center rounded-2xl bg-[#00B8FF] px-6 py-3 font-semibold text-black hover:opacity-90 transition"
              >
                Claim My Early Access Spot
              </button>
            </form>

            <p className="mt-3 text-xs text-zinc-500">
              ✅ You’re in! You’ll receive updates on token activation and bonus opportunities.
            </p>
          </div>
        </section>

        {/* Section 7: Vision */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#0A0A0A] to-[#0E0F12]">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">The Future of Wellness Is Decentralized</h2>
            <p className="mt-4 text-zinc-300">
              Wellness infrastructure owned by the people who use it. Transparent revenue. Community-powered growth.
              We’re starting with healthy vending — but KFX is your key to everything that comes next.
            </p>
            <div className="mt-8 rounded-2xl border border-[#00B8FF]/40 bg-[#0B0F12] p-5">
              <p className="text-zinc-200">
                <span className="font-semibold text-white">Kickfixx isn’t just launching a product —</span>{" "}
                we’re building a new economic layer for human performance and wellness.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7.5: FAQ */}
<section id="faq" className="py-16 md:py-24">
  <div className="mx-auto max-w-4xl px-6">
    <h2 className="text-2xl md:text-3xl font-semibold text-center">KFX Early Access — FAQ</h2>
    <p className="mt-3 text-zinc-300 text-center">
      Clear answers to the most common questions about KFX and the Ownership Token.
    </p>

    <div className="mt-10 space-y-3">
      {[
        {
          q: "Can I buy tokens right now?",
          a: "Not yet. This is the Early Access phase for interest and whitelist allocation. Purchases will open in the next phase. Early members get bonus KFX and first rights to invest."
        },
        {
          q: "What’s the difference between KFX and the Ownership Token?",
          a: "KFX is a reward/utility token used for perks, access, and engagement. The Ownership Token is a regulated asset representing fractional machine ownership with revenue payouts. KFX holders get priority access when Ownership Tokens go live."
        },
        {
          q: "Do I need a crypto wallet today?",
          a: "No. You can join Early Access with just an email. We’ll guide you to set up a wallet (e.g., Coinbase Wallet) before token distribution."
        },
        {
          q: "Which network will KFX use?",
          a: "We plan to launch on Base (Coinbase L2) for fast, low-fee transactions and smooth onboarding."
        },
        {
          q: "Are these tokens securities?",
          a: "KFX is a utility/rewards token (not an investment). The Ownership Token will be structured as a compliant security (e.g., Reg D/CF via a licensed platform) with KYC/AML as required."
        },
        {
          q: "When will I receive KFX from Early Access?",
          a: "Upon Phase-1 activation (post-signup campaign). Founding members receive bonus KFX and instructions to claim."
        },
        {
          q: "When does the Ownership Token sale open?",
          a: "After first machine placement is announced and legal/compliance setup is complete. Early Access members will be notified first."
        },
        {
          q: "How do I earn KFX now without a machine live?",
          a: "Join Early Access, engage on socials, and refer locations. Purchases (+ crypto bonuses) start when machines go live."
        },
        {
          q: "What fees are involved?",
          a: "KFX transactions on Base are very low (typically cents). Ownership Token platform fees will be disclosed at launch."
        },
        {
          q: "Who do I contact with questions?",
          a: "Email info@kickfixx.com and include “KFX” in the subject."
        }
      ].map((item, i) => (
        <details
          key={i}
          className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 open:border-[#00B8FF]/50 transition"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between">
            <span className="font-semibold">{item.q}</span>
            <span className="ml-4 text-zinc-500 group-open:rotate-45 transition">＋</span>
          </summary>
          <p className="mt-3 text-zinc-400">{item.a}</p>
        </details>
      ))}
    </div>

    <div className="mt-8 text-center">
      <a href="#join" className="inline-flex items-center justify-center rounded-2xl bg-[#00B8FF] px-6 py-3 font-semibold text-black hover:opacity-90 transition">
        Join Early Access
      </a>
    </div>
  </div>
</section>


        {/* Section 8: Final CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Phase One Is Now Open — Don’t Watch the Future Happen. Own It.</h2>
            <ul className="mt-5 text-zinc-300 space-y-2">
              <li>• Bonus KFX tokens for founding members</li>
              <li>• Early access to tokenized vending ownership rounds</li>
              <li>• Priority in future governance</li>
            </ul>
            <p className="mt-3 text-zinc-400">Founding benefits are limited and won’t repeat in later phases.</p>

            <div className="mt-8">
              <a href="#join" className="inline-flex items-center justify-center rounded-2xl bg-[#00B8FF] px-6 py-3 font-semibold text-black hover:opacity-90 transition">
                Join Kickfixx Phase One
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Card({ title, badge, detail }: { title: string; badge: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-xs rounded-full border border-zinc-700 px-2 py-1 text-zinc-400">{badge}</span>
      </div>
      <p className="mt-2 text-zinc-400">{detail}</p>
    </div>
  );
}

function UnlockCard({ phase, title, desc }: { phase: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
      <div className="text-[#00B8FF] text-xs font-semibold">{phase}</div>
      <div className="mt-1 font-semibold">{title}</div>
      <p className="mt-2 text-zinc-400 text-sm">{desc}</p>
    </div>
  );
}
