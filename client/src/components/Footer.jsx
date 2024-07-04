import '../styles/footer.scss';
import logo from '../assets/images/tvagologo.png';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footerMainContainer'>
        <div className="footerSubContainer">
            <div className="oneSubContainer">
                <div className="logoContainer">
                    <img src={logo} alt="Travelvago" />
                </div>
                <div className="contentContainer">
                    <p>Travelvago Sdn Bhd is a Malaysian-based travel agency. The company operates as both a Destination Management Company (DMC) and an Online Travel Agency.</p>
                </div>
                <div className="socialContainer">
                    <FaInstagram />
                    <FaFacebookSquare />
                </div>
            </div>
            <div className="twoSubContainer">
                <h1>Contact Info</h1>
                <div className="contactContainer">
                    <p>+60356124646</p>
                    <p>Kuala Lumpur, Malaysia</p>
                    <p>Mon - Sat 8.00 - 18.00 Sunday CLOSED</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer