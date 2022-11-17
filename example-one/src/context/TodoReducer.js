import React from 'react'

export default function TodoReducer(state,action) {

switch(action.type){
    case 'addTodo':
        return [...state,action.payload];
    case 'delTodo':
        const filtered = state.filter((item,index)=> index !==action.payload)
        return filtered;
    default : 
        return state
}

//     if(action.type==="addTodo"){
//         return [...state,action.payload]
//     } 
//     if(action.type==="delTodo"){
//         const filtered = state.filter((item,index)=> index !==action.payload)
//         return filtered;
//     } 


//   return state
}
