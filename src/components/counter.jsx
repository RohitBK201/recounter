import { useState } from "react"
import "./counter.css"

export const Counter = () =>{

 const [counter,setCounter] = useState(0)

 const handlecount = (value) =>{

    setCounter(counter+value)

 }

 let cls=""

 if(counter%2==0)
 {
   cls = "green"  
 }
 else{
     cls = "red"
 }

return(
    <div>
        <h1 className={cls}>counter : {counter}</h1>
        <button onClick={()=>{handlecount(1)}}> + </button>
        <button onClick={()=>{handlecount(-1)}}> - </button>
        <button onClick={()=>{handlecount(counter)}}>2x</button>
    </div>
);

}