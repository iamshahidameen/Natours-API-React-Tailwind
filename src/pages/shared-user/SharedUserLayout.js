import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const SharedUserLayout = () => {
  return (
    <div className="dashboard-wrapper py-20 px-[60px]">
      <div className="dashboard-inner-wrapper grid grid-cols-4 rounded-[5px] bg-white ">
        <div className="sidebar-wrapper col-span-1 ">
          <Sidebar />
        </div>
        <div className="dashboard-outlet-wrapper col-span-3 py-[70px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedUserLayout;
