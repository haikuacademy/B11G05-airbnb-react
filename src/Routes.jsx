import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignUp from './components/SignUp'



import Houses from './components/Houses'
import House from './components/House'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/' element={<Houses />} />
                <Route path='/houses/:id' element={<House />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router