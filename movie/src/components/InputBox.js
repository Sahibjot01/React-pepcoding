import React from 'react';
import {Link} from 'react-router-dom';

function InputBox(props) {
  let [searchText, setSearchText] = React.useState("");
  let [numberOfItems, setNumberOfItems] = React.useState(4);
  //to set initial number of movies to display
  // props.setMoviesCount(numberOfItems);
  const handleText = (e) => {
    setSearchText(e.target.value);
    props.setGlobalSearchText(e.target.value);
  }
  const handleCount = (e) => {
    let num = Number(e.target.value)
    setNumberOfItems(num);
    props.setmoviesToShowPerPage(num);
  }
  return (
    <>
      <Link to="/new">
      <button className="bg-blue-500 hover:bg-blue-700 text-white 
      font-bold py-2 px-4 border border-white-700 rounded">New</button>
      </Link>
      
      <input  className="border rounded py-1 px-1 mx-2 text-sm font-bold" 
      type="text" value={searchText} onChange={handleText} placeholder="Search Movie"></input>
      <input type="number" min="1" max="12" className="border rounded py-1 px-1 mx-2 font-bold" 
      value={numberOfItems} onChange={handleCount}></input>
    </>
  )
}

export default InputBox