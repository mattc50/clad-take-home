import { TodoProps } from "../App";

const saveTodos = (todos: TodoProps[]): void => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (err) {
    console.error("Error writing todos:", err);
  }
}

export { saveTodos };