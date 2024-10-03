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
import { proceedingToThePaxContainer, selectingDate, selectingTimeSlot } from '../../redux/feature/bookingSlice';
import PaxModalContainer from './PaxModalContainer';
import { useGetBlockedDateQuery, useLazyGetBlockedTimeSlotQuery } from '../../redux/api/dateManageApi';
import LoadingSpinner from '../Loader';
import TimeSlot from './TimeSlot';



const DateSelectionContainer = () => {
        const timeSlotService:string[] = ["burj-khalifa", "dubai-sky-view"];
        const regularService:string[] = [
            "dubai-frame",
            "green-planet",
            "aya-universe",
            "lost-chambers",
            "dubai-aquarium-and-underwater-zoo",
            "madame-tussauds",
            "atlantis-aquaventure",
            "dubai-ice-rink"
        ];

        const [selectedDate, setSelectedDate] = useState<Date>()
        const [calenderOpen, setCalenderOpen] = useState<boolean>(false);
        const [blockedTimeSlot, setBlockedTimeSlot] = useState<string[]>([]);
        const [disabledDatesArr, setDisabledDatesArr] = useState<Date[]>([]);
        const {service,ticketId, timeSlot, preferenceOption, pricing, preference, ticketTitle, isPaxModalOpen} = useAppSelector((state) => state.booking)
        const dispatch = useAppDispatch();
        const {data, isLoading} = useGetBlockedDateQuery({service, ticketId})
        
        const [getBlockedTimeSlot,{data:timeSlotData, isLoading:timeSlotLoading}] = useLazyGetBlockedTimeSlotQuery();
        
    
       

        const formatDate = () => {
            if(data){
                const disabledDates:Date[] = data.map((date) => new Date(date.blockedDate))
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

        const handleSelectDate = (date:number):void => {
            setSelectedDate(new Date(date))
        }
        
        const defaultMonth:Date = new Date(Date.now());

            const handleSelectingDate = () => {
                if(selectedDate){
                    const day = selectedDate.toString().split(' ')[0];
                    dispatch(selectingDate({
                        bookingDate:selectedDate.toISOString(),
                        bookingDay:day,
                        bookingDateString:format(selectedDate,'PPP')
                    }));
                }  
            }

        useEffect(() => {
            if(data){
                formatDate()
            }
            if(timeSlotService.includes(service) && selectedDate){
                dispatch(selectingTimeSlot({timeSlot:""}))
                getBlockedTimeSlot({date:selectedDate.toISOString(), ticketId})
            }
            if(timeSlotData){
                setBlockedTimeSlot(timeSlotData)
            }

            handleSelectingDate()
        },[selectedDate, data, timeSlotData])  
          



        if(!service || !ticketId){
            return <Navigate to="/" />
        }
        
        if(isLoading || timeSlotLoading){
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
            {
                timeSlotService.includes(service) && selectedDate && preference && timeSlotData && <TimeSlot blockedTimeSlot={blockedTimeSlot} />
            }
            <div className="selectedDate">
                {
                    selectedDate ? <>
                    <div className='prefrenceAndDateContainer'>
                        {
                            preference ? <p>{preference}</p> : <></> 
                        }
                    <p>{format(selectedDate, 'PPP')}</p>
                    </div>
                    {
                        timeSlotService.includes(service) && timeSlot && preference ? <button onClick={() => {
                            dispatch(proceedingToThePaxContainer({isPaxModalOpen: true}))
                        }}>Next</button> : <></>
                    }
                    {
                        regularService.includes(service) && preference ? <button onClick={() => {
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