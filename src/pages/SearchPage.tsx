import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const SearchPage = () => {
    const [search] = useSearchParams();
    const url = 'http://localhost:3000/products?'+search;
    const {data: items} = useFetch(url);
    console.log(items)

    return (
    <>
    <h1>produtos disponiveis</h1>
    <ul>
        {items && items.map((element) => <><li>{element.name}</li></>)}
    </ul>
    </>
  )
}

export default SearchPage