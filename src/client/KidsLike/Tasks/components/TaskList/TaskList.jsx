import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import { switchTask } from '../../../../../redux/task/operations';
import TaskItem from '../TaskItem';

import styles from './TaskList.module.scss';

const TaskList = ({ currentTasks, dayIdx }) => {
    const dispatch = useDispatch();
    const date = moment().format('YYYY-MM-DD');


    const switchTasks = (id) => {
        // при повторном диспатче id undefined
        dispatch(switchTask(id, { date }));
    };

    const itemElements = currentTasks.map(({ _id, ...props }) => <TaskItem key={_id} onClick={() => switchTasks(_id)} dayIdx={dayIdx} {...props} />)
    return (<ul className={styles.list}>
        {itemElements}
    </ul> );
}

export default TaskList;

TaskList.defaultProps = {
    currentTasks: [],
    id: '',
    dayIdx: 0,
    onClick: () => {},
}

TaskList.propTypes = {
    currentTasks: PropTypes.array.isRequired,
    id: PropTypes.string,
    dayIdx: PropTypes.number,
    onClick: PropTypes.func,
}