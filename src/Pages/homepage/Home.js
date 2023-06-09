import Hero from '../../Components/Hero/Hero.js';
import Features from '../../Components/Features/Features.js';
import styles from './Home.module.css';

function Home() {
    return (
        <main className={styles.main}>
            <Hero />
            <Features />
        </main>
    );
}

export default Home;