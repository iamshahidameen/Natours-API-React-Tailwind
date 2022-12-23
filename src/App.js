import { Navbar, Footer, TourCard } from './components';
import { AllTours } from './pages';

const App = () => {
  return (
    <div className="App">
      <main className="p-[30px]">
        <Navbar />
        <AllTours />
        <Footer />
      </main>
    </div>
  );
};

export default App;
