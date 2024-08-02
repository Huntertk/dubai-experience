import { useGetSingleBookingPlanDataQuery } from '../../redux/api/bookingPlanApi'
import { useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner';
import '../../styles/editBookingPlanData.scss';

const EditBookingPlanData = () => {
    const {serviceName, id} = useParams();
    const navigate = useNavigate();

    const {data, isLoading, error, isSuccess} = useGetSingleBookingPlanDataQuery(
        {service: serviceName, id}
    );
    console.log(data);


    if(isLoading){
        return <LoadingSpinner />
    }
    
  return (
    <div className='edit-booking-plan-data-main-container'>
        <h1>{serviceName.toUpperCase()}</h1>
        <div className="edit-booking-current-price-container">
            {
                data.bookingPlan.pricing.map((priceData) => (
                    <div className="booking-current-price-container" key={priceData._id}>
                        <h3>{priceData.title} Pricing</h3>
                        <p>Week Days Adult: MYR {priceData.weekDays.adult}</p>
                        <p>Week Days Child: MYR {priceData.weekDays.child}</p>
                        <p>Week Ends Adult: MYR {priceData.weekEnds.adult}</p>
                        <p>Week Ends Child: MYR {priceData.weekEnds.child}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default EditBookingPlanData