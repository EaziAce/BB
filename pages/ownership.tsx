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
          content="The Kickfixx Ownership Token represents compliant, fractional ownership access to revenue-generating healthy vending machines."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Roboto+Condensed:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="page">
        {/* background glows (match index) */}
        <div className="hero-glows" aria-hidden>
          <div className="glow glow-top" />
          <div className="glow glow-bottom" />
        </div>

        {/* Header — identical feel to index */}
        <header className="header">
          <Link href="/" className="logoLink" aria-label="Kickfixx Home">
            <Image
              src="/kickfixx-logo-00B8FF.png"
              alt="Kickfixx"
              width={160}
              height={40}
              priority
            />
          </Link>

          <nav className="nav">
            <Link href="/kfx" className="navLink">
              KFX Token
            </Link>
            <Link href="/contact" className="navLink">
              Contact
            </Link>
          </nav>
        </header>

        {/* HERO (two-column like index, stacks on mobile) */}
        <section className="hero">
          <div>
            <div className="tokenWrap">
              <div aria-hidden className="tokenAura" />
              <Image
                src="/ownership-token.png" // ensure transparent PNG in /public
                alt="Kickfixx Ownership Token"
                fill
                sizes="(max-width: 768px) 180px, 260px"
                style={{ objectFit: "contain", position: "relative", zIndex: 1 }}
                priority
              />
            </div>

            <h1 className="h1">
              The <span className="brand">Ownership Token</span> — Fractional Access to Real-World Revenue
            </h1>
            <p className="lead">
              A compliant, tokenized path to participate in revenue from healthy vending machines on
              the Kickfixx network.
            </p>
            <p className="sub">
              Built for transparency and community alignment — with clear legal rails, reporting,
              and on-chain access.
            </p>

            <div className="ctaRow">
              <a href="#how" className="btnPrimary">
                How It Works
              </a>
              <Link href="/kfx" className="btnGhost">
                See KFX (Rewards)
              </Link>
            </div>
          </div>

          {/* Right-side visual tile (mirrors index hero image treatment) */}
          <div className="heroImageWrap">
            <div aria-hidden className="heroTileAura" />
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

        {/* WHAT IT IS */}
        <section className="section">
          <h2 className="sectionTitle">What Is the Ownership Token?</h2>
          <p className="sectionSub">
            A <strong>compliant security token</strong> representing fractional exposure to a
            pool of vending machine revenues — separate from{" "}
            <Link href="/kfx" className="footLink">
              KFX (rewards)
            </Link>{" "}
            and offered via licensed partners with KYC/AML.
          </p>

          <div className="gridCards">
            <div className="card">
              <h3 className="cardTitle">Real-World Revenue</h3>
              <p className="cardText">Backed by sales from deployed healthy vending machines.</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Reg-Friendly Rails</h3>
              <p className="cardText">Offered via exemptions (e.g., Reg D/CF) through partners.</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Transparent</h3>
              <p className="cardText">Standardized reporting, clear terms, on-chain access.</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">At-a-Glance</h3>
              <p className="cardText">📈 Underlying: Vending revenue</p>
              <p className="cardText">🛡️ Offering: Reg-compliant (partners)</p>
              <p className="cardText">🔍 KYC/AML: Required</p>
              <p className="cardText">🧾 Reports: Standardized</p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="section sectionDark">
          <h2 className="sectionTitle">How It Works</h2>
          <p className="sectionSub">Clean steps from interest to ongoing ownership.</p>

          <div className="gridCards">
            <div className="card">
              <h3 className="cardTitle">1) Early Access & Verification</h3>
              <p className="cardText">
                Join the list, complete KYC/AML with the offering partner when live.
              </p>
            </div>
            <div className="card">
              <h3 className="cardTitle">2) Allocation & Purchase</h3>
              <p className="cardText">
                Receive allocation, review docs, and purchase via the partner portal.
              </p>
            </div>
            <div className="card">
              <h3 className="cardTitle">3) Transparent Reporting</h3>
              <p className="cardText">
                Track placement progress, sales summaries, and distributions via standardized updates.
              </p>
            </div>
          </div>

          <div className="infoCard" style={{ marginTop: 24 }}>
            <p className="infoText">
              <strong className="infoStrong">Note:</strong> This page is informational and not an
              offer to sell securities. Any offering will be made only through official
              documentation on a licensed platform.
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="section">
          <h2 className="sectionTitle">Why the Ownership Token?</h2>
          <div className="gridCards">
            <div className="card">
              <h3 className="cardTitle">Real-World Yield Exposure</h3>
              <p className="cardText">
                Potential distributions tied to actual sales at placed machines.
              </p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Aligned with Community</h3>
              <p className="cardText">
                Ownership that grows with network scale—not just brand fandom.
              </p>
            </div>
            <div className="card">
              <h3 className="cardTitle">On-Chain Access</h3>
              <p className="cardText">
                Modern rails for access, with the goal of future transfer options (subject to rules).
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section sectionDark">
          <h2 className="sectionTitle">Ownership Token — FAQ</h2>
          <div className="gridFaq">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="faqItem">
                <summary className="faqSummary">
                  <span className="faqQ">{item.q}</span>
                  <span className="plus" aria-hidden>
                    ＋
                  </span>
                </summary>
                <p className="faqA">{item.a}</p>
              </details>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link href="/contact" className="btnPrimary">
              Contact Us
            </Link>
            <p style={{ marginTop: 12 }}>
              Prefer perks?{" "}
              <Link href="/kfx" className="footLink">
                Explore KFX →
              </Link>
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section">
          <h2 className="sectionTitle">Be First In Line</h2>
          <p className="sectionSub">
            Get on the list to receive allocation details as soon as we go live.
          </p>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Link href="/contact" className="btnPrimary">
              Join Early Access
            </Link>
          </div>
        </section>

        {/* Footer — match index styling */}
        <footer className="footer">
          <div style={{ marginBottom: 8 }}>
            <Link href="/kfx" className="footLink">
              KFX (Rewards)
            </Link>
            <span className="sep">•</span>
            <Link href="/contact" className="footLink">
              Contact
            </Link>
          </div>
          © {new Date().getFullYear()} Kickfixx. All rights reserved.
        </footer>
      </div>

      {/* styled-jsx — mirrors index structure */}
      <style jsx>{`
        .page {
          max-width: 1160px;
          margin: 0 auto;
          padding: 20px;
          position: relative;
          color: #fff;
          background: #0a0a0a;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }

        .hero-glows {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
        }
        .glow {
          position: absolute;
          height: 24rem;
          width: 24rem;
          border-radius: 9999px;
          filter: blur(60px);
        }
        .glow-top {
          top: -160px;
          left: -128px;
          opacity: 0.3;
          background: radial-gradient(closest-side, #00b8ff, transparent);
        }
        .glow-bottom {
          bottom: -160px;
          right: -128px;
          opacity: 0.2;
          background: radial-gradient(closest-side, #00b8ff, transparent);
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0;
          border-bottom: 1px solid #1f2937;
        }
        .logoLink {
          display: inline-flex;
          align-items: center;
        }
        .nav {
          display: flex;
          gap: 16px;
        }
        .navLink {
          color: #00b8ff;
          font-weight: 800;
          text-decoration: none;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 28px;
          align-items: center;
          padding: 48px 0;
        }
        .h1 {
          font-size: 46px;
          line-height: 1.1;
          margin: 0 0 12px;
          font-family: "Roboto Condensed", Inter, system-ui;
          letter-spacing: 0.2px;
        }
        .brand {
          color: #00b8ff;
        }
        .lead {
          opacity: 0.9;
          margin: 0 0 8px;
        }
        .sub {
          color: #a1a1aa;
          margin: 0 0 12px;
        }
        .ctaRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin: 12px 0 6px;
        }
        .btnPrimary {
          display: inline-block;
          background: #00b8ff;
          color: #000;
          border-radius: 12px;
          padding: 12px 16px;
          font-weight: 800;
          text-decoration: none;
          font-family: "Roboto Condensed", Inter, system-ui;
          letter-spacing: 0.2px;
        }
        .btnGhost {
          display: inline-block;
          border: 1px solid #3f3f46;
          color: #fff;
          border-radius: 12px;
          padding: 12px 16px;
          font-weight: 600;
          text-decoration: none;
        }

        .heroImageWrap {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          border-radius: 20px;
          margin: 40px auto;
          max-width: 600px;
          background: radial-gradient(
            circle at center,
            rgba(0, 184, 255, 0.08) 0%,
            transparent 70%
          );
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6), 0 0 35px rgba(0, 184, 255, 0.35);
        }
        .heroImage {
          object-fit: contain;
          width: 100%;
          height: auto;
          transform: scale(1.02);
        }
        .heroTileAura {
          position: absolute;
          inset: 0;
          filter: blur(32px);
        }

        .tokenWrap {
          margin: 0 0 16px;
          width: 260px;
          height: 260px;
          position: relative;
        }
        .tokenAura {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(0, 184, 255, 0.25), transparent 70%);
          filter: blur(40px);
          border-radius: 50%;
        }

        .section {
          padding: 60px 0;
        }
        .sectionDark {
          background: #0d0d0d;
        }
        .sectionTitle {
          text-align: center;
          font-size: 32px;
          margin-bottom: 16px;
          font-family: "Roboto Condensed", Inter, system-ui;
          letter-spacing: 0.2px;
        }
        .sectionSub {
          text-align: center;
          opacity: 0.85;
          margin-bottom: 32px;
        }

        .gridCards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }
        .card {
          border-radius: 16px;
          border: 1px solid #27272a;
          background: rgba(24, 24, 27, 0.4);
          padding: 20px;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .card:hover {
          border-color: rgba(0, 184, 255, 0.5);
          box-shadow: 0 0 24px rgba(0, 184, 255, 0.2);
        }
        .cardTitle {
          color: #00b8ff;
          margin-bottom: 10px;
        }
        .cardText {
          opacity: 0.85;
        }

        .infoCard {
          margin: 24px auto 0;
          max-width: 900px;
          border-radius: 16px;
          border: 1px solid rgba(0, 184, 255, 0.4);
          background: #0b0f12;
          padding: 20px;
          text-align: center;
          box-shadow: 0 0 35px rgba(0, 184, 255, 0.12);
        }
        .infoText {
          color: #e4e4e7;
          margin: 0;
        }
        .infoStrong {
          font-weight: 800;
          color: #fff;
          font-family: "Roboto Condensed", Inter, system-ui;
        }

        .gridFaq {
          display: grid;
          gap: 12px;
          max-width: 960px;
          margin: 0 auto;
        }
        .faqItem {
          border-radius: 16px;
          border: 1px solid #27272a;
          background: rgba(24, 24, 27, 0.4);
          padding: 20px;
          box-shadow: 0 0 35px rgba(0, 184, 255, 0.1);
        }
        .faqSummary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          list-style: none;
        }
        .faqQ {
          font-weight: 800;
          font-family: "Roboto Condensed", Inter, system-ui;
        }
        .plus {
          color: #a1a1aa;
          margin-left: 16px;
          transition: transform 0.2s ease;
        }
        .faqItem[open] .plus {
          transform: rotate(45deg);
        }
        .faqA {
          margin-top: 12px;
          color: #a1a1aa;
        }

        .footer {
          margin-top: 60px;
          padding: 30px 0;
          border-top: 1px solid #1f2937;
          opacity: 0.8;
          font-size: 14px;
          text-align: center;
        }
        .footLink {
          color: #00b8ff;
          text-decoration: none;
          font-weight: 800;
        }
        .sep {
          margin: 0 8px;
          opacity: 0.5;
        }

        /* Responsive to match index */
        @media (max-width: 980px) {
          .hero {
            grid-template-columns: 1fr;
          }
          .h1 {
            font-size: 34px;
          }
        }
      `}</style>
    </>
  );
}

const FAQ_ITEMS = [
  {
    q: "Is this live now?",
    a: "Not yet. This page previews the compliant offering to come. Join Early Access to be notified first when allocations open.",
  },
  {
    q: "How is this different from KFX?",
    a: "KFX is a utility/reward token for perks and access. The Ownership Token is a compliant security representing fractional exposure to vending revenue.",
  },
  {
    q: "Will I need KYC/AML?",
    a: "Yes. Verification is required by the licensed offering platform prior to any purchase.",
  },
  {
    q: "Where do distributions come from?",
    a: "From sales revenue of deployed machines in the relevant pool, net of fees and per the offering documents.",
  },
  {
    q: "What are the fees?",
    a: "Any platform, admin, or servicing fees will be disclosed in the official offering documents before you invest.",
  },
  {
    q: "Can I sell my tokens later?",
    a: "Any potential transferability or secondary trading would be subject to applicable regulations and platform rules. Details will be disclosed at launch.",
  },
];
