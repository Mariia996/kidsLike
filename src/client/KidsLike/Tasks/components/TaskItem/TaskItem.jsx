import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import moment from 'moment';
import CheckboxToggle from '../../../../../shared/components/CheckboxToggle';
import styles from './TaskItem.module.scss';

const TaskItem = ({ title, imageUrl, reward, days, onClick, dayIdx }) => {
    const id = v4();

    const allDaysIsCompleted = days.map(({ isCompleted }) => { return isCompleted });

    const date = moment().format('YYYY-MM-DD');

    return (<li className={styles.item}>
        <img src={imageUrl} alt="" className={styles.img} />
        <div className={styles.cardFooter}>
            <div className={styles.taskContainer}>
                <p className={styles.title}>{title}</p>
                <p className={styles.reward}>{reward} балла</p>
            </div>
            <div className={styles.checkbox}>
                <CheckboxToggle key={id} isCompleted={allDaysIsCompleted[dayIdx]}  onClick={() => onClick()}/>
            </div>
        </div>
    </li> );
}

export default TaskItem;

TaskItem.defaultProps = {
    title: '',
    imageUrl: '',
    reward: 0,
    days: [],
    isCompleted: false,
    onClick: () => { },
    dayIdx: 0,
}

TaskItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    reward: PropTypes.number.isRequired,
    days: PropTypes.array.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    dayIdx: PropTypes.number,
}