import { useEffect, useState } from "react";
import NewTodo from "./components/NewTodo";
import TodosList from "./components/TodosList";

export type TodoProps = {
  id: number,
  complete: boolean,
  name: string,
  date: string,
  description?: string
}

export const getTodos = (): TodoProps[] => {
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
    <div className="flex justify-center">
      <div className="w-[600px] flex flex-col gap-8 py-16">
        <div className="flex flex-col gap-2">
          <h1>To Do <span>{todos.length - todos.filter(todo => todo.complete).length}</span></h1>
          <NewTodo todos={todos} />
        </div>
        <TodosList
          list={todos.filter(todo => !todo.complete && new Date(todo.date) < new Date(Date.now()))}
          title="Overdue"
          setTodos={setTodos}
        />
        <TodosList
          list={todos.filter(todo => !todo.complete && new Date(todo.date) >= new Date(Date.now()))}
          title="Outstanding"
          setTodos={setTodos}
        />
        <TodosList
          list={todos.filter(todo => todo.complete)}
          title="Complete"
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;
