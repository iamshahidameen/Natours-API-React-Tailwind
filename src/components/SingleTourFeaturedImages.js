import React from 'react';

const SingleTourFeaturedImages = () => {
  return (
    <section className="tour-featured-images ">
      <div className="featured-image-wrapper">
        <img
          src="https://natours-api-production-0623.up.railway.app/img/tours/tour-2-1.jpg"
          alt="featured img 1"
          className="block pt-[15%] w-full h-[110%] object-cover"
        />
      </div>
      <div className="featured-image-wrapper">
        <img
          src="https://natours-api-production-0623.up.railway.app/img/tours/tour-2-2.jpg"
          alt="featured img 1"
          className="block pt-[15%] w-full h-[110%] object-cover"
        />
      </div>
      <div className="featured-image-wrapper">
        <img
          src="https://natours-api-production-0623.up.railway.app/img/tours/tour-2-3.jpg"
          alt="featured img 1"
          className="block pt-[15%] w-full h-[110%] object-cover"
        />
      </div>
    </section>
  );
};

export default SingleTourFeaturedImages;
