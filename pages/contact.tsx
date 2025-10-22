// pages/contact.tsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setLoading(true);
    setOk(false);
    setErr(false);

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
        setOk(false);
      }
    } catch {
      setErr(true);
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      {/* Header (glow + responsive, same as KFX/Ownership) */}
      <header className="kfHeader">
        <Link href="/" className="kfLogoLink" aria-label="Kickfixx Home">
          <Image
            src="/kickfixx-logo-00B8FF.png"
            alt="Kickfixx"
            width={140}
            height={36}
            priority
          />
        </Link>

        <nav className="kfNav">
          <Link href="/" className="kfNavLink">Home</Link>
          <Link href="/kfx" className="kfNavLink">KFX</Link>
          <Link href="/ownership" className="kfNavLink">Ownership</Link>
          <Link href="/contact" className="kfNavLink" aria-current="page">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero strip */}
      <section className="hero">
        <div aria-hidden className="bgGlows">
          <div className="glow glowLT" />
          <div className="glow glowRB" />
        </div>
        <div className="heroInner">
          <h1 className="title">
            Get in <span className="accent">Touch</span>
          </h1>
          <p className="lead">
            Questions, wholesale, or partnerships? Send us a note and we’ll
            reply quickly.
          </p>
        </div>
      </section>

      {/* Form card */}
      <main className="wrap">
        <div className="card">
          <form onSubmit={handleSubmit} className="form" noValidate>
            <label htmlFor="name" className="lbl">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="inp"
              autoComplete="name"
            />

            <label htmlFor="email" className="lbl">Email</label>
            <input
              id="email"
              name="email"           /* Formspree-friendly */
              type="email"
              required
              placeholder="you@example.com"
              className="inp"
              autoComplete="email"
              inputMode="email"
            />

            <label htmlFor="message" className="lbl">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="How can we help?"
              className="area"
            />

            {/* Subject + honeypot */}
            <input
              type="hidden"
              name="_subject"
              value="New message from kickfixx.com"
            />
            <input
              type="text"
              name="_gotcha"
              className="hp"
              tabIndex={-1}
              autoComplete="off"
            />

            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>

            {/* live region for status */}
            <div
              aria-live="polite"
              aria-atomic="true"
              className="status"
              role="status"
            >
              {ok && (
                <div className="ok">
                  ✅ Message sent. We’ll reply soon.
                </div>
              )}
              {err && (
                <div className="err">
                  ⚠️ Something went wrong. Please try again.
                </div>
              )}
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="ftr">
        © {new Date().getFullYear()} Kickfixx. All rights reserved.
      </footer>

      <style jsx>{`
        .page {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 20px 24px;
          background: #0A0A0A;
          color: #fff;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
        }

        /* Header */
        .kfHeader {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 24px; background: #0A0A0A; border-bottom: 1px solid #1f2937;
          -webkit-backdrop-filter: saturate(120%) blur(0px);
          backdrop-filter: saturate(120%) blur(0px);
        }
        .kfHeader::before, .kfHeader::after {
          content: ""; position: absolute; height: 18rem; width: 18rem; border-radius: 9999px;
          filter: blur(48px); pointer-events: none; z-index: -1; opacity: 0.25;
        }
        .kfHeader::before {
          top: -9rem; left: -6rem;
          background: radial-gradient(closest-side, #00B8FF, rgba(0,0,0,0));
        }
        .kfHeader::after {
          bottom: -10rem; right: -8rem; opacity: 0.18;
          background: radial-gradient(closest-side, #00B8FF, rgba(0,0,0,0));
        }
        .kfLogoLink { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; }
        .kfNav { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
        .kfNavLink {
          color: #00B8FF; font-weight: 800; text-decoration: none; padding: 8px 10px; border-radius: 10px;
          transition: box-shadow .18s ease, background-color .18s ease, transform .18s ease;
        }
        .kfNavLink:hover, .kfNavLink:focus-visible {
          box-shadow: 0 0 18px rgba(0,184,255,0.35);
          background-color: rgba(0,184,255,0.08);
          transform: translateY(-1px); outline: none;
        }
        .kfNavLink[aria-current="page"] {
          background-color: rgba(0,184,255,0.10);
          box-shadow: 0 0 14px rgba(0,184,255,0.22) inset;
        }
        @media (max-width: 720px) {
          .kfHeader { flex-direction: column; align-items: stretch; gap: 10px; padding: 12px 16px; }
          .kfNav { justify-content: center; gap: 12px; }
        }

        /* Hero */
        .hero { position: relative; overflow: hidden; }
        .bgGlows { position: absolute; inset: 0; pointer-events: none; }
        .glow { position: absolute; height: 24rem; width: 24rem; border-radius: 9999px; filter: blur(64px); }
        .glowLT { top: -10rem; left: -8rem; opacity: .3; background: radial-gradient(closest-side, #00B8FF, rgba(0,0,0,0)); }
        .glowRB { bottom: -10rem; right: -8rem; opacity: .2; background: radial-gradient(closest-side, #00B8FF, rgba(0,0,0,0)); }
        .heroInner { position: relative; text-align: center; padding: 40px 24px 10px; }
        .title {
          font-size: 40px; font-weight: 800; margin: 0; letter-spacing: .2px;
          font-family: "Roboto Condensed", Inter, system-ui;
        }
        .accent { color: #00B8FF; }
        .lead { margin: 12px auto 0; max-width: 680px; color: #d4d4d8; }
        @media (max-width: 768px) {
          .title { font-size: 30px; }
        }

        /* Form */
        .wrap { max-width: 760px; margin: 24px auto 0; padding: 0 12px; }
        .card {
          background: rgba(24,24,27,0.55);
          border: 1px solid #1f2937;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 0 35px rgba(0,184,255,0.12);
        }
        .form { display: grid; gap: 12px; }
        .lbl { font-weight: 700; }
        .inp, .area {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid #27272a;
          background: #0E0E0E;
          color: #F5F7FA;
          outline: none;
          transition: border-color .15s ease, box-shadow .15s ease;
        }
        .inp:focus, .area:focus {
          border-color: rgba(0,184,255,.55);
          box-shadow: 0 0 0 3px rgba(0,184,255,.15);
        }
        .area { min-height: 120px; resize: vertical; }
        .hp { display: none; }
        .btn {
          margin-top: 6px;
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          border: 0;
          background: #00B8FF;
          color: #000;
          font-weight: 800;
          cursor: pointer;
          transition: transform .15s ease, opacity .15s ease, box-shadow .15s ease;
        }
        .btn:hover { transform: translateY(-1px); box-shadow: 0 10px 18px rgba(0,0,0,.25); }
        .btn:disabled { opacity: .7; cursor: default; transform: none; box-shadow: none; }

        .status { margin-top: 10px; min-height: 28px; }
        .ok, .err {
          padding: 10px; border-radius: 10px;
          border: 1px solid transparent;
        }
        .ok {
          background: rgba(0,184,255,.15);
          border-color: rgba(0,184,255,.55);
        }
        .err {
          background: rgba(239,68,68,.15);
          border-color: rgba(239,68,68,.55);
        }

        /* Footer */
        .ftr {
          margin-top: 28px; padding: 30px 0;
          border-top: 1px solid #1f2937;
          opacity: 0.8; font-size: 14px; text-align: center;
        }
      `}</style>
    </div>
  );
}
