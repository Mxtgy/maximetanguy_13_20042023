import { Navigate } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogin, fetchProfile } from '../../Utils/apiClient.js';
import { logUser } from '../../redux.js';

/* 
This component is the login form.
 */
function LoginForm() {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [checkError, setCheckError] = useState(false);

    /*
    Send the form to login the user and to get the user's profile.
    Initiate two fetch calls (one to login and one to get the user's data) and also
    store the user's data in redux.
    */
    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const username = form.querySelector('#username').value;
        const password = form.querySelector('#password').value;
        
        if (!username || !password) return;
        if (username.length <= 1 || password.length <= 1) return;
    
        const login = await fetchLogin(username, password);
        if (!login || login.status === "400" || login.status === "500") return setCheckError(true);
        
        const token = login.body.token;

        const getProfile = await fetchProfile(token);
        if (!getProfile || getProfile.status === "400" || getProfile.status === "500") return setCheckError(true);
        getProfile.body.token = token;
        dispatch(logUser(getProfile.body));
    }

    return (
        <>
            { user.userId && <Navigate to='/profile' /> }
            <section className={ styles.sign_in_content }>    
                <i className={ 'fa fa-user-circle ' + styles.sign_in_icon }></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    { checkError && <p className={ styles.error }>Service indisponible, veuillez réessayer ultérieurement.</p>}
                    <div className={ styles.input_wrapper }>
                        <label htmlFor="username">Username</label><input type="text" id="username" />
                    </div>
                    <div className={ styles.input_wrapper }>
                        <label htmlFor="password">Password</label><input type="password" id="password" />
                    </div>
                    <div className={ styles.input_remember }>
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>          
                    <button type="submit" className={ styles.sign_in_button }>Sign In</button>
                </form>
            </section>
        </>
    );
}

export default LoginForm;