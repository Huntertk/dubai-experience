import logo from '../../assets/images/logo.png';
import '../../styles/tourFooter.scss';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const TourFooter = () => {
  return (
    <section className='footerMainSection'>
        <div className="footerMainContainer">
            <div className="footerSubConatiner">
                <div className="logoContainer">
                    <img src={logo} alt="Travelvago" />
                </div>
                <p>Travelvago Sdn Bhd is a Malaysian-based travel agency. The company operates as both a Destination Management Company (DMC) and an Online Travel Agency.</p>
                <div className="socailIcons">
                    <a href="https://www.instagram.com/jomtravellocal/?hl=en" target='__blank'>
                        <FaInstagram className='instagram' />
                    </a>
                    <a href="https://www.facebook.com/travelvagoasia/" target='__blank'>
                        <FaFacebookSquare className='facebook' />
                    </a>
                    
                </div>
                
            </div>
            <div className="footerSubConatiner">
                <p className='footerTitle'>Quick Links</p>
                <div className="linksContainer">
                    <NavLink to="/terms-condition">Terms & Condition</NavLink>
                    <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                    <NavLink to="/help-center">Help Center</NavLink>
                    <NavLink to="/company-details">Company Details</NavLink>
                </div>
            </div>
            <div className="footerSubConatiner">
                <p className='footerTitle'>Need Help</p>
                <div className="contactDetailsContainer">
                    <p className='contactTitle'>For General Enquiries</p>
                    <p>+60356124646</p>
                </div>
                <div className="contactDetailsContainer">
                    <p className='contactTitle'>For Ticketing Enquiries</p>
                    <p>+6017-3078194</p>
                </div>
                <div className="contactDetailsContainer">
                    <p className='contactTitle'>Email us at</p>
                    <p className='email'>support@dubaiexperience.com</p>
                </div>
            </div>
        </div>
        <div className="copyRightMainContainer">
            <p>Copyright © {new Date(Date.now()).getFullYear()} Travelvago</p>
        </div>
    </section>
  )
}

export default TourFooter