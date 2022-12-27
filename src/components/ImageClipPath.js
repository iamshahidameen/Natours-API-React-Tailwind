const ImageClipPath = ({ cardImage, isHero, cardTitle }) => {
  return (
    <div
      className={`image-main relative ${
        isHero ? 'hero-image' : 'card-image '
      } `}
    >
      <div className="image-wrapper w-full h-full">
        <div className="image-overlay absolute w-full h-full opacity-70 bg-gradient-to-br from-[#7dd56f] to-[#28b487]"></div>
        <img
          src={cardImage}
          alt="hero bg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="image-heading absolute">
        <h3 className="font-light uppercase text-right text-white font-bold">
          <span className="bg-gradient-to-br from-[#7dd56fd9] to-[#28b487d9]">
            {cardTitle}
          </span>
        </h3>
        <div className="heading-box-group hidden uppercase text-[15px] text-[#f7f7f7]  justify-center mt-[30px]">
          <div className="heading-box mr-10">
            <div className="heading-icon"></div>
            <div className="heading-box-text">7 DAYS</div>
          </div>
          <div className="heading-box mr-10">
            <div className="heading-icon"></div>
            <div className="heading-box-text">MIAMI, USA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageClipPath;
