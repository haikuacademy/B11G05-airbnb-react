import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import HouseEdit from './components/HouseEdit'
import Login from './components/Login'
import Bookings from './components/Bookings'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/houses/:id/edit' element={<HouseEdit />} />
                <Route path='/houses/login' element={<Login />} />
                <Route path='/houses/bookings' element={<Bookings />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router