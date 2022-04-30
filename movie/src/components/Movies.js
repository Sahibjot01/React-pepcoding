import React, { useState,useEffect } from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'

function Movies(props) {
  let {currPage,setCurrPage} = props;
  let [searchText, setSearchText] = React.useState("");
  let [moviesToShowPerPage, setCount] = React.useState(4);
  //*******************************************taken from movies Table********************* */
  let [isLoaded,setLoaded] = useState(true);
  let [content,setContent] = useState([]);
  // fetch is a feature of browser that makes the request to get data -> promise based
  useEffect(()=>{
    async function fetchData(){
      let response = await fetch('https://react-backend101.herokuapp.com/movies');
    // console.log(response);
    response = await response.json();
    setLoaded(false);
    setContent(response)
    }
    fetchData();
  },[])
  let filteredArr = [];
  let totalMoviesArr =[];
  let startIdx = (currPage-1)*moviesToShowPerPage;
  let endIdx = startIdx + moviesToShowPerPage
  if(content.movies){
    filteredArr = content.movies
    // console.log(filteredArr);
    //search wala logic
    if(searchText !== ""){
      filteredArr = filteredArr.filter((movie)=>{
          let lowerCaseMovie = movie.title.toLowerCase();
          let lowerCaseSearchText = searchText.toLowerCase();
          return lowerCaseMovie.includes(lowerCaseSearchText);
      })
  }
    //genre wala logic
    if(props.genre !== ""){
      filteredArr = filteredArr.filter((movie)=>{
        return movie.genre.name.trim() === props.genre.trim();
      })
    }
    totalMoviesArr = filteredArr;
    //pagination
    // console.log(props.moviesCount);
    // console.log("Start idx " + typeof(startIdx) +" end idx " + typeof(endIdx) + " end");
    filteredArr = filteredArr.slice(startIdx,endIdx);
  }
  //************************************************************************************** */
  const setGlobalSearchText = (text)=>{
    setSearchText(text);
    setCurrPage(1);
  }
  const setmoviesToShowPerPage = (count)=>{
    setCount(moviesToShowPerPage= count);
    setCurrPage(1);
  }
  const setCurrentPage = (pageNo)=>{
    // console.log("from movies fn page no is " + pageNo);
    setCurrPage(pageNo);
  }
  return (
    <div className='flex flex-col'>
    <div>
    <InputBox 
    setGlobalSearchText={setGlobalSearchText} 
    setmoviesToShowPerPage={setmoviesToShowPerPage}/>
    </div>

    <MoviesTable 
    isLoaded={isLoaded}
    filteredArr={filteredArr} 
    content={content}
    setContent={setContent}
    startIdx={startIdx}/>  

    <Pagination 
    moviesToShowPerPage={moviesToShowPerPage}
    filteredArrLength={totalMoviesArr.length}
    currPage={currPage}
    setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Movies