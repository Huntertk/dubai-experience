import { useDispatch, useSelector } from 'react-redux';
import '../../styles/timeSlot.scss';
import { selectingTimeSlot } from '../../redux/features/bookingSlice';

const TimeSlot = ({blockedTimeSlot}) => {
    
    const dispatch = useDispatch();
    const {timeSlots, timeSlot} = useSelector((state) => state.booking)
  return (
    <section className='timeSlotsContainer'>
        <h1 style={{fontWeight:700}}>Select Time Slot</h1>
        <div className="timeSlotWrapper">
            {
                timeSlots.map((slot) => (
                    <button 
                    className={timeSlot === slot ? "timeSlot selected" : "timeSlot"} 
                    key={slot} 
                    disabled={blockedTimeSlot.includes(slot)}
                    onClick={() => dispatch(selectingTimeSlot({timeSlot:slot}))}
                    >
                        <p>{slot}:00 hrs</p>
                    </button>
                ))
            }
        </div>
    </section>
  )
}

export default TimeSlot