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
  SplashMainaDateManage,
  SplashManiaBookTypeOneDate,
  TermAndConditionPage,
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
                  <DubaiFrame />
                ) :  window.location.hostname === 'localhost' ? (
                  <DubaiFrame />
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
                    <Route path="/admin/manage-dates" element={<ManageDates />} />
                    {/*Splash Mania */}
                    <Route 
                      path="/admin/manage-dates/splash-mania" 
                      element={<SplashMainaDateManage />} 
                    />
                    <Route 
                      path="/admin/manage-dates/splash-mania/booktype-one" 
                      element={<SplashManiaBookTypeOneDate />} 
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