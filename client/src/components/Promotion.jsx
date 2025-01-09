import React from 'react';

function Promotion() {
  return (
    <div className="bg-blue-100 py-10 px-5 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-blue-800">
          Sell Tickets & Promote Your Event Here!
        </h2>
        <p className="text-blue-600 mt-4 max-w-md">
          Reach a broader audience and make your event a success. Use our platform to manage ticket sales, promotions, and gain visibility for your events.
        </p>
      </div>

      {/* Contact Us Button */}
      <div className="mt-6">
        <button className="bg-blue-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Promotion;
