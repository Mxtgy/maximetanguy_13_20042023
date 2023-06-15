//import { NavLink } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import styles from './LoginForm.module.css';
import { useState } from "react";
import { fetchLogin, fetchProfile} from '../../Utils/apiClient.js';

function LoginForm() {

    const [checkState, setCheckState] = useState(false);
    const [checkError, setCheckError] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const username = form.querySelector('#username').value;
        const password = form.querySelector('#password').value;
        
        if (!username || !password) return;
        if (username.length <= 1 || password.length <= 1) return;
    
        //CALL FETCH HERE
        const call = await fetchLogin(username, password);
        console.log(call);
        if (!call) {setCheckError(true);return;};
        if (call.status === "400" || call.status === "500") return setCheckError(true);
        setCheckState(true);
        const token = call.body.token;

        //APPELER ET METTRE LES INFOS DANS LE STORE A CET ENDROIT
        const callProfile = await fetchProfile(token);
        console.log(callProfile);
    }

    return (
        <>
            { checkState && <Navigate to='/profile' /> }
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