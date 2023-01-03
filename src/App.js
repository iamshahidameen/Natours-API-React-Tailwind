import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  AllTours,
  SingleTour,
  Error,
  Login,
  SharedTourLayout,
  Register,
} from './pages';

const App = () => {
  return (
    <main className="p-[30px] bg-[#f7f7f7]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedTourLayout />}>
            <Route index element={<AllTours />} />
            <Route path="/:tourID" element={<SingleTour />} />
            <Route path="login" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
