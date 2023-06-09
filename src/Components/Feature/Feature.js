import styles from './Feature.module.css';

function Feature({ img, alt, title, text }) {
    return (
        <div className={styles.feature_item}>
            <img src={img} alt={alt} className={styles.feature_icon} />
            <h3 className={styles.feature_item_title}>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

export default Feature;