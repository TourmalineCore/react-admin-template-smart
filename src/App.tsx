import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import { ToDosPage } from './pages/to-dos/ToDosPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/to-dos"
          element={<ToDosPage />}
        />
        <Route
          path="/*"
          element={<HomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
