interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterProps {
  name?: string;
  title?: string;
  photoSrc?: string;
  photoAlt?: string;
  bio?: string;
  navLinks?: NavLink[];
  creditHref?: string;
  year?: number;
}


const PhotoPlaceholder = () => (
  <div style={styles.photoPlaceholder}>
    <img src="/profilephoto.jpeg"  alt="profilephoto" />
  </div>
);


const DEFAULT_NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Resume ↗", href: "#", external: true },
];

const WHITE_CURSOR = `url("data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 26" overflow="visible"><path d="M 5.691 1.119 C 5.769 1.183 5.846 1.247 5.923 1.311 C 6.073 1.436 6.222 1.561 6.371 1.686 C 6.619 1.895 6.871 2.099 7.124 2.302 C 7.429 2.548 7.733 2.796 8.038 3.044 C 8.29 3.25 8.543 3.456 8.797 3.661 C 9.281 4.054 9.764 4.45 10.241 4.851 C 10.507 5.075 10.779 5.29 11.053 5.504 C 11.302 5.703 11.546 5.909 11.79 6.114 C 12.01 6.3 12.234 6.482 12.461 6.659 C 12.767 6.899 13.065 7.148 13.362 7.398 C 13.583 7.584 13.807 7.765 14.034 7.943 C 14.3 8.152 14.561 8.367 14.82 8.585 C 15.127 8.843 15.438 9.095 15.753 9.343 C 16.409 9.862 17.055 10.394 17.694 10.932 C 17.961 11.155 18.232 11.371 18.506 11.585 C 18.755 11.784 18.999 11.99 19.243 12.195 C 19.463 12.381 19.687 12.562 19.914 12.74 C 21.858 14.27 21.858 14.27 21.984 15.25 C 22.047 16.069 21.936 16.736 21.418 17.402 C 20.985 17.864 20.444 18.312 19.781 18.357 L 19.638 18.358 L 19.474 18.359 L 19.296 18.36 L 19.106 18.361 C 18.97 18.362 18.834 18.363 18.699 18.364 C 18.483 18.365 18.267 18.366 18.052 18.368 C 17.438 18.373 16.825 18.377 16.212 18.38 C 15.836 18.383 15.461 18.385 15.085 18.389 C 14.943 18.39 14.801 18.39 14.658 18.391 C 12.835 18.399 11.213 18.632 9.83 19.93 C 9.504 20.264 9.234 20.648 8.958 21.023 C 8.742 21.313 8.52 21.597 8.298 21.883 C 7.936 22.353 7.575 22.824 7.217 23.297 C 7.133 23.409 7.048 23.52 6.964 23.631 C 6.801 23.846 6.638 24.061 6.477 24.277 C 5.9 25.044 5.332 25.796 4.324 25.983 C 3.406 26.041 2.663 25.976 1.931 25.369 C 1.348 24.818 1.056 24.158 1.016 23.368 L 1.004 23.133 L 0.991 22.877 L 0.977 22.604 C 0.965 22.355 0.952 22.105 0.94 21.856 C 0.927 21.588 0.913 21.319 0.9 21.051 C 0.867 20.407 0.835 19.762 0.803 19.118 C 0.788 18.815 0.773 18.511 0.758 18.209 L 0.748 18.026 C 0.724 17.532 0.699 17.038 0.675 16.544 C 0.656 16.166 0.637 15.788 0.618 15.409 C 0.539 13.811 0.457 12.213 0.374 10.616 C 0.336 9.887 0.299 9.159 0.262 8.43 C 0.232 7.847 0.202 7.264 0.171 6.681 C 0.15 6.282 0.129 5.884 0.109 5.485 C 0.098 5.257 0.086 5.029 0.074 4.801 C -0.073 2.114 -0.073 2.114 0.766 1.009 C 2.211 -0.568 4.232 -0.114 5.691 1.119 Z" fill="white" stroke="black" stroke-width="1.2" stroke-linejoin="round"/></svg>`)}") 3 5, auto`;

const DEFAULT_BIO =
  "You’ll probably find me building something — from full-stack apps to real-time systems — always chasing performance and clean design.\n\nOutside of that, I’m learning, experimenting, and exploring new ideas.\n\nFor anything work-related, the Contact section is your best bet.";  "There's a good chance you'll find me burning my tongue in an Indian restaurant, exploring odd masterpieces at the local indie cinema, or kicking bags at the boxing gym.\n\nFor anything work-related, the Contact section is your best bet.";

export default function Footer({
  name = "Sai Sathvik",
  title = "Website",
  photoSrc,
  photoAlt = "Profile photo",
  bio = DEFAULT_BIO,
  navLinks = DEFAULT_NAV_LINKS,
  creditHref = "#",
  year = new Date().getFullYear(),
}: FooterProps) {

  const bioParagraphs = bio.split("\n\n");

  return (
    <>
      <style>{FONT_IMPORT}</style>
      <footer style={styles.root}>
        <div style={styles.top}>
          <div style={styles.photoBlock}>
            {photoSrc ? (
              <img src={photoSrc} alt={photoAlt} style={styles.photo} />
            ) : (
              <PhotoPlaceholder />
            )}
            <div style={styles.bioWrapper}>
              {bioParagraphs.map((p, i) => (
                <p key={i} style={{ ...styles.bio, marginTop: i > 0 ? "1em" : 0 }}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Right: name + nav */}
          <div style={styles.right}>
            <span style={styles.title}>{title}</span>
            <nav aria-label="Footer navigation">
              <ul style={styles.navList}>
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      style={styles.navLink}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color = "#f2cb0d")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(245,245,245,0.6)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div style={styles.bottom}>
          {/* Copyright */}
          <p style={styles.copy}>
            © {year} {name}
            <br />
            <a
              href={creditHref}
              style={styles.copyLink}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(245,245,245,0.6)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(245,245,245,0.35)")
              }
            >
              Website by Sai Sathvik
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const FONT_IMPORT = `
  @import url('https://fonts.googleapis.com/css2?family=Gabarito:wght@400;600;700&family=DM+Serif+Display:ital@0;1&display=swap');
`;

const styles: Record<string, React.CSSProperties> = {
  root: {
    backgroundColor: "#0f0f0f",
    color: "#f5f5f5",
    fontFamily: "'Gabarito', sans-serif",
    minHeight: 420,
    position: "relative",
    overflow: "hidden",
    padding: "48px 40px 32px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
    cursor: WHITE_CURSOR
  },
  top: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 32,
    alignItems: "start",
  },
  photoBlock: {
    display: "flex",
    gap: 16,
    alignItems: "flex-start",
  },
  photo: {
    width: 110,
    height: 110,
    borderRadius: 8,
    objectFit: "cover",
    flexShrink: 0,
  },
  photoPlaceholder: {
    width: 110,
    height: "100%",
    overflow: "hidden",
    borderRadius: 8,
    background: "#2a2a2a",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bioWrapper: {
    flex: 1,
  },
  bio: {
    fontSize: 14,
    lineHeight: 1.65,
    color: "rgba(245,245,245,0.82)",
    margin: 0,
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 20,
  },
  title : {
    fontSize: 35,
    color: "rgba(255, 255, 255)",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  navList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 10,
  },
  navLink: {
    fontSize: 30,
    color: "rgba(245,245,245,0.6)",
    textDecoration: "none",
    transition: "color 0.2s",
    cursor: "pointer",
  },
  bottom: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    borderTop: "1px solid rgba(245,245,245,0.1)",
    paddingTop: 20,
  },
  copy: {
    fontSize: 12,
    color: "rgba(245,245,245,0.35)",
    textAlign: "center",
    margin: 0,
    lineHeight: 1.7,
  },
  copyLink: {
    color: "rgba(245,245,245,0.35)",
    textDecoration: "none",
    transition: "color 0.2s",
  },
};