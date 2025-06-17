import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { increment, decrement, fetchCounterValue } from './counterSlice';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const status = useSelector((state: RootState) => state.counter.status);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Counter: {count}</h2>
        <p className="text-gray-600 mb-6">Status: {status}</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(fetchCounterValue())}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
          >
            Fetch Counter Value (Async)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
