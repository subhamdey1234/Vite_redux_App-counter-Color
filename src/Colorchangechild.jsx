import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
const Colorchangechild = () => {
   const  data=useSelector(store=>store.colorReducer);
    const dispatch=useDispatch();
  return (
  <div className='colorchange' style={{
    backgroundColor:`${data}`,
    width:"500px",
    height:"500px",
    borderRadius:"18px",
    margin:"auto",
    marginTop:"18px"
  }}>
    <h1 style={{textShadow:`0 0 20px ${data}`,textDecoration:`underline 3px solid white`
}}>Color changing Child</h1>
            <div style={{display:"flex",flexWrap:"wrap",gap:"25px",justifyContent:"center"}}>
            <button  onClick={()=>dispatch({type:"blue"})}>Blue</button>
            <button onClick={()=>dispatch({type:"black"})}>Black</button>
            <button onClick={()=>dispatch({type:"gray"})}>Gray</button>
            <button onClick={()=>{dispatch({type:"green"})}}>Green</button>
            </div>
  </div>
  )
}

export default Colorchangechild