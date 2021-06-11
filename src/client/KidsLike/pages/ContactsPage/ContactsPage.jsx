import ContactsList from '../../Contacts/components/ContactsList';
import Footer from '../../Footer';
import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.contactsContainer}>
                <h2 className={styles.title}>Наша команда</h2>
                <p className={styles.text}>Всегда готовы к новым вызовам!</p>
                <ContactsList />
            </div>
            <div className={styles.footerContainer}>
                <Footer />
            </div>
        </div>
            </>
     );
}

export default ContactsPage;