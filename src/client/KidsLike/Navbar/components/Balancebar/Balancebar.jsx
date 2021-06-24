import { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { getUserBalance } from '../../../../../redux/auth/selectors';
import { getUpdatedBalance } from '../../../../../redux/task/selectors';
import styles from './Balancebar.module.scss';

const Balancebar = () => {
    const currentBalance = useSelector(state => getUserBalance(state), shallowEqual);
    const updatedBalance = useSelector(state => getUpdatedBalance(state), shallowEqual);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        setBalance(currentBalance)
        if (updatedBalance) {
            setBalance(updatedBalance);
        }
    }, [updatedBalance, currentBalance])

    return (<div className={styles.balanceContainer}>
        <p className={styles.text}>Баланс баллов:</p>
        <p className={styles.score}>{balance}</p>
    </div> );
}

export default Balancebar;