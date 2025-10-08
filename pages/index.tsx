import Image from "next/image";
import Link from "next/link";

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
        <Link href="/">
          <Image
            src="/kickfixx-logo-00B8FF.png"
            alt="Kickfixx"
            width={160}
            height={40}
            priority
          />
        </Link>
        <Link
          href="/contact"
          style={{ color: "#00B8FF", fontWeight: 800, textDecoration: "none" }}
        >
          Contact
        </Link>
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
            Smart, clean, and modern convenience. Branded Machine and
            premium products for busy locations.
          </p>
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
        </div>

        <div>
          <Image
            src="/vending-mockup.png"
            alt="Kickfixx vending machine mockup"
            width={800}
            height={520}
            style={{
              borderRadius: 16,
              border: "1px solid #1f2937",
              width: "100%",
              height: "auto",
            }}
            priority
          />
        </div>
      </section>

      <footer style={{ padding: "30px 0", borderTop: "1px solid #1f2937", opacity: 0.8, fontSize: 14 }}>
        © 2025 Kickfixx. All rights reserved.
      </footer>
    </div>
  );
}
