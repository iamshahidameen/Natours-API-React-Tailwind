import fLogo from '../assests/images/logo-green.png';
const Footer = () => {
  return (
    <footer className="px-10 pt-16 flex justify-between">
      <div className="footer-logo">
        <img className="h-[30px]" src={fLogo} alt="footer logo" />
      </div>
      <div className="footer-content ">
        <div className="footer-links">
          <nav className="space-x-2">
            <a href="./">About Us </a>

            <a href="./">Blog</a>
            <a href="./">Guide</a>
            <a href="./">Null</a>
            <a href="./">Careers</a>
            <a href="./">Contact</a>
          </nav>
          <div className="footer-copyright-text">
            © by Mobeen Abdullah. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
