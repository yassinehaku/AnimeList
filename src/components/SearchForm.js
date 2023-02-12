import React from 'react'
import { useGlobalContext } from '../context'
import { useGenres } from '../use-genres'
const SearchForm = () => {
  const {setSearchTerm, setSelectedGenre} = useGlobalContext()
  const genres = useGenres()
  const searchValue = React.useRef('');
  const handler = ()=>{
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
  }

  return (
    <section className='searchform'>
      <form onSubmit={handleSubmit}>
        <div className='search'>
          <label htmlFor='name'>search anime</label>
          <input type='text' id='name' ref={searchValue} onChange={handler} className='input' />
        </div>
        </form>
      <div className='genres'>
        <label htmlFor='genres' >genres</label>
        <select id="genres" name="genres" className='input' onChange={(e) => setSelectedGenre(e.target.value) }>
                {genres.map(({id, name}) => (
                  <option value={id}>{name}</option>
                ))}
         </select>
      </div>
    </section>
  )
}
export default SearchForm
