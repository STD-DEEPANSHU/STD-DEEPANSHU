import { useEffect, useRef } from "react";

const skills = [
  { name: "Python",       level: "Expert",   pct: 100, color: "#a78bfa" },
  { name: "JavaScript",  level: "Expert",   pct: 100, color: "#a78bfa" },
  { name: "TypeScript",  level: "Advanced", pct: 82,  color: "#a78bfa" },
  { name: "Bash / Shell",level: "Advanced", pct: 76,  color: "#f97316" },
  { name: "Go",          level: "Advanced", pct: 72,  color: "#f97316" },
  { name: "React / Next",level: "Advanced", pct: 68,  color: "#2dd4bf" },
  { name: "Tailwind CSS",level: "Advanced", pct: 66,  color: "#2dd4bf" },
  { name: "Vue / Svelte",level: "Mid",      pct: 58,  color: "#2dd4bf" },
];

const techStack = [
  { name: "Python",      dot: "#a78bfa" },
  { name: "JavaScript",  dot: "#f97316" },
  { name: "TypeScript",  dot: "#a78bfa" },
  { name: "Go",          dot: "#2dd4bf" },
  { name: "Bash",        dot: "#6b7280" },
  { name: "React",       dot: "#60a5fa" },
  { name: "Next.js",     dot: "#9ca3af" },
  { name: "Vue.js",      dot: "#2dd4bf" },
  { name: "Svelte",      dot: "#f97316" },
  { name: "Tailwind",    dot: "#2dd4bf" },
  { name: "CF Workers",  dot: "#f97316" },
  { name: "Flask",       dot: "#a78bfa" },
  { name: "Node.js",     dot: "#60a5fa" },
  { name: "Gin",         dot: "#a78bfa" },
  { name: "Firebase",    dot: "#f97316" },
  { name: "Redis",       dot: "#f97316" },
  { name: "PostgreSQL",  dot: "#60a5fa" },
  { name: "SQLite",      dot: "#6b7280" },
  { name: "Docker",      dot: "#60a5fa" },
  { name: "Vercel",      dot: "#9ca3af" },
  { name: "Cloudflare",  dot: "#f97316" },
  { name: "Linux",       dot: "#f97316" },
  { name: "Termux",      dot: "#2dd4bf" },
  { name: "GitHub",      dot: "#6b7280" },
];

const pills = [
  { label: "⚡ Cloudflare Workers", border: "#a78bfa33", color: "#c4b5fd", bg: "#1a0a2e" },
  { label: "🤖 Telegram Bot Architect", border: "#f9731633", color: "#fb923c", bg: "#1f0f00" },
  { label: "🚀 API & Gateway Engineer", border: "#2dd4bf33", color: "#5eead4", bg: "#001a17" },
  { label: "💻 Full-Stack Developer", border: "#a78bfa33", color: "#c4b5fd", bg: "#1a0a2e" },
];

function SkillBar({ name, level, pct, color }: typeof skills[0]) {
  const fillRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const t = setTimeout(() => {
      if (fillRef.current) fillRef.current.style.width = pct + "%";
    }, 200);
    return () => clearTimeout(t);
  }, [pct]);
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 14, color: "#e0d9ff", fontFamily: "'Space Mono', monospace" }}>{name}</span>
        <span style={{ fontSize: 12, color: "#6b7280", fontFamily: "'Space Mono', monospace" }}>{level}</span>
      </div>
      <div style={{ height: 4, background: "rgba(255,255,255,0.07)", borderRadius: 2, overflow: "hidden" }}>
        <div
          ref={fillRef}
          style={{
            height: "100%",
            width: "0%",
            borderRadius: 2,
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            transition: "width 1s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>
    </div>
  );
}

export default function GithubProfile() {
  return (
    <div style={{
      background: "#0d0b14",
      minHeight: "100vh",
      fontFamily: "'Space Mono', monospace",
      color: "#e0d9ff",
      padding: "0 0 60px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .tech-chip:hover { border-color: rgba(167,139,250,0.5) !important; background: rgba(124,58,237,0.12) !important; color: #e0d9ff !important; }
        .connect-btn:hover { opacity: 0.85; transform: translateY(-1px); }
      `}</style>

      {/* BG grid */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(167,139,250,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,0.03) 1px,transparent 1px)",
        backgroundSize: "44px 44px",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "fixed", top: -200, left: "50%", transform: "translateX(-50%)",
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 820, margin: "0 auto", padding: "48px 28px 0" }}>

        {/* ── HEADER ── */}
        <div style={{ display: "flex", gap: 24, alignItems: "flex-start", marginBottom: 32 }}>
          {/* Avatar */}
          <div style={{
            flexShrink: 0, width: 90, height: 90, borderRadius: "50%", padding: 3,
            background: "linear-gradient(135deg, #7c3aed, #f97316)",
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%",
              background: "linear-gradient(135deg, #a78bfa, #f97316)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 26, fontWeight: 800, fontFamily: "'Syne', sans-serif",
              color: "#fff",
            }}>SD</div>
          </div>

          {/* Info */}
          <div style={{ flex: 1, paddingTop: 4 }}>
            <h1 style={{
              fontFamily: "'Syne', sans-serif", fontSize: 42, fontWeight: 800,
              background: "linear-gradient(90deg, #a78bfa 0%, #ffffff 45%, #f97316 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              letterSpacing: -1, lineHeight: 1.1, marginBottom: 6,
            }}>STD DEEPANSHU</h1>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 24, height: 1, background: "#a78bfa" }} />
              <span style={{ fontSize: 12, color: "#a78bfa", letterSpacing: 2 }}>@STD_DEEPANSHU · TELEGRAM</span>
            </div>
            <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.7 }}>
              Self-taught Dev from <span style={{ color: "#f97316" }}>India 🇮🇳</span> · Building fast APIs &amp; scalable systems · Founder{" "}
              <span style={{ color: "#a78bfa" }}>@STD BOTS</span>
            </p>
          </div>
        </div>

        {/* ── PILLS ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
          {pills.map((p) => (
            <span key={p.label} style={{
              fontSize: 12, letterSpacing: 0.5, padding: "6px 16px",
              borderRadius: 100, border: `1px solid ${p.border}`,
              background: p.bg, color: p.color,
            }}>{p.label}</span>
          ))}
        </div>

        {/* ── STAT CARDS ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 44 }}>
          {[["5+", "LANGUAGES"], ["10+", "FRAMEWORKS"], ["∞", "BOTS BUILT"]].map(([n, l]) => (
            <div key={l} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(167,139,250,0.12)",
              borderRadius: 12, padding: "20px 16px", textAlign: "center",
            }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 34, fontWeight: 800, color: "#a78bfa", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 11, letterSpacing: 2, color: "#6b7280", marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* ── SECTION LABEL ── */}
        {["PROFICIENCY MAP", "TECH STACK", "CONNECT"].map((label, i) => (
          <div key={label}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span style={{ fontSize: 11, letterSpacing: 3, color: "#a78bfa" }}>// {label}</span>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,rgba(167,139,250,0.35),transparent)" }} />
            </div>

            {/* SKILLS */}
            {i === 0 && (
              <div style={{ marginBottom: 44 }}>
                {skills.map((s) => <SkillBar key={s.name} {...s} />)}
              </div>
            )}

            {/* TECH GRID */}
            {i === 1 && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(106px, 1fr))",
                gap: 8, marginBottom: 44,
              }}>
                {techStack.map((t) => (
                  <div key={t.name} className="tech-chip" style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(167,139,250,0.13)",
                    borderRadius: 10, padding: "12px 8px", textAlign: "center",
                    fontSize: 12, color: "#9ca3af",
                    transition: "all 0.2s", cursor: "default",
                  }}>
                    <div style={{
                      width: 7, height: 7, borderRadius: "50%",
                      background: t.dot, margin: "0 auto 8px",
                    }} />
                    {t.name}
                  </div>
                ))}
              </div>
            )}

            {/* CONNECT */}
            {i === 2 && (
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 60 }}>
                {[
                  { label: "📡  STD BOTS Channel", href: "https://t.me/STDBOTS", bg: "#1a0a2e", border: "#a78bfa44", color: "#c4b5fd" },
                  { label: "✉️  DM @STD_DEEPANSHU", href: "https://t.me/STD_DEEPANSHU", bg: "#1f0f00", border: "#f9731644", color: "#fb923c" },
                  { label: "⌥  GitHub", href: "https://github.com/STD-DEEPANSHU", bg: "#141414", border: "#ffffff22", color: "#e0d9ff" },
                ].map((b) => (
                  <a key={b.href} href={b.href} className="connect-btn" style={{
                    display: "inline-block", padding: "11px 22px",
                    fontSize: 13, fontFamily: "'Space Mono',monospace",
                    background: b.bg, border: `1px solid ${b.border}`,
                    color: b.color, borderRadius: 10,
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}>{b.label}</a>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* ── FOOTER ── */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 20, display: "flex",
          justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 8,
          fontSize: 12, color: "#374151",
        }}>
          <span>Built by <span style={{ color: "#a78bfa" }}>STD BOTS</span> · Shipping fast, always.</span>
          <span style={{ fontSize: 11, letterSpacing: 1 }}>INDIA 🇮🇳 · 2025</span>
        </div>

      </div>
    </div>
  );
}
