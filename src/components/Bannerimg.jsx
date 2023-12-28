import React, {useEffect,useState} from 'react'
import './banner.css'
import tmdbAxiosInstance from '../tmdbAxiosInstance';

function Bannerimg({fetchUrl}) {
     
  const base_url = `https://image.tmdb.org/t/p/original/`;
  const [movies, setMovies]=useState({})

  const fetchData=async()=>{
    const {data} =await tmdbAxiosInstance.get(fetchUrl)
    setMovies(data.results[Math.floor(Math.random()*data.results.length)])
    // console.log("data:",Math.floor(data.results[Math.random()*data.result.length]))
  }
//   console.log("set:",movies);

   useEffect(()=>{
    fetchData()
   },[])

  return (
    <div
    style={{
        height:"600px",
        backgroundImage:`url(${base_url}/${movies?.backdrop_path})`
    }}>
        <div className='banner-content'>
            <h1>{movies?.name}</h1>
            <h5>{movies?.overview}</h5>

        </div>
    </div>
  )
}

export default Bannerimg