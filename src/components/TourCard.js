import ImageClipPath from './ImageClipPath';
import CardDataWithIcons from './CardDataWithIcons';

import { Link } from 'react-router-dom';

const TourCard = ({ tourData }) => {
  const {
    id,
    name,
    summary,
    price,
    difficulty,
    duration,
    imageCover,
    ratingsAverage,
    ratingsQuantity,
    slug,
    startLocation,
    startDates,
    maxGroupSize,
    locations,
  } = tourData;

  const tourFeatures = [
    {
      icon: 'icon-map-pin',
      title: startLocation.description,
    },
    {
      icon: 'icon-calendar',
      title:
        new Date(startDates[0]).toLocaleString('default', {
          month: 'long',
        }) +
        ' ' +
        new Date(startDates[0]).getFullYear(),
    },
    {
      icon: 'icon-flag',
      title: `${locations.length} Stops`,
    },
    {
      icon: 'icon-user',
      title: `${maxGroupSize} People`,
    },
  ];
  return (
    <section className="card-main sm:w-[280px]  md:w-[340px] rounded-[3px] shadow-[0_15px_40px_0px_rgba(0,0,0,0.1)]">
      <ImageClipPath
        cardImage={`https://natours-api-production-0623.up.railway.app/img/tours/${imageCover}`}
        isHero={false}
        cardTitle={name}
      />
      <div className="card-body grid grid-cols-2 gap-y-4 gap-x-5 py-[25px] px-[30px]">
        <div className="card-details col-span-full">
          <h4 className="uppercase font-bold text-gray-500 text-xs">
            {`${difficulty} ${duration} -DAYS Tour`}
          </h4>
          <p className="italic font-light text-[15px] mt-2">{summary}</p>
        </div>
        {tourFeatures.map((feature, index) => {
          return <CardDataWithIcons key={index} feature={feature} />;
        })}
      </div>
      <div className="card-footer bg-[#f7f7f7] py-[25px] px-[30px] flex justify-between items-center">
        <div className="card-footer-left font-light text-[14px] text-gray-600">
          <p className="card-pricing">
            <span className="price font-bold text-[14px]">
              {price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </span>
             per person
          </p>
          <div className="card-rating mt-3">
            <p>
              <span className="font-bold">{ratingsAverage}</span> rating (
              {ratingsQuantity})
            </p>
          </div>
        </div>
        <div className="card-footer-right">
          <div className="btn-wrapper">
            <Link to={`/${id}`} className="btn-primary">
              Details
            </Link>

            {/* <Link
              to={{
                pathname: `all-tours/${slug}`,
                search: `tourID=${JSON.stringify({ ...tourData })}`,
              }}
              className="btn-primary"
            >
              Details
            </Link> */}
            {/* <Link
              to={{
                pathname: `all-tours/${slug}`,
                search: `tourID=${id}`,
              }}
              className="btn-primary"
            >
              Details
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourCard;
