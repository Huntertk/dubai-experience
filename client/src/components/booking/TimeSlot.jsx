import '../../styles/timeSlot.scss';

const TimeSlot = () => {
  return (
    <section className='timeSlotsContainer'>
        <h1 style={{fontWeight:700}}>Select Time Slot</h1>
        <div className="timeSlotWrapper">
            <div className="timeSlot">
                <p>8pm</p>
            </div>
            <div className="timeSlot">
                <p>9pm</p>
            </div>
            <div className="timeSlot">
                <p>10pm</p>
            </div>
        </div>
    </section>
  )
}

export default TimeSlot