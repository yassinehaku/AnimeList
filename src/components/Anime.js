import React from 'react'
import { Link } from 'react-router-dom'
const Anime = ({title,image,episodes,genres,id}) => {
  return (
    <article  className='anime'>
    <div className='image-container'>
     <Link to ={`/anime/${id}`} >
     <img src={image} alt={title} />
     </Link>
    </div>
    <div className='description'>
    <h1>{title}</h1>
    <h4> {episodes} episodes</h4>
    <h4> genre {genres.slice(0,1)}</h4>
     <Link to ={`/anime/${id}`} className="btn">
      Details
    </Link>
    </div> 
    
   
    </article>
  )
}
export default Anime
