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

        {/* ambient glows */}
        <div className="hero-glows" aria-hidden>
          <div className="glow glow-top" />
          <div className="glow glow-bottom" />
        </div>

        {/* header */}
        <header className="header">
          <Link href="/" className="logoLink">
            <Image
              src="/kickfixx-logo-00B8FF.png"
              alt="Kickfixx"
              width={160}
              height={40}
              priority
            />
          </Link>

          <nav className="nav">
            <Link href="/contact" className="navLink">Placement</Link>
            <Link href="/contact" className="navLink">Contact</Link>
          </nav>
        </header>

        {/* hero */}
        <section className="hero">
          <div className="heroLeft">
            <h1 className="h1">
              Modern <span className="brand">Vending</span> Solutions
            </h1>

            <p className="lead">
              Clean. Cashless. Fully managed vending for apartments, offices, and high-traffic locations across the Dallas–Fort Worth area.
            </p>

            <p className="sub">
              We install, stock, and maintain modern machines — so your tenants, employees, or customers always have convenient options on-site.
            </p>

            <div className="ctaRow">
              <a href="#how" className="btnGhost">How It Works</a>
              <Link href="/contact" className="btnPrimary">Request Placement</Link>
            </div>

            <p className="location">Serving Dallas–Fort Worth (DFW)</p>
            <p className="note">Own the Infrastructure.</p>
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

        {/* how it works */}
        <section id="how" className="section sectionDark">
          <h2 className="sectionTitle">How It Works</h2>
          <p className="sectionSub">Straightforward setup. Fully managed service.</p>

          <div className="gridCards">
            <div className="card">
              <h3 className="cardTitle">1) Request Placement</h3>
              <p className="cardText">
                Tell us about your location. We’ll recommend the best setup.
              </p>
            </div>

            <div className="card">
              <h3 className="cardTitle">2) We Install &amp; Stock</h3>
              <p className="cardText">
                We place the machine, set up payments, and stock it for your space.
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
              <strong className="infoStrong">Partnership options:</strong> revenue share, flat fee, or no-fee trial depending on location.
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Link href="/contact" className="btnPrimary">
              Get placement options
            </Link>
          </div>
        </section>

        {/* features */}
        <section className="section">
          <h2 className="sectionTitle">What You Get</h2>
          <p className="sectionSub">
            A clean, reliable vending experience — handled end-to-end.
          </p>

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
            <Link href="/contact" className="footLink">Placement</Link>
            <span className="sep"> • </span>
            <Link href="/contact" className="footLink">Contact</Link>
          </div>
          © {new Date().getFullYear()} Kickfixx. All rights reserved.
        </footer>

      </div>

      <style jsx>{`
        .page { max-width: 1160px; margin: 0 auto; padding: 20px; position: relative; color: #fff; }

        .hero-glows { position: fixed; inset: 0; pointer-events: none; z-index: -1; }
        .glow { position: absolute; height: 24rem; width: 24rem; border-radius: 9999px; filter: blur(60px); }
        .glow-top { top: -160px; left: -128px; opacity: .3; background: radial-gradient(closest-side, #00b8ff, rgba(0,0,0,0)); }
        .glow-bottom { bottom: -160px; right: -128px; opacity: .2; background: radial-gradient(closest-side, #00b8ff, rgba(0,0,0,0)); }

        .header { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid #1f2937; }
        .nav { display: flex; gap: 16px; }
        .navLink { color: #00b8ff; font-weight: 800; text-decoration: none; }

        .hero { display: grid; grid-template-columns: 1.2fr 1fr; gap: 28px; align-items: center; padding: 48px 0; }
        .h1 { font-size: 46px; font-family: "Roboto Condensed", Inter; }
        .brand { color: #00b8ff; }
        .lead { opacity: .9; }
        .sub { color: #a1a1aa; }
        .ctaRow { display: flex; gap: 12px; margin-top: 12px; }
        .btnPrimary { background: #00b8ff; color: #000; padding: 12px 16px; border-radius: 12px; font-weight: 800; }
        .btnGhost { border: 1px solid #3f3f46; padding: 12px 16px; border-radius: 12px; }
        .location { margin-top: 8px; opacity: .75; font-size: 14px; }
        .note { opacity: .6; margin-top: 6px; }

        .heroImageWrap { border-radius: 20px; overflow: hidden; box-shadow: 0 0 35px rgba(0,184,255,.35); }

        .section { padding: 60px 0; }
        .sectionDark { background: #0d0d0d; }
        .sectionTitle { text-align: center; font-size: 32px; }
        .sectionSub { text-align: center; opacity: .85; }

        .gridCards { display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        .card { border: 1px solid #27272a; padding: 20px; border-radius: 16px; }
        .cardTitle { color: #00b8ff; }
        .cardTag { color: #22c55e; margin-top: 8px; }

        .infoCard { margin-top: 24px; padding: 20px; border: 1px solid rgba(0,184,255,.4); border-radius: 16px; text-align: center; }
        .infoStrong { font-weight: 800; }

        .footer { text-align: center; margin-top: 20px; padding: 30px 0; border-top: 1px solid #1f2937; }
      `}</style>
    </>
  );
}
