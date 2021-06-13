import { useState } from 'react';
import PropTypes from 'prop-types';
import { tabs } from './tabs';

import styles from './PlanningItem.module.scss';

const PlanningItem = ({ title, reward, imageUrl, onChange}) => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    };

    const tabsItems = tabs.map(({ id, day }, idx) => {
        return (
                <li className={styles.daysItem} key={id}>
                    <label htmlFor="days">{day}</label>
                <input type="checkbox" id="days" onChange={() => onChange(idx)} />
                </li>
        )
    })

    return (<li className={styles.item}>
        <img src={imageUrl} alt="" className={styles.img} />
        <div className={styles.cardFooter}>
            <div className={styles.taskContainer}>
                <p className={styles.title}>{title}</p>
                <p className={styles.reward}>{reward} балла</p>
                <button type="button" onClick={handleClick} className={styles.btn}>+</button>
                {toggle && <ul className={styles.daysList}>{tabsItems}</ul>}
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