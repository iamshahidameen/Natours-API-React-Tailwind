const TourCTA = () => {
  return (
    <section className="tour-cta -mt-[9vw] p-7 pb-24 bg-[#f7f7f7] pt-[14vw]">
      <div className="cta max-w-5xl my-0 mx-auto rounded-md bg-white py-[90px] pr-[50px] pl-[210px] shadow-[0_30px_80px_0px_rgba(0,0,0,0.15)] relative overflow-hidden">
        <div className="cta-img-wrapper absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[35%] flex">
          <div className="cta-logo-wrapper bg-red-600 rounded-full w-[150px] h-[150px] flex items-center justify-center p-5 relative z-30">
            <img
              src="https://natours-api-production-0623.up.railway.app/img/logo-white.png"
              alt="cta logo"
              className=""
            />
          </div>
          <div className="cta-featured-image w-[150px] h-[150px] absolute left-8 z-20">
            <img
              src="https://natours-api-production-0623.up.railway.app/img/tours/tour-2-2.jpg"
              alt="CTA img"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="cta-featured-image w-[150px] h-[150px]  absolute left-16 z-10">
            <img
              src="https://natours-api-production-0623.up.railway.app/img/tours/tour-2-2.jpg"
              alt="CTA img"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="cta-content flex items-center justify-between">
          <div className="cta-tex">
            <div className="secondary-heading">
              <h3 className="secondary-heading-text">
                WHAT ARE YOU WAITING FOR?
              </h3>
            </div>
            <div className="cta-details">
              <p className="text-[19px] text-[#777]">
                7 days. 1 adventure. Infinite memories. Make it yours today!
              </p>
            </div>
          </div>
          <div className="cta-button">
            <button className="btn-primary">Book tour now!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourCTA;
