import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const LINKS = [
  { to: "/",         label: "Home"    },
  { to: "/about",    label: "About"   },
  { to: "/projects", label: "Projects"},
  { to: "/contact",  label: "Contact" },
]

export function Navbar() {
  const [open, setOpen]       = useState(false)
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  const listRef  = useRef<HTMLUListElement>(null)
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const location = useLocation()


  // Slide indicator to the active link
  useEffect(() => {
    const idx = LINKS.findIndex(l => l.to === location.pathname)
    const el  = linkRefs.current[idx]
    const ul  = listRef.current
    if (!el || !ul) return
    const ulR = ul.getBoundingClientRect()
    const elR = el.getBoundingClientRect()
    setIndicator({ left: elR.left - ulR.left, width: elR.width })
  }, [location.pathname])

  const isActive = (to: string) => location.pathname === to

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] flex flex-col items-center pt-3.5 pointer-events-none">
      <div
        className={[
          "pointer-events-auto relative flex items-center",
          "rounded-full border border-white/20 backdrop-blur-2xl",
          "transition-all duration-300 ease-in-out hidden sm:flex h-13 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1.5px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.12)]",
          "w-[min(520px,92vw)] px-1.5",
        ].join(" ")}
      >
        <ul
          ref={listRef}
          className="relative flex items-center w-full gap-0.5 p-1 list-none m-0"
        >
          <span
            className="absolute top-0 h-full rounded-full bg-[#111] shadow-[0_2px_8px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(255,255,255,0.06)] pointer-events-none z-0 transition-[left,width] duration-[380ms] ease-[cubic-bezier(.4,0,.2,1)]"
            style={{ left: indicator.left, width: indicator.width }}
          />

          {LINKS.map((link, i) => (
            <li key={link.to} className="flex-1">
              <Link
                to={link.to}
                ref={el => { linkRefs.current[i] = el }}
                className={[
                  "relative z-10 flex items-center justify-center w-full",
                  "rounded-full py-1 px-3 text-xl font-medium tracking-wide",
                  "no-underline transition-colors duration-200 whitespace-nowrap",
                  isActive(link.to)
                    ? "text-white [text-shadow:0_0_12px_rgba(255,255,255,0.3)]"
                    : "text-white/65 hover:text-white/95",
                ].join(" ")}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        className="pointer-events-auto sm:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:bg-white/15 transition-colors duration-200 cursor-pointer"
      >
        {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
      </button>

      {open && (
        <div className="pointer-events-auto sm:hidden mt-2.5 w-[min(360px,90vw)] bg-[rgba(20,20,20,0.75)] backdrop-blur-3xl border border-white/[0.13] rounded-3xl p-2.5 shadow-[0_16px_48px_rgba(0,0,0,0.4)] overflow-hidden animate-[slideIn_0.26s_cubic-bezier(.4,0,.2,1)_forwards]">

          {/* Keyframe injected via Tailwind arbitrary — fallback inline style for the animation */}
          <style>{`
            @keyframes slideIn {
              from { opacity: 0; transform: translateY(-10px) scale(0.97); }
              to   { opacity: 1; transform: translateY(0)     scale(1);    }
            }
          `}</style>

          {LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={[
                "flex items-center gap-2.5 px-4 py-3.5 rounded-2xl",
                "text-[15px] font-medium tracking-wide no-underline",
                "transition-colors duration-150",
                isActive(link.to)
                  ? "bg-[#111] text-white shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                  : "text-white/70 hover:bg-white/[0.07] hover:text-white",
              ].join(" ")}
            >
              <span
                className={[
                  "w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 transition-opacity duration-200",
                  isActive(link.to) ? "opacity-100" : "opacity-0",
                ].join(" ")}
              />
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}