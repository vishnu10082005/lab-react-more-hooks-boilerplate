import React,{useReducer, useState} from "react";
const UseReducer=()=>{
    const reducer=(state,action)=>{
        return state
    }
    const[count,dispatch]=useReducer(reducer,0)
    return(
        <>
        <button onClick={()=>{
            dispatch({type})
        }}>+</button>
        <p>count: {count}</p>
        <button onClick={()=>{
            
        }}>-</button>
        
        
        
        </>
    )
}
export default UseReducer