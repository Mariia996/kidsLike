import PropTypes from 'prop-types';

import CheckboxToggle from '../../../../../shared/components/CheckboxToggle';
import styles from './TaskItem.module.scss';

const TaskItem = ({ title, imageUrl, reward, isCompleted }) => {

    return (<li className={styles.item}>
        <img src={imageUrl} alt="" className={styles.img} />
        <div className={styles.cardFooter}>
            <div className={styles.taskContainer}>
                <p className={styles.title}>{title}</p>
                <p className={styles.reward}>{reward} балла</p>
            </div>
            <div className={styles.checkbox}>
                <CheckboxToggle isCompleted={isCompleted} />
            </div>
        </div>
    </li> );
}

export default TaskItem;

TaskItem.defaultProps = {
    title: '',
    imageUrl: '',
    reward: 0,
    isCompleted: false
}

TaskItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    reward: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired
}