import './App.css';
import Input from'./Components/Input';
import Countergroup from './Components/Countergroup'
import React from 'react';

function App() {
  let [counterNumber,changecounterNumber] = React.useState("");
  let [counterValue,changecounterValue] = React.useState("");
  const acceptVal = (counter,val)=>{
    console.log("inside main counter = " + counter + " val = " + val);
    changecounterNumber(counterNumber=counter);
    changecounterValue(counterValue=val);
  }
  const resetVal =()=>{
    changecounterNumber("");
    changecounterValue("");
  }
  return (
    <div className='container'>
<h1>Reset Counter App</h1>
<Input acceptVal={acceptVal}/>
<Countergroup counterNumber={counterNumber} counterValue={counterValue} resetVal={resetVal}/>

    </div>
  );
}

export default App;
