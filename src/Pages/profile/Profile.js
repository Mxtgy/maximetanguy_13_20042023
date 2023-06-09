import Accounts from '../../Components/Accounts/Accounts';
import styles from './Profile.module.css';

function Profile() {
    return (
        <main className={ styles.main + ' ' + styles.bg_dark }>
            <div className={ styles.header }>
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className={ styles.edit_button }>Edit Name</button>
            </div>
            <Accounts />
        </main>
    );
}

export default Profile;