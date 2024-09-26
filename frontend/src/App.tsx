import { lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoadingSpinner from './components/Loader';

const TourLayout = lazy(() => import('./components/layout/TourLayout'));
// const AyaUniverse = lazy(() => import('./pages/aya-universe/AyaUniverse'));
// const LostChambers = lazy(() => import('./pages/lost-chambers/LostChambers'));
// const GreenPlanet = lazy(() => import('./pages/green-planet/GreenPlanet'));
// const DubaiAquariumAndUnderwaterZoo = lazy(() => import('./pages/dubai-aquarium-and-underwater-zoo/DubaiAquariumAndUnderwaterZoo'));
// const DubaiFrame = lazy(() => import('./pages/dubai-frame/DubaiFrame'));
// const BurjKhalifa = lazy(() => import('./pages/burj-khalifa/BurjKhalifa'));
const MadameTussauds = lazy(() => import('./pages/madame-tussauds/MadameTussauds'));
const AtlantisAquaventure = lazy(() => import('./pages/atlantis-aquaventure/AtlantisAquaventure'));
const DateSelectionContainer = lazy(() => import('./components/booking/DateSelectionContainer'));
const CheckoutPage = lazy(() => import('./pages/bookingPage/CheckoutPage'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminProtectedRoute = lazy(() => import('./components/admin/AdminProtectRoute'));
const AdminLayout = lazy(() => import('./components/layout/AdminLayout'));
const AllBooking = lazy(() => import('./pages/admin/AllBookings'));
const ManageDates = lazy(() => import('./pages/admin/ManageDates'));
const ServiceProductList = lazy(() => import('./pages/admin/ServiceProductList'));
const SearchBooking = lazy(() => import('./pages/admin/SearchBooking'));
const ServiceProductDateModification = lazy(() => import('./pages/admin/ServiceProductDateModification'));
const QrTicket = lazy(() => import('./pages/admin/QrTicket'));
const QrTicketView = lazy(() => import('./pages/admin/QrTicketView'));
const SuccessBooking = lazy(() => import('./pages/SuccessBooking'));
const FailedBooking = lazy(() => import('./pages/FailedBooking'));
const TermAndCondition = lazy(() => import('./pages/TermsAndCondition'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const CompanyDetails = lazy(() => import('./pages/CompanyDetails'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const ManageTimeSlot = lazy(() => import('./pages/admin/ManageTimeSlot'));
const ServiceProductTimeslotModification = lazy(() => import('./pages/admin/ServiceProductTimeslotModification'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {



  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
      <Toaster />
        <Routes>
              <Route element={<TourLayout />}>
              <Route 
              path='/' 
              element={
                window.location.hostname === 'dubai-experience.onrender.com' ? (
                  <MadameTussauds />
                ) :  window.location.hostname === 'localhost' ? (
                  <AtlantisAquaventure />
                ) : <></>
              } 
            /> 
              {/* Booking */}
              <Route path='/date-select' element={<DateSelectionContainer />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path={`/success`} element={<SuccessBooking />} />
              <Route path={`/failed`} element={<FailedBooking />} />
              
              <Route path="/terms-condition" element={<TermAndCondition />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/company-details" element={<CompanyDetails />} />
              <Route path="/help-center" element={<HelpCenter />} />

              </Route>

               {/*Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route element={<AdminProtectedRoute />}>
                  <Route element={<AdminLayout />}>
                      <Route path="/admin/all-booking" element={<AllBooking />} />
                      <Route path="/admin/search" element={<SearchBooking />} />

                      {/* DATE MANAGE */}
                      <Route path="/admin/manage-dates" element={<ManageDates />} />
                      <Route 
                      path="/admin/manage-dates/:service" 
                      element={<ServiceProductList />} 
                    />
                    <Route 
                      path="/admin/manage-dates/:service/:id"  
                      element={<ServiceProductDateModification />} 
                    />

                      {/* MANAGE TIMESLOT */}
                      <Route path="/admin/manage-timeslot" element={<ManageTimeSlot />} />
                      <Route 
                      path="/admin/manage-timeslot/:service" 
                      element={<ServiceProductList />} 
                    />
                    <Route 
                      path="/admin/manage-timeslot/:service/:id"  
                      element={<ServiceProductTimeslotModification />} 
                    />

                    {/* QR CODE */}
                    <Route path="/admin/qr-code" element={<QrTicket />} />
                    <Route path="/admin/qr-code/view/:service" 
                      element={<ServiceProductList />} 
                    />
                    <Route 
                      path="/admin/qr-code/view/:service/:id"  
                      element={<QrTicketView />} 
                    />
                  </Route>
               </Route>
              <Route path='*' element={<NotFound />} /> 
          </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App