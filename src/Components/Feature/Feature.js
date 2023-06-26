import styles from './Feature.module.css';
import PropTypes from 'prop-types';

/* 
This component is a feature located on the homepage into the Features component.
 */
function Feature({ img, alt, title, text }) {
    return (
        <div className={styles.feature_item}>
            <img src={img} alt={alt} className={styles.feature_icon} />
            <h3 className={styles.feature_item_title}>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

Feature.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Feature;