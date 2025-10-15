import { useEffect, useState } from "react";
import NewTodo from "./components/NewTodo";
import OutstandingTodos from "./components/OutstandingTodos";
import { saveTodos } from "./utils/saveTodos";

export type TodoProps = {
  id: number,
  complete: boolean,
  name: string,
  date: Date,
  description?: string
}

export function getTodos(): TodoProps[] {
  try {
    const data = localStorage.getItem("todos");
    return data ? (JSON.parse(data) as TodoProps[]) : [];
  } catch (err) {
    console.error("Error reading todos:", err);
    return [];
  }
}

function App() {
  const [todos, setTodos] = useState<TodoProps[]>([])

  useEffect(() => {
    setTodos(getTodos());
  }, [])

  return (
    <div className="flex h-screen justify-center">
      <div className="w-1/2 h-1/2 flex flex-col justify-center font-medium text-xl">
        <div className="total-todos-header">
          <h1>Todos <span>{todos.length}</span></h1>
        </div>
        <NewTodo todos={todos} />
        <OutstandingTodos outstanding={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
