import { Link } from "react-router-dom"
import '../../styles/bookingPlan.scss';

const BookingPlan = () => {
  return (
    <div className="booking-plan-main-container">
        <h1>Tickets</h1>
        <div className="btnContainer">

            <Link to="/admin/booking-plan/create">Create new Ticket</Link>
            <Link to="/admin/booking-plan/edit">Edit Ticket</Link>
        </div>
    </div>
  )
}

export default BookingPlan