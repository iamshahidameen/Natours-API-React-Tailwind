import {
  HeroArea,
  SingleTourDetails,
  SingleTourFeaturedImages,
  TourReviews,
  TourCTA,
} from '../components';

const SingleTour = () => {
  return (
    <main>
      <HeroArea />
      <SingleTourDetails />
      <SingleTourFeaturedImages />
      <TourReviews />
      <TourCTA />
    </main>
  );
};

export default SingleTour;
