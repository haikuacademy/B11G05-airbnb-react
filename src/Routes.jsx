import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignUp from './components/SignUp'

import Home from './components/Home'



function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router