import React from 'react'
import {useContext} from 'react';
import TodoContext from '../context/TodoContext';

export default function ToDoView() {
  const {todoArr,delTodo} = useContext(TodoContext)
  return (
    <div className='App'>
        {todoArr.map((item, index)=> <h4 key={index}>{item} <button onClick={()=>delTodo(index)} >x</button></h4>)}
    </div>
  )
}
