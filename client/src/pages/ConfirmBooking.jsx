import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import { FaCheckCircle } from "react-icons/fa";
import { bookingConfirm } from '../redux/features/bookingSlice';
import { useGetSuccessBookingDataQuery } from '../redux/api/bookingDataApi';
import LoadingSpinner from '../components/LoadingSpinner';

const ConfirmBooking = () => {
  const navigate = useNavigate();
  const [searchParams]  = useSearchParams();
  const token = searchParams.get('token');
  const dispatch = useDispatch();
  if(!token){
    return <Navigate to="/" />
  }
  const {data, error, isError, isLoading} = useGetSuccessBookingDataQuery({token})
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
          <h3><span>Order ID : </span> <span>#{data.bookingId}</span></h3>
          <h3><span>Total Amount: </span> <span>MYR {data.totalAmount}</span></h3>
          <h3><span>Date: </span> <span> {data.bookingDate.slice(4, 15)}</span></h3>
          <h3>Check Your Email</h3>
        </div>
      <button className='btn' onClick={() => {
        dispatch(bookingConfirm())
        return navigate("/")
      }}>Go Home</button>
      </div>
    </section>
  )
}

export default ConfirmBooking