// pages/ownership.tsx
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function OwnershipPage() {
  return (
    <>
      <Head>
        <title>Ownership Token — Kickfixx</title>
        <meta
          name="description"
          content="The Kickfixx Ownership Token — a compliant path to fractional exposure to revenue from real, placed vending machines."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Roboto+Condensed:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="page">
        {/* glows */}
        <div className="hero-glows" aria-hidden>
          <div className="glow glow-top" />
          <div className="glow glow-bottom" />
        </div>

        {/* header */}
        <header className="header">
          <Link href="/" className="logoLink" aria-label="Kickfixx Home">
            <Image src="/kickfixx-logo-00B8FF.png" alt="Kickfixx" width={160} height={40} priority />
          </Link>
          <nav className="nav">
            <Link href="/kfx" className="navLink">KFX Token</Link>
            <Link href="/ownership" className="navLink">Ownership</Link>
            <Link href="/contact" className="navLink">Contact</Link>
          </nav>
        </header>

        {/* hero */}
        <section className="hero">
          <div className="heroLeft">
            <div className="tokenWrap">
              <div aria-hidden className="tokenAura" />
              <Image
                src="/ownership-token.png"  // transparent PNG in /public
                alt="Kickfixx Ownership Token"
                fill
                sizes="(max-width: 768px) 180px, 260px"
                style={{ objectFit: "contain", position: "relative", zIndex: 1 }}
                priority
              />
            </div>

            <h1 className="h1">
              Own a Slice of the <span className="brand">Real</span> Network
            </h1>
            <p className="lead">
              The Ownership Token is a compliant security — fractional exposure to revenue
              from placed Kickfixx machines, offered via licensed partners.
            </p>
            <p className="sub">
              Clear rails, standardized reporting, and a modern on-chain access layer.
            </p>

            <div className="ctaRow">
              <a href="#how" className="btnGhost">How It Works</a>
              <Link href="/contact" className="btnPrimary">Get on the List</Link>
            </div>
          </div>

          <div className="heroImageWrap">
            <Image
              src="/ownership-token.png"
              alt="Ownership Token (large)"
              width={900}
              height={900}
              className="heroImage contain"
              priority
            />
          </div>
        </section>

        {/* what it is */}
        <section className="section">
          <h2 className="sectionTitle">What Is the Ownership Token?</h2>
          <p className="sectionSub">
            A regulated offering (e.g., via Reg D/CF partners) tied to machine revenue — not vibes.
          </p>

          <div className="gridCards">
            <div className="card">
              <h3 className="cardTitle">Real-World Revenue</h3>
              <p className="cardText">Exposure to sales from deployed machines within the pool.</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Reg-Ready Rails</h3>
              <p className="cardText">KYC/AML, disclosures, and issuance managed by licensed platforms.</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Transparent Reporting</h3>
              <p className="cardText">Standardized updates on placement, performance, and distributions.</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Clean Access</h3>
              <p className="cardText">On-chain access layer with a practical compliance wrapper.</p>
            </div>
          </div>
        </section>

        {/* how it works */}
        <section id="how" className="section sectionDark">
          <h2 className="sectionTitle">How It Works</h2>
          <p className="sectionSub">Straightforward steps from interest to ongoing lifecycle.</p>

          <div className="gridCards">
            <div className="card"><h3 className="cardTitle">1) Early Access & Verify</h3><p className="cardText">Join the list, complete KYC/AML when live.</p></div>
            <div className="card"><h3 className="cardTitle">2) Allocation & Purchase</h3><p className="cardText">Review docs and complete purchase on the partner portal.</p></div>
            <div className="card"><h3 className="cardTitle">3) Track & Distribute</h3><p className="cardText">Follow placements, sales, and distributions via standardized reports.</p></div>
          </div>

          <div className="infoCard">
            <p className="infoText">
              <strong className="infoStrong">Note:</strong> This page is informational and not an offer to sell securities.
              Any offering is made solely via official documents on licensed platforms.
            </p>
          </div>
        </section>

        {/* faq */}
        <section className="section">
          <h2 className="sectionTitle">Ownership Token — FAQ</h2>
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
            <Link href="/contact" className="btnPrimary">Contact Us</Link>
            <p style={{ marginTop: 12 }}>
              Just want perks? <Link href="/kfx" className="footLink">Explore KFX →</Link>
            </p>
          </div>
        </section>

        {/* final cta */}
        <section className="section">
          <h2 className="sectionTitle">Be First in Line</h2>
          <p className="sectionSub">Get allocation details as soon as we go live.</p>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Link href="/contact" className="btnPrimary">Join Early Access</Link>
          </div>
        </section>

        {/* footer */}
        <footer className="footer">
          <div>
            <Link href="/kfx" className="footLink">KFX (Rewards)</Link>
            <span className="sep"> • </span>
            <Link href="/contact" className="footLink">Contact</Link>
          </div>
          © {new Date().getFullYear()} Kickfixx. All rights reserved.
        </footer>
      </div>

      <style jsx>{`
        .page { max-width: 1160px; margin: 0 auto; padding: 20px; position: relative; color: #fff; }

        .hero-glows { position: fixed; inset: 0; pointer-events: none; z-index: -1; }
        .glow { position: absolute; height: 24rem; width: 24rem; border-radius: 9999px; filter: blur(60px); }
        .glow-top { top: -160px; left: -128px; opacity: .3; background: radial-gradient(closest-side, #00b8ff, rgba(0,0,0,0)); }
        .glow-bottom { bottom: -160px; right: -128px; opacity: .2; background: radial-gradient(closest-side, #00b8ff, rgba(0,0,0,0)); }

        .header { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid #1f2937; }
        .logoLink { display: inline-flex; align-items: center; }
        .nav { display: flex; gap: 16px; }
        .navLink { color: #00b8ff; font-weight: 800; text-decoration: none; }

        .hero { display: grid; grid-template-columns: 1.2fr 1fr; gap: 28px; align-items: center; padding: 48px 0; }
        .h1 { font-size: 46px; line-height: 1.1; margin: 0 0 12px; font-family: "Roboto Condensed", Inter, system-ui; letter-spacing: .2px; }
        .brand { color: #00b8ff; }
        .lead { opacity: .9; margin: 0 0 8px; max-width: 56ch; }
        .sub { color: #a1a1aa; margin: 0 0 12px; max-width: 60ch; }
        .ctaRow { display: flex; gap: 12px; flex-wrap: wrap; margin: 12px 0 6px; }
        .btnPrimary { display: inline-block; background: #00b8ff; color: #000; border-radius: 12px; padding: 12px 16px; font-weight: 800; text-decoration: none; }
        .btnGhost { display: inline-block; border: 1px solid #3f3f46; color: #fff; border-radius: 12px; padding: 12px 16px; font-weight: 600; text-decoration: none; }
        .note { font-size: 12px; color: #71717a; margin-top: 8px; }

        .heroImageWrap { position: relative; display: flex; justify-content: center; align-items: center; overflow: hidden; border-radius: 20px; margin: 40px auto; max-width: 600px; background: radial-gradient(circle at center, rgba(0,184,255,.08) 0%, transparent 70%); box-shadow: 0 8px 24px rgba(0,0,0,.6), 0 0 35px rgba(0,184,255,.35); }
        .heroImage { width: 100%; height: auto; transform: scale(1.02); }
        .contain { object-fit: contain; }

        .tokenWrap { margin: 0 0 16px; width: 260px; height: 260px; position: relative; }
        .tokenAura { position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(0,184,255,.25), transparent 70%); filter: blur(40px); border-radius: 50%; }

        .section { padding: 60px 0; }
        .sectionDark { background: #0d0d0d; }
        .sectionTitle { text-align: center; font-size: 32px; margin-bottom: 16px; font-family: "Roboto Condensed", Inter, system-ui; font-weight: 800; letter-spacing: .2px; }
        .sectionSub { text-align: center; opacity: .85; margin-bottom: 32px; }

        .gridCards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; max-width: 1100px; margin: 0 auto; text-align: center; }
        .card { border-radius: 16px; border: 1px solid #27272a; background: rgba(24,24,27,.4); padding: 20px; transition: box-shadow .2s ease, border-color .2s ease; }
        .card:hover { border-color: rgba(0,184,255,.5); box-shadow: 0 0 24px rgba(0,184,255,.2); }
        .cardTitle { color: #00b8ff; margin-bottom: 10px; }
        .cardText { opacity: .85; }

        .infoCard { margin: 24px auto 0; max-width: 900px; border-radius: 16px; border: 1px solid rgba(0,184,255,.4); background: #0b0f12; padding: 20px; text-align: center; box-shadow: 0 0 35px rgba(0,184,255,.12); }
        .infoText { color: #e4e4e7; margin: 0; }
        .infoStrong { font-weight: 800; color: #fff; font-family: "Roboto Condensed", Inter, system-ui; }

        .gridFaq { display: grid; gap: 12px; max-width: 960px; margin: 0 auto; }
        .faqItem { border-radius: 16px; border: 1px solid #27272a; background: rgba(24,24,27,.4); padding: 20px; box-shadow: 0 0 35px rgba(0,184,255,.10); }
        .faqSummary { display: flex; align-items: center; justify-content: space-between; cursor: pointer; list-style: none; }
        .faqQ { font-weight: 800; font-family: "Roboto Condensed", Inter, system-ui; }
        .plus { color: #a1a1aa; margin-left: 16px; transition: transform .2s ease; }
        .faqItem[open] .plus { transform: rotate(45deg); }
        .faqA { margin-top: 12px; color: #a1a1aa; }

        .footer { margin-top: 20px; padding: 30px 0; border-top: 1px solid #1f2937; opacity: .8; font-size: 14px; text-align: center; }
        .footLink { color: #00b8ff; text-decoration: none; font-weight: 800; }
        .sep { opacity: .5; }

        @media (max-width: 980px) {
          .hero { grid-template-columns: 1fr; }
          .h1 { font-size: 34px; }
        }
      `}</style>
    </>
  );
}

const FAQ_ITEMS = [
  { q: "Is this live now?", a: "Not yet. This previews the compliant offering to come. Join Early Access to be notified first." },
  { q: "KFX vs Ownership Token?", a: "KFX is rewards & access. Ownership Token is a compliant security tied to machine revenue (via licensed platforms)." },
  { q: "KYC/AML required?", a: "Yes. Verification is required by the offering platform prior to any purchase." },
  { q: "Where do distributions come from?", a: "From sales revenue of deployed machines in the relevant pool, net of fees per offering docs." },
  { q: "Can I sell later?", a: "Any transferability/secondary trading depends on regulations and platform rules; details disclosed at launch." },
];
