import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Explore the World with Us</h1>
      <p className="text-lg mb-8 text-center">Discover amazing destinations, breathtaking landscapes, and diverse cultures.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Paris, France</h2>
          <img src="paris.jpg" alt="Paris" className="w-full h-32 object-cover mb-4 rounded-md" />
          <p className="text-gray-700">Experience the romance of the City of Lights and its iconic landmarks.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Kyoto, Japan</h2>
          <img src="kyoto.jpg" alt="Kyoto" className="w-full h-32 object-cover mb-4 rounded-md" />
          <p className="text-gray-700">Explore the rich cultural heritage and serene temples of Kyoto.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Santorini, Greece</h2>
          <img src="santorini.jpg" alt="Santorini" className="w-full h-32 object-cover mb-4 rounded-md" />
          <p className="text-gray-700">Relax on the stunning beaches and enjoy the charming architecture of Santorini.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
