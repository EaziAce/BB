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
  auraColor = "rgba(0,184,255,0.25)",
  blur = 40,
}: {
  src: string;
  alt: string;
  size?: number;
  aura?: boolean;
  auraColor?: string;
  blur?: number;
}) {
  return (
    <div className="token-wrap" style={{ width: size, height: size }}>
      {aura && (
        <div
          aria-hidden
          className="token-aura"
          style={{
            background: `radial-gradient(circle at center, ${auraColor}, transparent 70%)`,
            filter: `blur(${blur}px)`,
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
        .token-wrap {
          margin: 0 auto;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .token-aura {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page">
      {/* HERO GLOWS (background accents) */}
      <div className="hero-glows" aria-hidden>
        <div className="glow glow-top" />
        <div className="glow glow-bottom" />
      </div>

      {/* Header */}
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

      {/* Hero */}
      <section className="hero">
        <div className="heroLeft">
          <h1 className="h1">
            <span className="brand">Kickfixx</span> Vending &amp; Supplies
          </h1>
          <p className="lead">
            Smart, clean, and modern convenience. Branded machines and
            premium products for busy locations.
          </p>

          <div className="ctaRow">
            <Link href="/contact" className="btnPrimary">
              Get in touch
            </Link>
            <Link href="/kfx" className="btnPrimary">
              Explore KFX Token
            </Link>
          </div>
        </div>

        {/* Right-side image */}
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

      {/* FEATURES SECTION */}
      <section className="section sectionDark">
        <h2 className="sectionTitle">
          Why Choose <span className="brand">Kickfixx</span>
        </h2>

        <div className="gridCards">
          {[
            {
              title: "Convenience",
              text:
                "On-site access to energizing drinks & healthy snacks that boost productivity.",
            },
            {
              title: "Transparent Reporting",
              text:
                "Simple monthly/quarterly sales summaries and flexible terms.",
            },
            {
              title: "Reliable Service",
              text:
                "We install, restock, and maintain — so your space stays clean and stocked.",
            },
          ].map((f, i) => (
            <div key={i} className="card">
              <h3 className="cardTitle">{f.title}</h3>
              <p className="cardText">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KFX promo strip with glow */}
      <section className="section promo">
        <div className="promoCopy">
          <h3 className="promoH3">
            Kickfixx Reward Token (<span className="brand">KFX</span>)
          </h3>
          <p className="promoP">
            Earn perks and priority with KFX while we roll out machines. Early supporters get
            bonus allocations.
          </p>
          <Link href="/kfx" className="btnPrimary">
            Learn about KFX
          </Link>
        </div>

        <div className="promoVisual">
          <TokenImage
            src="/kfx-token.png"   // transparent file
            alt="KFX Reward Token"
            size={220}
            aura
            auraColor="rgba(0,184,255,0.28)"
            blur={46}
          />
        </div>
      </section>

      {/* PLACEMENT OPTIONS */}
      <section className="section">
        <h2 className="sectionTitle">Placement Options</h2>
        <p className="sectionSub">
          Choose what fits your property best. We’ll recommend based on traffic
          and goals.
        </p>

        <div className="gridCards">
          {[
            {
              title: "Revenue Share",
              desc: "Building receives a % of monthly gross sales.",
              tag: "Great for medium–high traffic",
            },
            {
              title: "Flat Fee",
              desc: "Fixed monthly rent for the machine space.",
              tag: "Predictable sites & budgets",
            },
            {
              title: "No-Fee Trial",
              desc: "Fast, low-friction placement to prove demand.",
              tag: "Ideal for new or strategic locations",
            },
          ].map((o, i) => (
            <div key={i} className="card">
              <h3 className="cardTitle">{o.title}</h3>
              <p className="cardText">{o.desc}</p>
              <p className="cardTag">✓ {o.tag}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div style={{ marginBottom: 8 }}>
          <Link href="/ownership" className="footLink">
            Ownership Token (Coming Soon)
          </Link>
        </div>
        © 2025 Kickfixx. All rights reserved.
      </footer>

      {/* styled-jsx for responsiveness + glow polish */}
      <style jsx>{`
        .page {
          max-width: 1160px;
          margin: 0 auto;
          padding: 20px;
          position: relative;
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
          background: radial-gradient(closest-side, #00b8ff, rgba(0,0,0,0));
        }
        .glow-bottom {
          bottom: -160px;
          right: -128px;
          opacity: 0.2;
          background: radial-gradient(closest-side, #00b8ff, rgba(0,0,0,0));
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
        }
        .brand {
          color: #00b8ff;
        }
        .lead {
          opacity: 0.9;
          margin: 0 0 18px;
        }
        .ctaRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btnPrimary {
          display: inline-block;
          background: #00b8ff;
          color: #000;
          border-radius: 12px;
          padding: 12px 16px;
          font-weight: 800;
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
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6),
            0 0 35px rgba(0, 184, 255, 0.35);
        }
        .heroImage {
          object-fit: cover;
          width: 100%;
          height: auto;
          transform: scale(1.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
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
          margin-bottom: 40px;
        }
        .sectionSub {
          text-align: center;
          opacity: 0.8;
          margin-bottom: 40px;
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
        .cardTag {
          color: #22c55e;
          font-weight: 600;
          margin-top: 12px;
        }

        .promo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: center;
        }
        .promoH3 {
          font-size: 28px;
          margin: 0 0 8px;
        }
        .promoP {
          opacity: 0.9;
          margin: 0 0 16px;
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

        /* ---------- Responsive tweaks ---------- */
        @media (max-width: 980px) {
          .hero {
            grid-template-columns: 1fr;
          }
          .h1 {
            font-size: 34px;
          }
          .promo {
            grid-template-columns: 1fr;
          }
          .promoVisual {
            order: -1; /* token above copy on mobile */
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
