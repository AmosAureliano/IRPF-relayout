import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';    
import { Login } from '../pages/login'

export function Root() {

    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    )
}