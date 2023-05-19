export const EditModal = (props) =>{

    const {todoToEdit, setTodoToEdit, setTodos} = props;

    return(
    <dialog open>
      <article>
       <h2>Edit todo</h2>
        <form onSubmit={(event)=>{
            event.preventDefault('');
            setTodos((prevState)=>prevState.map((todo)=>{
                if (todo.id === todoToEdit.id){
                    return todoToEdit
                }
                return todo;
            })
            );
            setTodoToEdit(null);
        }}>
          <label htmlFor="title">Title</label>
          <input value={todoToEdit.title} onChange={(event)=>{
            setTodoToEdit((prevState)=>({...prevState ,title:event.target.value}));
          }} />
          <label htmlFor="priority">Priority</label>
          <select value={todoToEdit.priority} 
          onChange={(event)=>{
            setTodoToEdit((prevState)=>({...prevState , priority:event.target.value}))
        }}
          id="priority">
            <option value="low">Low</option>
            <option value="midium">Midium</option>
            <option value="hight">Hight</option>
          </select>
          <label htmlFor="status">Status</label>
          <input checked={todoToEdit.status} type="checkbox" id="status"/>
          <div style={{display: "flex", gap: 20, marginTop: 50}}>
          <button>Submit</button>
          <button onChange={(event)=>{
            setTodoToEdit((prevState)=>({...prevState , status:event.target.value}))
        }}>Cancel</button>
          </div>
        </form>
      </article>
    </dialog>

    )
}