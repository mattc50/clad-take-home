import { TodoProps } from "../App"
import Todo from "./Todo"

type OutstandingTodosProps = {
  outstanding: TodoProps[]
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
}

const OutstandingTodos = ({ outstanding, setTodos }: OutstandingTodosProps) => {
  return (
    <div>
      <h2>Outstanding <span>{outstanding.length}</span></h2>
      {outstanding.map((todo, index) => (
        <Todo props={todo} setTodos={setTodos} />
      ))}
    </div>
  )
}

export default OutstandingTodos;