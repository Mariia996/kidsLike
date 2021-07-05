import { useSelector, shallowEqual } from 'react-redux';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getRewardsGained } from '../../../redux/task/selectors';
import { getRewardsPlanned } from '../../../redux/task/selectors';
import { getUpdatedWeekGainedRewards } from '../../../redux/task/selectors';

import styles from './ProgressBar.module.scss';

const ProgressBar = () => {
    const rewardsGained = useSelector(state => getRewardsGained(state), shallowEqual);
    const rewardsPlanned = useSelector(state => getRewardsPlanned(state), shallowEqual);
    const updatedWeekGainedRewards = useSelector(state => getUpdatedWeekGainedRewards(state), shallowEqual);

    const [rewards, setRewards] = useState(rewardsGained);

    useEffect(() => {
        if (updatedWeekGainedRewards) {
            setRewards(updatedWeekGainedRewards);
        } else {
            setRewards(rewardsGained);
        }
    }, [updatedWeekGainedRewards, rewardsGained])

    return (<div className={styles.progressContainer}>
        <div className={styles.scoreContainer}>
            <p className={styles.text}>Заработано баллов за эту неделю: <span className={styles.score}>{rewards}</span></p>
            <p className={styles.text}>Запланировано баллов на эту неделю: <span className={styles.score}>{rewardsPlanned}</span></p>
        </div>
        <p className={styles.scoreWeek}>Заработано баллов:</p>
        <label htmlFor="scores" className={styles.label}><span className={styles.score}>{rewards}</span> / {rewardsPlanned}</label>
        <progress id="scores" value={rewards} max={rewardsPlanned} className={styles.progress}></progress>
    </div> );
}

export default ProgressBar;

ProgressBar.defaultProps = {
    rewardsGained: 0,
    rewardsPlanned: 0,
    updatedWeekGainedRewards: 0
}

ProgressBar.propTypes = {
    rewardsGained: PropTypes.number,
    rewardsPlanned: PropTypes.number,
    updatedWeekGainedRewards: PropTypes.number
}
