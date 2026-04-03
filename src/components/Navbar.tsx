import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

export function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const isActive = (to: string) => location.pathname === to

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-[#fafafa]"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          to="/"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-2xl font-serif font-semibold hover:opacity-60 transition"
        >
          Sai Sathvik
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.2em] uppercase">
          {LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="relative group">
              <span
                className={`
                  transition-colors duration-300 px-3 py-2
                  ${isActive(link.to) ? "text-black" : "text-black/60"}
                  group-hover:text-white
                `}
              >
                {link.label}
              </span>

              <span
                className="
                  absolute inset-0 -z-10 bg-black
                  scale-y-0 origin-bottom
                  transition-transform duration-300
                  group-hover:scale-y-100
                "
              />
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open &&
        <div className="fixed inset-0 bg-[#fafafa] flex flex-col items-center justify-center gap-10 text-xl">

          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="relative group"
            >
              <span
                className={`
                  px-4 py-2 transition-colors duration-300
                  ${isActive(link.to) ? "text-black" : "text-black/60"}
                  group-hover:text-white
                `}
              >
                {link.label}
              </span>

              <span
                className="
                  absolute inset-0 -z-10 bg-black
                  scale-y-0 origin-bottom
                  transition-transform duration-300
                  group-hover:scale-y-100
                "
              />
            </Link>
          ))}

        </div>}
    </nav>
  )
}