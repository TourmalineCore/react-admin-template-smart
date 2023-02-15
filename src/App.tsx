import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeePage from './pages/EmployeePage/EmployeePage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<EmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
}
 