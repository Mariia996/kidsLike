import {v4} from 'uuid';

import { contactsItems } from './contactsItems';
import ContactsItem from '../ContactsItem';

import styles from './ContactsList.module.scss';

const ContactsList = () => {
    const itemElements = contactsItems.map(props => {
        return (<ContactsItem key={v4()}  {...props} />)
    });

    return (
        <ul className={styles.contactsList}>
            {itemElements}
        </ul>
     );
}

export default ContactsList;