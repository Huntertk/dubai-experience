import { Link } from 'react-router-dom'
import '../../../styles/manageDatesContainer.scss'

const SunwayLagoonDateManage = () => {
  return (
    <section className='manageDates'>
      <h1>Sunway Lagoon Mania</h1>
      <div className="btnContainer">
        <Link to="/admin/manage-dates/sunway-lagoon/booktype-one">Full Day Admission</Link>
        <Link to="/admin/manage-dates/sunway-lagoon/booktype-two">Quack Express Only</Link>
        <Link to="/admin/manage-dates/sunway-lagoon/booktype-three">Night Park</Link>
        <Link to="/admin/manage-dates/sunway-lagoon/booktype-four">Combo Admission + Quack Express</Link>
      </div>
    </section>
  )
}

export default SunwayLagoonDateManage