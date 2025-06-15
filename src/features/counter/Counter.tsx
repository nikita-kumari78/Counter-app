import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { increment, decrement, incrementByAmount } from './counterSlice';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const handleAsyncIncrement = () => {
    setTimeout(() => {
      dispatch(incrementByAmount(5));
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
       
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Count: {count}</h2>
        <div className="flex justify-center gap-4 mb-4">
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
          onClick={handleAsyncIncrement}
        >
          Increment Async by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
