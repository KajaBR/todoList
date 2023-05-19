import { useState } from "react";
import { Form } from "./components/Form";
import { Todolist } from "./components/Todolist";

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <Form setTodos={setTodos}/>
      <Todolist todosToRender={todos}/>
    </div>
  );
}

export default App;
