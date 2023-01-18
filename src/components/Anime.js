import React from 'react'
const Anime = ({title,image,episodes,genres}) => {
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
    </article>
  )
}
export default Anime
