import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), finish: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4(), finish: false }]);
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

  let markAsDone = (id) => {
    // console.log("done!")
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, finish: true };
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
            <span style={todo.finish ? { textDecoration: "line-through" } : {}}>
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete!</button>
            &nbsp;&nbsp;
            <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button>
            &nbsp;&nbsp; done{" "}
            <input onClick={() => markAsDone(todo.id)} type="checkbox" />
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>Uppercase All</button>
    </div>
  );
}
