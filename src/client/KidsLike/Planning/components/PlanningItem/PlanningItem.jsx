import PropTypes from 'prop-types';
import styles from './PlanningItem.module.scss';

const PlanningItem = ({title, reward, imageUrl}) => {
    return (<li className={styles.item}>
        <img src={imageUrl} alt="" className={styles.img} />
        <div className={styles.cardFooter}>
            <div className={styles.taskContainer}>
                <p className={styles.title}>{title}</p>
                <p className={styles.reward}>{reward} балла</p>
            </div>
        </div>
    </li> );
}

export default PlanningItem;

PlanningItem.defaultProps = {
    title: '',
    imageUrl: '',
    reward: 0,
}

PlanningItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    reward: PropTypes.number.isRequired,
}