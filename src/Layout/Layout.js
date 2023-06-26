import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import PropTypes from 'prop-types';

/**
 * This function return the layout of the app. Header + Footer + Node from Router
 * @param { HTMLElement } children HTML returned by the router
 * @returns { HTMLElement }
 */
function Layout({children}) {
    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;