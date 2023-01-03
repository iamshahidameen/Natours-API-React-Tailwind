import React from 'react';

const SingleTourFeaturedImages = ({ images }) => {
  return (
    <section className="tour-featured-images flex-col md:flex-row">
      {images &&
        images.length > 0 &&
        images.map((image, index) => {
          return (
            <div className="featured-image-wrapper" key={index}>
              <img
                src={`https://natours-api-production-0623.up.railway.app/img/tours/${image}`}
                alt="featured img 1"
                className="block pt-[15%] w-full h-full md:h-[110%] object-cover"
              />
            </div>
          );
        })}
    </section>
  );
};

export default SingleTourFeaturedImages;
