import './Countergroup.css'
import React from 'react'
import Counter from './Counter'
function Countergroup(props) {
  // console.log(props);
  return (
    <div className='group'>
      <Counter number={1} counterNumber={props.counterNumber} counterValue={props.counterValue} resetVal={props.resetVal}/>
      <Counter number={2} counterNumber={props.counterNumber} counterValue={props.counterValue} resetVal={props.resetVal}/>
      <Counter number={3} counterNumber={props.counterNumber} counterValue={props.counterValue} resetVal={props.resetVal}/>
    </div>
  )
}

export default Countergroup