import {useState} from 'react';
import './counte.css';

export default function Counter(){
    let [count,setCount]=useState(0);
   
    let incCount=()=>{
        setCount(count+1)
        // console.log(count);
    }
    let decCount=()=>{
        setCount(count-1)
    }
    let reset=()=>{
        setCount(count=0)
    }
    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={incCount}>Increase Count</button>
            <button onClick={decCount}>Decrease Count</button>
            <button onClick={reset}>Reset to Zero</button>
        </div>
    );
}