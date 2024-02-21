import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import { ToDoListPage } from './pages/todo-list/ToDoListPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/to-dos"
          element={<ToDoListPage />}
        />
        <Route
          path="/*"
          element={<HomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
