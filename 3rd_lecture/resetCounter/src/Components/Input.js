import React from 'react'
import './Input.css'
function Input(props) {
  let [counter,changeCounter] = React.useState("");
  let [val,changeVal] = React.useState("");
  const firstInput = (event)=>{
    changeCounter(event.target.value);
  }
  const secondInput=(event)=>{
    changeVal(event.target.value);
  }
  const sendData = ()=>{
    props.acceptVal(counter,val)

  }
  return (<div className='inputBox'>
    <div>
    <span>Counter number : </span>
    <input type="text" onChange={firstInput} value={counter}></input>
    </div>
    <div>
    <span>Value : </span>
    <input type="text" onChange={secondInput} value={val}></input>
    </div>
    <button onClick={sendData}>Reset Counter</button>
  </div>)
}

export default Input