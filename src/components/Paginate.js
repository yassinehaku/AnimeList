import React from 'react'
import { useGlobalContext } from '../context'
import Pagination from "@mui/material/Pagination"
const Paginate = () => {
  const {setPage,page} = useGlobalContext()
const handleChange =(page)=>{
  setPage(page)
}
  return (
<Pagination className='pagination' onChange={(e)=> handleChange(e.target.textContent) } count={500} color="secondary"></Pagination>

  )
}

export default Paginate
 