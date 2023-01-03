import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useToursContext } from '../context/tours_context';
import { tours_url } from '../utils/constants';

import {
  HeroArea,
  SingleTourDetails,
  SingleTourFeaturedImages,
  TourReviews,
  TourCTA,
} from '../components';

const SingleTour = () => {
  const { tourID } = useParams();
  const {
    get_single_tour_loading: loading,
    get_single_tour: tour,
    get_single_tour_error: error,
    getSingleTour,
  } = useToursContext();

  const { name, duration, imageCover, images, reviews } = tour;
  console.log(reviews);

  useEffect(() => {
    getSingleTour(`${tours_url}/${tourID}`);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }
  return (
    <>
      <HeroArea
        image={`https://natours-api-production-0623.up.railway.app/img/tours/${imageCover}`}
        hero={true}
        name={name}
        days={duration}
        // location={startLocation.description}
      />
      <SingleTourDetails details={{ ...tour }} />
      <SingleTourFeaturedImages images={images} />
      <TourReviews reviews={reviews} />
      <TourCTA days={duration} />
    </>
  );
};

export default SingleTour;
