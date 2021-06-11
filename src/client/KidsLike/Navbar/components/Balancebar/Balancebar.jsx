import { useSelector, shallowEqual } from 'react-redux';
import { getUserBalance } from '../../../../../redux/auth/selectors';
import styles from './Balancebar.module.scss';

const Balancebar = () => {
    const balance = useSelector(state => getUserBalance(state), shallowEqual);

    return (<div className={styles.balanceContainer}>
        <p className={styles.text}>Баланс баллов:</p>
        <p className={styles.score}>{balance}</p>
    </div> );
}

export default Balancebar;