import React from 'react'
import Genre from './Genre'
import Movies from './Movies'
function Main() {
  let [genre,setGenre] = React.useState("");
  const setGlobalGenre = (newGenre)=>{
    if(newGenre === "All Genre"){
      setGenre("");
    }else{
      setGenre(newGenre);  
    }
  }
  return (
    <div className='flex'>
      <Genre setGlobalGenre={setGlobalGenre}  />
      <Movies genre={genre}/>
    </div>

  )
}

export default Main