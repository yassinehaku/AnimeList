import React, { useEffect, useState } from 'react'

const SingleAnime = () => {
  const [anime,setAnime]=useState(null)
  const fetchSingleAnime = async () => {
    try {
      const url = `https://api.jikan.moe/v4/anime/5114`; //${id}
      const response = await fetch (`${url}`); //${id}
      const Data = await response.json();
      const {data}=Data;
      if (data){
        console.log("data");
        console.log(data);
          const {
            genres:genres,
            images:images,
            episodes:episodes,
            rating:rating,
            score:score,
          } = data[0]
      
        const newSAnime={
          genres,
          images,
          episodes,
          rating,
          score,
        }
        setAnime(newSAnime)
      }
        else {
          setAnime(null)
        }
      }
     catch (error) {
      console.log(error);
    }
   }
    useEffect(()=>{
    fetchSingleAnime();
  },[])   //[id]
  if(!anime){
    return <h2 className='section-title'>no anime to display</h2>
  } else{
  const {
    genres,
    images,
    episodes,
    rating,
    score,
  } = anime
  return (
      <div>
    <div className='section'>
      <h2 className='animemenu'>Name:</h2>
      <h2 className='animemenu'>Genres:{genres} </h2>
      <h2 className='animemenu'>Episodes:{episodes} </h2>
       <h2 className='animemenu'>Status:</h2> 
      <h2 className='animemenu'>Rating:{rating} </h2>
      <h2 className='animemenu'>Score:{score} </h2>
    </div>
      </div>
  )}
}

export default SingleAnime
