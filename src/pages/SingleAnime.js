import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleAnime = () => {
  const {id} = useParams()
  const [anime,setAnime]=useState(null)
  const fetchSingleAnime = async () => {
    try {
      const url = `https://api.jikan.moe/v4/anime/`; 
      const response = await fetch (`${url}${id}`); 
      const Data = await response.json();
      const {data}=Data;
      if (data){
       // console.log("data");
       // console.log(data);
       
         const {
          title:title,
          images:images,
          episodes:episodes,
          rating:rating,
          score:score,
          status:status,
          genres:genres,
        } = data 
         const newSAnime = {
          title,
         images,
         rating,
         score,
         episodes,
         status,
         genres,
         }
        console.log(newSAnime);
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
  },[id])   
  if(!anime){
    return <h2 className='section-title'>no anime to display</h2>
  } else{
  const {
    title,
    images,
    episodes,
    rating,
    score,
    status,
    genres,
  } = anime
  return (
      <div >
    <div className='section'>
      <div className='singleanime'>
       <img src={images.jpg.image_url} alt='image'></img>
       <div className='sa-info'>
            <p>
              <span className='animemenu'>Name :</span> {title}
            </p>
            <p>
              <span className='animemenu'>Genres :</span> {genres.map(({name}) => name).join(', ')}
            </p>
            <p>
              <span className='animemenu'>Episodes :</span> {episodes}
            </p>
            <p>
              <span className='animemenu'>Status :</span> {status}
            </p>
            <p>
              <span className='animemenu'>Rating :</span> {rating}
            </p>
            <p>
              <span className='animemenu'>Score :</span> {score}
            </p>
        </div>     
     </div>       
    </div>
      </div>
  )}
}
//year type source season rank
export default SingleAnime
