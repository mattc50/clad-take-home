import { getTodos, TodoProps } from "../App"
import { saveTodos } from "../utils/saveTodos";

type TodoItemProps = {
  props: TodoProps,
  overdue?: boolean,
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
}

const Todo = ({ props, overdue, setTodos }: TodoItemProps) => {
  const updateComplete = (id: number) => {
    console.log("complete")
    const todos = getTodos().map(todo =>
      todo.id === id ? { ...todo, complete: !complete } : todo
    );
    saveTodos(todos);
    setTodos(todos);
  }
  const { name, id, description, complete, date } = props;
  return (
    <div className="flex items-center">
      <div className="flex gap-6 items-start grow">
        <input
          type="checkbox"
          id="completed"
          name="completed"
          checked={complete}
          onChange={() => updateComplete(id)}
        />
        <div>
          <p>{name}</p>
          {description && <p>{description}</p>}
        </div>
      </div>
      <small className={`text-${overdue ? "error-500" : "grey-500"}`}>{new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })}</small>
    </div>
  )
}

export default Todo;