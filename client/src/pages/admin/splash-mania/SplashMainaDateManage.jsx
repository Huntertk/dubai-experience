import { Link } from 'react-router-dom'
import '../../../styles/manageDatesContainer.scss'
const SplashMainaDateManage = () => {
  return (
    <section className='manageDates'>
      <h1>Splash Mania</h1>
      <div className="btnContainer">
        <Link to="/admin/manage-dates/splash-mania/booktype-one">Ticket to Splash Mania</Link>
      </div>
    </section>
  )
}

export default SplashMainaDateManage