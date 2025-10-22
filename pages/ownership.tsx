// pages/ownership.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OwnershipTokenPage() {
  return (
    <>
      <Head>
        <title>Kickfixx Ownership Token — Coming Soon</title>
        <meta
          name="description"
          content="A compliant, fractional way to participate in revenue from tokenized vending machines. Join Early Access to get priority when it opens."
        />
        {/* Fonts to match KFX page */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Roboto+Condensed:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main style={{ background: "#0A0A0A", color: "#fff", fontFamily: `Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial` }}>
        {/* HERO */}
        <section style={{ position: "relative", overflow: "hidden" }}>
          {/* background glows */}
          <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div style={{
              position: "absolute", top: -160, left: -128, height: 384, width: 384,
              borderRadius: 9999, filter: "blur(64px)", opacity: 0.3,
              background: "radial-gradient(closest-side, #00B8FF, rgba(0,0,0,0))"
            }} />
            <div style={{
              position: "absolute", bottom: -160, right: -128, height: 384, width: 384,
              borderRadius: 9999, filter: "blur(64px)", opacity: 0.2,
              background: "radial-gradient(closest-side, #00B8FF, rgba(0,0,0,0))"
            }} />
          </div>

          <div style={{ position: "relative", margin: "0 auto", maxWidth: 1120, padding: "80px 24px", textAlign: "center" }}>
            <span style={{
              display: "inline-block", fontSize: 12, letterSpacing: "0.12em",
              color: "#a1a1aa", border: "1px solid #27272a", padding: "6px 10px",
              borderRadius: 9999, marginBottom: 14
            }}>
              COMING SOON
            </span>

            {/* Token image with ambient aura */}
            <div style={{ margin: "0 auto 24px", width: 280, height: 280, position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div aria-hidden style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(circle at center, rgba(0,184,255,0.25), transparent 70%)",
                filter: "blur(40px)", zIndex: 0
              }} />
              <Image
                src="/ownership-token.png" // <- put your 3D ownership token image in /public
                alt="Kickfixx Ownership Token"
                fill sizes="280px"
                style={{ objectFit: "contain", position: "relative", zIndex: 1 }}
                priority
              />
            </div>

            <h1 style={{
              fontFamily: `"Roboto Condensed", Inter, system-ui`,
              fontSize: 40, lineHeight: 1.15, fontWeight: 800, margin: 0
            }}>
              The Kickfixx <span style={{ color: "#00B8FF" }}>Ownership Token</span>
            </h1>
            <p style={{ margin: "14px auto 0", maxWidth: 760, color: "#d4d4d8", fontSize: 18 }}>
              A compliant, fractional way to participate in revenue from tokenized vending machines.
              Priority access will go to Early Access members.
            </p>

            <div style={{ marginTop: 20 }}>
              <Link href="/kfx#join" style={primaryBtn}>
                Join Early Access for Priority
              </Link>
            </div>

            <p style={{ marginTop: 8, color: "#71717a", fontSize: 12 }}>
              Not an offer to sell securities. Subject to regulatory compliance and eligibility.
            </p>
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section style={{ padding: "64px 0" }}>
          <div style={{ margin: "0 auto", maxWidth: 1120, padding: "0 24px" }}>
            <h2 style={{ fontFamily: `"Roboto Condensed", Inter, system-ui`, fontSize: 28, fontWeight: 800, margin: 0 }}>
              Why an Ownership Token?
            </h2>
            <div style={{
              marginTop: 18,
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0,1fr))",
              gap: 16
            }}>
              {[
                { t: "Fractional Access", d: "Participate at smaller check sizes instead of buying an entire machine." },
                { t: "Transparent Payouts", d: "Track revenue events on-chain with regular reporting." },
                { t: "Aligned Growth", d: "Back real-world locations and inventory that you help expand." },
              ].map((x, i) => (
                <div key={i} style={cardStyle}>
                  <div style={{ fontWeight: 800, fontFamily: `"Roboto Condensed", Inter, system-ui` }}>{x.t}</div>
                  <p style={{ marginTop: 8, color: "#a1a1aa" }}>{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ padding: "64px 0", background: "#0E0F12" }}>
          <div style={{ margin: "0 auto", maxWidth: 1120, padding: "0 24px" }}>
            <h2 style={{ fontFamily: `"Roboto Condensed", Inter, system-ui`, fontSize: 28, fontWeight: 800, margin: 0 }}>
              How It Will Work (At a Glance)
            </h2>
            <ol style={{ marginTop: 18, color: "#d4d4d8", paddingLeft: 18, lineHeight: 1.65 }}>
              <li><b>Whitelist & Allocation:</b> Early Access members get first allocation when an offering opens.</li>
              <li><b>KYC/Compliance:</b> Complete required identity checks on a licensed platform provider.</li>
              <li><b>Token Distribution:</b> Tokens issued with transfer restrictions and allowed wallets.</li>
              <li><b>Revenue & Reporting:</b> Revenue events accrue based on location performance with periodic summaries.</li>
            </ol>

            <div style={{ marginTop: 20 }}>
              <Link href="/kfx#join" style={primaryBtn}>Get Whitelisted</Link>
            </div>

            <div style={{
              marginTop: 20, borderRadius: 16,
              border: "1px solid rgba(0,184,255,0.4)",
              background: "#0B0F12", padding: 20
            }}>
              <p style={{ color: "#e4e4e7", margin: 0, fontSize: 14 }}>
                <b>Note:</b> Details (e.g., structure, eligibility, fees, and risks) will be disclosed in offering materials.
                Participation may be limited by jurisdiction and investor qualifications.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ (short) */}
        <section style={{ padding: "64px 0" }}>
          <div style={{ margin: "0 auto", maxWidth: 960, padding: "0 24px" }}>
            <h2 style={{ fontFamily: `"Roboto Condensed", Inter, system-ui`, fontSize: 28, fontWeight: 800, margin: 0, textAlign: "center" }}>
              Ownership Token — FAQ
            </h2>
            <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
              {[
                {
                  q: "Is this available to buy now?",
                  a: "Not yet. This page is a preview. Join Early Access for allocation priority when/if an offering goes live."
                },
                {
                  q: "Is this a security?",
                  a: "Yes, it will be structured as a compliant security offering through a licensed platform, with KYC/AML as required."
                },
                {
                  q: "Which chain will it use?",
                  a: "Plan is EVM (Base L2) for compliance tooling. Multi-chain support may follow after launch."
                },
                {
                  q: "How do payouts work?",
                  a: "If and when live, payouts and reporting cadence will be specified in the offering docs and operator updates."
                },
              ].map((it, i) => (
                <details key={i} style={{ borderRadius: 16, border: "1px solid #27272a", background: "rgba(24,24,27,0.4)", padding: 20 }}>
                  <summary style={{ display: "flex", justifyContent: "space-between", cursor: "pointer", listStyle: "none" }}>
                    <span style={{ fontWeight: 800, fontFamily: `"Roboto Condensed", Inter, system-ui` }}>{it.q}</span>
                    <span style={{ color: "#a1a1aa", marginLeft: 16 }} aria-hidden>＋</span>
                  </summary>
                  <p style={{ marginTop: 12, color: "#a1a1aa" }}>{it.a}</p>
                </details>
              ))}
            </div>

            <div style={{ marginTop: 24, textAlign: "center" }}>
              <Link href="/kfx#join" style={primaryBtn}>Join Early Access</Link>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section style={{ padding: "56px 0", borderTop: "1px solid #1f2937" }}>
          <div style={{ margin: "0 auto", maxWidth: 960, padding: "0 24px", textAlign: "center" }}>
            <h3 style={{ fontFamily: `"Roboto Condensed", Inter, system-ui`, fontSize: 22, fontWeight: 800, margin: 0 }}>
              Questions?
            </h3>
            <p style={{ marginTop: 8, color: "#a1a1aa" }}>
              Email <a href="mailto:info@kickfixx.com" style={{ color: "#00B8FF", textDecoration: "none", fontWeight: 700 }}>info@kickfixx.com</a> and include “Ownership Token” in the subject.
            </p>
            <div style={{ marginTop: 16 }}>
              <Link href="/kfx#join" style={primaryBtn}>Get Priority Access</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* shared inline styles */
const cardStyle: React.CSSProperties = {
  borderRadius: 16,
  border: "1px solid #27272a",
  background: "rgba(24,24,27,0.4)",
  padding: 20,
};

const primaryBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 16,
  background: "#00B8FF",
  padding: "12px 20px",
  fontWeight: 800,
  color: "#000",
  textDecoration: "none",
  fontFamily: `"Roboto Condensed", Inter, system-ui`,
  letterSpacing: "0.2px",
};
