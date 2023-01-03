import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AllTours, SingleTour, Error, Login, SharedUserLayout } from './pages';

const App = () => {
  return (
    <main className="p-[30px]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedUserLayout />}>
            <Route index element={<Login />} />
            {/* <Route index element={<AllTours />} />
            <Route path="/:tourID" element={<SingleTour />} /> */}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
