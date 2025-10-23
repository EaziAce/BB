// pages/contact.tsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mpwyjqgq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setOk(true); setErr(false); form.reset(); }
      else { setErr(true); setOk(false); }
    } catch { setErr(true); setOk(false); }
  }

  return (
    <main className="page">
      {/* Header (center-friendly on mobile) */}
      <header className="hdr">
        <Link href="/" className="logoLink" aria-label="Kickfixx home">
          <Image src="/kickfixx-logo-00B8FF.png" alt="Kickfixx" width={140} height={36} priority />
        </Link>
        <nav className="nav">
          <Link href="/" className="navLink">Home</Link>
          <Link href="/kfx" className="navLink">KFX</Link>
          <Link href="/contact" className="navLink navActive">Contact</Link>
        </nav>
      </header>

      {/* Content card */}
      <section className="wrap">
        <div className="card">
          <h1 className="title">Contact Us</h1>
          <p className="lead">
            Questions, wholesale, or partnerships? Send us a note and we’ll get back quickly.
          </p>

          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name" className="lbl">Name</label>
            <input id="name" name="name" required placeholder="Your name" className="inp" />

            <label htmlFor="email" className="lbl">Email</label>
            <input id="email" name="_replyto" type="email" required placeholder="you@example.com" className="inp" />

            <label htmlFor="message" className="lbl">Message</label>
            <textarea id="message" name="message" required placeholder="How can we help?" className="ta" />

            {/* Formspree helpers */}
            <input type="hidden" name="_subject" value="New message from kickfixx.com" />
            <input type="text" name="_gotcha" className="honeypot" tabIndex={-1} autoComplete="off" />

            <button type="submit" className="primaryBtn">Send</button>
          </form>

          {ok && (
            <div className="alert ok">✅ Message sent. We’ll reply soon.</div>
          )}
          {err && (
            <div className="alert err">⚠️ Something went wrong. Please try again.</div>
          )}
        </div>
      </section>

      <footer className="ftr">
        © {new Date().getFullYear()} Kickfixx. All rights reserved.
      </footer>

      <style jsx>{`
        .page {
          background: #0A0A0A;
          color: #fff;
          min-height: 100vh;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }

        /* Sticky header with soft glows */
        .hdr {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 24px;
          background: #0A0A0A; border-bottom: 1px solid #1f2937;
        }
        .hdr::before, .hdr::after {
          content: ""; position: absolute; height: 18rem; width: 18rem; border-radius: 9999px;
          filter: blur(48px); pointer-events: none; z-index: -1;
        }
        .hdr::before { top: -9rem; left: -6rem; background: radial-gradient(closest-side, #00B8FF, rgba(0,0,0,0)); opacity: .25; }
        .hdr::after  { bottom: -10rem; right: -8rem; background: radial-gradient(closest-side, #00B8FF, rgba(0,0,0,0)); opacity: .18; }

        .logoLink { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; }
        .nav { display: flex; gap: 16px; align-items: center; }
        .navLink { color: #00B8FF; font-weight: 800; text-decoration: none; padding: 8px 10px; border-radius: 10px; }
        .navLink:hover, .navLink:focus-visible {
          box-shadow: 0 0 18px rgba(0,184,255,.35); background: rgba(0,184,255,.08);
        }
        .navActive { background: rgba(0,184,255,.10); box-shadow: 0 0 18px rgba(0,184,255,.25) inset; }

        .wrap { padding: 40px 0; }
        .card {
          margin: 0 auto; max-width: 720px; padding: 28px 24px;
          background: rgba(24,24,27,.55);
          border: 1px solid #1f2937; border-radius: 20px;
          box-shadow: 0 0 35px rgba(0,184,255,.12);
        }

        .title { margin: 0 0 8px 0; font-size: 28px; font-weight: 800; text-align: center; }
        .lead { margin: 0 auto 18px; color: #00B8FF; text-align: center; max-width: 46ch; }

        .form { display: grid; gap: 12px; }
        .lbl { font-weight: 700; }
        .inp, .ta {
          width: 100%; color: #F5F7FA;
          padding: 12px 14px; border-radius: 12px;
          border: 1px solid #27272a; background: #0e0e0e;
        }
        .ta { min-height: 120px; resize: vertical; }
        .honeypot { display: none; }

        .primaryBtn {
          margin-top: 6px; width: 100%;
          display: inline-flex; align-items: center; justify-content: center;
          border-radius: 12px; border: 0;
          background: #00B8FF; color: #000; font-weight: 800; padding: 12px 16px;
          text-decoration: none; cursor: pointer;
        }

        .alert {
          margin-top: 12px; padding: 10px; border-radius: 10px;
          border: 1px solid; text-align: center;
        }
        .ok  { background: rgba(0,184,255,.12); border-color: rgba(0,184,255,.55); }
        .err { background: rgba(239,68,68,.12); border-color: rgba(239,68,68,.55); }

        .ftr {
          margin-top: 20px; padding: 30px 0; border-top: 1px solid #1f2937;
          opacity: .8; font-size: 14px; text-align: center;
        }

        /* ✅ Mobile centering */
        @media (max-width: 768px) {
          .hdr { flex-direction: column; align-items: stretch; gap: 10px; }
          .nav { justify-content: center; flex-wrap: wrap; gap: 12px; }
          .wrap { padding: 28px 0; }
          .card { margin: 0 16px; }
          .title, .lead { text-align: center; }
        }
      `}</style>
    </main>
  );
}
