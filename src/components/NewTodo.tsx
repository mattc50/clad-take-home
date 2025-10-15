import { ChangeEvent, useState } from "react"
import { TodoProps } from "../App"
import { saveTodos } from "../utils/saveTodos"

type FormData = {
  name: string,
  date: string,
  description?: string
}

type NewTodoProps = {
  todos: TodoProps[]
}

const NewTodo = ({ todos }: NewTodoProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    date: "",
    description: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { name, date, description } = formData;
    const sanitizedName = name ?? "Task Name";
    const [year, month, day] = date
      ? date.split("-").map(Number)
      : (() => {
        const now = new Date(Date.now());
        return [now.getFullYear(), now.getMonth() + 1, now.getDate()];
      })();

    const sanitizedDate = new Date(year, month - 1, day, 23, 59, 0, 0); // local 23:59

    const sanitizedDateString = sanitizedDate.toISOString().split("T")[0];
    const todo = {
      id: todos.length,
      complete: false,
      name: sanitizedName,
      date: sanitizedDateString,
      description: description
    }
    todos.push(todo);
    saveTodos(todos);
  }

  return (
    <div >
      <form className="flex items-start gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 grow">
          <div className="flex grow gap-2">
            <input
              className="grow"
              required
              id="name"
              placeholder="Task Name*"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="grey-calendar-picker"
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <textarea
            className="resize-none"
            name="description"
            placeholder="Description (optional)"
            id="description"
            value={formData.description}
            rows={4}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4.16666V15.8333M4.16666 9.99999H15.8333" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Add
        </button>
      </form>
    </div>
  )
}

export default NewTodo;