import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignUp from './components/SignUp'




function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/SignUp' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router