import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import moment from 'moment';

import CompletedTask from '../CompletedTask';
import CheckboxToggle from '../../../../../shared/components/CheckboxToggle';
import styles from './TaskItem.module.scss';

const TaskItem = ({ title, imageUrl, reward, days, onClick, dayIdx, dateNow }) => {
    const currentDate = moment().format("dddd, DD-MM-YYYY");
    const exactDate = dateNow === currentDate
    const previousDate = currentDate < dateNow
    console.log(previousDate);

    const allDaysIsCompleted = days.map(({ isCompleted }) => { return isCompleted });

    return (<li className={styles.item}>
        <div className={styles.imgContainer}>
            <img src={imageUrl} alt="" className={styles.img} />
        </div>
        <div className={styles.cardFooter}>
            <div className={styles.taskContainer}>
                <p className={styles.title}>{title}</p>
                <p className={styles.reward}>{reward} балла</p>
            </div>
            <div className={styles.checkbox}>
            {exactDate && <CheckboxToggle key={v4()} isCompleted={allDaysIsCompleted[dayIdx]}  onClick={onClick}/>}
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
    dateNow: ''
}

TaskItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    reward: PropTypes.number.isRequired,
    days: PropTypes.array.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    dayIdx: PropTypes.number,
    dateNow: PropTypes.string
}