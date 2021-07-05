import { useState } from 'react';
import PropTypes from 'prop-types';
import { tabs } from './tabs';

import styles from './TasksDaysList.module.scss';


const TasksDaysList = ({ startOfWeek, endOfWeek, onClick }) => {
    const [currentDay, setCurrentDay] = useState(0)

    const selectDay = (idx) => {
        onClick(idx);
        setCurrentDay(idx);
    }

    const itemElements = tabs.map(({ id, day, dayDesk }, idx) => {
        return (<li key={id} className={styles.btnItem} >
            <button type="button" className={idx !== currentDay ? styles.daysBtn : styles.daysBtnActive} onClick={() => selectDay(idx)}><span className={styles.text}>{day}</span>
                <span className={styles.textDesk}>{dayDesk}</span></button>
        </li>)
    });

     return (<div className={styles.daysMenu}>
                <h2 className={styles.weekTabletMob}>Неделя: {startOfWeek}-{endOfWeek}</h2>
                <ul className={styles.btnList}>
                    {itemElements}
                </ul>
            </div>)
}

export default TasksDaysList;

TasksDaysList.defaultProps = {
    startOfWeek: '0',
    endOfWeek: '- 0',
    onClick: () => { },
    tabs: []
}

TasksDaysList.propTypes = {
    startOfWeek: PropTypes.string,
    endOfWeek: PropTypes.string,
    onClick: PropTypes.func,
    tabs: PropTypes.array
}
