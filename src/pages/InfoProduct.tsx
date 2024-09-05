import { useParams } from "react-router-dom"

const InfoProduct = () => {
    const {id} = useParams();
  return (
    <h1>mais informações do produto {id}</h1>
  )
}

export default InfoProduct