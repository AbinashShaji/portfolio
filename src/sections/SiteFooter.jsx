import MotionReveal from '../components/MotionReveal'
import footerImage from '../assets/footer.png'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/AbinashShaji',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.83-4.59 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abinashshaji',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.2a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 12.68c0-3.37-1.8-4.94-4.2-4.94-1.94 0-2.8 1.08-3.28 1.83V8.5H9.58c.04.7 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.12-.92.27-.68.9-1.38 1.95-1.38 1.38 0 1.93 1.06 1.93 2.6V20H20.44v-7.32Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:iam.abinashshaji@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M3.75 6.75h16.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5Z" />
        <path d="m3 7.5 9 6 9-6" />
      </svg>
    ),
  },
]

function SiteFooter({ navItems = [], currentPage }) {
  const currentYear = new Date().getFullYear()
  const showFooterImage = currentPage === 'home'

  return (
    <footer className="site-footer scenic-footer site-footer-compact">
      <div className="absolute inset-0">
        {/* Footer image only appears on the home page. */}
        {showFooterImage ? (
          <img
            src={footerImage}
            alt=""
            loading="lazy"
            decoding="async"
            className="footer-image h-full w-full object-cover object-[38%_center] md:object-[32%_center]"
          />
        ) : null}
        <div className="footer-scene-overlay" />
      </div>

      <MotionReveal className="container-shell relative z-[2] py-8 text-center sm:py-10" y={16}>
        <div className="footer-content footer-content-panel mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-3">
          <div>
            <a href="#home" className="footer-title-link">
              <h2 className="hero-title-display footer-title text-2xl font-bold sm:text-3xl">
                Abinash Shaji
              </h2>
            </a>
            <p className="footer-tagline mt-2 text-sm font-medium sm:text-base">
              Full-stack and UI/UX developer crafting elegant digital experiences
            </p>
          </div>

          <nav className="footer-nav flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="footer-nav-link">
                {label}
              </a>
            ))}
          </nav>

          <div className="footer-social-row flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                aria-label={item.label}
                className="footer-social"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <p className="footer-copyright">
            Copyright {currentYear} Abinash Shaji. All rights reserved.
          </p>
        </div>
      </MotionReveal>
    </footer>
  )
}

export default SiteFooter
