import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import tvagologo from '../../assets/images/tvagologo.png'
import '../../styles/tourHeader.scss';

const TourHeader = () => {
  return (
    <header className='tourHeader'>
        <nav className='tourNav'>
            <div className="logoContainer">
               <Link to="/"> <img src={logo} alt="" /> <span>by</span> <img className='companyImg' src={tvagologo} alt="Image" /> </Link>
            </div>
        </nav>
    </header>
  )
}

export default TourHeader