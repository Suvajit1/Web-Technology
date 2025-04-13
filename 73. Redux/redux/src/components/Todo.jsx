import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleIsDone = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <>
      <AddForm></AddForm>
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
              {todo.task}
            </span>
            &nbsp;&nbsp;
            <button onClick={() => handleDelete(todo.id)}>Delete!</button>
            &nbsp;&nbsp;
            <button onClick={() => handleIsDone(todo.id)}>Done!</button>
          </li>
        ))}
      </ul>
    </>
  );
}
