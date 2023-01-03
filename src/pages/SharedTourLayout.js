import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';

const SharedTourLayout = () => {
  return (
    <main className="page-wrapper ">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default SharedTourLayout;
