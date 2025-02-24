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

  return (
    <div className="flex gap-2">
      <button onClick={decrease}>-</button>
      <p>{data}</p>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;
