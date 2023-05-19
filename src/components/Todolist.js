export const Todolist = (props) => {

    return(
        <article>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {
                            props.todosToRender.map((todo)=>{
                                return( 
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.priority}</td>
                                    <td>
                                        <input type="checkbox" readOnly checked={todo.status}/>
                                    </td>
                                    <td>
                                        <div style={{display:"flex", gap: 20}}>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                                )
                                
                            })
                        }
                        
                </tbody>
            </table>
        </article>
    );
};