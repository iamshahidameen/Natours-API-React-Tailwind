import ImageClipPath from './ImageClipPath';
import CardDataWithIcons from './CardDataWithIcons';
import cardImage from '../assests/images/main-bg.jpg';
import { Link } from 'react-router-dom';

const TourCard = ({ data }) => {
  console.log(data);
  return (
    <section className="card-main sm:w-[280px]  md:w-[340px] rounded-[3px] shadow-[0_15px_40px_0px_rgba(0,0,0,0.1)]">
      <ImageClipPath
        cardImage={cardImage}
        isHero={false}
        cardTitle={data.tour_title}
      />
      <div className="card-body grid grid-cols-2 gap-y-4 gap-x-5 py-[25px] px-[30px]">
        <div className="card-details col-span-full">
          <h4 className="uppercase font-bold text-gray-500 text-xs">
            {data.tour_details.tour_sub_heading}
          </h4>
          <p className="italic font-light text-[15px] mt-2">
            {data.tour_details.tour_description}
          </p>
        </div>
        {data.tour_features.map((feature) => {
          return <CardDataWithIcons feature={feature} />;
        })}
      </div>
      <div className="card-footer bg-[#f7f7f7] py-[25px] px-[30px] flex justify-between items-center">
        <div className="card-footer-left font-light text-[14px] text-gray-600">
          <p className="card-pricing">
            <span className="price font-bold text-[14px]">
              ${data.tour_price}
            </span>
             per person
          </p>
          <div className="card-rating mt-3">
            <p>
              <span className="font-bold">{data.tour_rating}</span> rating (
              {data.tour_total_reviews})
            </p>
          </div>
        </div>
        <div className="card-footer-right">
          <div className="btn-wrapper">
            <Link to="/single-tour" className="btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourCard;
