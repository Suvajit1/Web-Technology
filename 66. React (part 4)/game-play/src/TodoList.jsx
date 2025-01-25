import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    // console.log(id);
    setTodos(todos.filter((todo) => todo.id != id));
  };

  let upperCaseAll = () => {
    setTodos(
      todos.map((todo) => {
        return { ...todo, task: todo.task.toUpperCase() };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, task: todo.task.toUpperCase() };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add Task!</button>
      <br />
      <br />
      <br />

      <hr />
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete!</button>
            &nbsp;&nbsp;
            <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>Uppercase All</button>
    </div>
  );
}
