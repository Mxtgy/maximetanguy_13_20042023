import styles from './Login.module.css';
import LoginForm from '../../Components/LoginForm/LoginForm.js';

function Login() {
    return (
        <main className={ styles.main + ' ' + styles.bg_dark }>
            <LoginForm />
        </main>
    );
}

export default Login;