// pages/ownership.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OwnershipPage() {
  return (
    <>
      <Head>
        <title>Ownership Token — Kickfixx</title>
        <meta
          name="description"
          content="The Kickfixx Ownership Token represents compliant, fractional ownership access to revenue-generating healthy vending machines."
        />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Roboto+Condensed:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* ===== Top Header (Home / KFX / Contact) with glow + responsive ===== */}
      <header className="kfHeader">
        <Link href="/" className="kfLogoLink" aria-label="Kickfixx Home">
          <Image src="/kickfixx-logo-00B8FF.png" alt="Kickfixx" width={140} height={36} />
        </Link>

        <nav className="kfNav">
          <Link href="/" className="kfNavLink">Home</Link>
          <Link href="/kfx" className="kfNavLink">KFX</Link>
          <Link href="/contact" className="kfNavLink">Contact</Link>
        </nav>

        <style jsx>{`
          .kfHeader {
            position: sticky;
            top: 0;
            z-index: 50;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 24px;
            background: #0A0A0A;
            border-bottom: 1px solid #1f2937;
            -webkit-backdrop-filter: saturate(120%) blur(0px);
            backdrop-filter: saturate(120%) blur(0px);
          }
          .kfHeader::before,
          .kfHeader::after {
            content: "";
            position: absolute;
            height: 18rem;
            width: 18rem;
            border-radius: 9999px;
            filter: blur(48px);
            pointer-events: none;
            z-index: -1;
            opacity: 0.25;
          }
          .kfHeader::before {
            top: -9rem; left: -6rem;
            background: radial-gradient(closest-side, #00B8FF, rgba(0,0,0,0));
          }
          .kfHeader::after {
            bottom: -10rem; right: -8rem;
            background: radial-gradient(closest-side, #00B8FF, rgba(0,0,0,0));
            opacity: 0.18;
          }
          .kfLogoLink { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; }
          .kfNav { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; justify-content: flex-end; }
          .kfNavLink {
            color: #00B8FF; font-weight: 800; text-decoration: none; padding: 8px 10px; border-radius: 10px;
            transition: box-shadow .18s ease, background-color .18s ease, transform .18s ease;
          }
          .kfNavLink:hover,
          .kfNavLink:focus-visible {
            box-shadow: 0 0 18px rgba(0,184,255,0.35);
            background-color: rgba(0,184,255,0.08);
            transform: translateY(-1px);
            outline: none;
          }
          @media (max-width: 720px) {
            .kfHeader {
              flex-direction: column;
              align-items: stretch;
              gap: 10px;
              padding: 12px 16px;
            }
            .kfNav { justify-content: center; gap: 12px; }
          }
        `}</style>
      </header>

      <main className="page">
        {/* ===== HERO ===== */}
        <section className="hero">
          <div aria-hidden className="bgGlows">
            <div className="glow glowLT" />
            <div className="glow glowRB" />
          </div>

          <div className="heroInner">
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

            <h1 className="heroTitle">
              The <span className="accent">Ownership Token</span> — Fractional Access to Real-World Revenue
            </h1>

            <p className="heroLead">
              A compliant, tokenized path to participate in revenue from healthy vending machines on the Kickfixx network.
            </p>

            <p className="heroSub">
              Designed for transparency and community alignment — with clear legal rails, reporting, and on-chain access.
            </p>

            <div className="ctaRow">
              <a href="#how" className="primaryBtn">How It Works</a>
              <Link href="/kfx" className="ghostBtn">See KFX (Rewards)</Link>
            </div>
          </div>
        </section>

        {/* ===== WHAT IT IS ===== */}
        <section className="wrap">
          <div className="grid grid-2">
            <div>
              <h2 className="h2">What Is the Ownership Token?</h2>
              <p className="p">
                The Ownership Token is a <span className="em">compliant security token</span> representing fractional
                ownership interest in a pool of Kickfixx vending machine revenues. It’s separate from{" "}
                <Link href="/kfx" className="link">KFX (rewards)</Link> and will be offered via a licensed platform
                with full KYC/AML.
              </p>
              <ul className="ul">
                <li><span className="em">Real-world revenue:</span> backed by sales from placed machines.</li>
                <li><span className="em">Reg-friendly rails:</span> offered under exemptions (e.g., Reg D/CF) via partners.</li>
                <li><span className="em">Transparency:</span> standardized reporting, on-chain access, clear terms.</li>
              </ul>

              <div className="stats">
                <Stat>📈 <span className="m">Underlying:</span> Vending Revenue</Stat>
                <Stat>🛡️ <span className="m">Offering:</span> Reg-compliant (via partners)</Stat>
                <Stat>🔍 <span className="m">KYC/AML:</span> Required</Stat>
                <Stat>🧾 <span className="m">Reports:</span> Standardized</Stat>
              </div>
            </div>

            <div className="tile tokenTile">
              <div aria-hidden className="tileAura" />
              <Image
                src="/ownership-token.png"
                alt="Ownership Token (large)"
                fill
                sizes="(max-width: 768px) 320px, 420px"
                style={{ objectFit: "contain", position: "relative", zIndex: 1 }}
              />
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section id="how" className="wrapAlt">
          <div className="inner">
            <h2 className="h2">How It Works</h2>
            <p className="p">Clean steps from interest to ongoing ownership lifecycle.</p>

            <div className="grid grid-3">
              <Card title="1) Early Access & Verification" badge="Step 1" detail="Join the list, complete KYC/AML with the offering partner when live." />
              <Card title="2) Allocation & Purchase" badge="Step 2" detail="Receive your allocation, review the docs, and complete purchase on the partner portal." />
              <Card title="3) Transparent Reporting" badge="Step 3" detail="Track machine placement progress, sales summaries, and distributions via standardized updates." />
            </div>

            <div className="notice">
              <p className="noticeText">
                <span className="strong">Note:</span> This page is informational and not an offer to sell securities. Any offering will be made
                only through official documentation on a licensed platform.
              </p>
            </div>
          </div>
        </section>

        {/* ===== BENEFITS ===== */}
        <section className="wrap">
          <div className="inner">
            <h2 className="h2">Why the Ownership Token?</h2>
            <div className="grid grid-3">
              <Card title="Real-World Yield Exposure" badge="Benefit" detail="Potential distributions tied to actual sales at placed machines." />
              <Card title="Aligned with Community" badge="Benefit" detail="Ownership that grows with network scale, not just brand fandom." />
              <Card title="On-Chain Access" badge="Benefit" detail="Modern rails for access, with the goal of future secondary liquidity (subject to rules)." />
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="wrapAlt">
          <div className="inner">
            <h2 className="h2 center">Ownership Token — FAQ</h2>
            <div className="faqList">
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

            <div className="ctaCenter">
              <Link href="/contact" className="primaryBtn">Contact Us</Link>
              <p style={{ marginTop: 12 }}>
                Prefer perks? <Link href="/kfx" className="link b">Explore KFX →</Link>
              </p>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="wrap">
          <div className="inner center">
            <h2 className="h2">Be First In Line</h2>
            <p className="p">Get on the list to receive allocation details as soon as we go live.</p>
            <div style={{ marginTop: 20 }}>
              <a href="/contact" className="primaryBtn">Join Early Access</a>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="ftr">
          <div>
            <Link href="/kfx" className="link b">KFX (Rewards)</Link>
            <span className="sep">•</span>
            <Link href="/contact" className="link b">Contact</Link>
          </div>
          © {new Date().getFullYear()} Kickfixx. All rights reserved.
        </footer>
      </main>

      <style jsx global>{`
        :root {
          --bg: #0A0A0A;
          --card: rgba(24,24,27,0.55);
          --border: #27272a;
          --accent: #00B8FF;
          --text: #fff;
          --muted: #d4d4d8;
          --muter: #a1a1aa;
        }
        html, body, #__next { background: var(--bg); color: var(--text); }
        .page { background: var(--bg); color: var(--text); font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
        .wrap { padding: 64px 0; }
        .wrapAlt { padding: 64px 0; background: linear-gradient(to bottom, #0a0a0a 0%, #0e0f12 100%); }
        .inner { margin: 0 auto; max-width: 1120px; padding: 0 24px; }
        .center { text-align: center; }

        .grid { display: grid; gap: 16px; }
        .grid-2 { grid-template-columns: minmax(0,1fr) minmax(0, clamp(340px, 40vw, 520px)); align-items: center; }
        .grid-3 { grid-template-columns: repeat(3, minmax(0,1fr)); }
        @media (max-width: 1024px) {
          .grid-3 { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (max-width: 768px) {
          .inner { padding: 0 16px; }
          .grid-2 { grid-template-columns: 1fr; }
          .grid-3 { grid-template-columns: 1fr; }
        }

        .h2 {
          font-family: "Roboto Condensed", Inter, system-ui;
          font-size: 28px; font-weight: 800; margin: 0;
          letter-spacing: .2px;
        }
        .p { margin-top: 12px; color: var(--muted); }
        .em { color: #fff; font-weight: 600; }
        .ul { margin-top: 16px; color: var(--muted); padding-left: 18px; }
        .link { color: var(--accent); text-decoration: none; }
        .link.b { font-weight: 800; }

        /* Hero */
        .hero { position: relative; overflow: hidden; }
        .bgGlows { position: absolute; inset: 0; pointer-events: none; }
        .glow { position: absolute; height: 24rem; width: 24rem; border-radius: 9999px; filter: blur(64px); }
        .glowLT { top: -10rem; left: -8rem; opacity: .3; background: radial-gradient(closest-side, var(--accent), rgba(0,0,0,0)); }
        .glowRB { bottom: -10rem; right: -8rem; opacity: .2; background: radial-gradient(closest-side, var(--accent), rgba(0,0,0,0)); }

        .heroInner { position: relative; margin: 0 auto; max-width: 1120px; padding: 56px 24px 48px; text-align: center; }
        .tokenWrap { margin: 0 auto 12px; width: 260px; height: 260px; position: relative; display: flex; justify-content: center; align-items: center; }
        .tokenAura { position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(0,184,255,.25), transparent 70%); filter: blur(40px); z-index: 0; border-radius: 50%; }

        .heroTitle { margin: 0; font-family: "Roboto Condensed", Inter, system-ui; font-size: 40px; line-height: 1.15; font-weight: 800; letter-spacing: .2px; }
        .accent { color: var(--accent); }
        .heroLead { margin: 16px auto 8px; max-width: 720px; font-size: 18px; color: var(--muted); }
        .heroSub { margin: 4px auto 0; max-width: 720px; color: var(--muter); }
        .ctaRow { margin-top: 20px; display: inline-flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
        .primaryBtn, .ghostBtn {
          display: inline-flex; align-items: center; justify-content: center; border-radius: 16px; padding: 12px 20px; text-decoration: none;
        }
        .primaryBtn { background: var(--accent); color: #000; font-weight: 800; font-family: "Roboto Condensed", Inter, system-ui; letter-spacing: .2px; }
        .ghostBtn { border: 1px solid #3f3f46; color: #fff; font-weight: 600; }
        @media (max-width: 768px) {
          .heroInner { padding: 40px 16px 40px; }
          .tokenWrap { width: 180px; height: 180px; }
          .heroTitle { font-size: 30px; }
          .heroLead { font-size: 16px; }
          .primaryBtn, .ghostBtn { width: 100%; max-width: 420px; }
        }

        /* Token tile */
        .tile { position: relative; border-radius: 16px; overflow: hidden; min-height: 420px; background: rgba(24,24,27,0.4); border: 1px solid var(--border); }
        .tileAura { position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(0,184,255,.25), transparent 70%); filter: blur(40px); z-index: 0; border-radius: 16px; }
        .tokenTile { height: 420px; }
        @media (max-width: 768px) {
          .tokenTile { height: 320px; }
        }

        /* Notice / info card */
        .notice, .infoCard {
          margin-top: 24px; border-radius: 16px;
          border: 1px solid rgba(0,184,255,0.4);
          background: #0b0f12; padding: 20px;
          box-shadow: 0 0 35px rgba(0,184,255,0.12);
          text-align: center;
        }
        .noticeText, .infoText { color: #e4e4e7; margin: 0; }
        .strong, .infoStrong { font-weight: 800; color: #fff; font-family: "Roboto Condensed", Inter, system-ui; }

        /* FAQ */
        .faqList { margin-top: 20px; display: grid; gap: 12px; }
        .faqItem {
          border-radius: 16px; border: 1px solid var(--border);
          background: var(--card); padding: 20px;
          box-shadow: 0 0 35px rgba(0,184,255,0.10);
        }
        .faqSummary { display: flex; align-items: center; justify-content: space-between; cursor: pointer; list-style: none; }
        .faqQ { font-weight: 800; font-family: "Roboto Condensed", Inter, system-ui; }
        .plus { color: var(--muter); margin-left: 16px; transition: transform .2s ease; }
        .faqItem[open] .plus { transform: rotate(45deg); }
        .faqA { margin-top: 12px; color: var(--muter); }

        /* Footer */
        .ftr {
          margin-top: 20px; padding: 30px 0; border-top: 1px solid #1f2937;
          opacity: 0.8; font-size: 14px; text-align: center;
        }
        .sep { margin: 0 8px; opacity: .5; }
      `}</style>
    </>
  );
}

/* ===== Small reusable cards (glow) ===== */
const cardStyle: React.CSSProperties = {
  borderRadius: 16,
  border: "1px solid #27272a",
  background: "rgba(24,24,27,0.55)",
  padding: 20,
  boxShadow: "0 0 35px rgba(0,184,255,0.10)",
  transition: "box-shadow .2s ease, transform .2s ease, border-color .2s ease",
} as const;

function Stat({ children }: { children: React.ReactNode }) {
  return <div style={cardStyle}>{children}</div>;
}

function Card({ title, badge, detail }: { title: string; badge: string; detail: string }) {
  return (
    <div
      style={{ ...cardStyle }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 48px rgba(0,184,255,0.18)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,184,255,0.35)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 35px rgba(0,184,255,0.10)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "#27272a";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h3
          style={{
            margin: 0,
            fontWeight: 800,
            fontFamily: `"Roboto Condensed", Inter, system-ui`,
            letterSpacing: "0.2px",
          }}
        >
          {title}
        </h3>
        <span
          style={{
            fontSize: 12,
            border: "1px solid #3f3f46",
            borderRadius: 9999,
            padding: "4px 8px",
            color: "#a1a1aa",
          }}
        >
          {badge}
        </span>
      </div>
      <p style={{ marginTop: 8, color: "#a1a1aa" }}>{detail}</p>
    </div>
  );
}

/* ===== FAQ data ===== */
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
