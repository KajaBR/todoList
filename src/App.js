import { useState } from "react";
import { Form } from "./components/Form";
import { Todolist } from "./components/Todolist";
import { EditModal } from "./components/EditModal";

function App() {

  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);


  return (
    <div className="container">
      <Form setTodos={setTodos}/>
      <Todolist todosToRender={todos} setTodos={setTodos} setTodoToEdit={setTodoToEdit}/>
      {!!todoToEdit && <EditModal todoToEdit={todoToEdit} setTodoToEdit={setTodoToEdit} setTodos={setTodos}/>}
    </div>
  );
}

export default App;
