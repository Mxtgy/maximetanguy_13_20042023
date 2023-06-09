import { NavLink } from "react-router-dom";
import styles from './Header.module.css';
import Logo from '../../Assets/Images/argentBankLogo.png';

function Header() {
    return (
        <nav className={styles.main_nav}>
            <NavLink className={styles.main_nav_logo} to="/">
                <img className={styles.main_nav_logo_image} src={Logo} alt="Argent Bank Logo"/>
                <h1 className={styles.sr_only} >Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink className={({ isActive }) => isActive ? styles.main_nav_item + ' ' + styles.router_link_exact_active : styles.main_nav_item } to="/login"><i className="fa fa-user-circle"></i> Sign In</NavLink>
            </div>
        </nav>
    );
}

export default Header;