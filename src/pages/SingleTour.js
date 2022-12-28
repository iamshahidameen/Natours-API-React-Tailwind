import {
  HeroArea,
  SingleTourDetails,
  SingleTourFeaturedImages,
  TourReviews,
  TourCTA,
} from '../components';

const SingleTour = () => {
  return (
    <main className="page-wrapper">
      <HeroArea />
      <SingleTourDetails />
      <SingleTourFeaturedImages />
      <TourReviews />
      <TourCTA />
    </main>
  );
};

export default SingleTour;
