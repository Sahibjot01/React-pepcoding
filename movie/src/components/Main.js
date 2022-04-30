import React from 'react'
import Genre from './Genre'
import Movies from './Movies'
function Main() {
  let [genre,setGenre] = React.useState("");
  let [currPage,setCurrPage] = React.useState(1);
  const setGlobalGenre = (newGenre)=>{
    if(newGenre === "All Genre"){
      setGenre("");
    }else{
      setGenre(newGenre);  
    }
    setCurrPage(1);
  }
  return (
    <div className='flex'>
      <Genre setGlobalGenre={setGlobalGenre}  
      />
      <Movies genre={genre}
      currPage={currPage}
      setCurrPage={setCurrPage}
      />
    </div>

  )
}

export default Main