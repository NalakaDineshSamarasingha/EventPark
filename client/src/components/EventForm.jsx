import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance'; // Import axios instance

const EventForm = () => {
  const [eventData, setEventData] = useState({
    event_name: '',
    place: '',
    event_date: '',
    event_time: '',
    event_type_id: '',
    artists: [], // Multiple artist selection
    tickets: [], // Multiple ticket selection
    image: null,
  });

  const [eventTypes, setEventTypes] = useState([]);
  const [artists, setArtists] = useState([]);
  const [tickets, setTickets] = useState([]);

  const { id } = useParams(); // For editing
  const navigate = useNavigate(); // Use navigate

  // Fetch event types, artists, and tickets when the form loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventTypesResponse = await axiosInstance.get('/event-types');
        const artistsResponse = await axiosInstance.get('/artists');
        const ticketsResponse = await axiosInstance.get('/tickets');
        setEventTypes(eventTypesResponse.data);
        setArtists(artistsResponse.data);
        setTickets(ticketsResponse.data);

        if (id) {
          // If editing, fetch the event data and populate the form fields
          const eventResponse = await axiosInstance.get(`/events/${id}`);
          setEventData(eventResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setEventData({
      ...eventData,
      image: e.target.files[0],
    });
  };

  const handleMultipleSelectChange = (e) => {
    const { name, options } = e.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setEventData({
      ...eventData,
      [name]: selectedValues,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(eventData).forEach((key) => {
      if (Array.isArray(eventData[key])) {
        eventData[key].forEach((item) => formData.append(key + '[]', item));
      } else {
        formData.append(key, eventData[key]);
      }
    });

    try {
      if (id) {
        await axiosInstance.put(`/events/${id}`, formData);
      } else {
        await axiosInstance.post('/events', formData);
      }
      navigate('/'); // Redirect after form submission
    } catch (error) {
      console.error('Error saving event', error);
    }
  };

  const handleLogout = () => {
    // Clear the auth token from localStorage (or sessionStorage)
    localStorage.removeItem('authToken'); // Or sessionStorage.removeItem('authToken')
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-24">
      <h1 className="text-2xl font-semibold mb-6 text-center">{id ? 'Edit Event' : 'Add Event'}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="event_name" className="block text-sm font-medium text-gray-700">Event Name</label>
          <input
            type="text"
            name="event_name"
            id="event_name"
            value={eventData.event_name}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Event Name"
          />
        </div>

        <div>
          <label htmlFor="place" className="block text-sm font-medium text-gray-700">Place</label>
          <input
            type="text"
            name="place"
            id="place"
            value={eventData.place}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Place"
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="event_date" className="block text-sm font-medium text-gray-700">Event Date</label>
            <input
              type="date"
              name="event_date"
              id="event_date"
              value={eventData.event_date}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="event_time" className="block text-sm font-medium text-gray-700">Event Time</label>
            <input
              type="time"
              name="event_time"
              id="event_time"
              value={eventData.event_time}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Event Type Dropdown */}
        <div>
          <label htmlFor="event_type_id" className="block text-sm font-medium text-gray-700">Event Type</label>
          <select
            name="event_type_id"
            id="event_type_id"
            value={eventData.event_type_id}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Event Type</option>
            {eventTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.type_name}
              </option>
            ))}
          </select>
        </div>

        {/* Artist Selection (Multiple) */}
        <div>
          <label htmlFor="artist_ids" className="block text-sm font-medium text-gray-700">Artists</label>
          <select
            name="artist_ids"
            id="artist_ids"
            multiple
            value={eventData.artist_ids}
            onChange={handleMultipleSelectChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {artists.map((artist) => (
              <option key={artist.id} value={artist.id}>
                {artist.name}
              </option>
            ))}
          </select>
        </div>

        {/* Ticket Selection (Multiple) */}
        <div>
          <label htmlFor="ticket_ids" className="block text-sm font-medium text-gray-700">Tickets</label>
          <select
            name="ticket_ids"
            id="ticket_ids"
            multiple
            value={eventData.ticket_ids}
            onChange={handleMultipleSelectChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {tickets.map((ticket) => (
              <option key={ticket.id} value={ticket.id}>
                {ticket.ticket_type} - {ticket.price}
              </option>
            ))}
          </select>
        </div>

        {/* Event Image */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Event Image</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {id ? 'Update' : 'Create'} Event
          </button>
        </div>
      </form>

      {/* Logout Button */}
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default EventForm;
