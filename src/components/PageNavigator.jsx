import { motion as Motion } from 'framer-motion'

function PageNavigator({ currentLabel, previousPage, nextPage }) {
  return (
    <section className="page-nav-shell">
      <div className="container-shell">
        <div className="page-nav-card">
          <div>
            <p className="page-nav-eyebrow">Page Navigation</p>
            <h2 className="page-nav-title">{currentLabel}</h2>
            <p className="page-nav-copy">
              Move through the portfolio one page at a time.
            </p>
          </div>

          <div className="page-nav-actions">
            {previousPage ? (
              <Motion.a
                href={previousPage.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="page-nav-link page-nav-link-secondary"
              >
                Previous: {previousPage.label}
              </Motion.a>
            ) : (
              <span className="page-nav-link page-nav-link-muted">Start of portfolio</span>
            )}

            {nextPage ? (
              <Motion.a
                href={nextPage.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="page-nav-link page-nav-link-primary"
              >
                Next: {nextPage.label}
              </Motion.a>
            ) : (
              <Motion.a
                href="#home"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="page-nav-link page-nav-link-primary"
              >
                Back to Home
              </Motion.a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageNavigator
