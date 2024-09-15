import '../../styles/paxModal.scss'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import PaxModal from './PaxModal';
import { adultTotalCount, cancelBooking, childTotalCount, countTotalBookingAmount, decrementAdultCount, decrementChildCount, incrementAdultCount, incrementChildCount, proceedingToThePaxContainer } from '../../redux/feature/bookingSlice';
import { useEffect } from 'react';
import { format } from 'date-fns';


const PaxModalContainer = () => {
    const {
        bookingDate,
        ticketTitle,
        adultCount,
        childCount,
        adultTotal,
        childTotal,
        preference,
        totalAmount,
        service,
        timeSlot
    } = useAppSelector((state) => state.booking)
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleInceaseAdult = () => {
        dispatch(incrementAdultCount())
    }

    const handleInceaseChild = () => {
        dispatch(incrementChildCount())
    }
    
    const handleDecreaseAdult = () => {
        dispatch(decrementAdultCount())
    }

    const handleDeceaseChild = () => {
        dispatch(decrementChildCount())
    }
    useEffect(() => {
        dispatch(adultTotalCount())
        dispatch(childTotalCount())
        dispatch(countTotalBookingAmount())
    },[adultCount, childCount])
    
  return (

    <div className="paxSelectorMainContainer">
        <div className='paxSelectorContainer'>
            <div className='cancelBookingContainer'>
                <button  className='backIcon' onClick={() => dispatch(proceedingToThePaxContainer({isPaxModalOpen:false}))}>Back</button>

                <button  className='crossIcon' onClick={() => {
                    dispatch(cancelBooking())
                    return navigate("/")
                }}>Cancel</button>

            </div>
            <p className='bookingType'>{ticketTitle}</p>
            {preference ? <p className='bookingType'>{preference}</p> : <></>}
            {timeSlot ? <p className='bookingType'>Time Slot: {timeSlot} hrs</p> : <></>}
            <h1>Select number of tickets</h1>
            <div className="paxSelector">
                    <PaxModal
                        category ={"Adult"} 
                        ageText={"13 to 59 yrs"} 
                        count={adultCount}
                        increase={handleInceaseAdult}
                        decrease={handleDecreaseAdult}
                        total={adultTotal}
                    />
                    {
                        service !== 'aya-universe' &&
                        <PaxModal  
                        category ={"Child"} 
                        ageText={"3 to 12 yrs"} 
                        count={childCount}
                        increase={handleInceaseChild}
                        decrease={handleDeceaseChild}
                        total={childTotal}
                        />
                    }
            </div>
                <div className="totalPayable">
                    <span>Total</span>
                <span>AED {totalAmount.toFixed(2)}</span>
                </div>
                
            <div className="dateContainer">

                    <p>{format(bookingDate, 'PPP')}  </p> 
                    {
                        totalAmount > 0 &&
                        <Link to="/checkout"><button>Next</button></Link> 
                        
                    }
                
            </div>
                    
        </div>
    </div>
  )
}

export default PaxModalContainer