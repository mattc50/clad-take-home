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
    <div className="flex items-center gap-12">
      <div className="flex gap-3 items-start grow">
        <label className="relative block cursor-pointer text-[22px] select-none">
          <input
            className="peer absolute opacity-0 h-0 w-0 cursor-pointer"
            type="checkbox"
            id="completed"
            name="completed"
            checked={complete}
            onChange={() => updateComplete(id)}
          />
          <div className="mt-0.5">
            {complete ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" fill="#F9F5FF" />
                <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="#7F56D9" />
                <path d="M14.6667 6.5L8.25001 12.9167L5.33334 10" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" fill="white" />
                <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="#D0D5DD" />
              </svg>
            )}
          </div>

        </label>
        <div>
          <p className="task-name hyphens-auto">{name}</p>
          {description && <p className=" hyphens-auto">{description}</p>}
        </div>
      </div>
      <small className={`${overdue ? "overdue" : "todo"} whitespace-nowrap`}>{new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })}</small>
    </div>
  )
}

export default Todo;