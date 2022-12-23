const ImageClipPath = ({ cardImage, isHero }) => {
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
        <h3 className="font-light uppercase text-right text-white ">
          <span className="bg-gradient-to-br from-[#7dd56fd9] to-[#28b487d9]">
            The Sea Explorer
          </span>
        </h3>
      </div>
    </div>
  );
};

export default ImageClipPath;
