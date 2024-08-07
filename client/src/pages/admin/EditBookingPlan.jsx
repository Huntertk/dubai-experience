import { Link } from "react-router-dom"
import '../../styles/editBookingPlan.scss';

const EditBookingPlan = () => {
  return (
    <div className="edit-booking-plan-main-container">
        <h1>Edit Tickets</h1>
        <h3>Select Product</h3>
        <div className="btnContainer">
        <Link to="/admin/booking-plan/edit/dubai-frame">Dubai Frame</Link>
        <Link to="/admin/booking-plan/edit/aya-universe">Aya Universe</Link>
      </div>
    </div>
  )
}

export default EditBookingPlan