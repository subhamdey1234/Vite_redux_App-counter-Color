import React from 'react'
import { useSelector } from 'react-redux';   //Give access the state
import { useDispatch } from 'react-redux';   //Modify the State

const Childcounter = () => {
    const data=useSelector(store=>store.countreducer)
    const dispatch=useDispatch(); //decalre dispatch
  return (
    <>
    <h1>Redux Child Component</h1>
    <h2>Count:{data}</h2>
    <div style={{
        display:"flex",
        gap:"15px",
        flexWrap:"wrap",
    }}>
   <button onClick={()=>{dispatch({type:'inc'})}}>Increment</button>
   <button onClick={()=>{dispatch({type:'dec'})}}>Decrement</button>
   <button onClick={()=>{dispatch({type:'mul_two'})}}>Multiply by 2</button>
   <button onClick={()=>{dispatch({type:'div_two'})}}>Divide by 2</button>
   </div>
    </>
  )
}

export default Childcounter;