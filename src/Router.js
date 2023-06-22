import { Routes, Route } from 'react-router-dom';
import Home from './Pages/homepage/Home.js';
import Login from './Pages/login/Login.js';
import Profile from './Pages/profile/Profile.js';
import ErrorRedirect from './Pages/error/ErrorRedirect.js';
import { useSelector } from "react-redux";

/*
This is the router managing all the routes.
*/
function Router() {

    const user = useSelector((state) => state.user);

    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            { user.userId && 
                <Route path="/profile" element={<Profile/>}></Route>
            }
            <Route path="*" element={<ErrorRedirect/>}></Route>
        </Routes>
    );
}

export default Router;