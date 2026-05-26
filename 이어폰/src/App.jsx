import React from "react";
import { menuItems } from "./data/menuItems.js";
import { productCards } from "./data/productCards.js";
import { strengths } from "./data/strengths.js";
import { reviews } from "./data/reviews.js";
import { specs } from "./data/specs.js";
import { ui } from "./data/uiCopy.js";
import { BRAND_VIDEO_SRC } from "./data/brandVideo.js";

export default function App() {
  const sectionTitle = (eyebrow, title, desc) => (
    <div style={{ maxWidth: 760, marginBottom: 42 }}>
      <p style={{ color: "#d6b56d", letterSpacing: 4, fontSize: 13, fontWeight: 900, marginBottom: 14 }}>{eyebrow}</p>
      <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.08, letterSpacing: "-0.055em", margin: 0, color: "#fff" }}>{title}</h2>
      <p style={{ marginTop: 20, color: "rgba(255,255,255,.58)", fontSize: 18, lineHeight: 1.75 }}>{desc}</p>
    </div>
  );

  const cardStyle = {
    border: "1px solid rgba(255,255,255,.1)",
    background: "rgba(255,255,255,.052)",
    borderRadius: 34,
    padding: 30,
  };

  return (
    <main style={{ minHeight: "100vh", background: "#07080b", color: "white", fontFamily: "Arial, sans-serif", overflow: "hidden" }}>
      <section id="home" style={{ position: "relative", minHeight: "100vh", padding: "28px 6vw 80px" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 74% 16%, rgba(214,181,109,.28), transparent 34%), radial-gradient(circle at 16% 78%, rgba(72,91,160,.2), transparent 32%), linear-gradient(180deg,#090a0f,#07080b)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto" }}>
          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, position: "sticky", top: 0, zIndex: 10, padding: "12px 0", backdropFilter: "blur(18px)", flexWrap: "wrap" }}>
            <a href="#home" style={{ display: "flex", alignItems: "center", gap: 12, color: "white", textDecoration: "none" }}>
              <div style={{ width: 44, height: 44, borderRadius: 18, background: "linear-gradient(135deg,#f2d488,#7d622f)", display: "grid", placeItems: "center", color: "#08090c", fontWeight: 900 }}>U</div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: 1 }}>UPIc</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.45)", letterSpacing: 1.2 }}>Premium Ear Cuff Audio</div>
              </div>
            </a>
            <nav style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
              {menuItems.map(([href, label]) => (
                <a key={href} href={`#${href}`} style={{ color: "rgba(255,255,255,.72)", textDecoration: "none", padding: "10px 14px", borderRadius: 999, fontSize: 14, border: "1px solid rgba(255,255,255,.08)", background: "rgba(255,255,255,.035)" }}>{label}</a>
              ))}
              <a href="#contact" style={{ color: "#08090c", background: "#f0d082", padding: "11px 18px", borderRadius: 999, textDecoration: "none", fontWeight: 900, fontSize: 14 }}>{ui.purchaseInquiry}</a>
            </nav>
          </header>

          <div
            style={{
              marginTop: 34,
              marginBottom: 46,
              marginLeft: "calc(50% - 50vw)",
              marginRight: "calc(50% - 50vw)",
              width: "100vw",
              maxWidth: "100vw",
              overflow: "hidden",
              position: "relative",
              background: "#0a0b10",
              boxShadow: "0 40px 120px rgba(0,0,0,.5)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(300px, 56vw, 720px)",
                minHeight: "min(52vh, 720px)",
              }}
            >
              <video
                src={BRAND_VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label={ui.brandFilmBadge}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.32)", pointerEvents: "none" }} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.45) 55%, rgba(7,8,11,0.82) 100%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(105deg, rgba(7,8,11,0.75) 0%, rgba(7,8,11,0.25) 42%, transparent 68%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse 80% 60% at 78% 18%, rgba(214,181,109,0.14), transparent 55%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "clamp(16px, 4vw, 28px)",
                  left: "clamp(16px, 5vw, 48px)",
                  zIndex: 3,
                  padding: "10px 18px",
                  borderRadius: 999,
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(240,208,130,0.22)",
                  color: "white",
                  fontSize: "clamp(11px, 2.5vw, 13px)",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {ui.brandFilmBadge}
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "clamp(20px, 6vw, 80px)",
                  right: "clamp(20px, 6vw, 48px)",
                  bottom: "clamp(28px, 8vw, 72px)",
                  zIndex: 2,
                  maxWidth: 720,
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(28px, 5.5vw, 72px)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.06em",
                    margin: 0,
                    color: "white",
                    textShadow: "0 4px 48px rgba(0,0,0,0.55)",
                  }}
                >
                  {ui.heroOverlayTitle1}
                  <span style={{ display: "block", color: "#f0d082", marginTop: "0.08em" }}>
                    {ui.heroOverlayTitle2}
                  </span>
                </h2>
                <p
                  style={{
                    marginTop: "clamp(14px, 2.5vw, 20px)",
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: 1.75,
                    fontSize: "clamp(15px, 2.2vw, 18px)",
                    maxWidth: 560,
                    textShadow: "0 2px 24px rgba(0,0,0,0.45)",
                  }}
                >
                  {ui.heroOverlayDesc}
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", alignItems: "center", gap: 64, minHeight: "72vh", paddingTop: 20 }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,.1)", background: "rgba(255,255,255,.055)", padding: "10px 16px", borderRadius: 999, color: "rgba(255,255,255,.74)", marginBottom: 28 }}><span style={{ color: "#f0d082" }}>&#9670;</span> {ui.heroBadge}</div>
              <h1 style={{ fontSize: "clamp(48px, 7.4vw, 104px)", lineHeight: 1.02, letterSpacing: "-0.075em", margin: 0, fontWeight: 900 }}>{ui.heroH1a}<span style={{ display: "block", color: "#f0d082" }}>{ui.heroH1b}</span></h1>
              <p style={{ marginTop: 28, maxWidth: 680, fontSize: 20, lineHeight: 1.78, color: "rgba(255,255,255,.64)" }}>{ui.heroLead}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 38 }}>
                <a href="#products" style={{ background: "#f0d082", color: "#07080b", padding: "17px 30px", borderRadius: 999, textDecoration: "none", fontWeight: 900 }}>{ui.ctaAi}</a>
                <a href="#contact" style={{ border: "1px solid rgba(255,255,255,.16)", background: "rgba(255,255,255,.06)", color: "white", padding: "17px 30px", borderRadius: 999, textDecoration: "none", fontWeight: 800 }}>{ui.ctaTrial}</a>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", border: "1px solid rgba(255,255,255,.11)", background: "rgba(255,255,255,.055)", padding: 30, borderRadius: 52, boxShadow: "0 34px 120px rgba(0,0,0,.38)" }}>
                <div style={{ aspectRatio: "4 / 5", borderRadius: 42, background: "radial-gradient(circle at 50% 23%, rgba(255,255,255,.36), transparent 22%), linear-gradient(150deg,#181b25,#08090c)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", left: "50%", top: "50%", width: 185, height: 310, transform: "translate(-50%,-50%)", borderRadius: 999, border: "18px solid #d9c188" }} />
                  <div style={{ position: "absolute", left: "47%", top: "35%", width: 86, height: 158, borderRadius: 34, background: "linear-gradient(#f7e6ad,#9d7c38)" }} />
                  <div style={{ position: "absolute", left: "55%", top: "45%", width: 72, height: 72, borderRadius: 999, background: "#11131a", boxShadow: "0 0 0 9px #cda85d" }} />
                  <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", border: "1px solid rgba(255,255,255,.12)", background: "rgba(0,0,0,.34)", padding: "12px 20px", borderRadius: 999, color: "rgba(255,255,255,.76)", whiteSpace: "nowrap" }}>{ui.deviceCaption}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="company" style={{ padding: "100px 6vw" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {sectionTitle(ui.companyEyebrow, ui.companyTitle, ui.companyDesc)}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {strengths.map(([num, title, text]) => <div key={title} style={cardStyle}><div style={{ color: "#f0d082", fontSize: 14, fontWeight: 900, marginBottom: 28 }}>{num}</div><h3 style={{ fontSize: 23, margin: "0 0 14px", letterSpacing: "-0.03em" }}>{title}</h3><p style={{ color: "rgba(255,255,255,.58)", lineHeight: 1.75, margin: 0 }}>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="products" style={{ padding: "100px 6vw", background: "linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.045))" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {sectionTitle(ui.productsEyebrow, ui.productsTitle, ui.productsDesc)}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22 }}>
            {productCards.map(([title, text, tag]) => (
              <article key={title} style={{ borderRadius: 38, overflow: "hidden", border: "1px solid rgba(255,255,255,.1)", background: "rgba(7,8,11,.88)", boxShadow: "0 24px 80px rgba(0,0,0,.25)" }}>
                <div style={{ height: 230, background: "radial-gradient(circle at 55% 30%, rgba(240,208,130,.38), transparent 26%), linear-gradient(145deg,#191c26,#0a0b10)", position: "relative" }}>
                  <div style={{ position: "absolute", left: "50%", top: "50%", width: 120, height: 190, transform: "translate(-50%,-50%)", border: "13px solid #d9c188", borderRadius: 999 }} />
                  <div style={{ position: "absolute", left: "54%", top: "43%", width: 48, height: 82, borderRadius: 22, background: "linear-gradient(#f7e6ad,#9d7c38)" }} />
                </div>
                <div style={{ padding: 28 }}><p style={{ color: "#f0d082", fontSize: 13, fontWeight: 900, letterSpacing: 1.2 }}>{tag}</p><h3 style={{ fontSize: 26, margin: "12px 0", letterSpacing: "-0.04em" }}>{title}</h3><p style={{ color: "rgba(255,255,255,.58)", lineHeight: 1.72 }}>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" style={{ padding: "100px 6vw" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {sectionTitle(ui.techEyebrow, ui.techTitle, ui.techDesc)}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
            {ui.techCardTitles.map((title) => <div key={title} style={cardStyle}><h3 style={{ fontSize: 28, marginBottom: 16 }}>{title}</h3><p style={{ color: "rgba(255,255,255,.58)", lineHeight: 1.8 }}>{ui.techCardBody}</p></div>)}
          </div>
        </div>
      </section>

      <section id="specs" style={{ padding: "100px 6vw" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", border: "1px solid rgba(255,255,255,.1)", background: "rgba(255,255,255,.04)", borderRadius: 44, padding: "44px clamp(28px,4vw,54px)" }}>
          <p style={{ color: "#f0d082", letterSpacing: 4, fontSize: 13, fontWeight: 900 }}>{ui.specEyebrow}</p>
          <h2 style={{ fontSize: "clamp(34px,4.6vw,58px)", letterSpacing: "-0.055em", margin: "12px 0 0" }}>{ui.specTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 14, marginTop: 34 }}>
            {specs.map(([label, value]) => <div key={label} style={{ border: "1px solid rgba(255,255,255,.1)", background: "rgba(0,0,0,.22)", borderRadius: 28, padding: 24 }}><p style={{ color: "rgba(255,255,255,.42)", margin: "0 0 12px" }}>{label}</p><p style={{ fontSize: 19, fontWeight: 900, margin: 0 }}>{value}</p></div>)}
          </div>
        </div>
      </section>

      <section id="reviews" style={{ padding: "100px 6vw" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {sectionTitle(ui.reviewsEyebrow, ui.reviewsTitle, ui.reviewsDesc)}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18 }}>
            {reviews.map(([name, text]) => <div key={name} style={cardStyle}><div style={{ color: "#f0d082", fontWeight: 900, marginBottom: 18 }}>{name}</div><p style={{ color: "rgba(255,255,255,.62)", lineHeight: 1.8, margin: 0 }}>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="location" style={{ padding: "100px 6vw" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          <div style={{ borderRadius: 44, padding: 44, background: "linear-gradient(135deg,#f0d082,#8c6a30)", color: "#07080b" }}>
            <p style={{ letterSpacing: 4, fontSize: 13, fontWeight: 900, marginBottom: 14 }}>{ui.locationEyebrow}</p>
            <h2 style={{ fontSize: "clamp(36px,5vw,62px)", lineHeight: 1.08, letterSpacing: "-0.06em", margin: 0 }}>{ui.locationTitle}</h2>
            <p style={{ marginTop: 22, fontSize: 18, lineHeight: 1.75, color: "rgba(0,0,0,.68)" }}>{ui.locationLead}</p>
            <div style={{ marginTop: 34, display: "grid", gap: 12 }}>
              <div><b>{ui.addressLabel}</b> {ui.addressValue}</div>
              <div><b>{ui.hoursLabel}</b> {ui.hoursValue}</div>
              <div><b>{ui.contactLabel}</b> {ui.contactValue}</div>
            </div>
          </div>
          <div style={{ minHeight: 420, borderRadius: 44, border: "1px solid rgba(255,255,255,.1)", background: "linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.025))", display: "grid", placeItems: "center", textAlign: "center", padding: 30 }}><div><h3 style={{ fontSize: 28, margin: 0 }}>{ui.mapTitle}</h3><p style={{ color: "rgba(255,255,255,.55)", marginTop: 10 }}>{ui.mapHint}</p></div></div>
        </div>
      </section>

      <section id="contact" style={{ padding: "80px 6vw 120px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", background: "white", color: "#07080b", borderRadius: 52, padding: "58px 42px", textAlign: "center" }}>
          <p style={{ color: "#8c6a30", letterSpacing: 4, fontSize: 13, fontWeight: 900, marginBottom: 16 }}>{ui.contactEyebrow}</p>
          <h2 style={{ fontSize: "clamp(38px,5vw,66px)", letterSpacing: "-0.06em", margin: 0 }}>{ui.contactTitle}</h2>
          <p style={{ maxWidth: 700, margin: "24px auto 0", color: "rgba(0,0,0,.62)", lineHeight: 1.8, fontSize: 18 }}>{ui.contactLead}</p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 14, marginTop: 36 }}>
            <a href="https://open.kakao.com/o/gfXpUJti" target="_blank" rel="noreferrer" style={{ background: "#07080b", color: "white", padding: "17px 32px", borderRadius: 999, textDecoration: "none", fontWeight: 900 }}>{ui.kakaoCta1}</a>
            <a href="#products" style={{ border: "1px solid rgba(0,0,0,.15)", color: "#07080b", padding: "17px 32px", borderRadius: 999, textDecoration: "none", fontWeight: 900 }}>{ui.kakaoCta2}</a>
          </div>
        </div>
      </section>
      <a href="https://open.kakao.com/o/gfXpUJti" target="_blank" rel="noreferrer" style={{ position: "fixed", right: 24, bottom: 24, zIndex: 50, background: "#FEE500", color: "#111", textDecoration: "none", fontWeight: 900, padding: "16px 22px", borderRadius: 999, boxShadow: "0 20px 60px rgba(0,0,0,.35)", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 12, height: 12, borderRadius: 999, background: "#111" }} />
        {ui.kakaoFab}
      </a>
    </main>
  );
}
