import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {
  AdminLogin,
  AllBookings,
  ArasResturant,
  ArasResturantBookTypeOneDate,
  ArasResturantBookTypeTwoDate,
  ArasResturantDateManage,
  BookingFailed,
  CompanyDetails,
  ConfirmBooking,
  HelpCenter,
  ManageDates,
  NotFound,
  PaymentSucess,
  PrivacyPolicy,
  SplashMainaDateManage,
  SplashMania,
  SplashManiaBookTypeOneDate,
  SunwayLagoon,
  SunwayLagoonBookTypeFourDate,
  SunwayLagoonBookTypeOneDate,
  SunwayLagoonBookTypeThreeDate,
  SunwayLagoonBookTypeTwoDate,
  SunwayLagoonDateManage,
  TermAndConditionPage,
 } from './pages'
import { AdminLayout, DateSelectionContainer, TourLayout } from './components'
import { Toaster } from 'react-hot-toast';
import Booking from './pages/Booking';
import AdminProtectedRoute from './components/admin/AdminProtectedRoute';
import { useSelector } from 'react-redux';

const App = () => {
  const {responseClientUrl} = useSelector(state => state.booking)
  return (
    <>
      <BrowserRouter>
      <Toaster />
          <Routes>
              <Route element={<TourLayout />}>
              <Route 
              path='/' 
              element={
                window.location.hostname === 'atmosphere360.malaysia-experience.com' ? (
                  <ArasResturant />
                ) : window.location.hostname === 'splashmania.malaysia-experience.com' ? (
                  <SplashMania />
                ) : window.location.hostname === 'sunwaylagoon.malaysia-experience.com' ? (
                  <SunwayLagoon />
                ) :  window.location.hostname === 'malaysia-experience.onrender.com' ? (
                  <SplashMania />
                ) : <ArasResturant />
              } 
            />
                
                <Route path='/date-select' element={<DateSelectionContainer />} />
                <Route path='/booking' element={<Booking />} />
                {/* <Route path={`/${responseClientUrl}`} element={<PaymentSucess />} /> */}
                {/* <Route path="/bookingconfirm" element={<ConfirmBooking />} /> */}
                <Route path={`/success`} element={<ConfirmBooking />} />
                <Route path={`/failed`} element={<BookingFailed />} />
                <Route path="/terms" element={<TermAndConditionPage />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/companydetails" element={<CompanyDetails />} />
                <Route path="/helpcenter" element={<HelpCenter />} />
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

                    {/**Aras Resturant */}
                    <Route 
                      path="/admin/manage-dates/aras-resturant" 
                      element={<ArasResturantDateManage />} 
                    />
                    <Route 
                      path="/admin/manage-dates/aras-resturant/booktype-one" 
                      element={<ArasResturantBookTypeOneDate />} 
                    />
                    <Route 
                      path="/admin/manage-dates/aras-resturant/booktype-two" 
                      element={<ArasResturantBookTypeTwoDate />} 
                    />

                    {/**Sunway Lagoon */}
                    <Route 
                      path="/admin/manage-dates/sunway-lagoon" 
                      element={<SunwayLagoonDateManage />} 
                    />  
                      <Route 
                      path="/admin/manage-dates/sunway-lagoon/booktype-one" 
                      element={<SunwayLagoonBookTypeOneDate />} 
                    />
                    <Route 
                      path="/admin/manage-dates/sunway-lagoon/booktype-two" 
                      element={<SunwayLagoonBookTypeTwoDate />} 
                    />
                    <Route 
                      path="/admin/manage-dates/sunway-lagoon/booktype-three" 
                      element={<SunwayLagoonBookTypeThreeDate />} 
                    />
                    <Route 
                      path="/admin/manage-dates/sunway-lagoon/booktype-four" 
                      element={<SunwayLagoonBookTypeFourDate />} 
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