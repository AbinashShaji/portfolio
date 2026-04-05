function SiteNavbar({ navItems = [], theme, onToggleTheme, currentPage }) {
  return (
    <header className={`site-navbar-shell${currentPage === 'home' ? ' site-navbar-shell-home' : ''}`}>
      <div className="container-shell">
        <nav
          className={`nav-shell nav-shell-scrolled flex items-center justify-between gap-4 px-1 py-3 sm:px-2${
            currentPage === 'home' ? ' nav-shell-home' : ''
          }`}
        >
          <a
            href="#home"
            className="nav-brand text-sm font-bold uppercase tracking-[0.28em]"
          >
            Abinash Shaji
          </a>

          <div className="hidden items-center gap-5 md:flex">
            {navItems.map(([label, href]) => {
              const pageId = href.replace('#', '')
              const isActive = currentPage === pageId

              return (
                <a
                  key={label}
                  href={href}
                  className={`nav-link text-sm${isActive ? ' nav-link-active' : ''}`}
                >
                  {label}
                </a>
              )
            })}
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.2 14.1A8.7 8.7 0 0 1 9.9 3.8a.55.55 0 0 0-.8-.59A9.5 9.5 0 1 0 20.79 14.9a.55.55 0 0 0-.59-.8Z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default SiteNavbar
