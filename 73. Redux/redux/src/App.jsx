import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <Todo></Todo>
      </Provider>
    </>
  );
}

export default App;
