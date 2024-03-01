import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Profile from './components/Profile'
import Houses from './components/Houses'
import House from './components/House'
import HouseEdit from './components/HouseEdit'
import Listings from './components/Listings'
import Bookings from './components/Bookings'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Houses />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/houses/:id" element={<House />} />
        <Route path="/houses/:id/edit" element={<HouseEdit />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
