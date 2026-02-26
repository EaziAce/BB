// pages/index.tsx
import React from "react";
import Head from "next/head";
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
        .tokenWrap {
          margin: 0 auto;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .tokenAura {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Kickfixx — Modern Vending Solutions</title>
        <meta
          name="description"
          content="Kickfixx provides clean, cashless, fully managed vending for apartments, offices, and high-traffic locations. No-cost install. We stock, maintain, and keep it running."
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

        {/* header (simplified) */}
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
              locations.
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

            <p className="note">Own the Infrastructure.</p>
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
          <p className="sectionSub">Straightforward steps from request to ongoing service.</p>

          <div className="gridCards">
            <div className="card">
              <h3 className="cardTitle">1) Request Placement</h3>
              <p className="cardText">
                Tell us about your location, traffic, and goals. We’ll recommend a setup that fits.
              </p>
            </div>
            <div className="card">
              <h3 className="cardTitle">2) We Install &amp; Stock</h3>
              <p className="cardText">
                We place the machine, configure payments, and stock a tuned mix for your audience.
              </p>
            </div>
            <div className="card">
              <h3 className="cardTitle">3) We Maintain &amp; Support</h3>
              <p className="cardText">
                Restocking, service calls, and upkeep are handled by Kickfixx.
              </p>
            </div>
          </div>

          <div className="infoCard">
            <p className="infoText">
              <strong className="infoStrong">Partnership options:</strong> revenue share, flat fee,
              or no-fee trial depending on site and traffic.
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
          <p className="sectionSub">A simple, professional vending experience — managed end-to-end.</p>

          <div className="gridCards">
            <div className="card">
              <h3 className="cardTitle">No-Cost Install</h3>
              <p className="cardText">Fast setup with minimal disruption. We handle placement and logistics.</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Fully Managed Service</h3>
              <p className="cardText">Restocking, maintenance, and support — clean and reliable.</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Modern Payments</h3>
              <p className="cardText">Cashless machines with card &amp; mobile pay.</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Curated Products</h3>
              <p className="cardText">Classics + better-for-you options tailored to your location.</p>
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
          <p className="sectionSub">Pick the model; we’ll tune it to your traffic and goals.</p>

          <div className="gridCards">
            <div className="card">
              <h3 className="cardTitle">Revenue Share</h3>
              <p className="cardText">A % of monthly gross sales back to your property.</p>
              <p className="cardTag">✓ Great for medium–high traffic</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Flat Fee</h3>
              <p className="cardText">Fixed monthly rent for a clean, predictable line item.</p>
              <p className="cardTag">✓ Perfect for budgets</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">No-Fee Trial</h3>
              <p className="cardText">Prove demand fast with minimal friction to get started.</p>
              <p className="cardTag">✓ Ideal for new/strategic sites</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Link href="/contact" className="btnPrimary">
              Talk placement
            </Link>
          </div>
        </section>

        {/* future vision (subtle + low) */}
        <section className="section">
          <h2 className="sectionTitle">Built for Today. Designed for Scale.</h2>
          <p className="sectionSub" style={{ maxWidth: 900, margin: "0 auto 18px" }}>
            Kickfixx is building a modern vending network with a long-term infrastructure vision —
            without complicating the on-site experience.
          </p>

          {/* Optional: keep this visual or remove it */}
          <div style={{ textAlign: "center", opacity: 0.75, marginTop: 12 }}>
            <TokenImage
              src="/kfx-token.png"
              alt="Kickfixx rewards token concept"
              size={170}
              aura
              blur={40}
              auraColor="rgba(0,184,255,0.20)"
            />
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
        .h1 { font-size: 46px; line-height: 1.1; margin: 0 0 12px; font-family: "Roboto Condensed", Inter, system-ui; letter-spacing: .2px; }
        .brand { color: #00b8ff; }
        .lead { opacity: .9; margin: 0 0 8px; max-width: 56ch; }
        .sub { color: #a1a1aa; margin: 0 0 12px; max-width: 60ch; }
        .ctaRow { display: flex; gap: 12px; flex-wrap: wrap; margin: 12px 0 6px; }
        .btnPrimary { display: inline-block; background: #00b8ff; color: #000; border-radius: 12px; padding: 12px 16px; font-weight: 800; text-decoration: none; }
        .btnGhost { display: inline-block; border: 1px solid #3f3f46; color: #fff; border-radius: 12px; padding: 12px 16px; font-weight: 600; text-decoration: none; }
        .note { font-size: 12px; color: #71717a; margin-top: 8px; }

        .heroImageWrap { position: relative; display: flex; justify-content: center; align-items: center; overflow: hidden; border-radius: 20px; margin: 40px auto; max-width: 600px; background: radial-gradient(circle at center, rgba(0,184,255,.08) 0%, transparent 70%); box-shadow: 0 8px 24px rgba(0,0,0,.6), 0 0 35px rgba(0,184,255,.35); }
        .heroImage { object-fit: cover; width: 100%; height: auto; transform: scale(1.05); transition: transform .3s ease; }

        .section { padding: 60px 0; }
        .sectionDark { background: #0d0d0d; }
        .sectionTitle { text-align: center; font-size: 32px; margin-bottom: 16px; font-family: "Roboto Condensed", Inter, system-ui; font-weight: 800; letter-spacing: .2px; }
        .sectionSub { text-align: center; opacity: .85; margin-bottom: 32px; }

        .gridCards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; max-width: 1100px; margin: 0 auto; text-align: center; }
        .card { border-radius: 16px; border: 1px solid #27272a; background: rgba(24,24,27,.4); padding: 20px; transition: box-shadow .2s ease, border-color .2s ease; }
        .card:hover { border-color: rgba(0,184,255,.5); box-shadow: 0 0 24px rgba(0,184,255,.2); }
        .cardTitle { color: #00b8ff; margin-bottom: 10px; }
        .cardText { opacity: .85; }
        .cardTag { color: #22c55e; font-weight: 600; margin-top: 12px; }

        .infoCard { margin: 24px auto 0; max-width: 900px; border-radius: 16px; border: 1px solid rgba(0,184,255,.4); background: #0b0f12; padding: 20px; text-align: center; box-shadow: 0 0 35px rgba(0,184,255,.12); }
        .infoText { color: #e4e4e7; margin: 0; }
        .infoStrong { font-weight: 800; color: #fff; font-family: "Roboto Condensed", Inter, system-ui; }

        .footer { margin-top: 20px; padding: 30px 0; border-top: 1px solid #1f2937; opacity: .8; font-size: 14px; text-align: center; }
        .footLink { color: #00b8ff; text-decoration: none; font-weight: 800; }
        .sep { opacity: .5; }

        @media (max-width: 980px) {
          .hero { grid-template-columns: 1fr; }
          .h1 { font-size: 34px; }
        }
      `}</style>
    </>
  );
}
