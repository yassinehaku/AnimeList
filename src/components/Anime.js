import React from 'react'
import { Link } from 'react-router-dom'
const Anime = ({title,image,episodes,genres,id}) => {
  return (
    <article  className='anime'>
    <div className='image-container'>
    <img src={image} alt={title} />
    </div>
    <div className='description'>
    <h1>{title}</h1>
    <h4> {episodes} episodes</h4>
    <h4> genre {genres}</h4>
    </div> 
    <div className='details'>
    <Link to ={`/anime/${id}`} className="btn">
      details
    </Link>
    </div>
    </article>
  )
}
export default Anime
