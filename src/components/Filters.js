import React, { useState } from "react";

export const Filters = (props) => {
    const [searchTitle, setSearchTitle] = useState('');
    const handleSearchTitle = (event) => {
        setSearchTitle(event.target.value);
        props.onSearchTitle(event.target.value);
    }

  
    return( 
        <article style={{display:"flex", gap:20}}>
        <div>Title
        <input 
        value={searchTitle} 
        onChange={handleSearchTitle}
        type="text" 
        placeholder="Search todos" 
        className="search"/>
        </div>
        <div> Priority
        <select>
           <option value="all">All</option>
           <option value="Low">Low</option>
           <option value="midium">Midium</option>
           <option value="hight">Hight</option>
        </select>
        </div>
        <div> Status
        <select>
            <option value="all">All</option>
            <option value="todo">todo</option>
            <option value="notTodo">Not todo</option>
        </select>
        </div>
        </article>
    )
}