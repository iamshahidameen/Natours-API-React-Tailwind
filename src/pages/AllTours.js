import { TourCard } from '../components';
import cardDataAPI from '../cardDataAPI';
console.log(cardDataAPI);
const AllTours = () => {
  return (
    <main className="page-wrapper">
      <TourCard />
    </main>
  );
};

export default AllTours;
