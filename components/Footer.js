function Footer() {
  return (
    <footer
      style={{ backgroundImage: 'url(/assets/winter-5.jpg)' }}
      aria-label="Site footer"
    >
      <h2 className="footer-h2">Let's Connect</h2>
 
      <p className="footer-text">
        Reach me at{' '}
        <a href="mailto:dka36@cornell.edu">dka36@cornell.edu</a>
      </p>
 
      <p className="footer-text">
        Built with React · JavaScript · HTML · CSS
      </p>
 
      <a
        className="footer-repo"
        href="https://github.com/Dwain-Anderson/Dwain-Anderson.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Source on GitHub
      </a>
    </footer>
  );
}
 
export default Footer;