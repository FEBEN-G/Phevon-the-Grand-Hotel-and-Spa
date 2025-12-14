import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={
        <div className="h-screen flex items-center justify-center text-2xl font-serif">
          404 - Page Not Found
        </div>
      } />
    </Routes>
  );
}

export default App;
