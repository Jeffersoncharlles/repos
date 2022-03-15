import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Repository } from '../pages/Repository';


export const Routers = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route caseSensitive path='/' element={<Home />} />
                <Route caseSensitive path='/repository/:repository' element={<Repository />} />
            </Routes>
        </BrowserRouter>
    )
}