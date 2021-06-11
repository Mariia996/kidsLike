import { useState } from 'react-redux';
import { tabs } from './tabs';

import styles from './TasksDaysList.module.scss';

const TasksDaysList = ({ startOfWeek, endOfWeek, onClick }) => {

    const itemElements = tabs.map(({ id, day, dayDesk }, idx) => {
        return (<li key={id} className={styles.btnItem} >
            <button type="button" className={styles.daysBtn} onClick={() => onClick(idx)}><span className={styles.text}>{day}</span>
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