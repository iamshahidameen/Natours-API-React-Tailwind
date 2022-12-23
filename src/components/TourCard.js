import ImageClipPath from './ImageClipPath';
import CardDataWithIcons from './CardDataWithIcons';
import cardImage from '../assests/images/main-bg.jpg';
const TourCard = () => {
  return (
    <section className="card-main w-[340px] rounded-[3px] shadow-[0_15px_40px_0px_rgba(0,0,0,0.1)]">
      <ImageClipPath cardImage={cardImage} isHero={false} />
      <div className="card-body grid grid-cols-2 gap-y-4 gap-x-5 py-[25px] px-[30px]">
        <div className="card-details col-span-full">
          <h4 className="uppercase font-bold text-gray-500 text-xs">
            medium 7-day tour
          </h4>
          <p className="italic font-light text-[15px] mt-2">
            Exploring the jaw-dropping US east coast by foot and by boat
          </p>
        </div>
        <CardDataWithIcons />
        <CardDataWithIcons />
        <CardDataWithIcons />
        <CardDataWithIcons />
      </div>
      <div className="card-footer bg-[#f7f7f7] py-[25px] px-[30px] flex justify-between items-center">
        <div className="card-footer-left font-light text-[14px] text-gray-600">
          <p className="card-pricing">
            <span className="price font-bold text-[14px]">$497</span> per person
          </p>
          <div className="card-rating mt-3">
            <p>
              <span className="font-bold">4.8</span> rating (6)
            </p>
          </div>
        </div>
        <div className="card-footer-right">
          <div className="btn-wrapper">
            <a
              href="./"
              className="btn-primary bg-[#55c57a] text-white inline-block rounded-3xl uppercase cursor-pointer text-[14px] py-3 px-[30px] hover:shadow-[0_10px_20px_5px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:animate-"
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourCard;
