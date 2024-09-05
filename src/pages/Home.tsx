import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'


const Home = () => {

  const url = 'http://localhost:3000/products'
  const {data: items} = useFetch(url);

  return (
    <>
    <h1>Produtos</h1>
    <ul>
      {items ? (items.map((element) => (
        <li key={element.id}>
          {element.name}
          <Link to={`/product/${element.id}`}>detalhes</Link>
        </li>))):('carregando....')}
    </ul>
    </>
  )
}

export default Home