import { Navbar, Footer, TourCard } from './components';
import { AllTours, SingleTour } from './pages';

const App = () => {
  return (
    <div className="App">
      <main className="p-[30px]">
        <Navbar />
        <SingleTour />
        <Footer />
      </main>
    </div>
  );
};

export default App;
