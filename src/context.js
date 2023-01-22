import React, {useState,useContext,useEffect} from "react";
import useDebounce from "./components/useDebounce";
const url='https://api.jikan.moe/v4/anime?'
const AppContext=React.createContext();
const AppProvider = ({children}) => {
    const [searchTerm,setSearchTerm]=useState('')
    const [page,setPage]=useState(1)
    const [animes,setAnimes]=useState([])
    const [genres,setGenres]=useState('')
    const debounceSearchTerm = useDebounce(searchTerm,400);
    const fetchAnimes = async ()=>{
        try {       
        const params = new URLSearchParams({...(searchTerm ? {q: searchTerm}: undefined),genres:genres , limit:24, page , order_by:"favorites", sort:"desc" })
        const response = await fetch(`${url}${params}`)
        /* console.log("here's the url");
        console.log(response); */
        const Data = await response.json();
        const {data} = Data;
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
                // genres:item.genres[0].name,
                 
                
            }
            })
            setAnimes(newList);
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
    },[searchTerm,page,genres,debounceSearchTerm])
    return(
    <AppContext.Provider value={{setSearchTerm,animes,genres,setGenres,setPage,page}}>
        {children}
    </AppContext.Provider>
)
}
export const useGlobalContext=()=>{
return useContext(AppContext)
}
export{AppContext,AppProvider}