// pages/index.tsx
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kickfixx — Modern Vending Solutions | Dallas–Fort Worth</title>
        <meta
          name="description"
          content="Kickfixx provides clean, cashless, fully managed vending for apartments, offices, and high-traffic locations across the Dallas–Fort Worth area. No-cost install. We stock, maintain, and keep it running."
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
            <Image
              src="/kickfixx-logo-00B8FF.png"
              alt="Kickfixx"
              width={160}
              height={40}
              priority
            />
          </Link>
          <nav className="nav">
            <Link href="/contact" className="navLink">
              Placement
            </Link>
            <Link href="/contact" className="navLink">
              Contact
            </Link>
          </nav>
        </header>

        {/* hero */}
        <section className="hero">
          <div className="heroLeft">
            <h1 className="h1">
              Modern <span className="brand">Vending</span> Solutions
            </h1>

            <p className="lead">
              Clean. Cashless. Fully managed vending for apartments, offices, and high-traffic
              locations across the Dallas–Fort Worth area.
            </p>

            <p className="sub">
              We install, stock, and maintain modern machines — so your tenants, employees, or
              customers always have convenient options on-site.
            </p>

            <div className="ctaRow">
              <a href="#how" className="btnGhost">
                How It Works
              </a>
              <Link href="/contact" className="btnPrimary">
                Request Placement
              </Link>
            </div>

            <p className="note">Serving Dallas–Fort Worth (DFW)</p>
            <p className="note subtle">Own the Infrastructure.</p>
          </div>

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

        {/* how it works */}
        <section id="how" className="section sectionDark">
          <h2 className="sectionTitle">How It Works</h2>
          <p className="sectionSub">Straightforward setup. Fully managed service.</p>

          <div className="gridCards">
            <div className="card">
              <h3 className="cardTitle">1) Request Placement</h3>
              <p className="cardText">
                Tell us about your location and traffic. We’ll recommend the best setup.
              </p>
            </div>

            <div className="card">
              <h3 className="cardTitle">2) We Install &amp; Stock</h3>
              <p className="cardText">
                We place the machine, set up cashless payments, and stock it for your space.
              </p>
            </div>

            <div className="card">
              <h3 className="cardTitle">3) We Maintain</h3>
              <p className="cardText">
                We restock, service, and keep everything running smoothly.
              </p>
            </div>
          </div>

          <div className="infoCard">
            <p className="infoText">
              <strong className="infoStrong">Partnership options:</strong> revenue share, flat fee,
              or no-fee trial depending on location.
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Link href="/contact" className="btnPrimary">
              Get placement options
            </Link>
          </div>
        </section>

        {/* what you get */}
        <section className="section">
          <h2 className="sectionTitle">What You Get</h2>
          <p className="sectionSub">A clean, reliable vending experience — handled end-to-end.</p>

          <div className="gridCards">
            <div className="card">
              <h3 className="cardTitle">No-Cost Install</h3>
              <p className="cardText">Fast setup with minimal disruption.</p>
            </div>

            <div className="card">
              <h3 className="cardTitle">Fully Managed</h3>
              <p className="cardText">We handle restocking, service, and maintenance.</p>
            </div>

            <div className="card">
              <h3 className="cardTitle">Cashless Payments</h3>
              <p className="cardText">Card and mobile pay for a seamless experience.</p>
            </div>

            <div className="card">
              <h3 className="cardTitle">Better Product Mix</h3>
              <p className="cardText">Tailored to your location’s needs.</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link href="/contact" className="btnPrimary">
              Request Placement
            </Link>
          </div>
        </section>

        {/* placement options */}
        <section className="section sectionDark">
          <h2 className="sectionTitle">Placement Options</h2>
          <p className="sectionSub">Flexible models based on your location.</p>

          <div className="gridCards">
            <div className="card">
              <h3 className="cardTitle">Revenue Share</h3>
              <p className="cardText">Earn a percentage of sales.</p>
              <p className="cardTag">✓ High traffic locations</p>
            </div>

            <div className="card">
              <h3 className="cardTitle">Flat Fee</h3>
              <p className="cardText">Predictable monthly income.</p>
              <p className="cardTag">✓ Stable budgeting</p>
            </div>

            <div className="card">
              <h3 className="cardTitle">No-Fee Trial</h3>
              <p className="cardText">Test demand before committing.</p>
              <p className="cardTag">✓ Low risk</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Link href="/contact" className="btnPrimary">
              Talk placement
            </Link>
          </div>
        </section>

        {/* footer */}
        <footer className="footer">
          <div>
            <Link href="/contact" className="footLink">
              Placement
            </Link>
            <span className="sep"> • </span>
            <Link href="/contact" className="footLink">
              Contact
            </Link>
          </div>
          © {new Date().getFullYear()} Kickfixx. All rights reserved.
        </footer>
      </div>

      <style jsx>{`
        .page {
          max-width: 1160px;
          margin: 0 auto;
          padding: 20px;
          position: relative;
          color: #fff;
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
          background: radial-gradient(closest-side, #00b8ff, rgba(0, 0, 0, 0));
        }
        .glow-bottom {
          bottom: -160px;
          right: -128px;
          opacity: 0.2;
          background: radial-gradient(closest-side, #00b8ff, rgba(0, 0, 0, 0));
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
        .heroLeft {
          min-width: 0;
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
          max-width: 56ch;
        }
        .sub {
          color: #a1a1aa;
          margin: 0 0 12px;
          max-width: 60ch;
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
        .note {
          font-size: 12px;
          color: #a1a1aa;
          margin-top: 8px;
        }
        .subtle {
          color: #71717a;
          margin-top: 4px;
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
          background: radial-gradient(circle at center, rgba(0, 184, 255, 0.08) 0%, transparent 70%);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6), 0 0 35px rgba(0, 184, 255, 0.35);
        }
        .heroImage {
          object-fit: cover;
          width: 100%;
          height: auto;
          transform: scale(1.05);
          transition: transform 0.3s ease;
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
          font-weight: 800;
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
        .cardTag {
          color: #22c55e;
          font-weight: 600;
          margin-top: 12px;
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

        .footer {
          margin-top: 20px;
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
          opacity: 0.5;
        }

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
