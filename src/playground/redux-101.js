import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy
});

const setCount = ({ count = 101 } = {}) => ({
  type: "SET",
  count: count
});

const resetCount = () => ({
  type: "RESET"
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
      break;

    case "DECREMENT":
      return { count: state.count - action.decrementBy };
      break;

    case "RESET":
      return { count: 0 };
      break;

    case "SET":
      return { count: action.count };
      break;

    default:
      return state;
      break;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 1000 }));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(setCount());

store.dispatch(setCount({ count: 123 }));

store.dispatch(resetCount());
