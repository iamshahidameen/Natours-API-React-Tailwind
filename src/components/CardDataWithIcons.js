import LocationIcon from './LocationIcon';
const CardDataWithIcons = ({ feature }) => {
  return (
    <div className="card-data">
      <LocationIcon />
      <span className="text-[13px] text-gray-500 font-light">
        {feature.tour_feature}
      </span>
    </div>
  );
};

export default CardDataWithIcons;
