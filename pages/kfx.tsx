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
        {/* Custom fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Roboto+Condensed:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main
        style={{
          background: "#0A0A0A",
          color: "#fff",
          fontFamily:
            'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        {/* ===== Header (home link + nav) ===== */}
        <header className="hdr">
          <Link href="/" className="logoLink" aria-label="Kickfixx home">
            <Image
              src="/kickfixx-logo-00B8FF.png"
              alt="Kickfixx"
              width={160}
              height={40}
              priority
            />
          </Link>
          <nav className="nav">
            <Link href="/kfx" className="navLink">KFX Token</Link>
            <Link href="/contact" className="navLink">Contact</Link>
          </nav>
          <style jsx>{`
            .hdr {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 14px 0;
              border-bottom: 1px solid #1f2937;
              max-width: 1120px;
              margin: 0 auto;
              padding-left: 24px;
              padding-right: 24px;
            }
            .nav { display: flex; gap: 16px; }
            .navLink { color: #00b8ff; font-weight: 800; text-decoration: none; }
            @media (max-width: 768px) {
              .hdr { padding-left: 16px; padding-right: 16px; }
            }
          `}</style>
        </header>

        {/* ===== Section 1: Hero (mobile-optimized) ===== */}
        <section className="heroWrap">
          <div aria-hidden className="bgGlows">
            <div className="glow glowLT" />
            <div className="glow glowRB" />
          </div>

          <div className="heroInner">
            {/* Token with ambient aura (transparent PNG, no box) */}
            <div className="tokenWrap">
              <div aria-hidden className="tokenAura" />
              <Image
                src="/kfx-token.png"   // ensure this is the transparent PNG
                alt="KFX token"
                fill
                sizes="(max-width: 768px) 180px, 260px"
                style={{ objectFit: "contain", position: "relative", zIndex: 1 }}
                priority
              />
            </div>

            <h1 className="heroTitle">
              Fuel the Future of Wellness with <span className="accent">KFX</span>
            </h1>

            <p className="heroLead">
              The official reward token of Kickfixx — unlocking exclusive perks, discounts,
              and early access to revenue-generating vending machine ownership.
            </p>

            <p className="heroSub">
              This isn’t just a rewards point. It’s your entry into the world’s first decentralized wellness ecosystem.
            </p>

            <div className="ctaRow">
              <a href="#join" className="primaryBtn">Join Early Access</a>
              <a href="#how" className="ghostBtn">Learn How It Works</a>
            </div>

            <p className="note">
              Early Access = interest + whitelist. Purchasing opens in the next phase.
            </p>
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

            .heroTitle { margin: 0; font-family: "Roboto Condensed", Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; font-size: 40px; line-height: 1.15; font-weight: 800; letter-spacing: 0.2px; }
            .accent { color: #00b8ff; }
            .heroLead { margin: 16px auto 8px; max-width: 720px; font-size: 18px; color: #d4d4d8; }
            .heroSub { margin: 4px auto 0; max-width: 720px; color: #a1a1aa; }
            .ctaRow { margin-top: 20px; display: inline-flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
            .primaryBtn { display: inline-flex; align-items: center; justify-content: center; border-radius: 16px; background: #00b8ff; padding: 12px 20px; font-weight: 700; color: #000; text-decoration: none; }
            .ghostBtn { display: inline-flex; align-items: center; justify-content: center; border-radius: 16px; border: 1px solid #3f3f46; padding: 12px 20px; font-weight: 600; color: #fff; text-decoration: none; }
            .note { margin-top: 8px; font-size: 12px; color: #71717a; }

            @media (max-width: 768px) {
              .heroInner { padding: 40px 16px 40px; }
              .tokenWrap { width: 180px; height: 180px; }
              .heroTitle { font-size: 30px; }
              .heroLead { font-size: 16px; }
              .primaryBtn, .ghostBtn { width: 100%; max-width: 420px; }
            }
          `}</style>
        </section>

        {/* ===== Section 2: What is KFX ===== */}
        <section className="whatWrap">
          <div className="whatGrid">
            <div>
              <h2 className="h2">What Is KFX? Your Key to the Kickfixx Ecosystem</h2>
              <p className="p">
                KFX is the <span className="em">official utility token</span> of Kickfixx. It rewards early supporters,
                customers, and future investors for helping us build the world’s first <span className="em">decentralized wellness network</span>.
              </p>
              <ul className="ul">
                <li><span className="em">Earn it</span> via socials, referrals, and purchases (vending coming soon).</li>
                <li><span className="em">Use it</span> for discounts, free items, exclusive access, and priority to invest.</li>
                <li><span className="em">Grow with us</span> as KFX unlocks governance and deeper participation over time.</li>
              </ul>

              <div className="stats">
                <Stat>⚡ <span className="m">Symbol:</span> KFX</Stat>
                <Stat>🧱 <span className="m">Network:</span> Base (L2)</Stat>
                <Stat>💸 <span className="m">Fees:</span> Ultra-low</Stat>
                <Stat>🛠️ <span className="m">Use:</span> Rewards → Access → Governance</Stat>
              </div>

              <div style={{ marginTop: 16 }}>
                <a href="#how" className="learn">Learn How KFX Works →</a>
              </div>
            </div>

            <div className="tokenRight">
              <div aria-hidden className="tokenAuraR" />
              <Image
                src="/kfx-token.png"
                alt="KFX token large"
                fill
                sizes="(max-width: 768px) 320px, 420px"
                style={{ objectFit: "contain", position: "relative", zIndex: 1, borderRadius: 16 }}
              />
            </div>
          </div>

          <style jsx>{`
            .whatWrap { padding: 64px 0; }
            .whatGrid {
              margin: 0 auto; max-width: 1120px; padding: 0 24px;
              display: grid; gap: 40px;
              grid-template-columns: minmax(0, 1fr) minmax(0, clamp(340px, 40vw, 520px));
              align-items: center;
            }
            .h2 { font-family: "Roboto Condensed", Inter, system-ui; font-size: 28px; font-weight: 800; margin: 0; letter-spacing: 0.2px; }
            .p { margin-top: 16px; color: #d4d4d8; }
            .em { color: #fff; font-weight: 600; }
            .ul { margin-top: 18px; color: #d4d4d8; padding-left: 18px; }
            .stats { margin-top: 20px; display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 12px; }
            .m { color: #a1a1aa; }
            .learn { color: #00b8ff; text-decoration: none; font-weight: 700; }

            .tokenRight { position: relative; width: 100%; height: 420px; border-radius: 16px; }
            .tokenAuraR { position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(0,184,255,0.25), transparent 70%); filter: blur(40px); z-index: 0; border-radius: 16px; }

            @media (max-width: 1024px) {
              .stats { grid-template-columns: repeat(2, minmax(0,1fr)); }
            }
            @media (max-width: 768px) {
              .whatGrid { grid-template-columns: 1fr; gap: 24px; padding: 0 16px; }
              .tokenRight { height: 320px; }
            }
          `}</style>
        </section>

        {/* ===== Section 3: Why KFX Exists ===== */}
        <section className="whyWrap">
          <div className="whyInner">
            <h2 className="h2">Why KFX Exists</h2>
            <p className="p">
              The world is shifting toward transparency, community ownership, and decentralized control. Traditional brands keep all the profits.
              <span className="em"> Kickfixx is doing the opposite</span> — we’re building an ecosystem where the people who fuel the movement, benefit from the movement.
            </p>
            <ul className="ul">
              <li>Reward early supporters who believe before it’s mainstream.</li>
              <li>Replace outdated point systems with something that actually holds value.</li>
              <li>Build the foundation for decentralized ownership, not just fandom.</li>
              <li>Create a gateway to future revenue participation and governance.</li>
            </ul>

            <div className="infoCard">
              <p className="infoText">
                <span className="infoStrong">KFX is not just a loyalty token.</span> It is your access pass into the ownership era of physical wellness infrastructure.
              </p>
            </div>
          </div>

          <style jsx>{`
            .whyWrap { padding: 64px 0; background: linear-gradient(to bottom, #0a0a0a 0%, #0e0f12 100%); }
            .whyInner { margin: 0 auto; max-width: 960px; padding: 0 24px; }
            .h2 { font-family: "Roboto Condensed", Inter, system-ui; font-size: 28px; font-weight: 800; margin: 0; }
            .p { margin-top: 16px; color: #d4d4d8; }
            .em { font-weight: 600; color: #fff; }
            .ul { margin-top: 18px; color: #d4d4d8; padding-left: 18px; }
            .infoCard {
              margin-top: 24px; border-radius: 16px;
              border: 1px solid rgba(0,184,255,0.4);
              background: #0b0f12; padding: 20px; text-align: center;
              box-shadow: 0 0 35px rgba(0,184,255,0.12); /* subtle glow */
            }
            .infoText { color: #e4e4e7; margin: 0; }
            .infoStrong { font-weight: 800; color: #fff; font-family: "Roboto Condensed", Inter, system-ui; }
          `}</style>
        </section>

        {/* ===== Section 4: How to Earn ===== */}
        <section id="how" className="earnWrap">
          <div className="earnInner">
            <h2 className="h2">How to Earn KFX</h2>
            <p className="p">Start earning now — no machine required.</p>

            <div className="cardGrid">
              <Card title="Join the Early Access List" badge="Available now" detail="+50 KFX on signup" />
              <Card title="Follow & Engage on Socials" badge="Available now" detail="+5–20 KFX per action" />
              <Card title="Refer a Gym / Wellness Location" badge="Coming soon" detail="+500 KFX after acceptance" />
              <Card title="Pay with Crypto (On Launch)" badge="Coming soon" detail="+10% KFX bonus on purchases" />
            </div>

            <div style={{ marginTop: 24 }}>
              <a href="#join" className="primaryBtn">Start Earning Today</a>
            </div>
          </div>

          <style jsx>{`
            .earnWrap { padding: 64px 0; }
            .earnInner { margin: 0 auto; max-width: 1120px; padding: 0 24px; }
            .h2 { font-family: "Roboto Condensed", Inter, system-ui; font-size: 28px; font-weight: 800; margin: 0; }
            .p { margin-top: 12px; color: #d4d4d8; }
            .cardGrid {
              margin-top: 24px;
              display: grid;
              grid-template-columns: repeat(2, minmax(0,1fr));
              gap: 16px;
            }
            .primaryBtn { display: inline-flex; align-items: center; justify-content: center; border-radius: 16px; background: #00b8ff; padding: 12px 20px; font-weight: 700; color: #000; text-decoration: none; }
            @media (max-width: 768px) {
              .earnInner { padding: 0 16px; }
              .cardGrid { grid-template-columns: 1fr; }
            }
          `}</style>
        </section>

        {/* ===== Section 5: What KFX Unlocks ===== */}
        <section className="unlockWrap">
          <div className="unlockInner">
            <Link href="/ownership" className="navLink" style={{ fontWeight: 700 }}>
              Ownership Token (Coming Soon)
            </Link>

            <h2 className="h2">What KFX Unlocks</h2>
            <p className="p">KFX grows in power as the network expands.</p>

            <div className="unlockGrid">
              <UnlockCard phase="Phase 1" title="Rewards & Discounts" desc="Redeem tokens for free items, merch, and exclusive perks." />
              <UnlockCard phase="Phase 2" title="Early Investor Access" desc="Priority allocation in tokenized vending ownership rounds." />
              <UnlockCard phase="Phase 3" title="Governance & Voting" desc="Help decide new locations, product mix, and ecosystem direction." />
              <UnlockCard phase="Phase 4" title="Revenue Participation" desc="Gateway to owning fractional revenue in a decentralized network." />
            </div>

            <div className="infoCard">
              <p className="infoText">
                <span className="infoStrong">Holding KFX today</span> gives you early access, priority advantages, and potential future ownership of revenue-generating assets.
              </p>
            </div>
          </div>

          <style jsx>{`
            .unlockWrap { padding: 64px 0; background: #0e0f12; }
            .unlockInner { margin: 0 auto; max-width: 1120px; padding: 0 24px; }
            .h2 { font-family: "Roboto Condensed", Inter, system-ui; font-size: 28px; font-weight: 800; margin: 0; }
            .p { margin-top: 12px; color: #d4d4d8; }
            .unlockGrid { margin-top: 24px; display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 16px; }
            .infoCard { margin-top: 24px; border-radius: 16px; border: 1px solid rgba(0,184,255,0.4); background: #0b0f12; padding: 20px; text-align: center; box-shadow: 0 0 35px rgba(0,184,255,0.12); }
            .infoText { color: #e4e4e7; margin: 0; }
            .infoStrong { font-weight: 800; color: #fff; font-family: "Roboto Condensed", Inter, system-ui; }
            @media (max-width: 1024px) { .unlockGrid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
            @media (max-width: 768px) { .unlockInner { padding: 0 16px; } .unlockGrid { grid-template-columns: 1fr; } }
          `}</style>
        </section>

        {/* ===== Section 6: Early Access / Email Capture ===== */}
        <section id="join" className="joinWrap">
          <div className="joinInner">
            <h2 className="h2">Get Your First KFX Tokens — Before Public Release</h2>
            <p className="p">Founding members receive bonus KFX, priority access to vending ownership rounds, and insider updates.</p>

            <form
              method="POST"
              action="https://formspree.io/f/mpwyjqgq"
              className="form"
            >
              <input type="text" name="name" aria-label="First name" placeholder="First name (optional)" className="inp" />
              <input type="email" name="email" aria-label="Email address" required placeholder="Email address" className="inp" />
              <button type="submit" className="primaryBtn">Claim My Early Access Spot</button>
            </form>

            <p className="note">✅ You’re in! You’ll receive updates on token activation and bonus opportunities.</p>
          </div>

          <style jsx>{`
            .joinWrap { padding: 64px 0; }
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

        {/* ===== Section 7: Vision ===== */}
        <section className="visionWrap">
          <div className="visionInner">
            <h2 className="h2">The Future of Wellness Is Decentralized</h2>
            <p className="p">
              Wellness infrastructure owned by the people who use it. Transparent revenue. Community-powered growth.
              We’re starting with healthy vending — but KFX is your key to everything that comes next.
            </p>
            <div className="infoCard">
              <p className="infoText">
                <span className="infoStrong">Kickfixx isn’t just launching a product —</span> we’re building a new economic layer for human performance and wellness.
              </p>
            </div>
          </div>

          <style jsx>{`
            .visionWrap { padding: 64px 0; background: linear-gradient(to bottom, #0a0a0a 0%, #0e0f12 100%); }
            .visionInner { margin: 0 auto; max-width: 960px; padding: 0 24px; text-align: center; }
            .h2 { font-family: "Roboto Condensed", Inter, system-ui; font-size: 28px; font-weight: 800; margin: 0; }
            .p { margin-top: 16px; color: #d4d4d8; }
            .infoCard { margin-top: 24px; border-radius: 16px; border: 1px solid rgba(0,184,255,0.4); background: #0b0f12; padding: 20px; box-shadow: 0 0 35px rgba(0,184,255,0.12); }
            .infoText { color: #e4e4e7; margin: 0; }
            .infoStrong { font-weight: 800; color: #fff; font-family: "Roboto Condensed", Inter, system-ui; }
          `}</style>
        </section>

        {/* ===== Section 7.5: FAQ ===== */}
        <FAQ />

        {/* ===== Section 8: Final CTA ===== */}
        <section className="finalWrap">
          <div className="finalInner">
            <h2 className="h2">Phase One Is Now Open — Don’t Watch the Future Happen. Own It.</h2>
            <ul className="finalUl">
              <li>• Bonus KFX tokens for founding members</li>
              <li>• Early access to tokenized vending ownership rounds</li>
              <li>• Priority in future governance</li>
            </ul>
            <p className="p2">Founding benefits are limited and won’t repeat in later phases.</p>

            <div style={{ marginTop: 24 }}>
              <a href="#join" className="primaryBtn">Join Kickfixx Phase One</a>
            </div>
          </div>

          <style jsx>{`
            .finalWrap { padding: 64px 0; }
            .finalInner { margin: 0 auto; max-width: 960px; padding: 0 24px; text-align: center; }
            .h2 { font-family: "Roboto Condensed", Inter, system-ui; font-size: 28px; font-weight: 800; margin: 0; }
            .finalUl { margin-top: 16px; color: #d4d4d8; list-style: none; padding: 0; }
            .p2 { margin-top: 8px; color: #a1a1aa; }
            @media (max-width: 768px) { .finalInner { padding: 0 16px; } }
          `}</style>
        </section>

        {/* ===== Footer (home link lives in header; keep ownership link here too) ===== */}
        <footer className="ftr">
          <div>
            <Link href="/ownership" className="navLink" style={{ fontWeight: 800 }}>
              Ownership Token (Coming Soon)
            </Link>
          </div>
          © {new Date().getFullYear()} Kickfixx. All rights reserved.
          <style jsx>{`
            .ftr {
              margin-top: 20px; padding: 30px 0; border-top: 1px solid #1f2937;
              opacity: 0.8; font-size: 14px; text-align: center;
            }
          `}</style>
        </footer>
      </main>
    </>
  );
}

/* ---------- Reusable UI (glowing cards) ---------- */

const cardStyle: React.CSSProperties = {
  borderRadius: 16,
  border: "1px solid #27272a",
  background: "rgba(24,24,27,0.55)",
  padding: 20,
  boxShadow: "0 0 35px rgba(0,184,255,0.10)", // soft glow
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

/* ---------- FAQ ---------- */

function FAQ() {
  const items = [
    { q: "Can I buy tokens right now?", a: "Not yet. This is the Early Access phase for interest and whitelist allocation. Purchases will open in the next phase. Early members get bonus KFX and first rights to invest." },
    { q: "What’s the difference between KFX and the Ownership Token?", a: "KFX is a reward/utility token used for perks, access, and engagement. The Ownership Token is a regulated asset representing fractional machine ownership with revenue payouts. KFX holders get priority access when Ownership Tokens go live." },
    { q: "Do I need a crypto wallet today?", a: "No. You can join Early Access with just an email. We’ll guide you to set up a wallet (e.g., Coinbase Wallet) before token distribution." },
    { q: "Which network will KFX use?", a: "We plan to launch on Base (Coinbase L2) for fast, low-fee transactions and smooth onboarding." },
    { q: "Are these tokens securities?", a: "KFX is a utility/rewards token (not an investment). The Ownership Token will be structured as a compliant security (e.g., Reg D/CF via a licensed platform) with KYC/AML as required." },
    { q: "When will I receive KFX from Early Access?", a: "Upon Phase-1 activation (post-signup campaign). Founding members receive bonus KFX and instructions to claim." },
    { q: "When does the Ownership Token sale open?", a: "After first machine placement is announced and legal/compliance setup is complete. Early Access members will be notified first." },
    { q: "How do I earn KFX now without a machine live?", a: "Join Early Access, engage on socials, and refer locations. Purchases (+ crypto bonuses) start when machines go live." },
    { q: "What fees are involved?", a: "KFX transactions on Base are very low (typically cents). Ownership Token platform fees will be disclosed at launch." },
    { q: "Who do I contact with questions?", a: 'Email info@kickfixx.com and include "KFX" in the subject.' },
  ];

  return (
    <section className="faqWrap">
      <div className="faqInner">
        <h2 className="h2 center">KFX Early Access — FAQ</h2>
        <p className="p center">Clear answers to the most common questions about KFX and the Ownership Token.</p>

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
          <a href="#join" className="primaryBtn">Join Early Access</a>
          <p style={{ marginTop: 12 }}>
            <a href="/ownership" className="navLink" style={{ fontWeight: 800 }}>
              Ownership Token (Coming Soon) →
            </a>
          </p>
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
        .navLink { color: #00b8ff; text-decoration: none; }
        @media (max-width: 768px) { .faqInner { padding: 0 16px; } }
      `}</style>
    </section>
  );
}
