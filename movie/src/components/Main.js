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
      <div className='w-1/6'>
      <Genre setGlobalGenre={setGlobalGenre}  
      />
      </div>
      <div className='w-5/6'>
      <Movies genre={genre}
      currPage={currPage}
      setCurrPage={setCurrPage}
      />
      </div>
    </div>

  )
}

export default Main