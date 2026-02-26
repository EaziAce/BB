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

      {/* HEADER (SIMPLIFIED) */}
      <header className="header">
        <Link href="/" className="logoLink">
          <Image src="/kickfixx-logo-00B8FF.png" alt="Kickfixx" width={160} height={40} priority />
        </Link>

        <nav className="nav">
          <Link href="/contact" className="navLink">Placement</Link>
          <Link href="/contact" className="navLink">Contact</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="heroLeft">
          <h1 className="h1">
            Modern <span className="brand">Vending</span> Solutions
          </h1>

          <p className="lead">
            Clean. Cashless. Fully managed vending for apartments, offices, and high-traffic locations.
          </p>

          <p className="lead">
            We install, stock, and maintain vending machines — at no cost to you. Your tenants,
            employees, or customers get convenient access to snacks and drinks, and you get a seamless, reliable service.
          </p>

          <ul className="heroBullets">
            <li><span>No-cost install.</span> Fast setup with minimal disruption.</li>
            <li><span>Fully managed.</span> We handle restocking, maintenance, and support.</li>
            <li><span>Modern machines.</span> Cashless payments with better product options.</li>
          </ul>

          <div className="ctaRow">
            <Link href="/contact" className="btnPrimary">Request Placement</Link>
            <Link href="#how" className="btnGhost">How it works</Link>
          </div>

          <p className="heroSignal">Own the Infrastructure.</p>
        </div>

        <div className="heroImageWrap">
          <Image
            src="/vending-mockup.png"
            alt="Kickfixx vending machine"
            width={1000}
            height={1300}
            className="heroImage"
            priority
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="section sectionDark">
        <h2 className="sectionTitle">How It Works</h2>

        <div className="gridCards">
          {[
            {
              title: "We Install",
              text: "We place a vending machine that fits your location — at no cost to you.",
            },
            {
              title: "We Manage",
              text: "We handle restocking, maintenance, and service to keep everything running smoothly.",
            },
            {
              title: "You Benefit",
              text: "Your people get convenient access to snacks and drinks, with optional revenue share.",
            },
          ].map((f, i) => (
            <div key={i} className="card">
              <h3 className="cardTitle">{f.title}</h3>
              <p className="cardText">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <h2 className="sectionTitle">
          Why Choose <span className="brand">Kickfixx</span>
        </h2>

        <div className="gridCards">
          {[
            {
              title: "Convenience that works",
              text: "On-site access to drinks and snacks where people actually need them.",
            },
            {
              title: "Reliable service",
              text: "Machines stay stocked, clean, and operational.",
            },
            {
              title: "Fully managed",
              text: "We handle everything so you don’t have to.",
            },
          ].map((f, i) => (
            <div key={i} className="card">
              <h3 className="cardTitle">{f.title}</h3>
              <p className="cardText">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLACEMENT */}
      <section className="section sectionDark">
        <h2 className="sectionTitle">Placement Options</h2>

        <div className="gridCards">
          {[
            {
              title: "Revenue Share",
              desc: "Earn a percentage of monthly sales.",
            },
            {
              title: "Flat Fee",
              desc: "Predictable monthly income.",
            },
            {
              title: "No-Fee Trial",
              desc: "Test demand with minimal commitment.",
            },
          ].map((o, i) => (
            <div key={i} className="card">
              <h3 className="cardTitle">{o.title}</h3>
              <p className="cardText">{o.desc}</p>
            </div>
          ))}
        </div>

        <div className="ctaCenter">
          <Link href="/contact" className="btnPrimary">Request Placement</Link>
        </div>
      </section>

      {/* FUTURE VISION (LOWER + SOFT) */}
      <section className="section">
        <h2 className="sectionTitle">Built for today. Designed for scale.</h2>

        <p className="sectionSub">
          Kickfixx is building a modern vending network. As we grow, future features may include
          rewards and ownership opportunities for partners and early supporters.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div style={{ marginBottom: 8 }}>
          <Link href="/contact" className="footLink">Placement</Link>
          <span className="sep">•</span>
          <Link href="/contact" className="footLink">Contact</Link>
        </div>
        © {new Date().getFullYear()} Kickfixx. All rights reserved.
      </footer>

      <style jsx>{`
        .page { max-width: 1160px; margin: 0 auto; padding: 20px; color: #fff; }

        .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1f2937; padding: 14px 0; }

        .nav { display: flex; gap: 16px; }
        .navLink { color: #00b8ff; font-weight: 800; text-decoration: none; }

        .hero { display: grid; grid-template-columns: 1.2fr 1fr; gap: 28px; padding: 48px 0; }
        .h1 { font-size: 46px; }
        .brand { color: #00b8ff; }

        .heroSignal { opacity: .6; margin-top: 12px; }

        .section { padding: 60px 0; }
        .sectionDark { background: #0d0d0d; }
        .sectionTitle { text-align: center; font-size: 32px; }
        .sectionSub { text-align: center; opacity: .85; }

        .gridCards { display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        .card { border: 1px solid #27272a; padding: 20px; border-radius: 16px; }
        .cardTitle { color: #00b8ff; }

        .btnPrimary { background: #00b8ff; color: #000; padding: 12px 16px; border-radius: 12px; }
        .btnGhost { border: 1px solid #3f3f46; padding: 12px 16px; border-radius: 12px; }

        .footer { text-align: center; opacity: .8; padding: 30px 0; border-top: 1px solid #1f2937; }
      `}</style>
    </div>
  );
}
