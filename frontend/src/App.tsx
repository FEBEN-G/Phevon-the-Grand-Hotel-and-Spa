import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/rooms/:id" element={<RoomDetails />} />
      <Route path="*" element={
        <div className="h-screen flex items-center justify-center text-2xl font-serif">
          404 - Page Not Found
        </div>
      } />
    </Routes>
  );
}

export default App;
