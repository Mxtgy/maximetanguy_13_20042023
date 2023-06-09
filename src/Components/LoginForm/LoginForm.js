import { NavLink } from "react-router-dom";
import styles from './LoginForm.module.css';

function LoginForm() {
    return (
        <section className={ styles.sign_in_content }>
            <i className={ 'fa fa-user-circle ' + styles.sign_in_icon }></i>
            <h1>Sign In</h1>
            <form>
                <div className={ styles.input_wrapper }>
                    <label htmlFor="username">Username</label><input type="text" id="username" />
                </div>
                <div className={ styles.input_wrapper }>
                    <label htmlFor="password">Password</label><input type="password" id="password" />
                </div>
                <div className={ styles.input_remember }>
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
          
                <NavLink to="/profile" className={ styles.sign_in_button }>Sign In</NavLink>
          
                {/*<button className={ styles.sign_in_button }>Sign In</button>*/}
            </form>
        </section>
    );
}

export default LoginForm;