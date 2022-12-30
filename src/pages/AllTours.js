import { useState } from 'react';
import { TourCard } from '../components';
import { useToursContext } from '../context/tours_context';
import { getAllTours } from '../utils';

const AllTours = () => {
  const [tours, setTours] = useState([]);

  const getAllToursData = async () => {
    const {
      data: { data },
    } = await getAllTours();
    setTours(data);
    console.log(data);
  };

  return (
    <div className="tour-page grid sm:grid-cols-1 lg:grid-cols-3 px-14 pt-20 gap-y-16 justify-items-center">
      <button onClick={getAllToursData}>Get All Tours</button>
      {tours.map((tour) => {
        return <TourCard key={tour.id} tourData={tour} />;
      })}
    </div>
  );
};

export default AllTours;
