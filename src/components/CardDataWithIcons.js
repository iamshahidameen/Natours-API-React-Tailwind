const CardDataWithIcons = ({ feature }) => {
  const { icon, title } = feature;
  return (
    <div className="card-data">
      {/* <svg class="card__icon">
        <use
          xlink:href={`https://natours-api-production-0623.up.railway.app/img/icons.svg#${icon}`}
        ></use>
      </svg> */}
      <span className="text-[13px] text-gray-500 font-light">{title}</span>
    </div>
  );
};

export default CardDataWithIcons;
