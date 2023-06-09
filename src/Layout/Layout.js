import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";

function Layout({children}) {
    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    );
}

export default Layout;