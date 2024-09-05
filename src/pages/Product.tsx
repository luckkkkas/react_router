import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const {id} = useParams();
  const url = 'http://localhost:3000/products/'+id;
  const {data: product} = useFetch(url);

  return (
    <>
      <h1>{product.name}</h1>
      <p>R${product.price}</p>

      <Link to={`/product/${id}/info`}>mais info</Link>
    </>
  )
}

export default Product