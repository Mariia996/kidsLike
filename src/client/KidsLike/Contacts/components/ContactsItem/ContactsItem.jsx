
import styles from './ContactsItem.module.scss';

const ContactsItem = ({img, name, position, text}) => {
    return ( <li className={styles.contactsItem}>
        <img src={img} alt={name} />
        <div className={styles.cardFooter}>
            <p className={styles.name}>{name}</p>
            <p className={styles.position}>{position}</p>
            <p className={styles.text}>{text}</p>
        </div>

        </li> );
}

export default ContactsItem;