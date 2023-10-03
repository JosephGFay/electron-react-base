import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="">Hello World</div>} />
      </Routes>
    </Router>
  );
}
