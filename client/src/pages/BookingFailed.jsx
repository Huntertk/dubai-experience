import { FaXmark } from "react-icons/fa6";
const BookingFailed = () => {
  return (
    <section className="paymentSuccessPage">
      <div className='content'>
        <FaXmark />
        <h1>Booking Failed</h1>
        <div className='bookingConfirmationDetails'>
          <h3>Payment Failed</h3>
        </div>
      <a href="/" className='btn'>Go Home</a>
      </div>
    </section>
  )
}

export default BookingFailed