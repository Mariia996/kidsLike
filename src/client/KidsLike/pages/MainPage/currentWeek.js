import { useSelector, shallowEqual } from 'react-redux';
import { getTasks } from '../../../../redux/task/selectors';


const useCurrentWeek = (idx) => {
    const tasks = useSelector(state => getTasks(state), shallowEqual);

    const filterTasks = tasks.map((task) => {
        return task.days[idx].isActive ? task : null;
    }).filter(item => item !== null);
    return filterTasks;
}

export default useCurrentWeek;