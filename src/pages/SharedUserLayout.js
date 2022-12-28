import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';

const SharedUserLayout = () => {
  return (
    <main className="page-wrapper">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default SharedUserLayout;
