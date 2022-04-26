import React, { useState,useEffect } from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'

function Movies(props) {
  let [searchText, setSearchText] = React.useState("");
  let [moviesToShowPerPage, setCount] = React.useState(4);
  let [currPage,setCurrPage] = React.useState(1);
  //*******************************************taken from movies Table********************* */
  let [isLoaded,setLoaded] = useState(true);
  let [moviesArr,setMoviesArr] = useState([]);
  // fetch is a feature of browser that makes the request to get data -> promise based
  useEffect(()=>{
    async function fetchData(){
      let response = await fetch('https://react-backend101.herokuapp.com/movies');
    // console.log(response);
    response = await response.json();
    setLoaded(false);
    setMoviesArr(response.movies)
    }
    fetchData();
  },[])
  //************************************************************************************** */
  const setGlobalSearchText = (text)=>{
    setSearchText(text);
  }
  const setmoviesToShowPerPage = (count)=>{
    setCount(count);
  }
  const setCurrentPage = (pageNo)=>{
    console.log("from movies fn page no is " + pageNo);
    setCurrPage(pageNo);
  }
  return (
    <div>
    <InputBox 
    setGlobalSearchText={setGlobalSearchText} 
    setmoviesToShowPerPage={setmoviesToShowPerPage}/>

    <MoviesTable 
    searchText={searchText} 
    moviesToShowPerPage={moviesToShowPerPage} 
    genre={props.genre}
    isLoaded={isLoaded}
    moviesArr={moviesArr} 
    setMoviesArr={setMoviesArr}
    currPage={currPage}/>
    <Pagination
    moviesToShowPerPage={moviesToShowPerPage}
    moviesArrLength={moviesArr.length}
    currPage={currPage}
    setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Movies