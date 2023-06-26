import styles from './Footer.module.css';

/*
This is the footer component located on all the pages (part of the layout) 
*/
function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer_text}>Copyright 2020 Argent Bank</p>
        </footer>
    );
}

export default Footer;