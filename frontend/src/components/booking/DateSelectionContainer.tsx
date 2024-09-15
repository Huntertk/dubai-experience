import { useEffect, useState } from 'react'
import '../../styles/dateSelectionContainer.scss'
import 'react-day-picker/dist/style.css';
import './day-picker.css';
import { format, differenceInCalendarDays } from 'date-fns';
import { DayPicker} from 'react-day-picker';
import {Navigate} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import DateBtnContainer from './DateBtnContainer';
import PreferenceTour from './PreferenceTour';
import { proceedingToThePaxContainer, selectingDate, 
    // selectingTimeSlot
 } from '../../redux/feature/bookingSlice';
import PaxModalContainer from './PaxModalContainer';
import { useGetBlockedDateQuery, 
    // useLazyGetBlockedTimeSlotQuery 
} from '../../redux/api/dateManageApi';
import LoadingSpinner from '../Loader';
// import TimeSlot from './TimeSlot';



const DateSelectionContainer = () => {
        const [selectedDate, setSelectedDate] = useState<Date>()
        const [calenderOpen, setCalenderOpen] = useState<boolean>(false);
        // const [blockedTimeSlot, setBlockedTimeSlot] = useState<string[]>([]);
        const [disabledDatesArr, setDisabledDatesArr] = useState<Date[]>([]);
        const {service,ticketId, 
            // timeSlot,
             preferenceOption, pricing, preference, ticketTitle, isPaxModalOpen} = useAppSelector((state) => state.booking)
        const dispatch = useAppDispatch();
        const {data, isLoading} = useGetBlockedDateQuery({service, ticketId})
        
        // const [getBlockedTimeSlot,{data:timeSlotData, isLoading:timeSlotLoading}] = useLazyGetBlockedTimeSlotQuery();
        
    
       

        const formatDate = () => {
            if(data){
                const disabledDates = data.map((date) => new Date(date.blockedDate))
                setDisabledDatesArr(disabledDates)
            }
        }
        
        


        //Hiding Past Dates from Calender
        function isPastDate(date:Date) {
            return differenceInCalendarDays(date, new Date()) < 0;
        }

        //Handler Function 
        const handleCalenderOpen = ():void => {
            setCalenderOpen((prev) => !prev)
        }

        const handleSelectDate = (date:Date):void => {
            setSelectedDate(date)
        }

        const defaultMonth = new Date(Date.now());

            const handleSelectingDate = () => {
                if(selectedDate){
                    const day = selectedDate.toString().split(' ')[0];
                    dispatch(selectingDate({
                        bookingDate:selectedDate.toLocaleDateString(),
                        bookingDay:day
                    }));
                }  
            }

        useEffect(() => {
            if(data){
                formatDate()
            }
            // if(service === 'burj-khalifa' && selectedDate){
            //     dispatch(selectingTimeSlot({timeSlot:""}))
            //     getBlockedTimeSlot({date:selectedDate.toLocaleDateString(), ticketId})
            // }
            // if(timeSlotData){
            //     setBlockedTimeSlot(timeSlotData)
            // }

            handleSelectingDate()
        },[selectedDate, data])  
          



        if(!service || !ticketId){
            return <Navigate to="/" />
        }
        
        if(isLoading){
            return <LoadingSpinner />
        }
          
            
  return (
    <section className='bookingDateConfirmationMainContainer'>
        <div className="bookingDateWrapper">
            <h1>select date</h1>
            <DateBtnContainer 
            handleSelectDate={handleSelectDate} 
            handleCalenderOpen={handleCalenderOpen} 
            selectedDate={selectedDate}
            calenderOpen={calenderOpen}
            disabledDates={disabledDatesArr}
            />
            <div className="moreDatesContainer">
                <DayPicker
                    style={{display: calenderOpen === false ? 'none' : ''}}
                    mode="single"
                    selected={selectedDate} 
                    hidden={isPastDate}
                    onSelect={setSelectedDate}
                    fromMonth={defaultMonth}
                    toDate={new Date(Date.now() + 1000 * 60 *60 *24 *90)}
                    disabled={disabledDatesArr}
                />
            </div>
            {
                selectedDate && <p>{ticketTitle}</p>
            }
            {
                selectedDate && <PreferenceTour selectedDate={selectedDate} pricing={pricing} preferenceOption={preferenceOption}  /> 
            }
            {/* {
                service === 'burj-khalifa' && selectedDate && preference && timeSlotData && <TimeSlot blockedTimeSlot={blockedTimeSlot} />
            } */}
            <div className="selectedDate">
                {
                    selectedDate ? <>
                    <div className='prefrenceAndDateContainer'>
                        <p>{
                            preference ? preference : <></> 
                        }</p>
                    <p>{format(selectedDate, 'PPPP')}.</p>
                    </div>
                    {/* {
                        service === 'burj-khalifa' && timeSlot && preference ? <button onClick={() => {
                            dispatch(proceedingToThePaxContainer({isPaxModalOpen: true}))
                        }}>Next</button> : <></>
                    } */}
                    {/* {
                        service !== 'burj-khalifa' && preference ? <button onClick={() => {
                            dispatch(proceedingToThePaxContainer({isPaxModalOpen: true}))
                        }}>Next</button> : <></>
                    } */}
                    {
                        preference ? <button onClick={() => {
                            dispatch(proceedingToThePaxContainer({isPaxModalOpen: true}))
                        }}>Next</button> : <></>
                    }
                    </> : <p>Select One Date</p>
                }
            </div>
        </div>
        
       { isPaxModalOpen && <PaxModalContainer />}
        
        
    </section>
  )
}


export default DateSelectionContainer