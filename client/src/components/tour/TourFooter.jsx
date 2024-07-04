import logo from '../../assets/images/logo.png';
import '../../styles/tourFooter.scss';
import { Link } from 'react-router-dom'

const TourFooter = () => {
  return (
    <section className='tourFooter'>
        <div className="tourFooterMainContainer">
            <div className="tourFooterTopContainer">
                <img src={logo} alt="" />
                <p>Malaysia Experience</p>
            </div>
            <div className="tourMiddleContainer">
                <div className="getHelpContainer">
                    <a href='https://direct.lc.chat/16744881/' target='_blank'><p>Chat With Us</p></a>  
                    <a href="tel:+60356124646">
                        <p>Call Us</p>
                    </a>
                    <p><a href="mailto:support@malaysia-experience.com"> Email Us </a></p>
                    <Link to={"/helpcenter"}>
                        <p>Help Center</p>
                    </Link>
                </div>
                <div className="legalContainer">
                    <Link to="/terms"><p>Terms & Conditions</p></Link>
                    <Link to="/privacypolicy"><p>Privacy Policy</p></Link>
                    <Link to="/companydetails">
                        <p>Company Details</p>
                    </Link>
                    <Link to="/admin/login"><p>Admin</p></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TourFooter