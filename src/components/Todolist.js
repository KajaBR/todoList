import { TodolistItem } from "./TodolistItem";

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
                                    <TodolistItem 
                                    key={todo.id} 
                                    todo={todo} 
                                    setTodos={props.setTodos}
                                    setTodoToEdit={props.setTodoToEdit}/>
                                );
                            })
                        }
                        
                </tbody>
            </table>
        </article>
    );
};