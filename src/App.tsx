import { useEffect, useState } from "react";
import NewTodo from "./components/NewTodo";

export type Todo = {
  id: number,
  complete: boolean,
  name: string,
  date: Date,
  description?: string
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  function getTodos(): Todo[] {
    try {
      const data = localStorage.getItem("todos");
      return data ? (JSON.parse(data) as Todo[]) : [];
    } catch (err) {
      console.error("Error reading todos:", err);
      return [];
    }
  }

  useEffect(() => {
    setTodos(getTodos());
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 h-1/2 flex flex-col items-center justify-center font-medium text-xl">
        <div className="total-todos-header">
          <h1>Todos <span>{todos.length}</span></h1>
        </div>
        <NewTodo todos={todos} />
        <div>
          {todos.map((todo, index) => (
            <div key={index}>{todo.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
