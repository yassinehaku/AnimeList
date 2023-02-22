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
  const {setSearchTerm, setSelectedGenre,selectedGenre} = useGlobalContext()
  const genres = useGenres()
  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedGenre(value);
  };

  return (
    <section className='searchform'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='search' >
          <Box >
            <TextField  label="searchAnime" id="searchAnime" onChange={(e) => setSearchTerm(e.target.value) } />
        </Box>
        </div>
        
      <div className='genres' >
      <Box sx={{ minWidth: 250,backgroundColor:'#ffffff' }}>
      <FormControl fullWidth>
      <InputLabel id="genres-select-label">Genre</InputLabel>
        <Select
          labelId="genres-select-label"
          id="genres-select"
          value={selectedGenre}
           label="Genre"
           onChange={handleChange}     
        >
          {genres.map(({id, name}) => (
                  <MenuItem key={name} value={id}>{name}</MenuItem>
                ))}
        </Select>
      </FormControl>
      </Box>
      </div>
      </form>
    </section>
  )
}
export default SearchForm
