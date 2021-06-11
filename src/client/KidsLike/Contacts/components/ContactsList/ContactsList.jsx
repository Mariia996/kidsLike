import shortid from 'shortid';

import { contactsItems } from './contactsItems';
import ContactsItem from '../ContactsItem';

import styles from './ContactsList.module.scss';

const ContactsList = () => {
    const id = shortid.generate();

    const itemElements = contactsItems.map(props => {
        return (<ContactsItem key={id}  {...props} />)
    });

    return (
        <ul className={styles.contactsList}>
            {itemElements}
        </ul>
     );
}

export default ContactsList;