import { Link } from 'react-router-dom'
import '../../../styles/manageDatesContainer.scss'
const ArasResturantDateManage = () => {
  return (
    <section className='manageDates'>
      <h1>Splash Mania</h1>
      <div className="btnContainer">
        <Link to="/admin/manage-dates/aras-resturant/booktype-one">Dinner Buffet</Link>
        <Link to="/admin/manage-dates/aras-resturant/booktype-two">Tea Buffet</Link>
      </div>
    </section>
  )
}

export default ArasResturantDateManage