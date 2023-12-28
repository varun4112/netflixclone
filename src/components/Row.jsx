import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import "./row.css"

function Row({title,fetchUrl,isPoster}) {
    // console.log(fetchUrl);
    
  const base_url = `https://image.tmdb.org/t/p/original/`;
    const [allmovies, setAllmovies]=useState()

    const fetchData=async()=>{
      const {data} =await tmdbAxiosInstance.get(fetchUrl);
      setAllmovies(data.results)
      // console.log(data.results)
    }
    // console.log("set:",allmovies);

     useEffect(()=>{
      fetchData()
     },[])

  return (
    <div>
      <div className='row'>
      <h3>{title}</h3>
        <div className="movies_row">
          {allmovies?.map(item=><img className={`${isPoster&&'movie-poster'},movies`} src={`${base_url}/${isPoster?item.poster_path:item.backdrop_path}`} alt='noimg'/>)}
        </div>  
      </div>
            
    </div>
  )
}

export default Row