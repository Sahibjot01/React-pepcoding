import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'
function Movies(props) {
  let [searchText, setSearchText] = React.useState("");
  let [moviesCount, setCount] = React.useState(9);
  
  const setGlobalSearchText = (text)=>{
    setSearchText(text);
  }
  const setMoviesCount = (count)=>{
    setCount(count);
  }
  return (
    <div>
    <InputBox setGlobalSearchText={setGlobalSearchText} setMoviesCount={setMoviesCount}/>
    <MoviesTable searchText={searchText} moviesCount={moviesCount} genre={props.genre}/>
    <Pagination/>
    </div>
  )
}

export default Movies