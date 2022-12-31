import { useEffect } from 'react';
import { TourCard } from '../components';
import { useToursContext } from '../context/tours_context';
import { tours_url } from '../utils/constants';

const AllTours = () => {
  const {
    get_tours_loading: loading,
    get_tours: tours,
    get_tours_error: error,
    getTours,
  } = useToursContext();

  useEffect(() => {
    getTours(tours_url);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <div className="tour-page grid sm:grid-cols-1 lg:grid-cols-3 px-14 pt-20 gap-y-16 justify-items-center">
      {tours.map((tour) => {
        return <TourCard key={tour.id} tourData={tour} />;
      })}
      hello
    </div>
  );
};

export default AllTours;
