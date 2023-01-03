import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar-inner-wrapper rounded-tl-[5px] rounded-bl-[5px] bg-gradient-to-br from-[#7dd56f]  to-[#28b487] pt-10">
      <nav className="side-nav">
        <ul className="side-nav__list-wrapper uppercase text-white text-[15px]">
          <li className="list-item mt-[10px]">
            <NavLink
              style={(isActive) => {
                return isActive ? { color: 'red' } : { color: 'blue' };
              }}
              to="/me"
              className="py-[10px] px-10 flex items-center"
            >
              Settings
            </NavLink>
          </li>
          <li className="list-item mt-[10px]">
            <NavLink
              style={(isActive) => {
                return isActive ? { color: 'red' } : { color: 'blue' };
              }}
              to="/me/bookings"
              className="py-[10px] px-10 flex items-center"
            >
              My Bookings
            </NavLink>
          </li>
          <li className="list-item mt-[10px]">
            <NavLink
              style={(isActive) => {
                return isActive ? { color: 'red' } : { color: 'blue' };
              }}
              to="/me/reviews"
              className="py-[10px] px-10 flex items-center"
            >
              My Reviews
            </NavLink>
          </li>
          <li className="list-item mt-[10px]">
            <NavLink
              style={(isActive) => {
                return isActive ? { color: 'red' } : { color: 'blue' };
              }}
              to="/me/billing"
              className="py-[10px] px-10 flex items-center"
            >
              Billing
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
