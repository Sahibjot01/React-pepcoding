import React from 'react'

function Pagination(props) {
  let {moviesToShowPerPage ,filteredArrLength, currPage ,setCurrentPage} = props;
  // console.log(moviesToShowPerPage + " " + filteredArrLength);
  let totalPages = Math.ceil(filteredArrLength/moviesToShowPerPage);
  let pagesArr = []
  for(let i = 1; i<=totalPages;i++){
    pagesArr.push(i);
  }
  return (
    <div className='my-2'>
    {pagesArr.map((pageNo)=>{
      if(currPage === pageNo){
          return (<button key={pageNo} className="bg-blue-500 text-white border-2 py-2 px-3 rounded" onClick={()=>setCurrentPage(pageNo)}>{pageNo}</button>)
        }else{
          return (<button key={pageNo} className="hover:bg-blue-500 hover:text-white  border-2 py-2 px-3 rounded" onClick={()=>setCurrentPage(pageNo)}>{pageNo}</button>)
        }
      }
    )}
    </div>
  )
}

export default Pagination