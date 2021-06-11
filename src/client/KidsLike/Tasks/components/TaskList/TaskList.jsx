import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import TaskItem from '../TaskItem';

import styles from './TaskList.module.scss';

const TaskList = ({currentTasks}) => {
    const id = uuidv4();
    const itemElements = currentTasks.map((props) => <TaskItem key={id}  {...props} />)

    return (<ul className={styles.list}>
        {itemElements}
    </ul> );
}

export default TaskList;

TaskList.defaultProps = {
    currentTasks: [],
    id: ''
}

TaskList.propTypes = {
    currentTasks: PropTypes.array.isRequired,
    id: PropTypes.string
}