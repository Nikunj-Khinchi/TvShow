// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ShowSummary from './components/ShowSummary';
import Navbar from './components/Navbar';
import BookingPage from './components/BookingPage'; // Import the BookingPage component

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show/:id/" element={<ShowSummary />} />
            <Route path="/bookings/" element={<BookingPage />} />
          </Routes>
        </Router>
      </div>


      <footer className='static bottom-0 w-full text-center bg-blue-950 text-white flex justify-center items-center'>
          <div className="container mx-auto px-6 py-2">
            <p className="py-2 text-lg">Copyright Nikunj Khinchi</p>
          </div>
        </footer>
    </>
  );
}

export default App;
