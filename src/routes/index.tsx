import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({
  component: WeddingInvitation,
})

// ─── Petal SVG ───────────────────────────────────────────────────────────────

function PetalSVG({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size * 1.6} viewBox="0 0 20 32" fill="none">
      <path
        d="M10 0 C14 4, 20 8, 18 16 C16 24, 10 32, 10 32 C10 32, 4 24, 2 16 C0 8, 6 4, 10 0Z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M10 4 C12 8, 15 12, 14 18 C13 22, 10 28, 10 28"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  )
}

// ─── Mandala Background ──────────────────────────────────────────────────────

function MandalaBG() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        opacity: 0.06,
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'mandalaRotate 80s linear infinite',
      }}
    >
      <svg width="900" height="900" viewBox="0 0 900 900" fill="none">
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const x1 = 450 + 200 * Math.cos(angle)
          const y1 = 450 + 200 * Math.sin(angle)
          const x2 = 450 + 400 * Math.cos(angle)
          const y2 = 450 + 400 * Math.sin(angle)
          return (
            <g key={i}>
              <line x1="450" y1="450" x2={x2} y2={y2} stroke="#D4AF37" strokeWidth="1" />
              <ellipse
                cx={x1}
                cy={y1}
                rx="20"
                ry="40"
                fill="#D4AF37"
                transform={`rotate(${i * 30} ${x1} ${y1})`}
              />
            </g>
          )
        })}
        <circle cx="450" cy="450" r="150" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
        <circle cx="450" cy="450" r="250" stroke="#D4AF37" strokeWidth="1" fill="none" strokeDasharray="8 4" />
        <circle cx="450" cy="450" r="380" stroke="#D4AF37" strokeWidth="1" fill="none" strokeDasharray="4 8" />
        <circle cx="450" cy="450" r="50" stroke="#D4AF37" strokeWidth="2" fill="none" />
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i * 45 * Math.PI) / 180
          return (
            <path
              key={i}
              d={`M 450 450
                  C ${450 + 60 * Math.cos(a - 0.3)} ${450 + 60 * Math.sin(a - 0.3)},
                    ${450 + 100 * Math.cos(a)} ${450 + 100 * Math.sin(a)},
                    ${450 + 130 * Math.cos(a)} ${450 + 130 * Math.sin(a)}`}
              stroke="#D4AF37"
              strokeWidth="1.5"
              fill="none"
            />
          )
        })}
      </svg>
    </div>
  )
}

// ─── Door Design ─────────────────────────────────────────────────────────────

function DoorDesign({ side }: { side: 'left' | 'right' }) {
  const mirror = side === 'right'
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 20,
        transform: mirror ? 'scaleX(-1)' : undefined,
      }}
    >
      <svg width="200" height="360" viewBox="0 0 200 360" fill="none">
        {/* outer border */}
        <rect x="8" y="8" width="184" height="344" rx="4" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
        <rect x="16" y="16" width="168" height="328" rx="3" stroke="#D4AF37" strokeWidth="0.8" fill="none" />
        {/* arched window top */}
        <path d="M 40 140 C 40 80, 160 80, 160 140 L 160 220 L 40 220 Z" stroke="#D4AF37" strokeWidth="1" fill="rgba(212,175,55,0.08)" />
        {/* lotus top */}
        <path d="M 100 92 C 92 102,80 108,80 120 C 80 132,90 140,100 140 C 110 140,120 132,120 120 C 120 108,108 102,100 92Z" stroke="#D4AF37" strokeWidth="1" fill="rgba(212,175,55,0.2)" />
        {/* center ornament */}
        <circle cx="100" cy="190" r="30" stroke="#D4AF37" strokeWidth="1" fill="none" />
        <circle cx="100" cy="190" r="20" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i * 45 * Math.PI) / 180
          return (
            <line
              key={i}
              x1={100 + 20 * Math.cos(a)}
              y1={190 + 20 * Math.sin(a)}
              x2={100 + 30 * Math.cos(a)}
              y2={190 + 30 * Math.sin(a)}
              stroke="#D4AF37"
              strokeWidth="1"
            />
          )
        })}
        {/* bottom panel */}
        <rect x="50" y="250" width="100" height="90" rx="4" stroke="#D4AF37" strokeWidth="1" fill="rgba(212,175,55,0.06)" />
        <path d="M 70 260 Q 100 275 130 260 L 130 330 Q 100 315 70 330 Z" stroke="#D4AF37" strokeWidth="0.5" fill="rgba(212,175,55,0.1)" />
        {/* corner flourishes */}
        <path d="M 25 25 Q 35 25 35 35" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
        <path d="M 25 335 Q 35 335 35 325" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  )
}

// ─── Lotus Ornament ──────────────────────────────────────────────────────────

function LotusOrnament() {
  return (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
      {[0, -20, 20, -40, 40].map((offset, i) => (
        <path
          key={i}
          d={`M ${60 + offset} 55 C ${50 + offset} 40, ${45 + offset} 20, ${60 + offset} 5 C ${75 + offset} 20, ${70 + offset} 40, ${60 + offset} 55Z`}
          fill={i === 0 ? 'rgba(212,175,55,0.8)' : 'rgba(212,175,55,0.5)'}
          transform={`rotate(${offset / 2} 60 55)`}
        />
      ))}
      <line x1="0" y1="58" x2="120" y2="58" stroke="#D4AF37" strokeWidth="0.5" />
    </svg>
  )
}

// ─── OM Symbol ───────────────────────────────────────────────────────────────

function OmSymbol() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" stroke="#D4AF37" strokeWidth="1" fill="none" />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontSize="22"
        fill="#D4AF37"
        fontFamily="serif"
        opacity="0.9"
      >
        ॐ
      </text>
    </svg>
  )
}

// ─── Scratch Reveal ──────────────────────────────────────────────────────────

function ScratchReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDrawing = useRef(false)
  const [revealed, setRevealed] = useState(false)
  const [canvasReady, setCanvasReady] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const w = container.offsetWidth
    const h = container.offsetHeight
    canvas.width = w
    canvas.height = h

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Gold scratch layer
    const grad = ctx.createLinearGradient(0, 0, w, h)
    grad.addColorStop(0, '#6B0F0F')
    grad.addColorStop(0.3, '#8B1A1A')
    grad.addColorStop(0.6, '#7A1515')
    grad.addColorStop(1, '#5A0A0A')
    ctx.fillStyle = grad
    ctx.roundRect(0, 0, w, h, 16)
    ctx.fill()

    // Border
    ctx.strokeStyle = '#D4AF37'
    ctx.lineWidth = 2
    ctx.roundRect(4, 4, w - 8, h - 8, 14)
    ctx.stroke()

    // Instruction text
    ctx.fillStyle = '#D4AF37'
    ctx.font = `bold ${Math.floor(w / 14)}px Yeseva One, serif`
    ctx.textAlign = 'center'
    ctx.fillText('Scratch Here', w / 2, h / 2 - 10)
    ctx.font = `${Math.floor(w / 18)}px Libre Baskerville, serif`
    ctx.fillStyle = '#FFC87A'
    ctx.fillText('to reveal the auspicious date', w / 2, h / 2 + 18)

    // Small lotus petals as decoration
    for (let i = 0; i < 6; i++) {
      const x = (w / 7) * (i + 0.5)
      ctx.fillStyle = 'rgba(212,175,55,0.3)'
      ctx.beginPath()
      ctx.ellipse(x, h - 14, 6, 10, 0, 0, Math.PI * 2)
      ctx.fill()
    }

    setCanvasReady(true)
  }, [])

  const doScratch = (x: number, y: number) => {
    if (revealed) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 24, 0, Math.PI * 2)
    ctx.fill()

    // Check coverage
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
    let cleared = 0
    for (let i = 3; i < data.length; i += 16) {
      if (data[i] < 64) cleared++
    }
    if (cleared / (data.length / 64) > 0.45) {
      setRevealed(true)
    }
  }

  const getPos = (e: React.MouseEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect()
    return { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  const getTouchPos = (e: React.TouchEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect()
    return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top }
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 380,
        height: 160,
        borderRadius: 16,
        boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(212,175,55,0.25)',
      }}
    >
      {/* Revealed layer underneath */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 16,
          background: 'linear-gradient(135deg, #1a0a00, #3d1500)',
          border: '2px solid #D4AF37',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
        }}
      >
        <p
          style={{
            fontFamily: 'Cinzel Decorative, serif',
            color: '#FFA07A',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
          }}
        >
          Wedding Date
        </p>
        <p
          style={{
            fontFamily: 'Yeseva One, serif',
            fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
            background: 'linear-gradient(90deg, #B8860B, #FFD700, #D4AF37)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          10th May 2026
        </p>
        <p
          style={{
            fontFamily: 'Libre Baskerville, serif',
            fontStyle: 'italic',
            color: '#D4AF37',
            fontSize: '0.9rem',
          }}
        >
          Sunday — 12:30 PM
        </p>
      </div>

      {/* Scratch canvas on top */}
      {!revealed && canvasReady && (
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 16,
            cursor: 'crosshair',
            touchAction: 'none',
          }}
          onMouseDown={(e) => { isDrawing.current = true; const p = getPos(e); doScratch(p.x, p.y) }}
          onMouseUp={() => { isDrawing.current = false }}
          onMouseLeave={() => { isDrawing.current = false }}
          onMouseMove={(e) => { if (isDrawing.current) { const p = getPos(e); doScratch(p.x, p.y) } }}
          onTouchStart={(e) => { isDrawing.current = true; const p = getTouchPos(e); doScratch(p.x, p.y) }}
          onTouchEnd={() => { isDrawing.current = false }}
          onTouchMove={(e) => { e.preventDefault(); if (isDrawing.current) { const p = getTouchPos(e); doScratch(p.x, p.y) } }}
        />
      )}
      {revealed && (
        <canvas
          ref={canvasRef}
          style={{ display: 'none' }}
        />
      )}
    </div>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────

const PETAL_DATA = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 5 + Math.random() * 5,
  size: 14 + Math.random() * 18,
  color: ['#FF6B6B', '#FFB347', '#FF69B4', '#FF4500', '#DC143C', '#FF8C00', '#FFD700', '#E75480', '#C71585'][
    Math.floor(Math.random() * 9)
  ],
  swayX: Math.random() * 120 - 60,
  rotations: 360 + Math.floor(Math.random() * 720),
}))

function WeddingInvitation() {
  const [doorsOpen, setDoorsOpen] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  const handleOpen = () => {
    if (doorsOpen) return
    setDoorsOpen(true)
    setTimeout(() => setContentVisible(true), 1400)
  }

  useEffect(() => {
    const t = setTimeout(handleOpen, 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Yeseva+One&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Cinzel+Decorative:wght@400;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #110303;
          overflow-x: hidden;
        }

        @keyframes mandalaRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes petalFall {
          0%   { transform: translateY(-40px) rotate(0deg) translateX(0px); opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 0.7; }
          100% { transform: translateY(105vh) rotate(var(--rot)) translateX(var(--sway)); opacity: 0; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes photoReveal {
          0%   { opacity: 0; filter: blur(16px) brightness(0.2) saturate(0.3); transform: scale(1.08); }
          100% { opacity: 1; filter: blur(0) brightness(1) saturate(1.1); transform: scale(1); }
        }

        @keyframes goldShimmer {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%       { transform: scale(1.15); }
          28%       { transform: scale(1); }
          42%       { transform: scale(1.1); }
          70%       { transform: scale(1); }
        }

        @keyframes doorOpenLeft {
          from { transform: perspective(1200px) rotateY(0deg); }
          to   { transform: perspective(1200px) rotateY(-80deg); }
        }

        @keyframes doorOpenRight {
          from { transform: perspective(1200px) rotateY(0deg); }
          to   { transform: perspective(1200px) rotateY(80deg); }
        }

        .gold-text {
          background: linear-gradient(90deg, #9B7A1A 0%, #D4AF37 20%, #FFD700 40%, #FFEC8B 55%, #D4AF37 75%, #9B7A1A 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: goldShimmer 4s linear infinite;
        }

        .door-left-panel {
          position: absolute;
          top: 0; left: 0;
          width: 50%; height: 100%;
          transform-origin: left center;
          background: linear-gradient(160deg, #5A0C0C 0%, #7D1515 25%, #9B1C1C 45%, #7A1010 70%, #5A0C0C 100%);
          z-index: 200;
          border-right: 3px solid #D4AF37;
          transition: transform 1.3s cubic-bezier(0.77, 0, 0.18, 1);
          overflow: hidden;
          box-shadow: 4px 0 30px rgba(0,0,0,0.8);
        }

        .door-right-panel {
          position: absolute;
          top: 0; right: 0;
          width: 50%; height: 100%;
          transform-origin: right center;
          background: linear-gradient(200deg, #5A0C0C 0%, #7D1515 25%, #9B1C1C 45%, #7A1010 70%, #5A0C0C 100%);
          z-index: 200;
          border-left: 3px solid #D4AF37;
          transition: transform 1.3s cubic-bezier(0.77, 0, 0.18, 1);
          overflow: hidden;
          box-shadow: -4px 0 30px rgba(0,0,0,0.8);
        }

        .door-left-panel.open  { transform: perspective(1200px) rotateY(-82deg); }
        .door-right-panel.open { transform: perspective(1200px) rotateY(82deg); }

        .section-card {
          background: linear-gradient(135deg, rgba(100,15,15,0.35) 0%, rgba(30,5,5,0.85) 100%);
          border: 1px solid rgba(212,175,55,0.3);
          border-radius: 24px;
          backdrop-filter: blur(8px);
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 28px 0;
        }

        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, #D4AF37 40%, #D4AF37 60%, transparent);
        }

        .family-block {
          background: linear-gradient(160deg, rgba(120,20,20,0.45), rgba(40,8,8,0.75));
          border: 1px solid rgba(212,175,55,0.35);
          border-radius: 18px;
          padding: 36px 28px;
          text-align: center;
          flex: 1;
          min-width: 220px;
        }
      `}</style>

      {/* ── DOOR OVERLAY ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          pointerEvents: doorsOpen ? 'none' : 'auto',
        }}
      >
        <div className={`door-left-panel${doorsOpen ? ' open' : ''}`}>
          <DoorDesign side="left" />
        </div>
        <div className={`door-right-panel${doorsOpen ? ' open' : ''}`}>
          <DoorDesign side="right" />
        </div>

        {/* Handle seam glow */}
        {!doorsOpen && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 6,
              height: '100%',
              background: 'linear-gradient(180deg, transparent 0%, #D4AF37 20%, #FFD700 50%, #D4AF37 80%, transparent 100%)',
              opacity: 0.6,
              zIndex: 201,
              pointerEvents: 'none',
            }}
          />
        )}

        {!doorsOpen && (
          <button
            onClick={handleOpen}
            style={{
              position: 'absolute',
              bottom: '8%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 202,
              background: 'linear-gradient(135deg, #9B7A1A, #D4AF37, #FFD700, #D4AF37)',
              color: '#1a0303',
              border: 'none',
              padding: '14px 44px',
              borderRadius: '50px',
              fontFamily: 'Cinzel Decorative, serif',
              fontSize: '0.95rem',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              boxShadow: '0 8px 40px rgba(212,175,55,0.55), 0 0 0 2px rgba(212,175,55,0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLButtonElement).style.transform = 'translateX(-50%) scale(1.05)'
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLButtonElement).style.transform = 'translateX(-50%) scale(1)'
            }}
          >
            Open Invitation
          </button>
        )}
      </div>

      {/* ── MAIN CARD ── */}
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(160deg, #110303 0%, #1f0505 35%, #2a0808 60%, #110303 100%)',
          color: '#FFF8E7',
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        {/* Mandala BG */}
        <MandalaBG />

        {/* Decorative corner SVG borders */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          <CornerBorders />
        </div>

        {/* ── PETALS ── */}
        {contentVisible && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 10,
              overflow: 'hidden',
            }}
          >
            {PETAL_DATA.map((p) => (
              <div
                key={p.id}
                style={
                  {
                    position: 'absolute',
                    left: `${p.left}%`,
                    top: '-40px',
                    '--sway': `${p.swayX}px`,
                    '--rot': `${p.rotations}deg`,
                    animation: `petalFall ${p.duration}s ${p.delay}s infinite ease-in`,
                    opacity: 0,
                  } as React.CSSProperties
                }
              >
                <PetalSVG color={p.color} size={p.size} />
              </div>
            ))}
          </div>
        )}

        {/* ── CONTENT ── */}
        <div style={{ position: 'relative', zIndex: 2 }}>

          {/* ═══ HERO SECTION ═══ */}
          <section
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px 24px 40px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                opacity: contentVisible ? 1 : 0,
                animation: contentVisible ? 'fadeUp 1s 0.1s ease both' : 'none',
              }}
            >
              <LotusOrnament />
            </div>

            <p
              style={{
                fontFamily: 'Cinzel Decorative, serif',
                fontSize: 'clamp(0.6rem, 1.8vw, 0.85rem)',
                color: '#D4AF37',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                margin: '20px 0 10px',
                opacity: contentVisible ? 1 : 0,
                animation: contentVisible ? 'fadeUp 1s 0.3s ease both' : 'none',
              }}
            >
              With the Blessings of the Almighty
            </p>

            <h1
              style={{
                fontFamily: 'Yeseva One, serif',
                fontSize: 'clamp(3rem, 10vw, 6rem)',
                lineHeight: 1.05,
                opacity: contentVisible ? 1 : 0,
                animation: contentVisible ? 'fadeUp 1.1s 0.5s ease both' : 'none',
              }}
            >
              <span className="gold-text">Sarvesh</span>
            </h1>

            <div
              style={{
                fontFamily: 'Libre Baskerville, serif',
                fontStyle: 'italic',
                color: 'rgba(255,248,231,0.5)',
                fontSize: 'clamp(1rem, 3vw, 1.4rem)',
                margin: '4px 0',
                opacity: contentVisible ? 1 : 0,
                animation: contentVisible ? 'fadeUp 1s 0.65s ease both' : 'none',
              }}
            >
              &amp;
            </div>

            <h1
              style={{
                fontFamily: 'Yeseva One, serif',
                fontSize: 'clamp(3rem, 10vw, 6rem)',
                lineHeight: 1.05,
                opacity: contentVisible ? 1 : 0,
                animation: contentVisible ? 'fadeUp 1.1s 0.8s ease both' : 'none',
              }}
            >
              <span className="gold-text">Dipali</span>
            </h1>

            <p
              style={{
                fontFamily: 'Libre Baskerville, serif',
                fontStyle: 'italic',
                color: '#FFA07A',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                marginTop: 12,
                opacity: contentVisible ? 1 : 0,
                animation: contentVisible ? 'fadeUp 1s 1s ease both' : 'none',
              }}
            >
              are joyfully getting married
            </p>

            {/* Photo */}
            <div
              style={{
                marginTop: 40,
                opacity: contentVisible ? 1 : 0,
                animation: contentVisible ? 'fadeUp 0.5s 1.2s ease both' : 'none',
              }}
            >
              <div
                style={{
                  width: 'clamp(220px, 45vw, 300px)',
                  height: 'clamp(220px, 45vw, 300px)',
                  borderRadius: '50%',
                  border: '4px solid #D4AF37',
                  boxShadow:
                    '0 0 0 8px rgba(212,175,55,0.12), 0 0 60px rgba(212,175,55,0.35), 0 0 120px rgba(180,30,30,0.3)',
                  overflow: 'hidden',
                  animation: contentVisible ? 'photoReveal 2.8s 1.3s ease both, float 5s 4s ease-in-out infinite' : 'none',
                  opacity: 0,
                }}
              >
                <img
                  src="/c1.png"
                  alt="Couple"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="divider" style={{ width: '100%', maxWidth: 360, marginTop: 48 }}>
              <OmSymbol />
            </div>
          </section>

          {/* ═══ INVITATION MESSAGE ═══ */}
          <section style={{ padding: '20px 20px 60px', maxWidth: 760, margin: '0 auto' }}>
            <div className="section-card" style={{ padding: 'clamp(28px, 5vw, 52px)' }}>
              <p
                style={{
                  fontFamily: 'Cinzel Decorative, serif',
                  color: '#D4AF37',
                  fontSize: 'clamp(0.7rem, 1.8vw, 0.9rem)',
                  letterSpacing: '0.25em',
                  textAlign: 'center',
                  marginBottom: 28,
                }}
              >
                ✦ Sarvesh-Dipali Wedding Invitation ✦
              </p>

              <p
                style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  color: '#FFF8E7',
                  lineHeight: 2.1,
                  textAlign: 'center',
                }}
              >
                "Two hearts have chosen each other,
                <br />
                two souls have found their home.
                <br />
                The stars aligned, the universe smiled,
                <br />
                and now — they are never alone."
              </p>

              <div className="divider">
                <span style={{ color: '#D4AF37', fontSize: '1.2rem' }}>✿</span>
              </div>

              <p
                style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                  color: '#FFC87A',
                  lineHeight: 2,
                  textAlign: 'center',
                }}
              >
                With hearts overflowing with joy and gratitude,
                <br />
                we humbly request the honour of your gracious presence
                <br />
                as we take our sacred vows and begin this beautiful journey together.
                <br />
                <br />
                Your blessings and love mean the world to us.
              </p>
            </div>
          </section>

          {/* ═══ DATE SCRATCH REVEAL ═══ */}
          <section
            style={{
              padding: '20px 20px 80px',
              maxWidth: 600,
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <div className="divider" style={{ maxWidth: 400, margin: '0 auto 32px' }}>
              <OmSymbol />
            </div>

            <p
              style={{
                fontFamily: 'Yeseva One, serif',
                fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
                marginBottom: 8,
              }}
            >
              <span className="gold-text">The Auspicious Date</span>
            </p>

            <p
              style={{
                fontFamily: 'Libre Baskerville, serif',
                fontStyle: 'italic',
                color: 'rgba(255,200,122,0.7)',
                fontSize: '0.9rem',
                marginBottom: 28,
                letterSpacing: '0.05em',
              }}
            >
              Scratch the seal below to reveal
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', padding: '0 20px' }}>
              <ScratchReveal />
            </div>

            <p
              style={{
                fontFamily: 'Libre Baskerville, serif',
                color: '#D4AF37',
                fontSize: '0.9rem',
                marginTop: 24,
                letterSpacing: '0.08em',
              }}
            >
              Surbhi Community Hall, Naval Civilian Housing Colony, Kanjurmarg West
            </p>
          </section>

          {/* ═══ LOVE MESSAGE ═══ */}
          <section
            style={{
              padding: '20px 20px 80px',
              maxWidth: 720,
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(160deg, rgba(160,25,25,0.25), rgba(212,175,55,0.08))',
                border: '1px solid rgba(212,175,55,0.4)',
                borderRadius: '60% 40% 55% 45% / 35% 35% 65% 65%',
                padding: 'clamp(36px, 6vw, 60px) clamp(24px, 5vw, 48px)',
              }}
            >
              {/* Heartbeat icon */}
              <div
                style={{
                  fontSize: '2.2rem',
                  animation: 'heartbeat 2s ease-in-out infinite',
                  display: 'inline-block',
                  marginBottom: 20,
                  filter: 'drop-shadow(0 0 8px rgba(220,20,60,0.6))',
                }}
              >
                ❤
              </div>

              <p
                style={{
                  fontFamily: 'Yeseva One, serif',
                  fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                  marginBottom: 24,
                  background: 'linear-gradient(90deg, #B8860B, #FFD700, #D4AF37)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                A Promise of Forever
              </p>

              <p
                style={{
                  fontFamily: 'Libre Baskerville, serif',
                  fontStyle: 'italic',
                  color: '#FFC87A',
                  lineHeight: 2.1,
                  fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
                }}
              >
                "Today I choose you, and tomorrow I choose you again.
                <br />
                In every lifetime, across every universe,
                <br />
                through every storm and every sunrise —
                <br />
                <span
                  style={{
                    color: '#FFD700',
                    fontStyle: 'normal',
                    fontFamily: 'Yeseva One, serif',
                  }}
                >
                  I choose you.
                </span>
                <br />
                <br />
                You are my peace, my joy, my forever home.
                <br />
                With every breath — I am yours."
              </p>
            </div>
          </section>

          {/* ═══ FAMILY INVITATION ═══ */}
          <section
            style={{
              padding: '20px 20px 80px',
              maxWidth: 900,
              margin: '0 auto',
            }}
          >
            <p
              style={{
                fontFamily: 'Cinzel Decorative, serif',
                color: '#D4AF37',
                fontSize: 'clamp(0.7rem, 1.8vw, 0.9rem)',
                letterSpacing: '0.2em',
                textAlign: 'center',
                marginBottom: 12,
              }}
            >
              ✦ Invitation From Both Families ✦
            </p>
            <p
              style={{
                fontFamily: 'Libre Baskerville, serif',
                fontStyle: 'italic',
                color: 'rgba(255,200,120,0.6)',
                textAlign: 'center',
                fontSize: '0.9rem',
                marginBottom: 40,
              }}
            >
              With folded hands and full hearts, we request your blessings
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 24,
                alignItems: 'stretch',
                justifyContent: 'center',
              }}
            >
              {/* Bride family */}
              <div className="family-block">
                <div style={{ marginBottom: 12, color: '#D4AF37' }}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    {[0, -1, 1, -2, 2].map((o, i) => (
                      <path
                        key={i}
                        d={`M ${18 + o * 5} 34 C ${14 + o * 5} 26, ${10 + o * 5} 18, ${18 + o * 5} 6 C ${26 + o * 5} 18, ${22 + o * 5} 26, ${18 + o * 5} 34Z`}
                        fill="#D4AF37"
                        opacity={1 - Math.abs(o) * 0.25}
                        transform={`rotate(${o * 15} 18 34)`}
                      />
                    ))}
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: 'Cinzel Decorative, serif',
                    color: '#FFA07A',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    marginBottom: 14,
                  }}
                >
                  BRIDE'S FAMILY
                </p>
                <p
                  style={{
                    fontFamily: 'Yeseva One, serif',
                    fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                    color: '#FFF8E7',
                    marginBottom: 14,
                  }}
                >
                  Mardhekar Parivar
                </p>
                <div
                  style={{
                    width: 60,
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
                    margin: '0 auto 16px',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'Libre Baskerville, serif',
                    color: '#FFC87A',
                    fontSize: '0.9rem',
                    lineHeight: 2,
                  }}
                >
                  Shri Ramdas Mardhekar
                  <br />
                  Smt. Meenakshi Mardhekar
                  <br />
                  <em style={{ color: '#D4AF37', fontSize: '0.82rem' }}>
                    (Parents of the Bride)
                  </em>
                  <br />
                  <br />
                  Mumbai, India
                </p>
              </div>

              {/* Center */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  minWidth: 40,
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 1,
                    flex: 1,
                    minHeight: 40,
                    background:
                      'linear-gradient(180deg, transparent, rgba(212,175,55,0.6), rgba(212,175,55,0.6), transparent)',
                  }}
                />
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 4 C18 10,24 12,28 16 C24 20,18 22,16 28 C14 22,8 20,4 16 C8 12,14 10,16 4Z"
                    fill="#D4AF37"
                    opacity="0.8"
                  />
                </svg>
                <div
                  style={{
                    width: 1,
                    flex: 1,
                    minHeight: 40,
                    background:
                      'linear-gradient(180deg, transparent, rgba(212,175,55,0.6), rgba(212,175,55,0.6), transparent)',
                  }}
                />
              </div>

              {/* Groom family */}
              <div className="family-block">
                <div style={{ marginBottom: 12, color: '#D4AF37' }}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    {[0, -1, 1, -2, 2].map((o, i) => (
                      <path
                        key={i}
                        d={`M ${18 + o * 5} 34 C ${14 + o * 5} 26, ${10 + o * 5} 18, ${18 + o * 5} 6 C ${26 + o * 5} 18, ${22 + o * 5} 26, ${18 + o * 5} 34Z`}
                        fill="#D4AF37"
                        opacity={1 - Math.abs(o) * 0.25}
                        transform={`rotate(${o * 15} 18 34)`}
                      />
                    ))}
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: 'Cinzel Decorative, serif',
                    color: '#FFA07A',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    marginBottom: 14,
                  }}
                >
                  GROOM'S FAMILY
                </p>
                <p
                  style={{
                    fontFamily: 'Yeseva One, serif',
                    fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                    color: '#FFF8E7',
                    marginBottom: 14,
                  }}
                >
                  Panderkar Parivar
                </p>
                <div
                  style={{
                    width: 60,
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
                    margin: '0 auto 16px',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'Libre Baskerville, serif',
                    color: '#FFC87A',
                    fontSize: '0.9rem',
                    lineHeight: 2,
                  }}
                >
                  Shri Jagdish Panderkar
                  <br />
                  Smt. Diksha Panderkar
                  <br />
                  <em style={{ color: '#D4AF37', fontSize: '0.82rem' }}>
                    (Parents of the Groom)
                  </em>
                  <br />
                  <br />
                  Mumbai, India
                </p>
              </div>
            </div>
          </section>

          {/* ═══ FOOTER ═══ */}
          <footer
            style={{
              textAlign: 'center',
              padding: '48px 20px 60px',
              borderTop: '1px solid rgba(212,175,55,0.15)',
            }}
          >
            <LotusOrnament />
            <p
              style={{
                fontFamily: 'Libre Baskerville, serif',
                fontStyle: 'italic',
                color: '#D4AF37',
                fontSize: '1rem',
                marginTop: 20,
                lineHeight: 1.9,
              }}
            >
              "Marriages are made in heaven,
              <br />
              and we are blessed to celebrate ours with you."
            </p>
            <p
              style={{
                fontFamily: 'Cinzel Decorative, serif',
                color: 'rgba(212,175,55,0.45)',
                fontSize: '0.72rem',
                marginTop: 20,
                letterSpacing: '0.25em',
              }}
            >
              Sarvesh & Dipali — 10th May 2026
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}

// ─── Corner Borders ──────────────────────────────────────────────────────────

function CornerBorders() {
  const s = 80
  const paths = [
    // top-left
    `M 0 ${s} L 0 0 L ${s} 0`,
    // top-right (mirror x)
    `M 100% ${s}px L 100% 0 L calc(100% - ${s}px) 0`,
    // bottom-left
    `M 0 calc(100% - ${s}px) L 0 100% L ${s}px 100%`,
    // bottom-right
    `M 100% calc(100% - ${s}px) L 100% 100% L calc(100% - ${s}px) 100%`,
  ]
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ position: 'absolute', inset: 0 }}
    >
      {[
        'M 0 12 L 0 0 L 12 0',
        'M 88 0 L 100 0 L 100 12',
        'M 0 88 L 0 100 L 12 100',
        'M 88 100 L 100 100 L 100 88',
      ].map((d, i) => (
        <path key={i} d={d} stroke="#D4AF37" strokeWidth="0.4" fill="none" strokeOpacity="0.5" vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  )
}

