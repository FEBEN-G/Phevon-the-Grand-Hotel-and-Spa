import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import PaymentSuccess from './pages/PaymentSuccess';
import Dining from './pages/Dining';
import Spa from './pages/Spa';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/rooms/:id" element={<RoomDetails />} />
      <Route path="/payment/success" element={<PaymentSuccess />} />
      <Route path="/dining" element={<Dining />} />
      <Route path="/spa" element={<Spa />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={
        <div className="h-screen flex items-center justify-center text-2xl font-serif">
          404 - Page Not Found
        </div>
      } />
    </Routes>
  );
}

export default App;
