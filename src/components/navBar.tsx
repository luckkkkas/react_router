import {Link, NavLink} from 'react-router-dom'
import './navBar.css'

const NavBar = () => {
  return (
    <nav className='nav'>
        {/* <Link className='link' to={'/'} >Home</Link>
        <Link className='link' to='/about' >About</Link>  */}
        {/* <Link className='link' to='/product/:id' >Product</Link>     */}
        <NavLink className='link' to={'/'} >Home</NavLink>
        <NavLink className='link' to='/about' >About</NavLink>
    </nav>
  )
}

export default NavBar