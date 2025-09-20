import React from 'react';

const TestTailwind = () => {
  return (
    <div className="min-h-screen bg-brand-off-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-heading text-brand-berry mb-4">Tailwind CSS Test</h1>
      <p className="text-lg font-body text-brand-brown mb-6">
        If you see this styled text, Tailwind CSS is working correctly.
      </p>
      <button className="bg-brand-berry text-white font-semibold py-2 px-6 rounded-full hover:bg-brand-brown transition duration-300">
        Test Button
      </button>
    </div>
  );
};

export default TestTailwind;
