import { useSelector, shallowEqual } from 'react-redux';
import { getRewardsPlanned } from '../../../../../redux/task/selectors';
import styles from './ScoreBar.module.scss';

const ScoreBar = () => {
    const rewardsPlanned = useSelector(state => getRewardsPlanned(state), shallowEqual);

    return (<div className={styles.scoreBarContainer}>
            <div className={styles.scoreText}>
                <span className={styles.textTablet}>Определены задачи на</span>
                <div className={styles.scoreContainer}>
                    <span className={styles.score}>{rewardsPlanned}</span>
                </div>
                <span className={styles.scores}>баллов</span></div>
    </div> );
}

export default ScoreBar;