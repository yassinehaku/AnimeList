import React from 'react'
import Anime from './Anime'
import { useGlobalContext } from '../context'
const AnimeList = () => {
  const { animes }= useGlobalContext()
  console.log(animes);
  if (animes.length < 1) {
    return (
    <h2>
      no animes matched 
    </h2>)
  }
  return (
    <div className='anime-container'>
     {animes.map((anime)=>{
      return <Anime key={anime.id} {...anime} />
     })}
    </div>
  )
}

export default AnimeList
