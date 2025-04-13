import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  let [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add new todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add Task</button>
      </form>
    </>
  );
}
