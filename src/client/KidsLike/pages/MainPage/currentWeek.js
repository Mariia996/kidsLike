import { useSelector, shallowEqual } from 'react-redux';
import { getTasks } from '../../../../redux/task/selectors';

import { tabs } from '../../Tasks/components/TasksDaysList/tabs';

const useCurrentWeek = (idx) => {
    const tasks = useSelector(state => getTasks(state));

    const filterTasks = tasks.map((task) => {
        return task.days[idx].isActive ? task : null;
    }).filter(item => item !== null);

    console.log(filterTasks);
    return filterTasks;
}

export default useCurrentWeek;