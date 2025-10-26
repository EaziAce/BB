// pages/index.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

/** Reusable token image with optional aura glow */
function TokenImage({
  src,
  alt,
  size = 220,
  aura = false,
  auraColor = "rgba(0,184,255,0.28)",
  blur = 46,
}: {
  src: string;
  alt: string;
  size?: number;
  aura?: boolean;
  auraColor?: string;
  blur?: number;
}) {
  return (
    <div className="tokenWrap" style={{ width: size, height: size }}>
      {aura && (
        <div
          aria-hidden
          className="tokenAura"
          style={{
            filter: `blur(${blur}px)`,
            background: `radial-gradient(circle at center, ${auraColor}, transparent 70%)`,
          }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 60vw, 220px"
        style={{ objectFit: "contain", position: "relative", zIndex: 1 }}
        priority
      />
      <style jsx>{`
        .tokenWrap { margin: 0 auto; position: relative; display: flex; justify-content: center; align-items: center; }
        .tokenAura { position: absolute; inset: 0; z-index: 0; border-radius: 50%; }
      `}</style>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page">
      {/* ambient glows */}
      <div className="hero-glows" aria-hidden>
        <div className="glow glow-top" />
        <div className="glow glow-bottom" />
      </div>

      {/* Header (matches subpages) */}
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

      {/* Hero */}
      <section className="hero">
        <div className="heroLeft">
          <h1 className="h1">
            <span className="brand">Kickfixx</span> Vending &amp; Supplies
          </h1>
          <p className="lead">
            Clean. Modern. Human-friendly fuel—where you actually are. We place beautiful machines,
            stock better choices, and prove it with transparent reports.
          </p>

          <ul className="heroBullets">
            <li><span>Fast install.</span> Zero hassle, zero mess.</li>
            <li><span>Better products.</span> Not just sugar and shrink-wrap.</li>
            <li><span>Aligned incentives.</span> You win when your people do.</li>
          </ul>

          <div className="ctaRow">
            <Link href="/contact" className="btnPrimary">Place a Machine</Link>
            <Link href="/kfx" className="btnGhost">Earn with KFX</Link>
          </div>
        </div>

        {/* Right-side image tile */}
        <div className="heroImageWrap">
          <Image
            src="/vending-mockup.png"
            alt="Kickfixx vending machine mockup"
            width={1000}
            height={1300}
            className="heroImage"
            priority
          />
        </div>
      </section>

      {/* Features */}
      <section className="section sectionDark">
        <h2 className="sectionTitle">
          Why Choose <span className="brand">Kickfixx</span>
        </h2>

        <div className="gridCards">
          {[
            {
              title: "Convenience that actually helps",
              text: "On-site access to energizing drinks & smart snacks that keep people moving—not crashing.",
            },
            {
              title: "Numbers you can trust",
              text: "Simple monthly/quarterly summaries. Real sales. Real payouts. No mystery margins.",
            },
            {
              title: "We handle everything",
              text: "Install, restock, maintain. You get happier tenants, members, employees—without lifting a finger.",
            },
          ].map((f, i) => (
            <div key={i} className="card">
              <h3 className="cardTitle">{f.title}</h3>
              <p className="cardText">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KFX promo strip */}
      <section className="section promo">
        <div className="promoCopy">
          <h3 className="promoH3">
            Kickfixx Reward Token (<span className="brand">KFX</span>)
          </h3>
          <p className="promoP">
            Early supporters shouldn’t just clap from the sidelines. With KFX, you earn perks today and priority access as the network scales.
          </p>
          <Link href="/kfx" className="btnPrimary">Learn about KFX</Link>
        </div>

        <div className="promoVisual">
          <TokenImage src="/kfx-token.png" alt="KFX Reward Token" size={220} aura />
        </div>
      </section>

      {/* Ownership teaser */}
      <section className="section">
        <h2 className="sectionTitle">Machines that work. <br/>Ownership that matters.</h2>
        <p className="sectionSub">
          We’re building a decentralized wellness network where people can help place, power, and
          eventually <em>own</em> the infrastructure. Start with KFX. Watch for Ownership.
        </p>

        <div className="gridCards">
          {[
            {
              title: "KFX (live)",
              desc: "Utility & rewards for engagement, referrals, and early access.",
              tag: "Earn today",
              href: "/kfx",
            },
            {
              title: "Ownership (soon)",
              desc: "Compliant, fractional access to real machine revenue via partners.",
              tag: "Allocation priority with KFX",
              href: "/ownership",
            },
            {
              title: "Placement",
              desc: "We’ll match the machine to your space and your people—then handle the rest.",
              tag: "Zero-hassle setup",
              href: "/contact",
            },
          ].map((o, i) => (
            <Link key={i} href={o.href} className="card cardLink">
              <h3 className="cardTitle">{o.title}</h3>
              <p className="cardText">{o.desc}</p>
              <p className="cardTag">✓ {o.tag}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Placement options */}
      <section className="section sectionDark">
        <h2 className="sectionTitle">Placement Options</h2>
        <p className="sectionSub">Pick the model; we’ll tune it to your traffic and goals.</p>

        <div className="gridCards">
          {[
            {
              title: "Revenue Share",
              desc: "A % of monthly gross sales back to your property.",
              tag: "Great for medium–high traffic",
            },
            {
              title: "Flat Fee",
              desc: "Fixed monthly rent for a clean, predictable line item.",
              tag: "Perfect for budgets",
            },
            {
              title: "No-Fee Trial",
              desc: "Prove demand fast with minimal friction to get started.",
              tag: "Ideal for new/strategic sites",
            },
          ].map((o, i) => (
            <div key={i} className="card">
              <h3 className="cardTitle">{o.title}</h3>
              <p className="cardText">{o.desc}</p>
              <p className="cardTag">✓ {o.tag}</p>
            </div>
          ))}
        </div>

        <div className="ctaCenter">
          <Link href="/contact" className="btnPrimary">Talk placement</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div style={{ marginBottom: 8 }}>
          <Link href="/ownership" className="footLink">Ownership Token (Coming Soon)</Link>
          <span className="sep">•</span>
          <Link href="/kfx" className="footLink">KFX</Link>
          <span className="sep">•</span>
          <Link href="/contact" className="footLink">Contact</Link>
        </div>
        © {new Date().getFullYear()} Kickfixx. All rights reserved.
      </footer>

      {/* styled-jsx */}
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
        .heroLeft { min-width: 0; }
        .h1 { font-size: 46px; line-height: 1.1; margin: 0 0 12px; font-family: "Roboto Condensed", Inter, system-ui; letter-spacing: .2px; }
        .brand { color: #00b8ff; }
        .lead { opacity: .9; margin: 0 0 16px; max-width: 60ch; }
        .heroBullets { margin: 0 0 18px; padding: 0; list-style: none; color: #d4d4d8; }
        .heroBullets li { margin: 6px 0; }
        .heroBullets li span { color: #fff; font-weight: 600; }
        .ctaRow { display: flex; gap: 12px; flex-wrap: wrap; }
        .btnPrimary { display: inline-block; background: #00b8ff; color: #000; border-radius: 12px; padding: 12px 16px; font-weight: 800; text-decoration: none; }
        .btnGhost { display: inline-block; border: 1px solid #3f3f46; color: #fff; border-radius: 12px; padding: 12px 16px; font-weight: 600; text-decoration: none; }

        .heroImageWrap {
          position: relative; display: flex; justify-content: center; align-items: center;
          overflow: hidden; border-radius: 20px; margin: 40px auto; max-width: 600px;
          background: radial-gradient(circle at center, rgba(0,184,255,.08) 0%, transparent 70%);
          box-shadow: 0 8px 24px rgba(0,0,0,.6), 0 0 35px rgba(0,184,255,.35);
        }
        .heroImage { object-fit: cover; width: 100%; height: auto; transform: scale(1.05); transition: transform .3s ease; }

        .section { padding: 60px 0; }
        .sectionDark { background: #0d0d0d; }
        .sectionTitle { text-align: center; font-size: 32px; margin-bottom: 16px; font-family: "Roboto Condensed", Inter, system-ui; font-weight: 800; letter-spacing: .2px; }
        .sectionSub { text-align: center; opacity: .85; margin-bottom: 32px; }
        .ctaCenter { text-align: center; margin-top: 20px; }

        .gridCards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; max-width: 1100px; margin: 0 auto; text-align: center; }
        .card { border-radius: 16px; border: 1px solid #27272a; background: rgba(24,24,27,.4); padding: 20px; transition: box-shadow .2s ease, border-color .2s ease; }
        .card:hover { border-color: rgba(0,184,255,.5); box-shadow: 0 0 24px rgba(0,184,255,.2); }
        .cardTitle { color: #00b8ff; margin-bottom: 10px; }
        .cardText { opacity: .85; }
        .cardTag { color: #22c55e; font-weight: 600; margin-top: 12px; }
        .cardLink { text-decoration: none; }

        .promo { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: center; }
        .promoCopy { min-width: 0; }
        .promoH3 { font-size: 28px; margin: 0 0 8px; font-family: "Roboto Condensed", Inter, system-ui; font-weight: 800; }
        .promoP { opacity: .9; margin: 0 0 16px; }
        .promoVisual { display: flex; justify-content: center; }

        .footer { margin-top: 60px; padding: 30px 0; border-top: 1px solid #1f2937; opacity: .8; font-size: 14px; text-align: center; }
        .footLink { color: #00b8ff; text-decoration: none; font-weight: 800; }
        .sep { margin: 0 8px; opacity: .5; }

        @media (max-width: 980px) {
          .hero { grid-template-columns: 1fr; }
          .h1 { font-size: 34px; }
          .promo { grid-template-columns: 1fr; }
          .promoVisual { order: -1; }
        }
      `}</style>
    </div>
  );
}
