// pages/kfx.tsx
import Head from "next/head";
import Image from "next/image";
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
        {/* Custom fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Roboto+Condensed:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Page wrapper with dark theme + global font */}
      <main style={{ background: "#0A0A0A", color: "#fff", fontFamily: `Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"` }}>
        {/* Section 1: Hero */}
        <section style={{ position: "relative", overflow: "hidden" }}>
          {/* glow accents */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -160,
                left: -128,
                height: 384,
                width: 384,
                borderRadius: "9999px",
                filter: "blur(64px)",
                opacity: 0.3,
                background:
                  "radial-gradient(closest-side, #00B8FF, rgba(0,0,0,0))",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -160,
                right: -128,
                height: 384,
                width: 384,
                borderRadius: "9999px",
                filter: "blur(64px)",
                opacity: 0.2,
                background:
                  "radial-gradient(closest-side, #00B8FF, rgba(0,0,0,0))",
              }}
            />
          </div>

          <div
            style={{
              position: "relative",
              margin: "0 auto",
              maxWidth: 1120,
              padding: "80px 24px",
              textAlign: "center",
            }}
          >
            {/* Token with ambient aura (Option B) */}
            <div
              style={{
                margin: "0 auto 24px",
                width: 260,
                height: 260,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at center, rgba(0,184,255,0.25), transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />
              <Image
                src="/kfx-token.png"
                alt="KFX token"
                fill
                sizes="260px"
                style={{ objectFit: "contain", position: "relative", zIndex: 1 }}
                priority
              />
            </div>

            <h1
              style={{
                fontFamily: `"Roboto Condensed", Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial`,
                fontSize: 40,
                lineHeight: 1.15,
                fontWeight: 800,
                margin: 0,
                letterSpacing: "0.2px",
              }}
            >
              Fuel the Future of Wellness with{" "}
              <span style={{ color: "#00B8FF" }}>KFX</span>
            </h1>

            <p
              style={{
                margin: "16px auto 8px",
                maxWidth: 720,
                fontSize: 18,
                color: "#d4d4d8",
              }}
            >
              The official reward token of Kickfixx — unlocking exclusive perks,
              discounts, and early access to revenue-generating vending machine
              ownership.
            </p>

            <p style={{ margin: "4px auto 0", color: "#a1a1aa", maxWidth: 720 }}>
              This isn’t just a rewards point. It’s your entry into the world’s
              first decentralized wellness ecosystem.
            </p>

            <div
              style={{
                marginTop: 24,
                display: "flex",
                justifyContent: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                href="#join"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 16,
                  background: "#00B8FF",
                  padding: "12px 20px",
                  fontWeight: 700,
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                Join Early Access
              </a>
              <a
                href="#how"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 16,
                  border: "1px solid #3f3f46",
                  padding: "12px 20px",
                  fontWeight: 600,
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Learn How It Works
              </a>
            </div>

            <p style={{ marginTop: 8, fontSize: 12, color: "#71717a" }}>
              Early Access = interest + whitelist. Purchasing opens in the next
              phase.
            </p>
          </div>
        </section>

        {/* Section 2: What is KFX */}
        <section style={{ padding: "64px 0" }}>
          <div
            style={{
              margin: "0 auto",
              maxWidth: 1120,
              padding: "0 24px",
              display: "grid",
              gridTemplateColumns:
                "minmax(0, 1fr) minmax(0, clamp(340px, 40vw, 520px))",
              gap: 40,
              alignItems: "center",
            }}
          >
            {/* left copy */}
            <div>
              <h2
                style={{
                  fontFamily: `"Roboto Condensed", Inter, system-ui`,
                  fontSize: 28,
                  fontWeight: 800,
                  margin: 0,
                  letterSpacing: "0.2px",
                }}
              >
                What Is KFX? Your Key to the Kickfixx Ecosystem
              </h2>
              <p style={{ marginTop: 16, color: "#d4d4d8" }}>
                KFX is the{" "}
                <span style={{ color: "#fff", fontWeight: 600 }}>
                  official utility token
                </span>{" "}
                of Kickfixx. It rewards early supporters, customers, and future
                investors for helping us build the world’s first{" "}
                <span style={{ color: "#fff", fontWeight: 600 }}>
                  decentralized wellness network
                </span>
                .
              </p>
              <ul style={{ marginTop: 18, color: "#d4d4d8", paddingLeft: 18 }}>
                <li>
                  <span style={{ color: "#fff", fontWeight: 600 }}>Earn it</span>{" "}
                  via socials, referrals, and purchases (vending coming soon).
                </li>
                <li>
                  <span style={{ color: "#fff", fontWeight: 600 }}>Use it</span>{" "}
                  for discounts, free items, exclusive access, and priority to
                  invest.
                </li>
                <li>
                  <span style={{ color: "#fff", fontWeight: 600 }}>
                    Grow with us
                  </span>{" "}
                  as KFX unlocks governance and deeper participation over time.
                </li>
              </ul>

              <div
                style={{
                  marginTop: 20,
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0,1fr))",
                  gap: 12,
                }}
              >
                <Stat>
                  ⚡ <span style={{ color: "#a1a1aa" }}>Symbol:</span> KFX
                </Stat>
                <Stat>
                  🧱 <span style={{ color: "#a1a1aa" }}>Network:</span> Base (L2)
                </Stat>
                <Stat>
                  💸 <span style={{ color: "#a1a1aa" }}>Fees:</span> Ultra-low
                </Stat>
                <Stat>
                  🛠️ <span style={{ color: "#a1a1aa" }}>Use:</span> Rewards →
                  Access → Governance
                </Stat>
              </div>

              <div style={{ marginTop: 16 }}>
                <a
                  href="#how"
                  style={{
                    color: "#00B8FF",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  Learn How KFX Works →
                </a>
              </div>
            </div>

            {/* right token image with ambient aura */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 420,
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at center, rgba(0,184,255,0.25), transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: 0,
                  borderRadius: 16,
                }}
              />
              <Image
                src="/kfx-token.png"
                alt="KFX token large"
                fill
                sizes="420px"
                style={{ objectFit: "contain", position: "relative", zIndex: 1, borderRadius: 16 }}
              />
            </div>
          </div>
        </section>

        {/* Section 3: Why KFX Exists */}
        <section
          style={{
            padding: "64px 0",
            background:
              "linear-gradient(to bottom, #0A0A0A 0%, #0E0F12 100%)",
          }}
        >
          <div style={{ margin: "0 auto", maxWidth: 960, padding: "0 24px" }}>
            <h2
              style={{
                fontFamily: `"Roboto Condensed", Inter, system-ui`,
                fontSize: 28,
                fontWeight: 800,
                margin: 0,
              }}
            >
              Why KFX Exists
            </h2>
            <p style={{ marginTop: 16, color: "#d4d4d8" }}>
              The world is shifting toward transparency, community ownership,
              and decentralized control. Traditional brands keep all the
              profits.{" "}
              <span style={{ fontWeight: 600, color: "#fff" }}>
                Kickfixx is doing the opposite
              </span>{" "}
              — we’re building an ecosystem where the people who fuel the
              movement, benefit from the movement.
            </p>
            <ul style={{ marginTop: 18, color: "#d4d4d8", paddingLeft: 18 }}>
              <li>Reward early supporters who believe before it’s mainstream.</li>
              <li>
                Replace outdated point systems with something that actually holds
                value.
              </li>
              <li>Build the foundation for decentralized ownership, not just fandom.</li>
              <li>Create a gateway to future revenue participation and governance.</li>
            </ul>

            <div
              style={{
                marginTop: 24,
                borderRadius: 16,
                border: "1px solid rgba(0,184,255,0.4)",
                background: "#0B0F12",
                padding: 20,
                textAlign: "center",
              }}
            >
              <p style={{ color: "#e4e4e7", margin: 0 }}>
                <span style={{ fontWeight: 800, color: "#fff", fontFamily: `"Roboto Condensed", Inter, system-ui` }}>
                  KFX is not just a loyalty token.
                </span>{" "}
                It is your access pass into the ownership era of physical
                wellness infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: How to Earn */}
        <section id="how" style={{ padding: "64px 0" }}>
          <div style={{ margin: "0 auto", maxWidth: 1120, padding: "0 24px" }}>
            <h2
              style={{
                fontFamily: `"Roboto Condensed", Inter, system-ui`,
                fontSize: 28,
                fontWeight: 800,
                margin: 0,
              }}
            >
              How to Earn KFX
            </h2>
            <p style={{ marginTop: 12, color: "#d4d4d8" }}>
              Start earning now — no machine required.
            </p>

            <div
              style={{
                marginTop: 24,
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0,1fr))",
                gap: 16,
              }}
            >
              <Card
                title="Join the Early Access List"
                badge="Available now"
                detail="+50 KFX on signup"
              />
              <Card
                title="Follow & Engage on Socials"
                badge="Available now"
                detail="+5–20 KFX per action"
              />
              <Card
                title="Refer a Gym / Wellness Location"
                badge="Coming soon"
                detail="+500 KFX after acceptance"
              />
              <Card
                title="Pay with Crypto (On Launch)"
                badge="Coming soon"
                detail="+10% KFX bonus on purchases"
              />
            </div>

            <div style={{ marginTop: 24 }}>
              <a
                href="#join"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 16,
                  background: "#00B8FF",
                  padding: "12px 20px",
                  fontWeight: 700,
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                Start Earning Today
              </a>
            </div>
          </div>
        </section>

        {/* Section 5: What KFX Unlocks */}
        <section style={{ padding: "64px 0", background: "#0E0F12" }}>
          <div style={{ margin: "0 auto", maxWidth: 1120, padding: "0 24px" {/* Soft link to Ownership Token (Coming Soon) */}
<div style={{ marginTop: 16 }}>
  <a
    href="/ownership"
    style={{ color: "#00B8FF", textDecoration: "none", fontWeight: 800 }}
  >
    Learn about the Ownership Token (Coming Soon) →
  </a>
</div> }}>
 

            <h2
              style={{
                fontFamily: `"Roboto Condensed", Inter, system-ui`,
                fontSize: 28,
                fontWeight: 800,
                margin: 0,
              }}
            >
              What KFX Unlocks
            </h2>
            <p style={{ marginTop: 12, color: "#d4d4d8" }}>
              KFX grows in power as the network expands.
            </p>

            <div
              style={{
                marginTop: 24,
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0,1fr))",
                gap: 16,
              }}
            >
              <UnlockCard
                phase="Phase 1"
                title="Rewards & Discounts"
                desc="Redeem tokens for free items, merch, and exclusive perks."
              />
              <UnlockCard
                phase="Phase 2"
                title="Early Investor Access"
                desc="Priority allocation in tokenized vending ownership rounds."
              />
              <UnlockCard
                phase="Phase 3"
                title="Governance & Voting"
                desc="Help decide new locations, product mix, and ecosystem direction."
              />
              <UnlockCard
                phase="Phase 4"
                title="Revenue Participation"
                desc="Gateway to owning fractional revenue in a decentralized network."
              />
            </div>

            <div
              style={{
                marginTop: 24,
                borderRadius: 16,
                border: "1px solid rgba(0,184,255,0.4)",
                background: "#0B0F12",
                padding: 20,
                textAlign: "center",
              }}
            >
              <p style={{ color: "#e4e4e7", margin: 0 }}>
                <span style={{ fontWeight: 800, color: "#fff", fontFamily: `"Roboto Condensed", Inter, system-ui` }}>
                  Holding KFX today
                </span>{" "}
                gives you early access, priority advantages, and potential
                future ownership of revenue-generating assets.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Early Access / Email Capture */}
        <section id="join" style={{ padding: "64px 0" }}>
          <div
            style={{
              margin: "0 auto",
              maxWidth: 720,
              padding: "0 24px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: `"Roboto Condensed", Inter, system-ui`,
                fontSize: 28,
                fontWeight: 800,
                margin: 0,
              }}
            >
              Get Your First KFX Tokens — Before Public Release
            </h2>
            <p style={{ marginTop: 12, color: "#d4d4d8" }}>
              Founding members receive bonus KFX, priority access to vending
              ownership rounds, and insider updates.
            </p>

            <form
              method="POST"
              action="https://formspree.io/f/mpwyjqgq"
              style={{
                marginTop: 24,
                display: "grid",
                gap: 12,
                gridTemplateColumns: "1fr",
              }}
            >
              <input
                type="text"
                name="name"
                aria-label="First name"
                placeholder="First name (optional)"
                style={inputStyle}
              />
              <input
                type="email"
                name="email"
                aria-label="Email address"
                required
                placeholder="Email address"
                style={inputStyle}
              />
              <button type="submit" style={primaryBtn}>
                Claim My Early Access Spot
              </button>
            </form>

            <p style={{ marginTop: 8, fontSize: 12, color: "#71717a" }}>
              ✅ You’re in! You’ll receive updates on token activation and bonus
              opportunities.
            </p>
          </div>
        </section>

        {/* Section 7: Vision */}
        <section
          style={{
            padding: "64px 0",
            background:
              "linear-gradient(to bottom, #0A0A0A 0%, #0E0F12 100%)",
          }}
        >
          <div style={{ margin: "0 auto", maxWidth: 960, padding: "0 24px", textAlign: "center" }}>
            <h2
              style={{
                fontFamily: `"Roboto Condensed", Inter, system-ui`,
                fontSize: 28,
                fontWeight: 800,
                margin: 0,
              }}
            >
              The Future of Wellness Is Decentralized
            </h2>
            <p style={{ marginTop: 16, color: "#d4d4d8" }}>
              Wellness infrastructure owned by the people who use it.
              Transparent revenue. Community-powered growth. We’re starting with
              healthy vending — but KFX is your key to everything that comes
              next.
            </p>
            <div
              style={{
                marginTop: 24,
                borderRadius: 16,
                border: "1px solid rgba(0,184,255,0.4)",
                background: "#0B0F12",
                padding: 20,
              }}
            >
              <p style={{ color: "#e4e4e7", margin: 0 }}>
                <span style={{ fontWeight: 800, color: "#fff", fontFamily: `"Roboto Condensed", Inter, system-ui` }}>
                  Kickfixx isn’t just launching a product —
                </span>{" "}
                we’re building a new economic layer for human performance and
                wellness.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7.5: FAQ */}
        <FAQ />

        {/* Section 8: Final CTA */}
        <section style={{ padding: "64px 0" }}>
          <div style={{ margin: "0 auto", maxWidth: 960, padding: "0 24px", textAlign: "center" }}>
            <h2
              style={{
                fontFamily: `"Roboto Condensed", Inter, system-ui`,
                fontSize: 28,
                fontWeight: 800,
                margin: 0,
              }}
            >
              Phase One Is Now Open — Don’t Watch the Future Happen. Own It.
            </h2>
            <ul style={{ marginTop: 16, color: "#d4d4d8", listStyle: "none", padding: 0 }}>
              <li>• Bonus KFX tokens for founding members</li>
              <li>• Early access to tokenized vending ownership rounds</li>
              <li>• Priority in future governance</li>
            </ul>
            <p style={{ marginTop: 8, color: "#a1a1aa" }}>
              Founding benefits are limited and won’t repeat in later phases.
            </p>

            <div style={{ marginTop: 24 }}>
              <a href="#join" style={primaryBtn}>
                Join Kickfixx Phase One
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* ---------- small reusable UI (inline-style versions) ---------- */

const cardStyle: React.CSSProperties = {
  borderRadius: 16,
  border: "1px solid #27272a",
  background: "rgba(24,24,27,0.4)",
  padding: 20,
};

function Stat({ children }: { children: React.ReactNode }) {
  return <div style={cardStyle}>{children}</div>;
}

function Card({
  title,
  badge,
  detail,
}: {
  title: string;
  badge: string;
  detail: string;
}) {
  return (
    <div style={cardStyle}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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

function UnlockCard({
  phase,
  title,
  desc,
}: {
  phase: string;
  title: string;
  desc: string;
}) {
  return (
    <div style={cardStyle}>
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

const inputStyle: React.CSSProperties = {
  borderRadius: 16,
  background: "#18181b",
  border: "1px solid #27272a",
  padding: "12px 16px",
  color: "#fff",
  outline: "none",
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

/* FAQ inline */
function FAQ() {
  const items = [
    {
      q: "Can I buy tokens right now?",
      a: "Not yet. This is the Early Access phase for interest and whitelist allocation. Purchases will open in the next phase. Early members get bonus KFX and first rights to invest.",
    },
    {
      q: "What’s the difference between KFX and the Ownership Token?",
      a: "KFX is a reward/utility token used for perks, access, and engagement. The Ownership Token is a regulated asset representing fractional machine ownership with revenue payouts. KFX holders get priority access when Ownership Tokens go live.",
    },
    {
      q: "Do I need a crypto wallet today?",
      a: "No. You can join Early Access with just an email. We’ll guide you to set up a wallet (e.g., Coinbase Wallet) before token distribution.",
    },
    {
      q: "Which network will KFX use?",
      a: "We plan to launch on Base (Coinbase L2) for fast, low-fee transactions and smooth onboarding.",
    },
    {
      q: "Are these tokens securities?",
      a: "KFX is a utility/rewards token (not an investment). The Ownership Token will be structured as a compliant security (e.g., Reg D/CF via a licensed platform) with KYC/AML as required.",
    },
    {
      q: "When will I receive KFX from Early Access?",
      a: "Upon Phase-1 activation (post-signup campaign). Founding members receive bonus KFX and instructions to claim.",
    },
    {
      q: "When does the Ownership Token sale open?",
      a: "After first machine placement is announced and legal/compliance setup is complete. Early Access members will be notified first.",
    },
    {
      q: "How do I earn KFX now without a machine live?",
      a: "Join Early Access, engage on socials, and refer locations. Purchases (+ crypto bonuses) start when machines go live.",
    },
    {
      q: "What fees are involved?",
      a: "KFX transactions on Base are very low (typically cents). Ownership Token platform fees will be disclosed at launch.",
    },
    {
      q: "Who do I contact with questions?",
      a: "Email info@kickfixx.com and include “KFX” in the subject.",
    },
  ];

  return (
    <section style={{ padding: "64px 0" }}>
      <div style={{ margin: "0 auto", maxWidth: 960, padding: "0 24px" }}>
        <h2
          style={{
            fontFamily: `"Roboto Condensed", Inter, system-ui`,
            fontSize: 28,
            fontWeight: 800,
            textAlign: "center",
            margin: 0,
          }}
        >
          KFX Early Access — FAQ
        </h2>
        <p style={{ marginTop: 12, color: "#d4d4d8", textAlign: "center" }}>
          Clear answers to the most common questions about KFX and the Ownership Token.
        </p>
        

        <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
          {items.map((item, i) => (
            <details
              key={i}
              style={{
                borderRadius: 16,
                border: "1px solid #27272a",
                background: "rgba(24,24,27,0.4)",
                padding: 20,
              }}
             

            >
              <summary
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  listStyle: "none",
                }}
              >
                <span style={{ fontWeight: 800, fontFamily: `"Roboto Condensed", Inter, system-ui` }}>
                  {item.q}
                </span>
                <span style={{ color: "#a1a1aa", marginLeft: 16 }} aria-hidden>
                  ＋
                </span>
              </summary>
              <p style={{ marginTop: 12, color: "#a1a1aa" }}>{item.a}</p>
            </details>
          ))}
        </div>

        <div style={{ marginTop: 24, textAlign: "center" }}>
          <a href="#join" style={primaryBtn}>
            Join Early Access
            <p style={{ marginTop: 12 }}>
  <a
    href="/ownership"
    style={{ color: "#00B8FF", textDecoration: "none", fontWeight: 800 }}
  >
    Ownership Token (Coming Soon) →
  </a>
</p>

            
         </a>
        </div>
      </div>
    </section>
  );
}
