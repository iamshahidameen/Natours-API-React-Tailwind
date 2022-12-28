import fLogo from '../assests/images/logo-green.png';
const Footer = () => {
  return (
    <footer className="px-10 pt-16 flex justify-between flex-col sm:flex-row items-center sm:items-start">
      <div className="footer-logo mb-5 sm:mb-0">
        <img className="h-[30px]" src={fLogo} alt="footer logo" />
      </div>
      <div className="footer-content ">
        <div className="footer-links">
          <nav className="space-x-2">
            <a href="./">About Us </a>
            <a href="./">Blog</a>
            <a href="./">Guide</a>
            <a href="./">Careers</a>
            <a href="./">Contact</a>
          </nav>
          <div className="footer-copyright-text">
            © by Shahid Ameen. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
