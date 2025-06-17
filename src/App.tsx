import React from 'react';
import Counter from './features/counter/Counter';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 shadow-sm">
        Redux Counter App
      </h1>
      <Counter />
    </div>
  );
}

export default App;
