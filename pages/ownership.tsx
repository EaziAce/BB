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
          content="The Ownership Token is a compliant, tokenized way to participate in revenue from real-world Kickfixx vending assets. Join the whitelist for early access."
        />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Roboto+Condensed:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Header (glow + responsive) */}
      <header className="kfHeader">
        <Link href="/" className="kfLogoLink" aria-label="Kickfixx Home">
          <Image src="/kickfixx-logo-00B8FF.png" alt="Kickfixx" width={140} height={36} priority />
        </Link>

        <nav className="kfNav">
          <Link href="/" className="kfNavLink">Home</Link>
          <Link href="/kfx" className="kfNavLink">KFX</Link>
          <Link href="/ownership" className="kfNavLink" aria-current="page">Ownership</Link>
          <Link href="/contact" className="kfNavLink">Contact</Link>
        </nav>

        <style jsx>{`
          .kfHeader {
            position: sticky; top: 0; z-index: 50;
            display: flex; align-items: center; justify-content: space-between;
            padding: 14px 24px; background: #0A0A0A; border-bottom: 1px solid #1f2937;
            -webkit-backdrop-filter: saturate(120%) blur(0px);
            backdrop-filter: saturate(120%) blur(0px);
          }
          .kfHeader::before, .kfHeader::after {
            content: ""; position: absolute; height: 18rem; width: 18rem; border-radius: 9999px;
            filter: blur(48px); pointer-events: none; z-index: -1; opacity: 0.25;
          }
          .kfHeader::before { top: -9rem; left: -6rem; background: radial-gradient(closest-side, #00B8FF, rgba(0,0,0,0)); }
          .kfHeader::after { bottom: -10rem; right: -8rem; opacity: 0.18; background: radial-gradient(closest-side, #00B8FF, rgba(0,0,0,0)); }
          .kfLogoLink { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; outline: none; }
          .kfNav { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; justify-content: flex-end; }
          .kfNavLink {
            color: #00B8FF; font-weight: 800; text-decoration: none; padding: 8px 10px; border-radius: 10px;
            transition: box-shadow .18s ease, background-color .18s ease, transform .18s ease;
          }
          .kfNavLink:hover, .kfNavLink:focus-visible {
            box-shadow: 0 0 18px rgba(0,184,255,0.35); background-color: rgba(0,184,255,0.08);
            transform: translateY(-1px); outline: none;
          }
          .kfNavLink[aria-current="page"] {
            background-color: rgba(0,184,255,0.10); box-shadow: 0 0 14px rgba(0,184,255,0.22) inset;
          }
          @media (max-width: 720px) {
            .kfHeader { flex-direction: column; align-items: stretch; gap: 10px; padding: 12px 16px; }
            .kfNav { justify-content: center; gap: 12px; }
          }
        `}</style>
      </header>

      <main
        style={{
          background: "#0A0A0A",
          color: "#fff",
          fontFamily:
            'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        }}
      >
        {/* ===== Hero ===== */}
        <section className="heroWrap">
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
              The <span className="accent">Ownership Token</span>
            </h1>
            <p className="heroLead">
              A compliant path to participate in revenue from real-world Kickfixx vending assets.
              Whitelist now for first access when offerings go live.
            </p>

            <p className="heroSub">
              Designed to be offered through licensed platforms (e.g., Reg D/CF), with KYC/AML and transparent reporting.
            </p>

            <div className="ctaRow">
              <a href="#join" className="primaryBtn">Join the Whitelist</a>
              <a href="#how" className="ghostBtn">How It Works</a>
            </div>
          </div>

          <style jsx>{`
            .heroWrap { position: relative; overflow: hidden; background: #0a0a0a; }
            .bgGlows { position: absolute; inset: 0; pointer-events: none; }
            .glow { position: absolute; height: 24rem; width: 24rem; border-radius: 9999px; filter: blur(64px); }
            .glowLT { top: -10rem; left: -8rem; opacity: 0.3; background: radial-gradient(closest-side, #00b8ff, rgba(0,0,0,0)); }
            .glowRB { bottom: -10rem; right: -8rem; opacity: 0.2; background: radial-gradient(closest-side, #00b8ff, rgba(0,0,0,0)); }

            .heroInner { position: relative; margin: 0 auto; max-width: 1120px; padding: 64px 24px 56px; text-align: center; }
            .tokenWrap { margin: 0 auto 16px; width: 260px; height: 260px; position: relative; display: flex; justify-content: center; align-items: center; }
            .tokenAura { position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(0,184,255,0.25), transparent 70%); filter: blur(40px); z-index: 0; border-radius: 50%; }

            .heroTitle { margin: 0; font-family: "Roboto Condensed", Inter, system-ui; font-size: 40px; line-height: 1.15; font-weight: 800; letter-spacing: .2px; }
            .accent { color: #00b8ff; }
            .heroLead { margin: 16px auto 8px; max-width: 720px; font-size: 18px; color: #d4d4d8; }
            .heroSub { margin: 4px auto 0; max-width: 720px; color: #a1a1aa; }
            .ctaRow { margin-top: 20px; display: inline-flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
            .primaryBtn { display: inline-flex; align-items: center; justify-content: center; border-radius: 16px; background: #00b8ff; padding: 12px 20px; font-weight: 700; color: #000; text-decoration: none; }
            .ghostBtn { display: inline-flex; align-items: center; justify-content: center; border-radius: 16px; border: 1px solid #3f3f46; padding: 12px 20px; font-weight: 600; color: #fff; text-decoration: none; }

            @media (max-width: 768px) {
              .heroInner { padding: 40px 16px 40px; }
              .tokenWrap { width: 180px; height: 180px; }
              .heroTitle { font-size: 30px; }
              .heroLead { font-size: 16px; }
              .primaryBtn, .ghostBtn { width: 100%; max-width: 420px; }
            }
          `}</style>
        </section>

        {/* ===== What is the Ownership Token ===== */}
        <section className="whatWrap">
          <div className="whatInner">
            <h2 className="h2">What Is the Ownership Token?</h2>
            <p className="p">
              A security token representing fractional, compliant participation in the revenues of
              one or more Kickfixx vending machines. Offered via a licensed platform with
              clear disclosures, KYC/AML, and transparent reporting.
            </p>

            <div className="statGrid">
              <Stat>🧱 <span className="muted">Structure:</span> Reg D / Reg CF (platform-hosted)</Stat>
              <Stat>🔎 <span className="muted">KYC/AML:</span> Required</Stat>
              <Stat>📈 <span className="muted">Payouts:</span> Periodic distributions via platform</Stat>
              <Stat>🗳️ <span className="muted">Governance:</span> Possible location/product votes</Stat>
            </div>

            <div className="infoCard">
              <p className="infoText">
                <span className="strong">Note:</span> Availability depends on jurisdiction and investor eligibility.
                This page is informational and not an offer to sell securities.
              </p>
            </div>
          </div>

          <style jsx>{`
            .whatWrap { padding: 64px 0; }
            .whatInner { margin: 0 auto; max-width: 1120px; padding: 0 24px; }
            .h2 { font-family: "Roboto Condensed", Inter, system-ui; font-size: 28px; font-weight: 800; margin: 0; }
            .p { margin-top: 12px; color: #d4d4d8; }
            .statGrid { margin-top: 20px; display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 12px; }
            .muted { color: #a1a1aa; }
            .infoCard {
              margin-top: 24px; border-radius: 16px; border: 1px solid rgba(0,184,255,0.4);
              background: #0b0f12; padding: 20px; text-align: center; box-shadow: 0 0 35px rgba(0,184,255,0.12);
            }
            .infoText { color: #e4e4e7; margin: 0; }
            .strong { font-weight: 800; color: #fff; font-family: "Roboto Condensed", Inter, system-ui; }
            @media (max-width: 1024px) { .statGrid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
            @media (max-width: 768px) { .whatInner { padding: 0 16px; } .statGrid { grid-template-columns: 1fr; } }
          `}</style>
        </section>

        {/* ===== How It Works ===== */}
        <section id="how" className="howWrap">
          <div className="howInner">
            <h2 className="h2">How It Works</h2>
            <div className="stepsGrid">
              <Card title="1) Join the Whitelist" badge="Now" detail="Provide your email to be notified of the first offering window and eligibility steps." />
              <Card title="2) KYC/Eligibility" badge="On platform" detail="Complete identity checks and confirm your investor profile where required." />
              <Card title="3) Review Documents" badge="Before investing" detail="Read disclosures and offering docs on the licensed platform hosting the sale." />
              <Card title="4) Receive Tokens" badge="Post-purchase" detail="Tokens are issued by the platform and distributions (if any) flow back there." />
            </div>
            <p className="sub">
              KFX holders receive priority access when offerings open.
              <Link href="/kfx" className="link"> Learn about KFX →</Link>
            </p>
          </div>

          <style jsx>{`
            .howWrap { padding: 64px 0; background: #0E0F12; }
            .howInner { margin: 0 auto; max-width: 1120px; padding: 0 24px; }
            .h2 { font-family: "Roboto Condensed", Inter, system-ui; font-size: 28px; font-weight: 800; margin: 0 0 12px; }
            .stepsGrid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 16px; }
            .sub { margin-top: 16px; color: #a1a1aa; }
            .link { color: #00B8FF; text-decoration: none; font-weight: 700; }
            @media (max-width: 1024px) { .stepsGrid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
            @media (max-width: 768px) { .howInner { padding: 0 16px; } .stepsGrid { grid-template-columns: 1fr; } }
          `}</style>
        </section>

        {/* ===== Benefits ===== */}
        <section className="benefitWrap">
          <div className="benefitInner">
            <h2 className="h2">Potential Benefits</h2>
            <div className="benefitGrid">
              <UnlockCard phase="A" title="Real-World Revenues" desc="Backed by physical vending machines with transparent sales reporting." />
              <UnlockCard phase="B" title="Priority Access" desc="KFX supporters and early whitelisters get earlier allocation windows." />
              <UnlockCard phase="C" title="Governance Touchpoints" desc="Help influence product mix, locations, and growth paths over time." />
              <UnlockCard phase="D" title="Simple Distributions" desc="Platform-native statements and (if any) periodic payout handling." />
            </div>
          </div>

          <style jsx>{`
            .benefitWrap { padding: 64px 0; }
            .benefitInner { margin: 0 auto; max-width: 1120px; padding: 0 24px; }
            .h2 { font-family: "Roboto Condensed", Inter, system-ui; font-size: 28px; font-weight: 800; margin: 0; }
            .benefitGrid { margin-top: 24px; display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 16px; }
            @media (max-width: 1024px) { .benefitGrid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
            @media (max-width: 768px) { .benefitInner { padding: 0 16px; } .benefitGrid { grid-template-columns: 1fr; } }
          `}</style>
        </section>

        {/* ===== Whitelist / Email Capture ===== */}
        <section id="join" className="joinWrap">
          <div className="joinInner">
            <h2 className="h2">Join the Whitelist</h2>
            <p className="p">Get notified first when the Ownership Token offering window opens.</p>

            <form
              method="POST"
              action="https://formspree.io/f/mpwyjqgq"
              className="form"
            >
              <input type="text" name="name" aria-label="First name" placeholder="First name (optional)" className="inp" />
              <input type="email" name="email" aria-label="Email address" required placeholder="Email address" className="inp" />
              <button type="submit" className="primaryBtn">Notify Me</button>
            </form>

            <p className="note">We’ll email you details about timing, eligibility, and platform links.</p>
          </div>

          <style jsx>{`
            .joinWrap { padding: 64px 0; background: linear-gradient(to bottom, #0a0a0a 0%, #0e0f12 100%); }
            .joinInner { margin: 0 auto; max-width: 720px; padding: 0 24px; text-align: center; }
            .h2 { font-family: "Roboto Condensed", Inter, system-ui; font-size: 28px; font-weight: 800; margin: 0; }
            .p { margin-top: 12px; color: #d4d4d8; }
            .form { margin-top: 24px; display: grid; gap: 12px; grid-template-columns: 1fr; }
            .inp { border-radius: 16px; background: #18181b; border: 1px solid #27272a; padding: 12px 16px; color: #fff; outline: none; }
            .primaryBtn { display: inline-flex; align-items: center; justify-content: center; border-radius: 16px; background: #00b8ff; padding: 12px 20px; font-weight: 800; color: #000; text-decoration: none; font-family: "Roboto Condensed", Inter, system-ui; letter-spacing: 0.2px; }
            .note { margin-top: 8px; font-size: 12px; color: #71717a; }
            @media (max-width: 768px) { .joinInner { padding: 0 16px; } }
          `}</style>
        </section>

        {/* ===== FAQ ===== */}
        <OwnershipFAQ />

        {/* ===== Footer ===== */}
        <footer className="ftr">
          <div>
            <Link href="/kfx" className="navLink" style={{ fontWeight: 800 }}>
              Explore KFX (Rewards) →
            </Link>
          </div>
          © {new Date().getFullYear()} Kickfixx. All rights reserved.
          <style jsx>{`
            .ftr { margin-top: 20px; padding: 30px 0; border-top: 1px solid #1f2937; opacity: 0.8; font-size: 14px; text-align: center; }
            .navLink { color: #00b8ff; text-decoration: none; }
          `}</style>
        </footer>
      </main>
    </>
  );
}

/* ---------- Reusable glowing card styles ---------- */

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
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 0 48px rgba(0,184,255,0.18)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,184,255,0.35)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 0 35px rgba(0,184,255,0.10)";
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

function UnlockCard({ phase, title, desc }: { phase: string; title: string; desc: string }) {
  return (
    <div style={{ ...cardStyle }}>
      <div
        style={{
          color: "#00B8FF",
          fontSize: 12,
          fontWeight: 800,
          fontFamily: `"Roboto Condensed", Inter, system-ui`,
        }}
      >
        {phase}
      </div>
      <div
        style={{
          marginTop: 4,
          fontWeight: 800,
          fontFamily: `"Roboto Condensed", Inter, system-ui`,
          letterSpacing: "0.2px",
        }}
      >
        {title}
      </div>
      <p style={{ marginTop: 8, color: "#a1a1aa", fontSize: 14 }}>{desc}</p>
    </div>
  );
}

/* ---------- Ownership FAQ ---------- */
function OwnershipFAQ() {
  const items = [
    {
      q: "Is this live right now?",
      a: "Not yet. We’re collecting whitelist interest first. Offerings will launch via a licensed platform with required disclosures.",
    },
    {
      q: "Is the Ownership Token a security?",
      a: "Yes—this token is intended to be offered as a compliant security (e.g., Reg D/CF) depending on jurisdiction, with KYC/AML and platform custody.",
    },
    {
      q: "Do I need KFX to participate?",
      a: "KFX isn’t required, but holders get priority access when allocation windows open.",
    },
    {
      q: "How do payouts work?",
      a: "If and when distributions occur, they’re handled through the platform that hosts the offering, with statements and tax docs provided there.",
    },
    {
      q: "What are the risks?",
      a: "All investments carry risk, including loss of principal. Read the offering documents carefully and consider your own circumstances.",
    },
    {
      q: "Who can join?",
      a: "Eligibility varies by region and offering type. The platform will guide you through KYC/AML and any accreditation checks if applicable.",
    },
    {
      q: "Where can I get updates?",
      a: "Join the whitelist above and follow email updates. We’ll announce timelines and platform links as they’re finalized.",
    },
  ];

  return (
    <section className="faqWrap">
      <div className="faqInner">
        <h2 className="h2 center">Ownership Token — FAQ</h2>
        <p className="p center">Straightforward answers about eligibility, compliance, and access.</p>

        <div className="faqList">
          {items.map((item, i) => (
            <details key={i} className="faqItem">
              <summary className="faqSummary">
                <span className="faqQ">{item.q}</span>
                <span className="plus" aria-hidden>＋</span>
              </summary>
              <p className="faqA">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="faqCta">
          <a href="#join" className="primaryBtn">Join the Whitelist</a>
        </div>
      </div>

      <style jsx>{`
        .faqWrap { padding: 64px 0; }
        .faqInner { margin: 0 auto; max-width: 960px; padding: 0 24px; }
        .h2 { font-family: "Roboto Condensed", Inter, system-ui; font-size: 28px; font-weight: 800; margin: 0; }
        .center { text-align: center; }
        .p { margin-top: 12px; color: #d4d4d8; }
        .faqList { margin-top: 24px; display: grid; gap: 12px; }
        .faqItem {
          border-radius: 16px; border: 1px solid #27272a; background: rgba(24,24,27,0.4); padding: 20px;
          box-shadow: 0 0 35px rgba(0,184,255,0.10);
        }
        .faqSummary { display: flex; align-items: center; justify-content: space-between; cursor: pointer; list-style: none; }
        .faqQ { font-weight: 800; font-family: "Roboto Condensed", Inter, system-ui; }
        .plus { color: #a1a1aa; margin-left: 16px; transition: transform .2s ease; }
        .faqItem[open] .plus { transform: rotate(45deg); }
        .faqA { margin-top: 12px; color: #a1a1aa; }
        .faqCta { margin-top: 24px; text-align: center; }
        .primaryBtn { display: inline-flex; align-items: center; justify-content: center; border-radius: 16px; background: #00b8ff; padding: 12px 20px; font-weight: 800; color: #000; text-decoration: none; font-family: "Roboto Condensed", Inter, system-ui; letter-spacing: 0.2px; }
        @media (max-width: 768px) { .faqInner { padding: 0 16px; } }
      `}</style>
    </section>
  );
}
