// pages/kfx.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function KFXPage() {
  return (
    <>
      <Head>
        <title>KFX — Kickfixx Reward Token</title>
        <meta
          name="description"
          content="KFX is the official reward token of Kickfixx — unlocking perks, discounts, and early access to tokenized vending machine ownership."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Roboto+Condensed:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="page">
        {/* background glows like index */}
        <div className="hero-glows" aria-hidden>
          <div className="glow glow-top" />
          <div className="glow glow-bottom" />
        </div>

        {/* Header — identical to index (legacyBehavior anchors for Pages Router) */}
        <header className="header">
          <Link href="/" legacyBehavior>
            <a className="logoLink" aria-label="Kickfixx Home">
              <Image
                src="/kickfixx-logo-00B8FF.png"
                alt="Kickfixx"
                width={160}
                height={40}
                priority
              />
            </a>
          </Link>

          <nav className="nav">
            <Link href="/kfx" legacyBehavior>
              <a className="navLink">KFX Token</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="navLink">Contact</a>
            </Link>
          </nav>
        </header>

        {/* HERO */}
        <section className="hero">
          <div>
            <div className="tokenWrap">
              <div aria-hidden className="tokenAura" />
              <Image
                src="/kfx-token.png"
                alt="KFX token"
                fill
                sizes="(max-width: 768px) 180px, 260px"
                style={{ objectFit: "contain", position: "relative", zIndex: 1 }}
                priority
              />
            </div>

            <h1 className="h1">
              Fuel the Future of Wellness with <span className="brand">KFX</span>
            </h1>
            <p className="lead">
              The official reward token of Kickfixx — unlocking exclusive perks, discounts,
              and early access to revenue-generating vending machine ownership.
            </p>
            <p className="sub">
              This isn’t just a rewards point. It’s your entry into the world’s first decentralized wellness ecosystem.
            </p>

            <div className="ctaRow">
              <a href="#join" className="btnPrimary">Join Early Access</a>
              <a href="#how" className="btnGhost">Learn How It Works</a>
            </div>

            <p className="note">
              Early Access = interest + whitelist. Purchasing opens in the next phase.
            </p>
          </div>

          {/* Right visual mirrors index layout */}
          <div className="heroImageWrap">
            <div aria-hidden className="heroTileAura" />
            <Image
              src="/kfx-token.png"
              alt="KFX token large"
              width={900}
              height={900}
              className="heroImage contain"
              priority
            />
          </div>
        </section>

        {/* WHAT IS KFX */}
        <section className="section">
          <h2 className="sectionTitle">What Is KFX? Your Key to the Kickfixx Ecosystem</h2>
          <p className="sectionSub">
            KFX is the <strong>official utility token</strong> of Kickfixx. Earn it, use it, and grow with the network.
          </p>

          <div className="gridCards">
            <div className="card">
              <h3 className="cardTitle">Earn It</h3>
              <p className="cardText">Socials, referrals, and purchases (vending coming soon).</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Use It</h3>
              <p className="cardText">Discounts, free items, exclusive access, and priority to invest.</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Grow With Us</h3>
              <p className="cardText">KFX unlocks governance and deeper participation over time.</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Stats</h3>
              <p className="cardText">⚡ Symbol: KFX</p>
              <p className="cardText">🧱 Network: Base (L2)</p>
              <p className="cardText">💸 Fees: Ultra-low</p>
              <p className="cardText">🛠️ Use: Rewards → Access → Governance</p>
            </div>
          </div>
        </section>

        {/* HOW TO EARN */}
        <section id="how" className="section sectionDark">
          <h2 className="sectionTitle">How to Earn KFX</h2>
          <p className="sectionSub">Start earning now — no machine required.</p>

          <div className="gridCards">
            <div className="card"><h3 className="cardTitle">Join Early Access</h3><p className="cardText">+50 KFX on signup</p></div>
            <div className="card"><h3 className="cardTitle">Engage on Socials</h3><p className="cardText">+5–20 KFX per action</p></div>
            <div className="card"><h3 className="cardTitle">Refer a Location</h3><p className="cardText">+500 KFX after acceptance</p></div>
            <div className="card"><h3 className="cardTitle">Pay with Crypto</h3><p className="cardText">+10% KFX bonus on purchases</p></div>
          </div>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <a href="#join" className="btnPrimary">Start Earning Today</a>
          </div>
        </section>

        {/* WHAT KFX UNLOCKS */}
        <section className="section">
          <h2 className="sectionTitle">What KFX Unlocks</h2>
          <p className="sectionSub">KFX grows in power as the network expands.</p>

          <div className="gridCards">
            <div className="card"><h3 className="cardTitle">Phase 1</h3><p className="cardText">Rewards & Discounts</p></div>
            <div className="card"><h3 className="cardTitle">Phase 2</h3><p className="cardText">Early Investor Access</p></div>
            <div className="card"><h3 className="cardTitle">Phase 3</h3><p className="cardText">Governance & Voting</p></div>
            <div className="card"><h3 className="cardTitle">Phase 4</h3><p className="cardText">Revenue Participation</p></div>
          </div>

          <div className="infoCard">
            <p className="infoText">
              <strong className="infoStrong">Holding KFX today</strong> gives you early access, priority advantages, and potential future ownership of revenue-generating assets.
            </p>
          </div>
        </section>

        {/* EARLY ACCESS FORM */}
        <section id="join" className="section">
          <h2 className="sectionTitle">Get Your First KFX Tokens — Before Public Release</h2>
          <p className="sectionSub">Founding members receive bonus KFX, priority access to vending ownership rounds, and insider updates.</p>

          <form method="POST" action="https://formspree.io/f/mpwyjqgq" className="form">
            <input type="text" name="name" aria-label="First name" placeholder="First name (optional)" className="inp" />
            <input type="email" name="email" aria-label="Email address" required placeholder="Email address" className="inp" />
            <button type="submit" className="btnPrimary wide">Claim My Early Access Spot</button>
          </form>

          <p className="note">✅ You’re in! You’ll receive updates on token activation and bonus opportunities.</p>
        </section>

        {/* FAQ */}
        <section className="section sectionDark">
          <h2 className="sectionTitle">KFX Early Access — FAQ</h2>
          <div className="gridFaq">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="faqItem">
                <summary className="faqSummary">
                  <span className="faqQ">{item.q}</span>
                  <span className="plus" aria-hidden>＋</span>
                </summary>
                <p className="faqA">{item.a}</p>
              </details>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <a href="#join" className="btnPrimary">Join Early Access</a>
            <p style={{ marginTop: 12 }}>
              <Link href="/ownership" legacyBehavior>
                <a className="footLink">Ownership Token (Coming Soon) →</a>
              </Link>
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section">
          <h2 className="sectionTitle">Phase One Is Now Open — Don’t Watch the Future Happen. Own It.</h2>
          <ul className="sectionSub" style={{ listStyle: "none", padding: 0 }}>
            <li>• Bonus KFX tokens for founding members</li>
            <li>• Early access to tokenized vending ownership rounds</li>
            <li>• Priority in future governance</li>
          </ul>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <a href="#join" className="btnPrimary">Join Kickfixx Phase One</a>
          </div>
        </section>

        {/* Footer — same look/feel */}
        <footer className="footer">
          <div style={{ marginBottom: 8 }}>
            <Link href="/ownership" legacyBehavior>
              <a className="footLink">Ownership Token (Coming Soon)</a>
            </Link>
          </div>
          © {new Date().getFullYear()} Kickfixx. All rights reserved.
        </footer>
      </div>

      <style jsx>{`
        .page { max-width: 1160px; margin: 0 auto; padding: 20px; position: relative; }
        .hero-glows { position: fixed; inset: 0; pointer-events: none; z-index: -1; }
        .glow { position: absolute; height: 24rem; width: 24rem; border-radius: 9999px; filter: blur(60px); }
        .glow-top { top: -160px; left: -128px; opacity: .3; background: radial-gradient(closest-side, #00b8ff, transparent); }
        .glow-bottom { bottom: -160px; right: -128px; opacity: .2; background: radial-gradient(closest-side, #00b8ff, transparent); }

        .header { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid #1f2937; }
        .logoLink { display: inline-flex; align-items: center; }
        .nav { display: flex; gap: 16px; }
        .navLink { color: #00b8ff; font-weight: 800; text-decoration: none; }

        .hero { display: grid; grid-template-columns: 1.2fr 1fr; gap: 28px; align-items: center; padding: 48px 0; }
        .h1 { font-size: 46px; line-height: 1.1; margin: 0 0 12px; }
        .brand { color: #00b8ff; }
        .lead { opacity: .9; margin: 0 0 8px; }
        .sub { color: #a1a1aa; margin: 0 0 12px; }
        .ctaRow { display: flex; gap: 12px; flex-wrap: wrap; margin: 12px 0 6px; }
        .btnPrimary { display: inline-block; background: #00b8ff; color: #000; border-radius: 12px; padding: 12px 16px; font-weight: 800; text-decoration: none; }
        .btnGhost { display: inline-block; border: 1px solid #3f3f46; color: #fff; border-radius: 12px; padding: 12px 16px; font-weight: 600; text-decoration: none; }
        .note { font-size: 12px; color: #71717a; margin-top: 8px; }

        .heroImageWrap {
          position: relative; display: flex; justify-content: center; align-items: center;
          overflow: hidden; border-radius: 20px; margin: 40px auto; max-width: 600px;
          background: radial-gradient(circle at center, rgba(0,184,255,.08) 0%, transparent 70%);
          box-shadow: 0 8px 24px rgba(0,0,0,.6), 0 0 35px rgba(0,184,255,.35);
        }
        .heroImage { width: 100%; height: auto; transform: scale(1.02); }
        .contain { object-fit: contain; }
        .heroTileAura { position: absolute; inset: 0; filter: blur(32px); }

        .tokenWrap { margin: 0 0 16px; width: 260px; height: 260px; position: relative; }
        .tokenAura { position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(0,184,255,.25), transparent 70%); filter: blur(40px); border-radius: 50%; }

        .section { padding: 60px 0; }
        .sectionDark { background: #0d0d0d; }
        .sectionTitle { text-align: center; font-size: 32px; margin-bottom: 16px; }
        .sectionSub { text-align: center; opacity: .85; margin-bottom: 32px; }

        .gridCards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; max-width: 1100px; margin: 0 auto; text-align: center; }
        .card { border-radius: 16px; border: 1px solid #27272a; background: rgba(24,24,27,.4); padding: 20px; transition: box-shadow .2s ease, border-color .2s ease; }
        .card:hover { border-color: rgba(0,184,255,.5); box-shadow: 0 0 24px rgba(0,184,255,.2); }
        .cardTitle { color: #00b8ff; margin-bottom: 10px; }
        .cardText { opacity: .85; }

        .infoCard { margin: 24px auto 0; max-width: 900px; border-radius: 16px; border: 1px solid rgba(0,184,255,.4); background: #0b0f12; padding: 20px; text-align: center; box-shadow: 0 0 35px rgba(0,184,255,.12); }
        .infoText { color: #e4e4e7; margin: 0; }
        .infoStrong { font-weight: 800; color: #fff; font-family: "Roboto Condensed", Inter, system-ui; }

        .form { margin: 0 auto; margin-top: 24px; max-width: 720px; display: grid; grid-template-columns: 1fr; gap: 12px; }
        .inp { border-radius: 16px; background: #18181b; border: 1px solid #27272a; padding: 12px 16px; color: #fff; outline: none; }
        .wide { width: 100%; }

        .gridFaq { display: grid; gap: 12px; max-width: 960px; margin: 0 auto; }
        .faqItem { border-radius: 16px; border: 1px solid #27272a; background: rgba(24,24,27,.4); padding: 20px; box-shadow: 0 0 35px rgba(0,184,255,.10); }
        .faqSummary { display: flex; align-items: center; justify-content: space-between; cursor: pointer; list-style: none; }
        .faqQ { font-weight: 800; font-family: "Roboto Condensed", Inter, system-ui; }
        .plus { color: #a1a1aa; margin-left: 16px; transition: transform .2s ease; }
        .faqItem[open] .plus { transform: rotate(45deg); }
        .faqA { margin-top: 12px; color: #a1a1aa; }

        .footer { margin-top: 60px; padding: 30px 0; border-top: 1px solid #1f2937; opacity: .8; font-size: 14px; text-align: center; }
        .footLink { color: #00b8ff; text-decoration: none; font-weight: 800; }

        @media (max-width: 980px) {
          .hero { grid-template-columns: 1fr; }
          .h1 { font-size: 34px; }
        }
      `}</style>
    </>
  );
}

const FAQ_ITEMS = [
  { q: "Can I buy tokens right now?", a: "Not yet. This is the Early Access phase for interest and whitelist allocation. Purchases will open in the next phase. Early members get bonus KFX and first rights to invest." },
  { q: "What’s the difference between KFX and the Ownership Token?", a: "KFX is a reward/utility token used for perks, access, and engagement. The Ownership Token is a regulated asset representing fractional machine ownership with revenue payouts. KFX holders get priority access when Ownership Tokens go live." },
  { q: "Do I need a crypto wallet today?", a: "No. You can join Early Access with just an email. We’ll guide you to set up a wallet before distribution." },
  { q: "Which network will KFX use?", a: "We plan to launch on Base (Coinbase L2) for fast, low-fee transactions and smooth onboarding." },
  { q: "Are these tokens securities?", a: "KFX is a utility/rewards token (not an investment). The Ownership Token will be structured as a compliant security via a licensed platform." },
];

