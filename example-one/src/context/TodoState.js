import React from 'react'
import { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";


export default function TodoState(props) {
    // const [todoArr , setTodoArr] = useState([]);
    const [todoArr, dispatch] = useReducer(TodoReducer,[]);

    // add todo 
    const addTodo = (text)=>{
        // setTodoArr([...todoArr,text]);
        dispatch({type:"addTodo",payload:text});

    }
    // del todo
    const delTodo = (todoIndex)=>{
        // const filtered = todoArr.filter((item,index)=> index !== todoIndex)
        // setTodoArr(filtered);
        dispatch({type:"delTodo",payload:todoIndex})
       
    }



  return (
   <TodoContext.Provider value={{todoArr,addTodo, delTodo}} >
    {props.children}
   </TodoContext.Provider>
  )
}