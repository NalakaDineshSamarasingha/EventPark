import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import axiosInstance from "../axiosInstance"; // Make sure axiosInstance is set up correctly

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize navigate for redirection

  // Fetch user data and booking details when the component mounts
  useEffect(() => {
    // Fetch user details
    const fetchUserDetails = async () => {
      try {
        const response = await axiosInstance.get("/user"); // Assuming /user gives user details
        setUserDetails(response.data); // Set user details in state
      } catch (err) {
        setError("Failed to load user details.");
        console.error(err);
      }
    };

    // Fetch user bookings
    const fetchUserBookings = async () => {
      try {
        const response = await axiosInstance.get("/my-bookings"); // Assuming /my-bookings fetches the bookings
        setBookings(response.data.bookings); // Set bookings in state (assuming response contains 'bookings' array)
      } catch (err) {
        setError("Failed to load bookings.");
        console.error(err);
      }
    };

    // Call both APIs
    fetchUserDetails();
    fetchUserBookings();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Handle Logout
  const handleLogout = () => {
    // Remove the auth token from localStorage
    localStorage.removeItem("authToken");
    // Redirect the user to the login page
    navigate("/login");
  };

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (!userDetails || !bookings) {
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 mt-24">
      {/* User Details Section */}
      <div className="bg-white shadow-lg rounded-lg px-8 py-10 w-full max-w-md mb-8">
        <h1 className="text-2xl font-bold text-black mb-4">User Profile</h1>
        <p className="text-gray-500 mb-2"><strong>Name:</strong> {userDetails.name}</p>
        <p className="text-gray-500 mb-2"><strong>Email:</strong> {userDetails.email}</p>
        {/* Add more user details here */}
      </div>

      {/* Bookings Section */}
      <div className="bg-white shadow-lg rounded-lg px-8 py-10 w-full max-w-md mb-8">
        <h2 className="text-xl font-semibold text-black mb-4">My Bookings</h2>
        {bookings.length === 0 ? (
          <p className="text-gray-500">No bookings found.</p>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="p-4 border border-gray-300 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-700">Event: {booking.ticket.event.event_name}</h3>
                <p className="text-gray-500">Venue: {booking.ticket.event.place}</p>
                <p className="text-gray-500">Event Date: {new Date(booking.ticket.event.event_date).toLocaleDateString()}</p>
                <p className="text-gray-500">Event Time: {booking.ticket.event.event_time}</p>
                <p className="text-gray-500">Ticket Type: {booking.ticket.ticket_type}</p>
                <p className="text-gray-500">Price: ${booking.ticket.price}</p>
                <p className="text-gray-500">Tickets Quantity: {booking.quantity}</p>
                <p className="text-gray-500">Booking Status: {booking.status}</p>
                <p className="text-gray-500">Booking Date: {new Date(booking.created_at).toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
