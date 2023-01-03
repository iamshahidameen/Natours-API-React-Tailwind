import React from 'react';

const TourReviews = ({ reviews }) => {
  // console.log('reviews component', reviews);
  return (
    <section className="tour-reviews">
      {reviews &&
        reviews.length > 0 &&
        reviews.map((singleReview, index) => {
          return (
            <div
              key={index}
              className="reviews grid py-[50px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 justify-items-center mb-5 sm:mb-0"
            >
              <div className="review-card w-[300px] bg-white p-10 rounded shadow-[0_15px_40px_0px_rgba(0,0,0,0.15)]">
                <div className="review-avatar flex items-center mb-5">
                  <img
                    src={`https://natours-api-production-0623.up.railway.app/img/users/${singleReview.user.photo}`}
                    alt="avatar"
                    className="rounded-full w-12 h-12 mr-4"
                  />
                  <h6 className="text-[15px] font-bold uppercase text-[#777]">
                    {singleReview.user.name}
                  </h6>
                </div>
                <div className="review-text">
                  <p className="text-[15px] mb-5 text-[#777] italic">
                    {singleReview.review}
                  </p>
                </div>
                <div className="review-ratting"></div>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default TourReviews;
