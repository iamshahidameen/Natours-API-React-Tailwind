import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  HeroArea,
  SingleTourDetails,
  SingleTourFeaturedImages,
  TourReviews,
  TourCTA,
} from '../components';

const SingleTour = () => {
  const [tour, setTour] = useState({});

  useEffect(() => {}, []);

  const { name } = tour;
  return (
    <>
      <HeroArea heroTitle={name} />
      <SingleTourDetails />
      <SingleTourFeaturedImages />
      <TourReviews />
      <TourCTA />
    </>
  );
};

export default SingleTour;
