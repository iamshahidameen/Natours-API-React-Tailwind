import { TourSingle } from '../components';

const SingleTour = () => {
  return (
    <main>
      <TourSingle />
      <section className="single-tour-details grid grid-cols-2">
        <div className="tour-features bg-[#f7f7f7] pt-[14vw] pb[calc(1vw + 9vw)]">
          <div className="tour-facts">
            <div className="secondary-heading">
              <h3 className="secondary-heading-text">Quick Facts</h3>
            </div>
            <div className="tour-feature">
              <div className="feature-icon"></div>
              <div className="feature-name">Next Date</div>
              <div className="feature-value">June 2021</div>
            </div>
          </div>
          <div className="tour-guides">
            <div className="secondary-heading">
              <h3 className="secondary-heading-text">Your Tour Guides</h3>
            </div>
            <div className="guide-profile">
              <div className="guide-picture"></div>
              <div className="guide-level">Lead Guide</div>
              <div className="guide-name">Miyah Myles</div>
            </div>
          </div>
        </div>
        <div className="tour-details">
          <div className="secondary-heading">
            <h3 className="secondary-heading-text">
              ABOUT THE SEA EXPLORER TOUR
            </h3>
          </div>
          <div className="tour-details-text">
            <p>
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
            <p>
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
    </main>
  );
};

export default SingleTour;
