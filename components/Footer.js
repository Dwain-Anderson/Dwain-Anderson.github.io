function Footer()  {
    const backgroundImage = '/images/winter-5.jpg';
    return (
    <footer style={{backgroundImage: `url(${backgroundImage})`}}>
        <h2 className="footer-h2">Contact Information</h2>
            <p className="footer-text">You can reach out to me at <a href="mailto:dka36@cornell.edu">dka36@cornell.edu</a></p>
            <p className="footer-text">This website was made with React, Vite, TypeScript, HTML, and CSS.</p>
            <a className ="footer-repo"href="https://github.com/Dwain-Anderson/dwain.github.io" target="_blank" rel="noopener noreferrer">Link to this website's repo</a>
    </footer>
    );
}

export default Footer;