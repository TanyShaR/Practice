let initState = {
  value: 0,
  name: "John Doe",
};

const reducer = (state = initState, action) => {
  if (action.type === "DEPOSIT") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === "WITHDRAW") {
    if (state.value >= 5000) {
      return {
        ...state,
        value: state.value - action.payload,
      };
    }
  }
    else if (action.type === "CLOSE_ACCOUNT") {
    return {
      ...state,
      value: 0
    };
  } else {
    return state;
  }
};

const dispatch = (action) => {
  initState = reducer(initState, action);

  console.log(initState);
};

const deposit = (paz)

dispatch({type: "DEPOSIT", payload: 10000});
dispatch({type: "WITHDRAW", payload: 5000});
dispatch({type: "DEPOSIT", payload: 300});
dispatch({type: "CLOSE_ACCOUNT"});



const App = () => {
  return (
    <div>App</div>
  )
}
export default App
