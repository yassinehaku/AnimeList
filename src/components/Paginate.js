import React from 'react'
import { useGlobalContext } from '../context'
import Pagination from "@mui/material/Pagination"
const Paginate = () => {
  const {setPage, pagesCount} = useGlobalContext()
const handleChange =(page)=>{
  setPage(page)
}
  return (
<Pagination className='pagination' onChange={(e)=> handleChange(e.target.textContent) } count={pagesCount} color="primary"></Pagination>

  )
}

export default Paginate
