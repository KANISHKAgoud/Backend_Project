import React from 'react';

const MainBody = ({ children }) => {
  return (
    <main className="flex-grow bg-gray-900 text-white p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {children || <h1 className="text-3xl font-bold">Welcome to the Dark Side 🌑</h1>}
      </div>
    </main>
  );
};

export default MainBody;
