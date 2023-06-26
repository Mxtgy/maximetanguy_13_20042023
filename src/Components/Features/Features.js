import Feature from '../Feature/Feature.js';
import styles from './Features.module.css';
import chatIcon from '../../Assets/Images/icon-chat.png';
import moneyIcon from '../../Assets/Images/icon-money.png';
import securityIcon from '../../Assets/Images/icon-security.png';

/* 
This component is the features area located on the homepage.
 */
function Features() {
    return (
        <section className={styles.features}>
            <h2 className={styles.sr_only}>Features</h2>
            <Feature img={chatIcon} alt='Chat Icon' title='You are our #1 priority' text=' Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.' />
            <Feature img={moneyIcon} alt='Money Icon' title='More savings means higher rates' text='The more you save with us, the higher your interest rate will be!' />
            <Feature img={securityIcon} alt='Security Icon' title='Security you can trust' text='We use top of the line encryption to make sure your data and money is always safe.' />
        </section>
    );
}

export default Features;