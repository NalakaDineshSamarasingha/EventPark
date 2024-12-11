import React from 'react';

function Offer() {
  return (
    <div className="flex flex-col w-full justify-center items-center py-6">
      <p className=' opacity-90 uppercase tracking-wider'>Limited</p>
      <p className="text-2xl  uppercase mb-14 tracking-widest">Bid & Enjoy</p>
      <div className="w-3/4 flex justify-center items-center">
        {/* Left Section */}
        <div className="left w-1/2 flex justify-center">
          <img
            src="../../images/CardImage.jpg"
            alt="Event"
            className="w-full max-w-sm rounded shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div className="right w-1/2 text-left px-4 flex flex-col gap-6">
        <p className="text-3xl font-extrabold py-2 px-2">Concert Ahankara Nagare</p>

            <div className='text-left'>

                <p className="text-sm font-medium text-slate-500 py-1 px-2">
                    <i className="fas fa-calendar-alt"></i> Dec 26, 2024 &nbsp;
                    <i className="fas fa-clock"></i> 7 PM IST
                </p>
                <p className="text-sm font-medium text-slate-500 px-2">
                    <i className="fas fa-map-marker-alt"></i> Lotus Tower
                </p>
            </div>
            <p className="py-2">
                <span className="text-xl font-black text-emerald-600 px-2">4000 LKR</span> upwards
            </p>

            <button className="w-full bg-emerald-600 py-3 text-white">Buy Now</button>
            <p className='mt-3 border-b-2 w-fit border-emerald-500 text text-slate-500'>View Concert Details</p>
        </div>
      </div>
    </div>
  );
}

export default Offer;
