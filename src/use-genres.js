import { useEffect, useState } from "react"

// Genre { id: string, name: string }
const API_URL = 'https://api.jikan.moe/v4/genres/anime'
export const useGenres = () => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
        fetch(`${API_URL}`).then(async (response) => {
          const {data} = await response.json()
          setGenres(data.map(({mal_id, name})=> ({id: mal_id, name})))
        }).catch((error) => [])
  }, [])

  return genres
}
