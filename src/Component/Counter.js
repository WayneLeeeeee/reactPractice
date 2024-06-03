import { useState } from "react";

const Counter =() => {
    const [count , setCount]=useState(5);
    const handleClick=(type) =>{
        setCount(type==='increment'?count+1:count-1);
    };
    return(
    
    <div className="container">
    
    <div className="chevron chevron-up" style={{visibility: count >10 && 'hidden',}} onClick={()=>handleClick('increment')
    }/> 
     
    <div className="number" id="'num">
      {count}
    </div>
    {
        count>0 &&(
    <div className="chevron chevron-down" onClick={()=>handleClick('decrement')}/>)       
    }
  </div>
  )};

export  const counters =Array.from({length:8});
export default Counter;
