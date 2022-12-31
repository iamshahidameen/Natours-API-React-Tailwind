const TourGuides = ({ guides }) => {
  console.log('guides', guides);
  const { name, photo, role } = guides;
  return (
    <>
      <div className="guide-profile flex items-center text-[#777] mb-5">
        <div className="guide-picture mr-3">
          <img
            src={`https://natours-api-production-0623.up.railway.app/img/users/${photo}`}
            alt="guide dp"
            className="w-[35px] h-[35px] rounded-full"
          />
        </div>
        <div className="guide-level mr-5 uppercase text-[14px] font-bold">
          {role}
        </div>
        <div className="guide-name">{name}</div>
      </div>
    </>
  );
};

export default TourGuides;
