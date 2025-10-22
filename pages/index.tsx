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
    <div
      style={{
        margin: "0 auto",
        width: size,
        height: size,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {aura && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at center, ${auraColor}, transparent 70%)`,
            filter: `blur(${blur}px)`,
            zIndex: 0,
          }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        style={{ objectFit: "contain", position: "relative", zIndex: 1 }}
        priority
      />
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ maxWidth: 1160, margin: "0 auto", padding: 20 }}>
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 0",
          borderBottom: "1px solid #1f2937",
        }}
      >
        <Link href="/" style={{ display: "inline-flex", alignItems: "center" }}>
          <Image
            src="/kickfixx-logo-00B8FF.png"
            alt="Kickfixx"
            width={160}
            height={40}
            priority
          />
        </Link>

        <nav style={{ display: "flex", gap: 16 }}>
          <Link
            href="/kfx"
            style={{ color: "#00B8FF", fontWeight: 800, textDecoration: "none" }}
          >
            KFX Token
          </Link>
          <Link
            href="/contact"
            style={{ color: "#00B8FF", fontWeight: 800, textDecoration: "none" }}
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 28,
          alignItems: "center",
          padding: "48px 0",
        }}
      >
        <div>
          <h1 style={{ fontSize: 46, lineHeight: 1.1, margin: "0 0 12px" }}>
            <span style={{ color: "#00B8FF" }}>Kickfixx</span> Vending & Supplies
          </h1>
          <p style={{ opacity: 0.9, margin: "0 0 18px" }}>
            Smart, clean, and modern convenience. Branded machines and
            premium products for busy locations.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "#00B8FF",
                color: "#000",
                borderRadius: 12,
                padding: "12px 16px",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Get in touch
            </Link>

            <Link
              href="/kfx"
              style={{
                display: "inline-block",
                background: "#00B8FF",
                color: "#000",
                borderRadius: 12,
                padding: "12px 16px",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Explore KFX Token
            </Link>
          </div>
        </div>

        {/* Right-side image */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            borderRadius: 20,
            margin: "40px auto",
            maxWidth: 600,
            background:
              "radial-gradient(circle at center, rgba(0,184,255,0.08) 0%, transparent 70%)",
            boxShadow:
              "0 8px 24px rgba(0, 0, 0, 0.6), 0 0 35px rgba(0, 184, 255, 0.35)",
          }}
        >
          <Image
            src="/vending-mockup.png"
            alt="Kickfixx vending machine mockup"
            width={1000}
            height={1300}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              transform: "scale(1.05)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            priority
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{ padding: "60px 0", background: "#0D0D0D" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, marginBottom: 40 }}>
          Why Choose <span style={{ color: "#00B8FF" }}>Kickfixx</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            maxWidth: 1100,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
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
              <h3 style={{ color: "#00B8FF", marginBottom: 10 }}>{f.title}</h3>
              <p style={{ opacity: 0.85 }}>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KFX promo strip with glow (uses new transparent file) */}
      <section
        style={{
          padding: "50px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          alignItems: "center",
        }}
      >
        <div>
          <h3 style={{ fontSize: 28, margin: "0 0 8px" }}>
            Kickfixx Reward Token (<span style={{ color: "#00B8FF" }}>KFX</span>)
          </h3>
          <p style={{ opacity: 0.9, margin: "0 0 16px" }}>
            Earn perks and priority with KFX while we roll out machines. Early supporters get
            bonus allocations.
          </p>
          <Link
            href="/kfx"
            style={{
              display: "inline-block",
              background: "#00B8FF",
              color: "#000",
              borderRadius: 12,
              padding: "12px 16px",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Learn about KFX
          </Link>
        </div>

        <div>
          <TokenImage
            src="/kfx-token.png"   // <-- transparent file
            alt="KFX Reward Token"
            size={220}
            aura
            auraColor="rgba(0,184,255,0.28)"
            blur={46}
          />
        </div>
      </section>

      {/* PLACEMENT OPTIONS */}
      <section style={{ padding: "60px 0", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, marginBottom: 10 }}>
          Placement Options
        </h2>
        <p style={{ textAlign: "center", opacity: 0.8, marginBottom: 40 }}>
          Choose what fits your property best. We’ll recommend based on traffic
          and goals.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
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
              <h3 style={{ marginBottom: 8 }}>{o.title}</h3>
              <p style={{ opacity: 0.85 }}>{o.desc}</p>
              <p style={{ color: "#22C55E", fontWeight: 600, marginTop: 12 }}>
                ✓ {o.tag}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          marginTop: 60,
          padding: "30px 0",
          borderTop: "1px solid #1f2937",
          opacity: 0.8,
          fontSize: 14,
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: 8 }}>
          <Link
            href="/ownership"
            style={{ color: "#00B8FF", textDecoration: "none", fontWeight: 800 }}
          >
            Ownership Token (Coming Soon)
          </Link>
        </div>
        © 2025 Kickfixx. All rights reserved.
      </footer>
    </div>
  );
}
