import { useEffect, useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { Link, Navigate} from 'react-router-dom';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import '../../styles/checkout.scss'
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { useAppSelector } from '../../redux/hook';
import { useCreateCheckoutSessionMutation } from '../../redux/api/checkoutApi';

type TypeUserData = {
    name: string;
    email: string;
    confirmEmail: string;
}

const CheckoutPage = () => {
    const [createCheckoutSession, {data, isLoading, error}]  = useCreateCheckoutSessionMutation();

    const {
        service,
        totalAmount,
        ticketTitle,
        preference,
        bookingDate,
        adultCount,
        childCount,
        adultTotal,
        childTotal,
        ticketId,
        timeSlot,
        bookingDateString,
        bookingDay
    } = useAppSelector((state) => state.booking)
    const [userData, setUserData] = useState<TypeUserData>({
        name:"",
        email:"",
        confirmEmail:""
    })

    const [mobileNumber, setMobileNumber] = useState<string | undefined>("")

   const bannerImg:string = service === 'dubai-frame' ?  "/assets/images/dubaiFrameVisitPlanGettingThereImg.avif" : service === 'aya-universe' ? "/assets/images/aya-universe-ayaUniverseWhyVisit.avif" : service === 'lost-chambers' ? "/assets/images/lostChambersTicketTwo.jpg"  : service === 'burj-khalifa' ? "/assets/images/burjKhalifaWhyVisit.jpg"  : service === 'green-planet' ? "/assets/images/greenPlanetTicketOne.jpg" : service === 'dubai-aquarium-and-underwater-zoo' ? "/assets/images/dubaiZooAndAquariumTwo.jpg"  : service === 'madame-tussauds' ? "/assets/images/madameTussaudsImgFour.jpg" :  ""


    const hostName = window.location.hostname;

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUserData((prev) => (
            {
                ...prev,
                [event.target.name]:event.target.value
            }
        ))   
    }

    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(!userData.name || !userData.email){
            toast.error("Please Provide all values")
            return 
        }
        
        if(userData.email !== userData.confirmEmail){
            toast.error("Email and Confirm email must be same")
            return     
        }
            createCheckoutSession({
                adultCount,
                adultTotal,
                bookingDate,
                childCount,
                childTotal,
                email:userData.email,
                hostName,
                preference,
                service,
                ticketTitle,
                ticketId,
                totalAmount,
                timeSlot,
                name:userData.name,
                mobileNumber,
                bookingDateString,
                bookingDay
            })

    }

    useEffect(() => {
        if(data){
            window.location.href = data.url
        }

        if(error){
            if ('data' in error) {
                toast.error(`${error.data}`);
            }   
        }

    },[data, error])

    if (totalAmount === 0) {
        return <Navigate to="/" />
    }
    return (
        <section className='bookingMainContainer'>
            <div className="bookingWrapper">
                <img className='banner' src={bannerImg} alt={service} />
                <h1>Confirm and Pay</h1>
                <div className="detailsWrapper">
                    <div className="detailsContainerWithTimeSlot">
                        <div className="">
                            <p className='bookingType'>{ticketTitle}</p>
                            {preference && <p className='bookingType'>{preference}</p>}
                            {timeSlot && <p className='bookingType'>Time Slot: {timeSlot} hrs</p>}
                        </div>
                    </div>
                    <div className="topContainer">
                        <p>{format(bookingDate, 'PPP')}</p>
                        <Link to="/date-select"><BiEditAlt /></Link>
                    </div>

                    <div className="guestQuantity">
                        {
                            adultCount === 0 ? "" :
                                <div className="guest">
                                    <p> Adult <span> X {adultCount}</span>
                                    </p>
                                    <span>AED {adultTotal.toFixed(2)}</span>
                                </div>
                        }
                        {
                            childCount === 0 ? "" : <div className="guest">
                                <p> Child <span> X {childCount}</span></p>
                                <span>AED {childTotal.toFixed(2)}</span>
                            </div>
                        }


                        <div className="guest">
                            <p className='totalPayable'>Total Payable</p>
                            <span className='totalPayable'>AED {totalAmount.toFixed(2)}</span>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id='name'
                            name='name'
                            autoComplete="off"
                            required
                            onChange={handleChange}
                            value={userData.name}
                        />

                        <label htmlFor="phone">Phone</label>
                        <PhoneInput
                        id="phone"
                            defaultCountry="AE"
                            placeholder="Enter phone number"
                            value={mobileNumber}
                            onChange={setMobileNumber}
                            required
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            autoComplete="off"
                            required
                            onChange={handleChange}
                            value={userData.email}
                        />
                        <label htmlFor="email">Confirm Email</label>
                        <input
                            type="email"
                            id='confirmEmail'
                            name='confirmEmail'
                            autoComplete="off"
                            required
                            onChange={handleChange}
                            value={userData.confirmEmail}
                        />
                        <button type='submit' disabled={isLoading}>{isLoading ? "Loading...." : "Pay Now"}</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CheckoutPage