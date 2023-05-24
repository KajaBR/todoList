import { useState } from "react";
import { Form } from "./components/Form";
import { Todolist } from "./components/Todolist";
import { EditModal } from "./components/EditModal";
import { Filters } from "./components/Filters";

function App() {

  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [searchTitle, setSearchTitle] = useState('');

  const handleSearchTitle = (searchTitleInput) => {
    setSearchTitle(searchTitleInput);
  }

  const getFilteredTitle = () => {
    return todos.filter(({title})=>{
      if(!searchTitle){
        return true;
      }
      return (
        title.toLocaleLowerCase().includes(searchTitle)
      )
    })
  }

  const todosToDisplay = getFilteredTitle();

  return (
    <div className="container">
      <Form setTodos={setTodos}/>
      <Todolist todosToRender={todos} setTodos={setTodos} setTodoToEdit={setTodoToEdit} onSearchTitele={handleSearchTitle}/>
      {!!todoToEdit && <EditModal todoToEdit={todoToEdit} setTodoToEdit={setTodoToEdit} setTodos={setTodos}/>}
      <Filters todos={todosToDisplay}/>
    </div>
  );
}

export default App;
