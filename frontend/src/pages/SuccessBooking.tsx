import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import { format } from 'date-fns';
import LoadingSpinner from '../components/Loader';
import { useGetSuccessBookingQuery } from '../redux/api/bookingApi';
import '../styles/PaymentSuccess.scss'

const SuccessBooking = () => {
  const navigate = useNavigate();
  const [searchParams]  = useSearchParams();
  const token = searchParams.get('token');
  if(!token){
    return <Navigate to="/" />
  }
  const {data, isLoading} = useGetSuccessBookingQuery({token})
  if(isLoading){
    return <LoadingSpinner />
  }
  
  if(!data){
    return <Navigate to="/" />
  }
  return (
    <section className="paymentSuccessPage">
      <div className='content'>
        <FaCheckCircle />
        <h1>Booking Successfully</h1>
        <div className='bookingConfirmationDetails'>
          <h3><span>Name : </span> <span>{data.name}</span></h3>
          <h3><span>Booking ID : </span> <span>#{data.bookingId}</span></h3>
          <h3><span>Total Amount: </span> <span>AED {data.totalAmount.toFixed(2)}</span></h3>
          <h3><span>Date: </span> <span>{format(data.bookingDate, 'PPP')}</span></h3>
          <h3>Check Your Email</h3>
        </div>
      <button className='btn' onClick={() => {
        return navigate("/")
      }}>Go Home</button>
      </div>
    </section>
  )
}

export default SuccessBooking