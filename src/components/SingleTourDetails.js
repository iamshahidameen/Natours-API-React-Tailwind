import QuickFacts from './QuickFacts';
import TourGuides from './TourGuides';

const SingleTourDetails = () => {
  return (
    <section className="single-tour-details -mt-[9vw] grid grid-cols-2 ">
      <div className="tour-features bg-[#f7f7f7] pt-[14vw] pb-[calc(1vw+9vw)] px-[8vw]">
        <QuickFacts />
        <TourGuides />
      </div>
      <div className="tour-details pt-[14vw] pb-[calc(1vw+9vw)] px-[8vw]">
        <div className="secondary-heading">
          <h3 className="secondary-heading-text mb-5">
            ABOUT THE SEA EXPLORER TOUR
          </h3>
        </div>
        <div className="tour-details-text text-[#777] leading-6">
          <p className="mb-4">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p className="mb-4">
            Irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleTourDetails;
