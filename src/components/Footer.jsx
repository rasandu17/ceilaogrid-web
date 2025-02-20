import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-gradient" />
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <h3>Ceilao.Grid</h3>
              <p>Smart Garden Planning with AR Technology</p>
            </div>
            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#team">Team</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
            </div>
            <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
              <FiArrowUp />
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ceilao.Grid | SDGP CS-82</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
