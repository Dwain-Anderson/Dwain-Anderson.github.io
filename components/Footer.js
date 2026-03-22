function Footer() {
  return (
    <footer aria-label="Site footer">
      <div className="footer-inner">
        <h3 className="footer-h2">Let's Connect</h3>

        <span className="footer-info">
          Reach me at{' '}
          <a href="mailto:dka36@cornell.edu">dka36@cornell.edu</a>
        </span>

        <span className="footer-info">
          Built with React · JavaScript · HTML · CSS
        </span>

        <a
          className="footer-repo"
          href="https://github.com/Dwain-Anderson/Dwain-Anderson.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source on GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;