import React, { useReducer } from 'react';

type CounterState = {
  count: number;
}

type UpdateAction ={
  type: "increment" | "decrement";
  payload: number;
}

type ResetActon ={
  type:  "reset";
}

type CounterAction = ResetActon | UpdateAction

const initialState: CounterState = {
  count: 0
};

const counterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + action.payload
      };
    case 'decrement':
      return {
        count: state.count - action.payload
      };
    case "reset" :
      return initialState
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment 10</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement 10</button>
      <button onClick={() => dispatch({ type: 'reset', })}>Decrement 10</button>
    </div>
  );
};

export default Counter;
