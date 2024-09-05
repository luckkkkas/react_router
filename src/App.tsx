import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/navBar'
import Product from './pages/Product'
import InfoProduct from './pages/InfoProduct'
import NotFound from './pages/NotFound'
import SearchComp from './components/SearchPage'
import SearchPage from './pages/SearchPage'

function App() {
 
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <SearchComp />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/product/:id/info' element={<InfoProduct />} />
        <Route path='/*' element={<NotFound />} />
        <Route path ='/search' element={<SearchPage/>} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
