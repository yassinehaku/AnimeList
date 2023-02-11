import React from 'react'
import SearchForm from '../components/SearchForm'
import AnimeList from '../components/AnimeList'
import Paginate from '../components/Paginate'
const Home = () => {
  return (
    <div >
      <SearchForm />
      <AnimeList />
      <Paginate />
    </div>
  )
}

export default Home
