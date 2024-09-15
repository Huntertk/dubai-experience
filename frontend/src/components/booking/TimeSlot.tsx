import { selectingTimeSlot } from '../../redux/feature/bookingSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import '../../styles/timeSlot.scss';

type TypeTimeSlotProps = {
    blockedTimeSlot:string[]
}

const TimeSlot = ({blockedTimeSlot}:TypeTimeSlotProps) => {
    
    const dispatch = useAppDispatch();
    const {timeSlots, timeSlot} = useAppSelector((state) => state.booking)
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
                        <p>{slot} hrs</p>
                    </button>
                ))
            }
        </div>
    </section>
  )
}

export default TimeSlot