import { Link } from "react-router-dom";
import Search from '../assets/Search.png';
import Profile from '../assets/Profile.png';

export default function Navbar() {
  // Check if the user is logged in by checking for the token
  const isLoggedIn = localStorage.getItem("authToken");

  return (
    <div className="flex justify-between items-center h-[15vh] max-h-[15vh] top-0 px-10 bg-white fixed text-black z-10 w-full opacity-100 border-b-2 border-emerald-200">
      {/* Left Section */}
      <div className="left">
        <img src="../../images/logo.png" width={160} />
      </div>

      {/* Center Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 right flex gap-8 items-center tracking-widest uppercase text-sm text-slate-700">
        <Link to="/">Home</Link>
        <Link to="/events">Upcoming Event</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center gap-4">
        <img src={Search} width={30} alt="Search" />
        
        {/* If logged in, show profile link; otherwise show login link */}
        {isLoggedIn ? (
          <Link to="/profile">
            <img src={Profile} width={25} alt="Profile" />
          </Link>
        ) : (
          <Link to="/login">
            <img src={Profile} width={25} alt="Login" />
          </Link>
        )}
      </div>
    </div>
  );
}
