import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cardDataAPI from '../cardDataAPI';
import { getTour } from '../utils/index';

import {
  HeroArea,
  SingleTourDetails,
  SingleTourFeaturedImages,
  TourReviews,
  TourCTA,
} from '../components';

const SingleTour = () => {
  const [tour, setTour] = useState({});
  const { tourId } = useParams();

  console.log(tourId);

  const getTourData = async () => {
    const {
      data: { data },
    } = await getTour(`/tours/5c88fa8cf4afda39709c2955`);

    console.log(data);

    setTour(data);
  };

  useEffect(() => {
    getTourData();
  }, []);

  const { name } = tour;
  return (
    <>
      <HeroArea heroTitle={name} />
      {tour.name} - hello
      <SingleTourDetails />
      <SingleTourFeaturedImages />
      <TourReviews />
      <TourCTA />
    </>
  );
};

export default SingleTour;
