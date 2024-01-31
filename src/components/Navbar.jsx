// Navbar.js

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-950 p-6 fixed w-full top-0 z-10 shadow-md shadow-gray-300">
      <div className="container mx-auto flex justify-around items-center">
        <Link to="/" className="text-white  text-2xl font-serif font-bold">
          Shows
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/bookings" className="text-white">
            Bookings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
