import React from 'react'
import './Counter.css'
function Counter(props) {
  // console.log(props);
  let valueToBeSet = Number(props.counterValue);
  // console.log(valueToBeSet + ", counter number" + props.counterNumber);
  let [count,changeCount] = React.useState(0);
  if(props.counterNumber == props.number && count!=valueToBeSet){
    changeCount(valueToBeSet)
    props.resetVal();
  }
  const increment = ()=>{
    changeCount(count+1);
  }
  const decrement = ()=>{
    changeCount(count-1);
  }
  return (
    <div className='box'>
      <h2>Counter number {props.number}</h2>
      <button onClick={increment}>+</button>
      <p>Count = {count}</p>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter