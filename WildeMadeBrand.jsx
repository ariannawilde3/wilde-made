import { useState } from "react";

export default function WildeMadeBrand() {
  const colors = {
    blush: "#FDF5F7",
    rose: "#C4707E",
    roseLight: "#F5D5DC",
    roseMid: "#ECC4CE",
    roseBorder: "#F0C4D1",
    clay: "#3A2024",
    clayLight: "#5C343A",
    textMuted: "#B8758A",
    textDark: "#9E4A5A",
  };

  const AWMonogram = ({ width = 200, height = 120, strokeWidth = 2.2 }) => (
    <svg viewBox="0 0 200 120" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path d="M30 85 L42 30 L55 65 L65 40 L78 85" fill="none" stroke={colors.rose} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M72 85 L78 30 L90 70" fill="none" stroke={colors.rose} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M85 85 L95 35 L105 65 L118 25 L128 70" fill="none" stroke={colors.rose} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M128 70 Q135 20, 170 30" fill="none" stroke={colors.rose} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const AWMonogramSmall = () => (
    <svg viewBox="0 0 80 40" width={60} height={30} xmlns="http://www.w3.org/2000/svg">
      <path d="M8 30 L14 10 L20 22 L24 14 L30 30" fill="none" stroke={colors.rose} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 30 L31 10 L36 25" fill="none" stroke={colors.rose} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 30 L38 12 L42 22 L48 8 L52 25" fill="none" stroke={colors.rose} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 25 Q56 6, 70 10" fill="none" stroke={colors.rose} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const AWMonogramLabel = () => (
    <svg viewBox="0 0 120 60" width={100} height={50} xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 4 }}>
      <path d="M15 45 L24 12 L33 32 L39 20 L48 45" fill="none" stroke={colors.rose} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 45 L48 12 L55 36" fill="none" stroke={colors.rose} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 45 L57 14 L63 32 L72 8 L78 36" fill="none" stroke={colors.rose} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M78 36 Q83 10, 105 15" fill="none" stroke={colors.rose} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Logo lockup */}
      <div style={{
        background: colors.blush,
        borderRadius: 12,
        border: `0.5px solid ${colors.roseBorder}`,
        padding: "2.5rem",
        textAlign: "center",
        marginBottom: "2rem",
      }}>
        <AWMonogram />
        <p style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: 4,
          color: colors.textDark,
          margin: "8px 0 4px",
        }}>WILDE MADE</p>
        <p style={{
          fontSize: 12,
          color: colors.textMuted,
          letterSpacing: 2,
          margin: 0,
        }}>ceramics · bread · handmade</p>
      </div>

      {/* Color palette */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 12,
        marginBottom: "2rem",
      }}>
        {[
          { bg: colors.blush, swatch: colors.roseLight, name: "BLUSH", hex: "#FDF5F7", textColor: colors.textDark, subColor: colors.textMuted },
          { bg: colors.rose, swatch: "#A8535F", name: "ROSE", hex: "#C4707E", textColor: colors.blush, subColor: colors.roseLight },
          { bg: colors.clay, swatch: colors.clayLight, name: "CLAY", hex: "#3A2024", textColor: colors.roseLight, subColor: colors.textMuted },
        ].map((c) => (
          <div key={c.name} style={{
            background: c.bg,
            borderRadius: 8,
            padding: "1rem",
            textAlign: "center",
          }}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: c.swatch,
              margin: "0 auto 8px",
            }} />
            <p style={{ fontSize: 11, color: c.textColor, margin: 0, letterSpacing: 1 }}>{c.name}</p>
            <p style={{ fontSize: 10, color: c.subColor, margin: "2px 0 0" }}>{c.hex}</p>
          </div>
        ))}
      </div>

      {/* Website concept label */}
      <p style={{
        fontSize: 13,
        color: "#999",
        textAlign: "center",
        marginBottom: "1rem",
        letterSpacing: 1,
      }}>WEBSITE CONCEPT</p>

      {/* Website mockup */}
      <div style={{
        background: colors.blush,
        borderRadius: 12,
        border: `0.5px solid ${colors.roseBorder}`,
        overflow: "hidden",
        marginBottom: "2rem",
      }}>
        {/* Nav */}
        <div style={{
          padding: "1rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: `0.5px solid ${colors.roseBorder}`,
        }}>
          <AWMonogramSmall />
          <div style={{ display: "flex", gap: 20, fontSize: 12, color: colors.textDark, letterSpacing: 1 }}>
            <span>SHOP</span>
            <span>GALLERY</span>
            <span>ABOUT</span>
            <span>CONTACT</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ padding: "3rem 1.5rem", textAlign: "center" }}>
          <div style={{
            width: "100%",
            height: 160,
            background: `linear-gradient(135deg, ${colors.roseLight} 0%, #E8B5C0 100%)`,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}>
            <div>
              <p style={{
                fontSize: 24,
                fontWeight: 500,
                color: colors.clay,
                margin: "0 0 4px",
                fontFamily: "Georgia, serif",
              }}>Wilde Made</p>
              <p style={{ fontSize: 12, color: colors.clayLight, letterSpacing: 3, margin: 0 }}>
                CERAMICS · BREAD · HANDMADE
              </p>
            </div>
          </div>

          {/* Product categories */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              {
                label: "Ceramics",
                icon: (
                  <svg viewBox="0 0 40 40" width={40} height={40}>
                    <ellipse cx={20} cy={28} rx={14} ry={8} fill="none" stroke={colors.textDark} strokeWidth={1.2} />
                    <path d="M8 20 Q8 28, 20 28 Q32 28, 32 20" fill="none" stroke={colors.textDark} strokeWidth={1.2} />
                    <ellipse cx={20} cy={20} rx={12} ry={5} fill="none" stroke={colors.textDark} strokeWidth={1.2} />
                  </svg>
                ),
              },
              {
                label: "Sourdough",
                icon: (
                  <svg viewBox="0 0 40 40" width={40} height={40}>
                    <ellipse cx={20} cy={25} rx={14} ry={10} fill="none" stroke={colors.textDark} strokeWidth={1.2} />
                    <path d="M10 20 Q20 12, 30 20" fill="none" stroke={colors.textDark} strokeWidth={1.2} />
                    <line x1={20} y1={15} x2={20} y2={22} stroke={colors.textDark} strokeWidth={1} />
                  </svg>
                ),
              },
              {
                label: "& more",
                icon: (
                  <svg viewBox="0 0 40 40" width={40} height={40}>
                    <rect x={10} y={14} width={20} height={16} rx={2} fill="none" stroke={colors.textDark} strokeWidth={1.2} />
                    <path d="M10 14 Q20 6, 30 14" fill="none" stroke={colors.textDark} strokeWidth={1.2} />
                    <circle cx={20} cy={22} r={2} fill={colors.textDark} />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.label}>
                <div style={{
                  width: "100%",
                  aspectRatio: "1",
                  background: colors.roseMid,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {item.icon}
                </div>
                <p style={{ fontSize: 12, color: colors.textDark, margin: "8px 0 0" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: "1rem 1.5rem",
          borderTop: `0.5px solid ${colors.roseBorder}`,
          textAlign: "center",
        }}>
          <p style={{ fontSize: 11, color: colors.textMuted, margin: 0, letterSpacing: 1 }}>
            SAN LUIS OBISPO, CA
          </p>
        </div>
      </div>

      {/* Packaging label */}
      <p style={{
        fontSize: 13,
        color: "#999",
        textAlign: "center",
        marginBottom: "1rem",
        letterSpacing: 1,
      }}>PACKAGING LABEL</p>

      <div style={{
        background: "#FFFFFF",
        border: `1.5px solid ${colors.rose}`,
        borderRadius: 12,
        padding: "1.5rem",
        maxWidth: 320,
        margin: "0 auto",
        textAlign: "center",
      }}>
        <AWMonogramLabel />
        <p style={{
          fontSize: 14,
          fontWeight: 500,
          color: colors.clay,
          margin: "0 0 2px",
          fontFamily: "Georgia, serif",
        }}>Sourdough Loaf</p>
        <p style={{ fontSize: 10, color: colors.textDark, letterSpacing: 2, margin: "0 0 12px" }}>
          WILDE MADE
        </p>
        <div style={{ borderTop: `0.5px solid ${colors.roseBorder}`, paddingTop: 10 }}>
          <p style={{ fontSize: 9, color: colors.textMuted, margin: "0 0 2px" }}>
            Ingredients: Bread flour (wheat), water, salt, sourdough starter (wheat flour, water)
          </p>
          <p style={{ fontSize: 9, color: colors.textMuted, margin: "0 0 2px" }}>
            Contains: Wheat · Net Wt: 24 oz (680g)
          </p>
          <p style={{ fontSize: 9, color: colors.textMuted, margin: 0 }}>
            Made in a home kitchen · San Luis Obispo, CA
          </p>
        </div>
      </div>
    </div>
  );
}
