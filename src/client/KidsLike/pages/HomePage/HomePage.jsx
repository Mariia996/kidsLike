import AuthForm from '../../AuthForm';
import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.authContainer}>
                <AuthForm />
            </div>


        </div>
     );
}

export default HomePage;