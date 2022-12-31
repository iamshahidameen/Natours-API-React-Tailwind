import React from 'react';

const TourReviews = ({ reviews }) => {
  return (
    <section className="tour-reviews">
      {reviews.map((review, index) => {
        return (
          <div
            key={review.index}
            className="reviews grid py-[50px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 justify-items-center mb-5 sm:mb-0"
          >
            <div className="review-card w-[300px] bg-white p-10 rounded shadow-[0_15px_40px_0px_rgba(0,0,0,0.15)]">
              <div className="review-avatar flex items-center mb-5">
                <img
                  src={`https://natours-api-production-0623.up.railway.app/img/users/${review.user.photo}`}
                  alt="avatar"
                  className="rounded-full w-12 h-12 mr-4"
                />
                <h6 className="text-[15px] font-bold uppercase text-[#777]">
                  {review.user.name}
                </h6>
              </div>
              <div className="review-text">
                <p className="text-[15px] mb-5 text-[#777] italic">
                  {review.review}
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
