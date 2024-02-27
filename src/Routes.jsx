import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Profile from './components/Profile'
import Houses from './components/Houses'
import House from './components/House'

function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/profile' element={<Profile />} />
                <Route path='/' element={<Houses />} />
                <Route path='/houses/:id' element={<House />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router