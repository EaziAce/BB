// pages/contact.tsx
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOk(false);
    setErr(false);
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mpwyjqgq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setOk(true);
        setErr(false);
        form.reset();
      } else {
        setErr(true);
      }
    } catch {
      setErr(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Contact — Kickfixx</title>
        <meta
          name="description"
          content="Partner with Kickfixx. Placement, partnerships, and investor inquiries for a decentralized wellness network."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Roboto+Condensed:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="page">
        {/* ambient glows (same vibe as index) */}
        <div className="hero-glows" aria-hidden>
          <div className="glow glow-top" />
          <div className="glow glow-bottom" />
        </div>

        {/* Header (matches index) */}
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
            <Link href="/ownership" className="navLink">
              Ownership
            </Link>
            <Link href="/contact" className="navLink">
              Contact
            </Link>
          </nav>
        </header>

        {/* Hero / Intro copy with brand tone */}
        <section className="hero">
          <div className="heroLeft">
            <h1 className="h1">
              Let’s Build the <span className="brand">Ownership</span> Era
            </h1>
            <p className="lead">
              We’re wiring a decentralized wellness network — clean machines,
              clean reporting, clean economics. If you can help place, partner,
              or scale, you’re our kind of human.
            </p>
            <ul className="bullets">
              <li>Site placement & partnerships</li>
              <li>Institutional & community investors</li>
              <li>Suppliers & brand collabs</li>
            </ul>
          </div>

          {/* Right-side visual (soft glow tile) */}
          <div className="heroImageWrap">
            <Image
              src="/vending-mockup.png"
              alt="Kickfixx vending mockup"
              width={900}
              height={1100}
              className="heroImage"
              priority
            />
          </div>
        </section>

        {/* Form card */}
        <section className="section">
          <div className="formCard">
            <h2 className="formTitle">Start the convo</h2>
            <p className="formSub">
              Tell us where you fit — placement, capital, or collaboration. We’ll
              reply fast. The future won’t build itself.
            </p>

            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="inp"
              />

              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                id="email"
                name="_replyto"
                type="email"
                required
                placeholder="you@example.com"
                className="inp"
              />

              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Where do you want to plug in? Placement, partnerships, investing, or something new?"
                className="textarea"
              />

              {/* hidden fields / anti-bot */}
              <input
                type="hidden"
                name="_subject"
                value="New message from kickfixx.com"
              />
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              <button type="submit" className="btnPrimary wide" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>

              {ok && (
                <div className="alert ok">
                  ✅ Message sent. We’ll reply shortly.
                </div>
              )}
              {err && (
                <div className="alert err">
                  ⚠️ Something went sideways. Please try again.
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Footer (simple, consistent) */}
        <footer className="footer">
          <div style={{ marginBottom: 8 }}>
            <Link href="/ownership" className="footLink">
              Ownership Token (Coming Soon)
            </Link>
          </div>
          © {new Date().getFullYear()} Kickfixx. All rights reserved.
        </footer>
      </div>

      {/* styled-jsx */}
      <style jsx>{`
        .page {
          max-width: 1160px;
          margin: 0 auto;
          padding: 20px;
          position: relative;
          color: #fff;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
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
          margin: 0 0 16px;
          max-width: 48ch;
        }
        .bullets {
          margin: 0;
          padding-left: 18px;
          opacity: 0.9;
        }
        .bullets li {
          margin: 6px 0;
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
          transform: scale(1.045);
        }

        .section {
          padding: 60px 0;
        }

        .formCard {
          max-width: 720px;
          margin: 0 auto;
          border: 1px solid #27272a;
          background: rgba(24, 24, 27, 0.45);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 0 28px rgba(0, 184, 255, 0.12);
        }
        .formTitle {
          margin: 0 0 6px;
          font-size: 28px;
          font-family: "Roboto Condensed", Inter, system-ui;
          font-weight: 800;
          letter-spacing: 0.2px;
        }
        .formSub {
          margin: 0 0 16px;
          color: #d4d4d8;
        }

        .form {
          display: grid;
          gap: 12px;
        }
        .label {
          font-weight: 700;
        }
        .inp,
        .textarea {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid #27272a;
          background: #0e0e0e;
          color: #f5f7fa;
          outline: none;
        }
        .textarea {
          min-height: 120px;
          resize: vertical;
        }

        .btnPrimary {
          display: inline-block;
          background: #00b8ff;
          color: #000;
          border-radius: 12px;
          padding: 12px 16px;
          font-weight: 800;
          text-decoration: none;
          text-align: center;
        }
        .wide {
          width: 100%;
        }

        .alert {
          margin-top: 12px;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid;
        }
        .ok {
          background: rgba(0, 184, 255, 0.15);
          border-color: rgba(0, 184, 255, 0.55);
        }
        .err {
          background: rgba(239, 68, 68, 0.15);
          border-color: rgba(239, 68, 68, 0.55);
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

        /* responsive */
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
