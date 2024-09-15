import {formatDistanceToNow} from 'date-fns/formatDistanceToNow'
import { format } from 'date-fns';
import '../../styles/allBookings.scss'
import { TypeBooking } from '../../redux/type';

type TypeBookingCardProps = {
    booking:TypeBooking;
    index:number;
}

const BookingCard = ({booking, index}:TypeBookingCardProps) => {
    

  return (
    <div className="cardContainer">
      <div className='cardTopStatusContent'>
        <span>{index + 1} </span>
        <span className={booking.payment === false ? "payment-fail": ""}>#{booking.bookingStatus}</span>
      </div>
        <span>Booking ID: #{booking.bookingId}</span>
        <span>Payment: <span className={booking.payment === false ? "payment-fail": ""}>{booking.payment ? "complete" : "not complete"}</span></span>
        <span>Order ID: {booking._id}</span>
          <p>Date of Reservation : {format(booking.bookingDate, 'PPP')}</p>
          <p>Reservation-Type : {booking.ticketTitle}</p>
          { booking.preference && <p>Preference : {booking.preference}</p>}
          <p>Booked By : {booking.name}</p>
          <p>Contact : {booking.mobileNumber}</p>
          <p>Email : {booking.email}</p>
            <h3>Total Person</h3>
          <div className="personCount">
            <p>Adult X {booking.adultCount}</p>
            <p>Child X {booking.childCount}</p>
          </div>
          {/* <div className="bookingStatus">
            <span>Booking Status : </span>
            <select onChange={(e) => setNewBookingStatus(e.target.value)}>
              <option value={bookingStatus}>{bookingStatus}</option>
              <option value={"payment not verified"}>payment not verified</option>
              <option value={"confirmed"}>confirmed</option>
              <option value={"completed"}>completed</option>
              <option value={"cancelled"}>cancelled</option>
              <option value={"pending"}>pending</option>
            </select>
            <button className='updateBtn' onClick={updateBooking}>update</button>
          </div> */}
          <p className='totalBill'>Total Bill : AED {booking.totalAmount}</p>
          <p>Order Created On : {format(new Date(booking.createdAt), 'MM/dd/yyyy')}</p>
          <p>Last Update at  {formatDistanceToNow(new Date(booking.updatedAt), { addSuffix: true })}</p>
      </div>
  )
}

export default BookingCard