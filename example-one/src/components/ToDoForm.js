import React from 'react';
import { useState,useContext } from 'react';
import TodoContext from '../context/TodoContext';


export default function ToDoForm() {
const { addTodo }  = useContext(TodoContext)  
const [ text,setText] = useState("");

const submitHandler = (e)=>{
    e.preventDefault();
    addTodo(text);
    setText(" ");
}
  return (
    <div className='App'>
        <form onSubmit={submitHandler}>
            <label> what to do?</label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
             <button type='submit'>Submit</button>
        </form>
    </div>
  )
}