import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import { switchTask } from '../../../../../redux/task/operations';
import TaskItem from '../TaskItem';

import styles from './TaskList.module.scss';

const TaskList = ({ currentTasks }) => {
    const dispatch = useDispatch();

    const date = moment().format('YYYY-MM-DD');
    const switchTasks = (id) => {
        dispatch(switchTask(id, { date }));
    };

    const itemElements = currentTasks.map(({id, ...props}) => <TaskItem key={id} onClick={() => switchTasks(id)} {...props} />)
    console.log(currentTasks);
    return (<ul className={styles.list}>
        {itemElements}
    </ul> );
}

export default TaskList;

TaskList.defaultProps = {
    currentTasks: [],
    id: '',
    onClick: () => {}
}

TaskList.propTypes = {
    currentTasks: PropTypes.array.isRequired,
    id: PropTypes.string
}