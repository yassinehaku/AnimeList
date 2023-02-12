import React from 'react'
import { useGlobalContext } from '../context'
const SearchForm = () => {
  const {setSearchTerm, setGenres, genres} = useGlobalContext()
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
        <select id="genres" name="genres" value={genres} className='input' onChange={(e) => setGenres(e.target.value) }>
                <option value='action'>Action</option>
                <option value='adventure'>Adventure</option>
                <option value='comedy'>Comedy</option>
                <option value='drama'>Drama</option>
         </select>
      </div>
    </section>
  )
}
export default SearchForm
