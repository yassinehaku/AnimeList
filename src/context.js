import React, {useState,useContext,useEffect} from "react";
const url='https://api.jikan.moe/v4/anime?'
const AppContext=React.createContext();
const AppProvider = ({children}) => {
    const [searchTerm,setSearchTerm]=useState('')
    const [page,setPage]=useState(1)
    const [animes,setAnimes]=useState([])
    const [selectedGenre, setSelectedGenre]=useState(null)
    const [pagesCount, setPagesCount]=useState(1)
    const fetchAnimes = async ()=>{
        try {
        const params = new URLSearchParams({...(searchTerm ? {q: searchTerm}: undefined), ...(selectedGenre ? {genres: selectedGenre} : undefined),limit:24, page, order_by:"favorites", sort:"desc" })
        const response = await fetch(`${url}${params}`)
        /* console.log("here's the url");
        console.log(response); */
        const Data = await response.json();
        const {data, pagination: {last_visible_page}} = Data;
        if (data) {
            const newList = data.map((item)=>{
                const{mal_id,title,rating,episodes}=item
                /* console.log("here's item");
                console.log(item); */
            return {
                id:mal_id,
                title:title,
                image:item.images.jpg.image_url,
                rating:rating,
                episodes:episodes,
                genres: item.genres.map(({name}) => name)
            }
            })
            setAnimes(newList);
            setPagesCount(last_visible_page)
        }
        else {
            setAnimes([]);
        }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchAnimes()
    },[searchTerm,page,selectedGenre])
    return(
    <AppContext.Provider value={{setSearchTerm,animes,setPage,page, pagesCount, setSelectedGenre}}>
        {children}
    </AppContext.Provider>
)
}
export const useGlobalContext=()=>{
return useContext(AppContext)
}
export{AppContext,AppProvider}
