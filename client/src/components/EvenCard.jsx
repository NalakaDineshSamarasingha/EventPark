export default function EventCard() {
    return (
        <div className="w-1/4 rounded shadow-xl">
            <img src="../../images/CardImage.jpg" alt="Event Image" className="w-full h-auto px-2" />

            <p className="text-lg font-extrabold py-2 px-2">Concert Ahankara Nagare</p>
            <p className="text-sm font-medium text-slate-500 py-1 px-2">
                <i className="fas fa-calendar-alt"></i> Dec 26, 2024 &nbsp;
                <i className="fas fa-clock"></i> 7 PM IST
            </p>
            <p className="text-sm font-medium text-slate-500 px-2">
                <i className="fas fa-map-marker-alt"></i> Lotus Tower
            </p>
            <p className="py-2">
                <span className="text-xl font-black text-emerald-600 px-2">4000 LKR</span> upwards
            </p>

            <button className="w-full bg-emerald-600 py-3 text-white">Buy Now</button>
        </div>
    );
}
