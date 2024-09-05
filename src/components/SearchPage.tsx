import { useState } from "react"
import { useNavigate } from "react-router-dom";


const SearchComp = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

   const handleSearch = (e: any) => {
    e.preventDefault();

    navigate(`/search?q=${query}`)
   }
    return (
    <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)}/>

        <input type="submit" value={'pesquisar'} />
    </form>
  )
}

export default SearchComp