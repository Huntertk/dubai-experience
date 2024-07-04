import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';

const SmallNavbar = ({setNavOpen}) => {
    const easeScaleUp = {
        initial:{
          y:-100,
          opacity:0
        },
        animate:{
          y:0,
          opacity: 1
        },
        transition:{
            duration: 0.1
        }
      }
  return (
    <>
    <motion.nav className='smallNavContainer'
        {...easeScaleUp}
    >
        <ul className='smallHeaderNavContainer'>
        <IoCloseOutline onClick={() => setNavOpen(false)} />
            <NavLink to="/" 
            className='navLinks'
            onClick={() => {
                setNavOpen(false)
            }}
            >Home</NavLink>
            
            <NavLink to="/tours" 
            className='navLinks'
            onClick={() => {
                setNavOpen(false)
            }}
            >Tours</NavLink>
            
            <NavLink to="/about" 
            className='navLinks'
            onClick={() => {
                setNavOpen(false)
            }}
            >About</NavLink>
            
            <NavLink to="/home" 
            className='navLinks'
            onClick={() => {
                setNavOpen(false)
            }}
            >Contact</NavLink>
            
        </ul>
    </motion.nav>
    </>
  )
}

export default SmallNavbar