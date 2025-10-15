import { TodoProps } from "../App"
import Todo from "./Todo"

type OutstandingTodosProps = {
  list: TodoProps[],
  title: string,
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
}

const TodosList = ({ list, title, setTodos }: OutstandingTodosProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h2>{title} <span>{list.length}</span></h2>
      {list.map((todo, index) => (
        <Todo key={index} overdue={title === "Overdue"} props={todo} setTodos={setTodos} />
      ))}
    </div>
  )
}

export default TodosList;