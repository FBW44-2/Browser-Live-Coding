
export const Reducer = (state, action) => {
    console.log(action);
    /*   if(action==="increment"){
      return {...state,counter:state.counter+1 }
    }
    if(action==="decrement"){
      return {...state,counter:state.counter-1 }
    } */
  
    switch (action.type) {
      case "increment":
        return { ...state, counter: state.counter + 1 };
      case "decrement":
        return { ...state, counter: state.counter - 1 };
      case "reset":
        return { ...state, counter: 0 };
      case "addnewtask":
        return { ...state, toDos: [...state.toDos, action.value] };
      default:
        return state;
    }
  
    /* return state */
  };
  