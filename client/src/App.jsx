import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {
  AdminLogin,
  AllBookings,
  DubaiFrame,
  BookingFailed,
  CompanyDetails,
  ConfirmBooking,
  HelpCenter,
  ManageDates,
  NotFound,
  PrivacyPolicy,
  TermAndConditionPage,
  ServiceProductList,
  ServiceProductDateModification,
  QrBookingPlan,
  QrBookingPlanView,
  AyaUniverse,
  LostChambers,
  BurjKhalifa,
  ManageTimeSlot,
  ServiceProductTimeslotModification,
  GreenPlanet
 } from './pages'
import { AdminLayout, DateSelectionContainer, TourLayout } from './components'
import { Toaster } from 'react-hot-toast';
import Booking from './pages/Booking';
import AdminProtectedRoute from './components/admin/AdminProtectedRoute';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Toaster />
          <Routes>
              <Route element={<TourLayout />}>
              <Route 
              path='/' 
              element={
                window.location.hostname === 'dubai-experience.onrender.com' ? (
                  <BurjKhalifa />
                ) :  window.location.hostname === 'localhost' ? (
                  <GreenPlanet />
                ) : <NotFound />
              } 
            />
                
                <Route path='/date-select' element={<DateSelectionContainer />} />
                <Route path='/booking' element={<Booking />} />
                <Route path={`/success`} element={<ConfirmBooking />} />
                <Route path={`/failed`} element={<BookingFailed />} />
                <Route path="/terms-condition" element={<TermAndConditionPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/company-details" element={<CompanyDetails />} />
                <Route path="/help-center" element={<HelpCenter />} />
              </Route>
              
               {/*Admin Routes */}
               <Route path="/admin/login" element={<AdminLogin />} />
                <Route element={<AdminProtectedRoute />}>
                  <Route element={<AdminLayout />}>
                    <Route path="/admin/all-booking" element={<AllBookings />} />

                    {/* QR CODE */}
                    <Route path="/admin/qr-code" element={<QrBookingPlan />} />
                    <Route path="/admin/qr-code/view/:serviceName" 
                      element={<ServiceProductList />} 
                    />
                    <Route 
                      path="/admin/qr-code/view/:serviceName/:id"  
                      element={<QrBookingPlanView />} 
                    />

                    {/*Tickets */}
                    {/* <Route path="/admin/booking-plan" element={<BookingPlan />} />
                    <Route path="/admin/booking-plan/create" element={<CreateNewBookingPlan />} />
                    <Route path="/admin/booking-plan/edit" element={<EditBookingPlan />} />
                    <Route path="/admin/booking-plan/edit/:serviceName" 
                      element={<ServiceProductList />} 
                    /> */}
                    {/* <Route path="/admin/booking-plan/edit/:serviceName/:id" 
                      element={<EditBookingPlanData />} 
                    /> */}


                    {/*Date Manage */}
                    <Route path="/admin/manage-dates" element={<ManageDates />} />
                    <Route 
                      path="/admin/manage-dates/:serviceName" 
                      element={<ServiceProductList />} 
                    />
                    <Route 
                      path="/admin/manage-dates/:serviceName/:id"  
                      element={<ServiceProductDateModification />} 
                    />

                    {/*Manage TimeSlot */}
                    <Route path="/admin/manage-timeslot" element={<ManageTimeSlot />} />
                    <Route 
                      path="/admin/manage-timeslot/:serviceName" 
                      element={<ServiceProductList />} 
                    />
                    <Route 
                      path="/admin/manage-timeslot/:serviceName/:id"  
                      element={<ServiceProductTimeslotModification />} 
                    />


                  </Route>
                </Route>
                <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App