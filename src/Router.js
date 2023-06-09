import { Routes, Route } from 'react-router-dom';
import Home from './Pages/homepage/Home.js';
import Login from './Pages/login/Login.js';
import Profile from './Pages/profile/Profile.js';

/*
This is the router managing all the routes.
*/
function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
    );
}

export default Router;