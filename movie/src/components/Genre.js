import React, { useState,useEffect } from 'react'

function Genre(props) {
  let [loaded,setLoaded] = useState(true);
  let [content, setContent] = useState([]);
  useEffect(()=>{
    async function fetchData() {
      let response = await fetch("https://react-backend101.herokuapp.com/genres");
      response = await response.json();
      setLoaded(false);
      setContent(response)
    }
    fetchData();
  },[])
  
  const sendGenre = (e)=>{
    props.setGlobalGenre(e.target.textContent);
  }
  return (
    <div className="Genre">
      <div className='mr-6 border-2 w-40 text-center h-10 font-bold' onClick={sendGenre}>All Genre</div>
      {loaded===true?<div>loading....</div> : 
      content.genres.map(function(genre){
        return <div key={genre._id} className='mr-6 border-2 w-40 text-center h-10 border-t-0 font-bold' 
        onClick={sendGenre}>{genre.name}</div>
      })}
    </div>
  )
}

export default Genre