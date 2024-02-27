import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Home from './components/Home'
import Ale from './components/Ale'
import House from './components/House'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/SignUp' element={<SignUp />} />                <Route path='/' element={<Home />} />
                <Route path='/ale' element={<Ale />} />
                <Route path='/house' element={<House />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router