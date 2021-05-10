import { v4 as uuid } from "uuid";
export const Reducer = (state, action) => {
    switch (action.type) {
      case "additem":
        let task = { id: uuid(), text: action.payload, done: false };
        localStorage.setItem("todoItems", JSON.stringify([...state.tasks, task]));
        return { tasks: [...state.tasks, task] };
  
      case "updateitem":
        let updatedTasks = state.tasks.map((item) =>
          item.id === action.payload ? { ...item, done: !item.done } : item
        );
        localStorage.setItem("todoItems", JSON.stringify(updatedTasks));
        return { tasks: updatedTasks };
  
      case "deleteitem":
        let updatedItems = state.tasks.filter((item) => item.id !== action.payload);
        localStorage.setItem("todoItems", JSON.stringify(updatedItems));
        return {tasks:updatedItems};
      case "load":
        return {tasks:action.payload}
      default:
        return state;
    }
  };