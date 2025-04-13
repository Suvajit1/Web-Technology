import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <AddForm></AddForm>
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}{" "}
            <button onClick={() => handleDelete(todo.id)}>Delete!</button>
          </li>
        ))}
      </ul>
    </>
  );
}
