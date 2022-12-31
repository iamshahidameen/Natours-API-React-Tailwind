import QuickFacts from './QuickFacts';
import TourGuides from './TourGuides';

const SingleTourDetails = ({ details }) => {
  console.log('details', details);

  const {
    description,
    guides,
    difficulty,
    maxGroupSize,
    ratingsAverage,
    ratingsQuantity,
    startDates,
  } = details;
  const tourFeatures = [
    {
      icon: 'icon-calendar',
      title: 'NEXT DATE',
      value:
        new Date(startDates[0]).toLocaleString('default', {
          month: 'long',
        }) +
        ' ' +
        new Date(startDates[0]).getFullYear(),
    },
    {
      icon: 'icon-trending-up',
      title: 'DIFFICULTY',
      value: difficulty,
    },
    {
      icon: 'icon-user',
      title: 'PARTICIPANTS',
      value: maxGroupSize + ' people',
    },
    {
      icon: 'icon-star',
      title: 'RATING',
      value: ratingsAverage + ' / ' + ratingsQuantity,
    },
  ];
  console.log(tourFeatures);
  return (
    <section className="single-tour-details -mt-[9vw] grid grid-cols-2 ">
      <div className="tour-features bg-[#f7f7f7] pt-[14vw] pb-[calc(1vw+9vw)] px-[8vw]">
        <div className="tour-facts">
          <div className="secondary-heading">
            <h3 className="secondary-heading-text mb-5">Quick Facts</h3>
          </div>
          {tourFeatures.map((feature, index) => {
            return <QuickFacts key={index} features={feature} />;
          })}
        </div>
        <div className="tour-guides">
          <div className="secondary-heading mt-[70px]">
            <h3 className="secondary-heading-text mb-9">Your Tour Guides</h3>
          </div>
          {guides.map((guide) => {
            return <TourGuides key={guide._id} guides={guide} />;
          })}
        </div>
      </div>
      <div className="tour-details pt-[14vw] pb-[calc(1vw+9vw)] px-[8vw]">
        <div className="secondary-heading">
          <h3 className="secondary-heading-text mb-5">
            ABOUT THE SEA EXPLORER TOUR
          </h3>
        </div>
        <div className="tour-details-text text-[#777] leading-6">
          <p className="mb-4">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleTourDetails;
