import React, { useState, useEffect, useRef } from 'react'
import '../../styles/dateSelectionContainer.scss'
import 'react-day-picker/dist/style.css';
import './day-picker.css';
import { format,differenceInCalendarDays } from 'date-fns';
import { DayPicker, Row } from 'react-day-picker';
import { useDispatch, useSelector } from 'react-redux';
import { openPaxModel, setBookingDate, setPreference } from '../../redux/features/bookingSlice';
import {Navigate, useNavigate} from 'react-router-dom'
// import PaxModal from './PaxModal';
import axios from 'axios'
// import PreferenceTour from './PreferenceTour';
import LoadingSpinner from '../LoadingSpinner';
import PreferenceTour from './PreferenceTour';
import PaxModal from './PaxModal';


function isPastDate(date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props) {
  const isPastRow = props.dates.every(isPastDate);
  if (isPastRow) return <></>;
  return <Row {...props} />;
}

const DateBtn = ({setSelectedDate, setCalenderOpen,selectedDate, calenderOpen, disabledDates}) => {
    const btnRef = useRef(null)

    const disabledBtnToDate = (btnDate) => {
        const settingHourToZero = disabledDates?.map(d => d.setHours(0,0,0,0))
        const findingDate = settingHourToZero?.find(d => d === new Date(Date.now() + btnDate).setHours(0,0,0,0))
        return findingDate
    }

    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    function getDayName(date) {
        return new Date(date).toLocaleDateString('en-US', {weekday: 'short'});
    }
    const day = new Date().getDay()
    const date = new Date(Date.now()).getDate()

    const focusBtn = () => {
        btnRef.current.focus()
    }
    useEffect(() => {
        focusBtn()
    },[])
    return (
        <div className="dateBtnContainer">
           <button className={selectedDate?.toString().slice(0,15) == new Date(Date.now() + 1000 *60 *60 *24).toString().slice(0,15)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000 *60 *60 *24 ))}
           disabled={disabledBtnToDate(1000 *60 *60 *24)}
           >
            <span>
                {new Date(Date.now() + 1000 *60 *60 *24).getDate()}
            </span>
            <span>
                {getDayName(new Date(Date.now() + 1000 *60 *60 *24))}
            </span>
           </button>
           <button 
           className={selectedDate?.toString().toString().slice(0,15) == new Date(Date.now() + 1000*60*60*24*2).toString().slice(0,15)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24*2))}
           disabled={disabledBtnToDate(1000 *60 *60 *24*2)}
           >
            <span>
            {new Date(Date.now() + 1000 * 60 * 60 * 24 *2 ).getDate()}
            </span>
            <span>
            {getDayName(new Date(Date.now() + 1000 * 60 *60 *24 * 2))}
            </span>
            </button>
           <button  
            className={selectedDate?.toString().toString().slice(0,15) == new Date(Date.now() + 1000*60*60*24 * 3).toString().slice(0,15)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24 * 3))}
           disabled={disabledBtnToDate(1000 *60 *60 *24*3)}
           >
            <span>
            {new Date(Date.now() + 1000 * 60 * 60 * 24 *3  ).getDate()}
            </span>
            <span>
            {getDayName(new Date(Date.now() + 1000 * 60 *60 * 24 * 3))}
            </span>
            </button>
           <button 
            className={selectedDate?.toString().toString().slice(0,15) == new Date(Date.now() + 1000*60*60*24 *4).toString().slice(0,15)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24 * 4))}
           disabled={disabledBtnToDate(1000 *60 *60 *24*4)}
           >
            <span>
            {new Date(Date.now() + 1000 * 60 * 60 * 24 *4  ).getDate()}
            </span>
            <span>
            {getDayName(new Date(Date.now() + 1000 * 60 *60 * 24 * 4))}
            </span>
            </button>
           <button ref={btnRef} className={calenderOpen ? "moreDates active" : "moreDates"} onClick={() => setCalenderOpen(prev => !prev)}>More Dates</button>
        </div>
    )
}

const DateSelectionContainer = () => {
    const dispatch = useDispatch()
    const {isPaxModal, type, pref, prefrenceOpt, service} = useSelector(store => store.booking)
        const [selectedDate, setSelectedDate] = useState("")
        const [calenderOpen, setCalenderOpen] = useState(false)
        const [blockedDates, setBlockedDates] = useState([])
        const disabledDates = blockedDates?.map((dates) => new Date(dates.blockDates))
        const [isLoading, setIsLoading] = useState(false);
        
        const disabledDays = [
            ...disabledDates
          ];

          const getBooklockDates = async () => {
            try {
                setIsLoading(true)
                const {data} = await axios.get(`/api/v1/dates-manage/block-dates?service=${service}&type=${type}`)
                setBlockedDates(data.blockDates)
                setIsLoading(false)
              } catch (error) {
                  console.log(error);
              }
          }

        useEffect(() => {
            getBooklockDates()
          },[])

          
          if(!type){
              return <Navigate to="/" />
            }
            const defaultMonth = new Date(Date.now());
            
            if(isLoading){
              return <LoadingSpinner />
            }
  return (
    <section className='bookingDateConfirmationMainContainer'>
        <div className="bookingDateWrapper">
            <h1>select date</h1>
            <DateBtn 
            setSelectedDate={setSelectedDate} 
            setCalenderOpen={setCalenderOpen} 
            selectedDate={selectedDate}
            calenderOpen={calenderOpen}
            disabledDates={disabledDates}
            />
            <div className="moreDatesContainer">
                <DayPicker
            style={calenderOpen === false && {display:'none'}}
            mode="single"
            selected={selectedDate} 
            fromDate={new Date()}
            components={{ Row: OnlyFutureRow }}
            hidden={isPastDate}
            onSelect={setSelectedDate}
            fromMonth={defaultMonth}
            toDate={new Date(Date.now() + 1000 * 60 *60 *24 *90)}
            disabled={disabledDates}
            />
            </div>
            {
                selectedDate && <PreferenceTour selectedDate={selectedDate} data={prefrenceOpt}  /> 
            }
            <div className="selectedDate">
                {
                    selectedDate ? <>
                    <div className='prefrenceAndDateContainer'>
                        <p>{
                            type && pref ?  pref : <></> 
                        }</p>
                    <p>You selected {format(selectedDate, 'PPP')}.</p>
                    </div>
                    {
                        type && pref ? <button onClick={() => {
                            dispatch(setBookingDate({selectedBookingDate: selectedDate.toString(), selectedDay: selectedDate.toString()}))
                            dispatch(openPaxModel())
                            setCalenderOpen(false)
                        }}>Next</button> : <></>
                    }
                    </> : <p>Select One Date</p>
                }
            </div>
        </div>
        
       { isPaxModal && <PaxModal  selectedDate={selectedDate} />}
        
        
    </section>
  )
}


export default DateSelectionContainer