export default function EventCard({ name, date, time, place, price, image }) {
    return (
      <div className="w-[20vw] rounded shadow-xl">
        <img
          src= {`http://127.0.0.1:8000/storage/${image}`}
          alt="Event Image"
          className="w-full h-auto px-2" // Fallback image
        />
        <p className="text-lg font-extrabold py-2 px-2">{name}</p>
        <p className="text-sm font-medium text-slate-500 py-1 px-2">
          <i className="fas fa-calendar-alt"></i> {new Date(date).toDateString()} &nbsp;
          <i className="fas fa-clock"></i> {time}
        </p>
        <p className="text-sm font-medium text-slate-500 px-2">
          <i className="fas fa-map-marker-alt"></i> {place}
        </p>
        <p className="py-2">
          <span className="text-lg font-black text-[#000066cc] px-2">{price}</span>
        </p>
        <button className="w-full bg-[#000066] py-3 text-white">Buy Now</button>
      </div>
    );
  }
  