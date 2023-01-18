import React from 'react'
import { useGlobalContext } from '../context'
const Pagination = () => {
  const {setPage,page} = useGlobalContext()
  // const {page} = useGlobalContext()
  return (
    <div className='pagination'>
      <button onClick={() => setPage(page - 1)} >Prev</button>
      <button onClick={() => setPage(1)}> 1</button>
      <button onClick={() => setPage(2)}> 2</button>
      <button onClick={() => setPage(3)}> 3</button>
      <button onClick={() => setPage(4)}> 4</button>
      <button onClick={() => setPage(5)}> 5</button>
      <button onClick={() => setPage(6)}> 6</button>
      <button onClick={() => setPage(7)}> 7</button>
      <button onClick={() => setPage(8)}> 8</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  )
}

export default Pagination
 