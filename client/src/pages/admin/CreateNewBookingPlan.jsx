import React from 'react'

const CreateNewBookingPlan = () => {
  return (
    <div className='create-new-booking-plan'>
        <h1>Create new Ticket</h1>
        <form className="">

            <input 
            type="text" 
            placeholder='Enter Ticket Title' 
            name='title'
            required
            />

            <input 
            type="text" 
            placeholder='Enter Ticket Description 1' 
            name='descOne'
            required
            />
            <input 
            type="text" 
            placeholder='Enter Ticket Description 2' 
            name='descTwo'
            required
            />
        </form>
    </div>
  )
}

export default CreateNewBookingPlan