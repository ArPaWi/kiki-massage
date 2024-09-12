"use client";
import React from "react";
import styles from "./Page.module.css";
import Carousel from "./Components/carouselImage";
import Card from "./Components/card";
import TestimonialSlider from "./Components/testimoni";
import Pesan from "./Components/pesan";

export default function Home() {
  const handleContactClick = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send?phone=6287773294573&text=Halo%20Bapak%20Rizki,%20saya%20ingin%20menanyakan%20perihal%20terapi.";
    window.open(whatsappLink, "_blank");
  };

  return (
    <main style={{ maxWidth: "100vw" }}>
      <nav>
        <div className={styles.logo}>
          <img
            src="/logo_kiki.png"
            alt="Kiki Massage Logo"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "10px",
              paddingTop: "4px",
            }}
          />
        </div>
        <div className={styles.pesan}>
          <button
            onClick={() => {
              const formSection = document.getElementById("form");
              if (formSection) {
                formSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            style={{
              background: "rgb(30, 150, 300)",
              color: "white",
              width: "100px",
              height: "30px",
              border: "none",
              borderRadius: "1rem",
              cursor: "pointer",
            }}
          >
            PESAN
          </button>
        </div>
      </nav>

      <Carousel />

      <div className={styles.greeting}>
        <h3>Selamat Datang</h3>
        <p>
          Layanan jasa massage murah dan profesional di bidang nya. Kami siap
          datang ke lokasi anda dan siap melayani anda kapan saja dan dimana
          saja. Layanan kami di jamin aman dan sudah terbukti keampuhan nya.
          Jangan ragu untuk memesan layanan kami.
        </p>
      </div>

      <h3>Kami Memberikan Layanan</h3>
      <div className={styles.layanan}>
        <Card />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "5rem",
        }}
      >
        <div id="form">
          <h3>Formulir Pemesanan</h3>
          <Pesan />
        </div>
        <div className={styles.testimoni}>
          <h3>Testimoni</h3>
          <TestimonialSlider />
        </div>
      </div>
      <br />

      <img
        id="contactButton"
        src="/hubungi.png"
        alt="Hubungi"
        style={{
          width: 200,
          position: "fixed",
          bottom: 20,
          right: 20,
          cursor: "pointer",
          zIndex: 9999, // Untuk memastikan tombol muncul di atas konten lainnya
        }}
        onClick={handleContactClick}
      />

      <footer
        style={{
          background: "rgb(30, 150, 300)",
          width: "100%",
          height: "max-content",
          display: "grid",
          alignContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "white",
            textAlign: "center",
            height: "1px",
            fontWeight: "bold",
          }}
        >
          ©Kiki Massage
        </p>
        <p
          style={{
            fontSize: "11px",
            color: "white",
            textAlign: "center",
            height: "1px",
          }}
        >
          Contact Us
        </p>
        <div
          style={{
            display: "flex",
            flex: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/whatsapp.png"
            alt=""
            style={{ width: "15px", height: "15px" }}
          />
          <p
            style={{
              fontSize: "11px",
              color: "white",
              textAlign: "center",
              height: "10px",
            }}
          >
            +62 812-1039-0991 & +62 877-7329-4573
          </p>
        </div>
      </footer>
    </main>
  );
}
