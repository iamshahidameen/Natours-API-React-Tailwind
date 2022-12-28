import { Navbar, Footer, TourCard } from '../components';
import cardDataAPI from '../cardDataAPI';
import axios from 'axios';

const AllTours = () => {
  return (
    <main className="page-wrapper">
      <Navbar />
      <div className="tour-page grid sm:grid-cols-1 lg:grid-cols-3 px-14 pt-20 gap-y-16 justify-items-center">
        {cardDataAPI.map((tour) => {
          return <TourCard data={tour} />;
        })}
      </div>
      <Footer />
    </main>
  );
};

export default AllTours;
