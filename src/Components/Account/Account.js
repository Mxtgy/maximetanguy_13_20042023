import styles from './Account.module.css';

function Account({ title, amount, description }) {
    return (
        <section className={ styles.account }>
            <div className={ styles.account_content_wrapper }>
                <h3 className={ styles.account_title }>{ title }</h3>
                <p className={ styles.account_amount }>{'$' + amount}</p>
                <p className={ styles.account_amount_description }>{ description }</p>
            </div>
            <div className={ styles.account_content_wrapper + ' ' + styles.cta }>
                <button className={ styles.transaction_button }>View transactions</button>
            </div>
        </section>
    );
}

export default Account;