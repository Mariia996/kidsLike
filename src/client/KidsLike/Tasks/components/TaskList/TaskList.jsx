// import { useSelector, shallowEqual } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import { getTasks } from '../../../../../redux/task/selectors';

import TaskItem from '../TaskItem';

import styles from './TaskList.module.scss';

const TaskList = ({currentTasks}) => {
    // const tasks = useSelector(state => getTasks(state), shallowEqual);
    const id = uuidv4();
    const itemElements = currentTasks.map((props) => <TaskItem key={id}  {...props} />)

    return (<ul className={styles.list}>
        {itemElements}
    </ul> );
}

export default TaskList;

TaskList.defaultProps = {
    tasks: [],
    id: ''
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    id: PropTypes.string
}