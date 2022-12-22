import fLogo from '../assests/images/logo-green.png';
const Footer = () => {
  return (
    <footer className="px-10 pt-16">
      <div className="footer-logo">
        <img className="h-[30px]" src={fLogo} alt="footer logo" />
      </div>
      <div className="footer-content">
        <div className="footer-links">
          <nav>
            <a href="./">link</a>
            <a href="./">link</a>
            <a href="./">link</a>
            <a href="./">link</a>
            <a href="./">link</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
