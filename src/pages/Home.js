import React from 'react'
import SearchForm from '../components/SearchForm'
import AnimeList from '../components/AnimeList'
import Pagination from '../components/Pagination'
const Home = () => {
  return (
    <div className='home'>
      <SearchForm />
      <AnimeList />
      <Pagination />
    </div>
  )
}

export default Home
