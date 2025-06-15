import React from 'react';
import Counter from './features/counter/Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center mt-6">Redux Counter App</h1>
      <Counter />
    </div>
  );
};

export default App;
