import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { tabs } from './tabs';
import { singleTask } from '../../../../../redux/task/operations';

import styles from './PlanningItem.module.scss';

const PlanningItem = ({ title, reward, imageUrl, id}) => {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    };

    const array = [false, false, false, false, false, false, false];
    const handleChange = (idx) => {
        array.splice(idx, 1, true);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (array.includes(true)) {
            const body = {
                days: array
            };
            dispatch(singleTask(id, body));
        }
        handleClick()
    }

    const tabsItems = tabs.map(({ id, day }, idx) => {
        return (
            <li className={styles.daysItem} key={id}>
                <input type="checkbox" id={id} onChange={() => handleChange(idx)} className={`${styles.visuallyHidden} ${styles.inputField}`} />
                <label htmlFor={id} className={styles.inputLabel}>{day}</label>
            </li>
        )
    })

    return (<li className={styles.item}>
        <div className={styles.imgContainer}>
            <img src={imageUrl} alt="" className={styles.img} />
        </div>
        <div className={styles.cardFooter}>
                <div className={styles.textContainer}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.reward}>{reward} балла</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    {!toggle && <button type="button" onClick={handleClick} className={styles.btn}>+</button>}
                    {toggle && <button type="submit" className={styles.submitBtn}>ok</button>}
                    {toggle && <ul className={styles.daysList}>{tabsItems}</ul>}
                </form>
        </div>
    </li> );
}

export default PlanningItem;

PlanningItem.defaultProps = {
    title: '',
    imageUrl: '',
    reward: 0,
    id: 0,
}

PlanningItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    reward: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}