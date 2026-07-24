export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "60px",
        textAlign: "center",
        background: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#003366", fontSize: "48px" }}>
        GOLTENS GENERAL SUPPLIES
      </h1>

      <h2 style={{ color: "#d32f2f" }}>
        General Trading & Industrial Supplies
      </h2>

      <p style={{ fontSize: "20px", marginTop: "30px" }}>
        Welcome to the official website of GOLTENS GENERAL SUPPLIES.
      </p>

      <p>
        We provide industrial equipment, spare parts, tools, pumps,
        compressors, safety equipment and general supplies across Egypt.
      </p>

      <div style={{ marginTop: "40px" }}>
        <a
          href="mailto:info@goltenssupplies.com"
          style={{
            background: "#003366",
            color: "#fff",
            padding: "15px 30px",
            textDecoration: "none",
            borderRadius: "8px",
          }}
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}