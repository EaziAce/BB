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
    <div className="page">
      {/* glows to match index */}
      <div className="hero-glows" aria-hidden>
        <div className="glow glow-top" />
        <div className="glow glow-bottom" />
      </div>

      {/* Header — identical to index */}
      <header className="header">
        <Link href="/" className="logoLink" aria-label="Kickfixx Home">
          <Image src="/kickfixx-logo-00B8FF.png" alt="Kickfixx" width={160} height={40} priority />
        </Link>
        <nav className="nav">
          <Link href="/kfx" className="navLink">KFX Token</Link>
          <Link href="/contact" className="navLink">Contact</Link>
        </nav>
      </header>

      {/* Content */}
      <section className="section">
        <h1 className="sectionTitle">Contact Us</h1>
        <p className="sectionSub">
          Questions, wholesale, or partnerships? Send us a note and we’ll get back quickly.
        </p>

        <div className="formCard">
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name" className="lbl">Name</label>
            <input id="name" name="name" required placeholder="Your name" className="inp" />

            <label htmlFor="email" className="lbl">Email</label>
            <input id="email" name="_replyto" type="email" required placeholder="you@example.com" className="inp" />

            <label htmlFor="message" className="lbl">Message</label>
            <textarea id="message" name="message" required placeholder="How can we help?" className="inp ta" />

            <input type="hidden" name="_subject" value="New message from kickfixx.com" />
            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <button type="submit" className="btnPrimary wide">Send</button>
          </form>

          {ok && <div className="ok">✅ Message sent. We’ll reply soon.</div>}
          {err && <div className="err">⚠️ Something went wrong. Please try again.</div>}
        </div>
      </section>

      <footer className="footer">
        <div style={{ marginBottom: 8 }}>
          <Link href="/ownership" className="footLink">Ownership Token (Coming Soon)</Link>
        </div>
        © {new Date().getFullYear()} Kickfixx. All rights reserved.
      </footer>

      <style jsx>{`
        .page { max-width: 1160px; margin: 0 auto; padding: 20px; position: relative; }
        .hero-glows { position: fixed; inset: 0; pointer-events: none; z-index: -1; }
        .glow { position: absolute; height: 24rem; width: 24rem; border-radius: 9999px; filter: blur(60px); }
        .glow-top { top: -160px; left: -128px; opacity: .3; background: radial-gradient(closest-side, #00b8ff, transparent); }
        .glow-bottom { bottom: -160px; right: -128px; opacity: .2; background: radial-gradient(closest-side, #00b8ff, transparent); }

        .header { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid #1f2937; }
        .logoLink { display: inline-flex; align-items: center; }
        .nav { display: flex; gap: 16px; }
        .navLink { color: #00b8ff; font-weight: 800; text-decoration: none; }

        .section { padding: 60px 0; }
        .sectionTitle { text-align: center; font-size: 32px; margin-bottom: 16px; }
        .sectionSub { text-align: center; opacity: .85; margin-bottom: 32px; }

        .formCard {
          max-width: 640px;
          margin: 0 auto;
          background: rgba(24,24,27,.4);
          border: 1px solid #27272a;
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 0 24px rgba(0,184,255,.15);
        }
        .form { display: grid; gap: 12px; }
        .lbl { display: block; font-weight: 700; margin-top: 6px; }
        .inp { width: 100%; padding: 12px 14px; border-radius: 12px; border: 1px solid #1f2937; background: #0e0e0e; color: #f5f7fa; }
        .ta { min-height: 120px; }
        .btnPrimary { display: inline-block; background: #00b8ff; color: #000; border-radius: 12px; padding: 12px 16px; font-weight: 800; text-decoration: none; }
        .wide { width: 100%; }

        .ok { margin-top: 12px; padding: 10px; border-radius: 10px; background: rgba(0,184,255,.15); border: 1px solid rgba(0,184,255,.55); }
        .err { margin-top: 12px; padding: 10px; border-radius: 10px; background: rgba(239,68,68,.15); border: 1px solid rgba(239,68,68,.55); }

        .footer { margin-top: 60px; padding: 30px 0; border-top: 1px solid #1f2937; opacity: .8; font-size: 14px; text-align: center; }
        .footLink { color: #00b8ff; text-decoration: none; font-weight: 800; }
      `}</style>
    </div>
  );
}
