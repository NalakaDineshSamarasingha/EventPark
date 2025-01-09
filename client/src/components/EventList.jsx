import { useState, useEffect } from "react";
import { fetchEventsInCurrentMonth } from "../api";
import EventCard from './EvenCard'

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchEventsInCurrentMonth();
        setEvents(data); // Set the fetched events
      } catch (err) {
        setError(err.message);
      }
    };

    getEvents();
  }, []);

  return (
    <div className="px-[7vw] py-14">
      <div className="text-2xl">
        What's happening this month<span className="text-emerald-600">...</span>
      </div>
      {error ? (
        <p className="text-red-500 py-4">{error}</p>
      ) : (
        <div className="py-14 flex justify-center gap-6 flex-wrap">
          {events.length > 0 ? (
            events.map((event) => (
              <EventCard
                key={event.id}
                name={event.event_name}
                date={event.event_date}
                time={event.event_time}
                place={event.place}
                price={event.tickets.length > 0 ? `${event.tickets[0].price} LKR` : "Free"}
                image={event.image }
              />
            ))
          ) : (
            <p className="text-gray-500">No events available for this month.</p>
          )}
        </div>
      )}
    </div>
  );
}
