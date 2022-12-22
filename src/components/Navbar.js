import logo from '../assests/images/logo-white.png';
import userImg from '../assests/images/user.jpg';

const Navbar = () => {
  return (
    <section className="bg-[#444] ">
      <nav className="flex justify-between items-center h-[80px] px-[50px] text-[#f7f7f7]">
        <div className="tours-area text-xl">All Tours</div>
        <div className="logo">
          <img src={logo} alt="logo" className="h-[35px]" />
        </div>
        <div className="account-area flex items-center">
          <div className="flex space-x-1">
            <a href="./">Log In</a>
            <a href="./">Sign Up</a>
          </div>
          <div className="user-area flex  items-center">
            <div className="user-img h-[35px] w-[35px] ">
              <img
                className="object-cover rounded-full"
                src={userImg}
                alt="user dp"
              />
            </div>
            <div className="user-name">
              <a href="./" className="uppercase">
                John
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
