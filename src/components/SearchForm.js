import React from 'react'
import { useGlobalContext } from '../context'
import { useGenres } from '../use-genres'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
const SearchForm = () => {
  const {setSearchTerm, setSelectedGenre} = useGlobalContext()
  const genres = useGenres()
  const handleSubmit =(e)=>{
    e.preventDefault()
  }

  return (
    <section className='searchform'>
      <form onSubmit={handleSubmit}>
        <div className='search' >
            <TextField  label="searchAnime" id="searchAnime" onChange={(e) => setSearchTerm(e.target.value) } />
        </div>
        </form>
      <div className='genres' >
      <Box sx={{ minWidth: 250,backgroundColor:'#ffffff' }}>
      <FormControl fullWidth>
      <InputLabel id="genres-label">Genre</InputLabel>
        <Select
          labelId="genres-label"
          id="genres"
          value={ genres.map(({name}) => (name))}
          label="Genre"
          onChange={(e) => setSelectedGenre(e.target.value)}  
          
        >
          {genres.map(({id, name}) => (
                  <MenuItem value={id}>{name}</MenuItem>
                ))}
        </Select>
      </FormControl>
      </Box>
      </div>

    </section>
  )
}
export default SearchForm
