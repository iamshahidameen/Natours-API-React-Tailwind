import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AllTours, SingleTour, Error } from './pages';

const App = () => {
  return (
    <main className="p-[30px]">
      <BrowserRouter>
        <Routes>
          <Route path="all-tours" element={<AllTours />}></Route>
          <Route path="all-tours/:id" element={<SingleTour />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
