import { useState } from "react";
import Image from "next/image";

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
    <div style={{ maxWidth: 1160, margin: "0 auto", padding: 20 }}>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 0",
          borderBottom: "1px solid #1f2937",
        }}
      >
        <a href="/">
          <Image src="/kickfixx-logo-00B8FF.png" alt="Kickfixx" width={160} height={40} />
        </a>
        <a href="/contact" style={{ color: "#00B8FF", fontWeight: 800, textDecoration: "none" }}>
          Contact
        </a>
      </header>

      <div style={{ maxWidth: 640, margin: "40px auto", background: "#111", border: "1px solid #1f2937", borderRadius: 20, padding: 28 }}>
        <h1 style={{ marginTop: 0 }}>Contact Us</h1>
        <p style={{ color: "#00B8FF" }}>
          Questions, wholesale, or partnerships? Send us a note and we’ll get back quickly.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name" style={{ display: "block", margin: "14px 0 6px", fontWeight: 700 }}>Name</label>
          <input id="name" name="name" required placeholder="Your name"
            style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1px solid #1f2937", background: "#0e0e0e", color: "#F5F7FA" }} />

          <label htmlFor="email" style={{ display: "block", margin: "14px 0 6px", fontWeight: 700 }}>Email</label>
          <input id="email" name="_replyto" type="email" required placeholder="you@example.com"
            style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1px solid #1f2937", background: "#0e0e0e", color: "#F5F7FA" }} />

          <label htmlFor="message" style={{ display: "block", margin: "14px 0 6px", fontWeight: 700 }}>Message</label>
          <textarea id="message" name="message" required placeholder="How can we help?"
            style={{ width: "100%", minHeight: 120, padding: "12px 14px", borderRadius: 12, border: "1px solid #1f2937", background: "#0e0e0e", color: "#F5F7FA" }} />

          <input type="hidden" name="_subject" value="New message from kickfixx.com" />
          <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

          <button type="submit" style={{ marginTop: 14, width: "100%", padding: "12px 16px", borderRadius: 12, border: 0, background: "#00B8FF", color: "#000", fontWeight: 800 }}>
            Send
          </button>
        </form>

        {ok && <div style={{ marginTop: 12, padding: 10, borderRadius: 10, background: "rgba(0,184,255,.15)", border: "1px solid rgba(0,184,255,.55)" }}>✅ Message sent. We’ll reply soon.</div>}
        {err && <div style={{ marginTop: 12, padding: 10, borderRadius: 10, background: "rgba(239,68,68,.15)", border: "1px solid rgba(239,68,68,.55)" }}>⚠️ Something went wrong. Please try again.</div>}
      </div>
    </div>
  );
}
