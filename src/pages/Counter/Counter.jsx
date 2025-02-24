import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store-reduxToolkit/reducers/counter-reducer';

const Counter = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.counter.count);

  const increase = () => {
    dispatch(increment());
  };

  const decrease = () => {
    dispatch(decrement());
  };

  const reset = () => {
    dispatch({ type: "counter/reset" }); // Reset action dispatch
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">🔥 Counter App</h2>
      
      <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
        <button
          onClick={decrease}
          className="bg-red-500 text-white px-6 py-3 text-xl font-bold rounded-full shadow-md transition-transform transform hover:scale-110 active:scale-95"
        >
          -
        </button>
        
        <p className="text-3xl font-bold mx-6">{data}</p>
        
        <button
          onClick={increase}
          className="bg-green-500 text-white px-6 py-3 text-xl font-bold rounded-full shadow-md transition-transform transform hover:scale-110 active:scale-95"
        >
          +
        </button>
      </div>

      <button
        onClick={reset}
        className="mt-4 bg-blue-500 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 active:scale-95"
      >
        🔄 Reset
      </button>
    </div>
  );
};

export default Counter;
