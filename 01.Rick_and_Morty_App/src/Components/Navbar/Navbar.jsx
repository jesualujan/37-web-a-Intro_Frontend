import './navbar.css'
import logo from '../../assets/react.svg'
const Navbar = () => {
  return (
     <nav className='navbar navbar-dark bg-dark'>
        <a className='navbar__link'>Rick and Morty</a>
        <div className='navbar__container-fluid'>
            <img className="navbar__logo" src={logo}  alt="logo_rick_and_morty" />
        </div>
     </nav>
     
  )
}

export default Navbar