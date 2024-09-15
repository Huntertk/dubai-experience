import { FaXmark } from "react-icons/fa6";
import '../styles/PaymentSuccess.scss';

const FailedBooking = () => {
  return (
    <section className="paymentSuccessPage">
      <div className='content'>
        <FaXmark />
        <h1>Booking Failed</h1>
      <a href="/" className='btn'>Go Home</a>
      </div>
    </section>
  )
}

export default FailedBooking
