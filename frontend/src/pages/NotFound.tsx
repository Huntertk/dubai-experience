import '../styles/notFoundPage.scss'
import image from '../assets/images/404.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='errorPage'>
        <img src={image} alt="not found" />
        <h1>Oops! the Page you looking could not found.</h1>
        <Link to="/">Go Home</Link>
    </section>
  )
}

export default NotFound