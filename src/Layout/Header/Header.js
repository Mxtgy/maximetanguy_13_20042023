import { NavLink } from "react-router-dom";
import styles from './Header.module.css';
import Logo from '../../Assets/Images/argentBankLogo.png';
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from '../../redux.js';

/*
This is the header component located on all the pages (part of the layout) 
*/
function Header() {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <nav className={styles.main_nav}>
            <NavLink className={styles.main_nav_logo} to="/">
                <img className={styles.main_nav_logo_image} src={Logo} alt="Argent Bank Logo"/>
                <h1 className={styles.sr_only} >Argent Bank</h1>
            </NavLink>
            <div>
                { user.userId ? 
                    <>
                        <NavLink className={ styles.main_nav_item } to="/profile"><i className="fa fa-user-circle"></i> { user.firstName }</NavLink>
                        <button className={ styles.main_nav_item } onClick={() => dispatch(logoutUser())}><i className="fa fa-sign-out"></i> Sign Out</button>
                    </>
                    :
                    <NavLink className={({ isActive }) => isActive ? styles.main_nav_item + ' ' + styles.router_link_exact_active : styles.main_nav_item } to="/login"><i className="fa fa-user-circle"></i> Sign In</NavLink>
                }
            </div>
        </nav>
    );
}

export default Header;