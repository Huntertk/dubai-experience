import '../../styles/preferenceTour.scss'
import {useDispatch, useSelector} from 'react-redux'
import { countTotalBookingAmount, setPreference } from '../../redux/features/bookingSlice'


const CardData = ({cardData, day}) => {
    const {pref}  = useSelector(state => state.booking);
    const dispatch = useDispatch()
    let price;
    if(day === 'Fri' || day === 'Sat' || day === 'Sun'){
        price = cardData.price.weekEnds.adult;
    } else {
        price = cardData.price.weekDays.adult
    }
    
    return (
        <div className="prefrenceTabCard">
        <h1>{cardData.title}</h1>
        <div className="content">
             <p>MYR {price}</p>
            
            <button onClick={() => {
                dispatch(setPreference({pref: cardData.title}))
            }}>{pref === cardData.title ? "✔ Selected": "Select"}</button>
        </div>
        <ul>
            {
                cardData.details.map((d, index) => (
                    <li key={index}>{d}</li>
                ))
            }
        </ul>
    </div>
    )
}

const PreferenceTour = ({data, selectedDate}) => {
    const day = selectedDate?.toString()?.split(' ')[0]
  return (
    <section className='prefrenceTab'>
        <h1>Select your preference</h1>
        <div className="prefrenceTabCardContainer">
            {
                data.map((d, index) => (
                    <CardData key={index} cardData={d} day={day} />
                ))
            }
            
        </div>
    </section>
  )
}

export default PreferenceTour