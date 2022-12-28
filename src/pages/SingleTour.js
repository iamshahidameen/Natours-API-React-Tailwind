import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cardDataAPI from '../cardDataAPI';
import { getData } from '../utils/index';

import {
  HeroArea,
  SingleTourDetails,
  SingleTourFeaturedImages,
  TourReviews,
  TourCTA,
} from '../components';

const SingleTour = () => {
  useEffect(() => {
    console.log(getData(`tours/5c88fa8cf4afda39709c2955`));
  }, []);

  const { tourName } = useParams();
  const [tour, setTour] = useState({});

  //   console.log(tourName);

  //   useEffect(() => {
  //     setTour(
  //       cardDataAPI.filter((currentTour) => {
  //         // console.log(currentTour.tour_title.split('-').join(' '));
  //         return currentTour.tour_title === tourName.split('-').join(' ');
  //       })
  //     );
  //   }, []);

  const {
    tour_id,
    tour_title,
    tour_image,
    tour_details,
    tour_features,
    tour_price,
    tour_rating,
    tour_total_reviews,
    tour_link,
  } = tour;
  return (
    <>
      <HeroArea heroTitle={tour_title} />
      <SingleTourDetails />
      <SingleTourFeaturedImages />
      <TourReviews />
      <TourCTA />
    </>
  );
};

export default SingleTour;
