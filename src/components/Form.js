import { useState } from "react"

export const Form = (props) => {

    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');


    return (
        <article>
            <form onSubmit={(event)=>{
                event.preventDefault();
                const newTodo = {
                    id: Math.random(),
                    status: false,
                    title,
                    priority
                };
                props.setTodos((prevState)=> [...prevState, newTodo]);
                setTitle('');
                setPriority('');
            }}>
            <input value={title} onChange={(event)=>{
                setTitle(event.target.value);
                
                }} 
                type="text" 
                placeholder="Todo Title"/>
            <select 
                required //jesli nic nie wpiszemy nie wykona się 
                value={priority} 
                onChange={(event)=>{
                setPriority(event.target.value);
                
                }}>
                <option value="" hidden>Select priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="hight">hight</option>
            </select>
                <button type="submit">Submit</button>
            </form>
        </article>
    )
}