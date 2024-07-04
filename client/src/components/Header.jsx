import '../styles/header.scss';
import logo from '../assets/images/logo.png';
import { FaAlignRight } from "react-icons/fa6";
import { useState } from 'react';
import SmallNavbar from './SmallNavbar';
import { Link } from 'react-router-dom';
import BigNavbar from './BigNavbar';
import {motion} from 'framer-motion';


const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false)
    const easeScaleUp = {
        initial:{
          scale:0,
          opacity:0
        },
        whileInView:{
          scale:1,
          opacity: 1
        },
      }
  return (
    <div className="headerMainContainer">
        <div className="headerLogoContainer">
            <Link to="/">
                <motion.img 
                src={logo} alt="Discover the Heart of Asia with Travelvago" className='headerLogo' 
                {...easeScaleUp}

                />
            </Link>
        </div>
        <div className="smallHeaderNavMainContainer">
            <motion.div {...easeScaleUp}>
                <FaAlignRight onClick={() => setNavOpen(true)} /> 
            </motion.div>
            {
            isNavOpen && <SmallNavbar isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
            }
        </div>
        <div className="bigHeaderNavMainContainer">
            <BigNavbar />
        </div>
    </div>
  )
}

export default Header