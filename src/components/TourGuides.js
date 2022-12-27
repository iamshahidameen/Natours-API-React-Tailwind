const TourGuides = () => {
  return (
    <div className="tour-guides">
      <div className="secondary-heading">
        <h3 className="secondary-heading-text mb-9">Your Tour Guides</h3>
      </div>
      <div className="guide-profile flex items-center text-[#777] mb-5">
        <div className="guide-picture mr-3">
          <img
            src="https://natours-api-production-0623.up.railway.app/img/users/user-12.jpg"
            alt="guide dp"
            className="w-[35px] h-[35px] rounded-full"
          />
        </div>
        <div className="guide-level mr-5 uppercase text-[14px] font-bold">
          Lead Guide
        </div>
        <div className="guide-name">Miyah Myles</div>
      </div>
      <div className="guide-profile flex items-center text-[#777] ">
        <div className="guide-picture mr-3">
          <img
            src="https://natours-api-production-0623.up.railway.app/img/users/user-6.jpg"
            alt="guide dp"
            className="w-[35px] h-[35px] rounded-full"
          />
        </div>
        <div className="guide-level mr-5 uppercase text-[14px] font-bold">
          TOUR GUIDE
        </div>
        <div className="guide-name">Jennifer Hardy</div>
      </div>
    </div>
  );
};

export default TourGuides;
