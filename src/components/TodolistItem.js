export const TodolistItem = (props) =>{

    const { todo, setTodos, setTodoToEdit } = props;
    

    return (
        <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>{todo.priority}</td>
            <td>
                <input type="checkbox" readOnly checked={todo.status}/>
            </td>
            <td>
                <div style={{display:"flex", gap: 20}}>
                    <button onClick={()=> setTodoToEdit(todo)}>Edit</button>
                    <button
                    onClick={()=>{
                        setTodos((prevState) => prevState.filter((todoToCheck) => todoToCheck.id !== todo.id))
                    }}>Delete</button>
                </div>
            </td>
        </tr>
    )
}