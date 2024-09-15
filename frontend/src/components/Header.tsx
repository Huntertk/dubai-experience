import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../styles/header.scss';

const Header = () => {
  return (
    <header className='tourHeader'>
        <nav className='tourNav'>
            <div className="logoContainer">
               <Link to="/"> 
               <img src={logo} alt="dubai experience" />
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Header