import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { getTasks } from '../../../../../redux/task/selectors';
import { singleTask } from '../../../../../redux/task/operations';
import PlanningItem from '../PlanningItem';

import styles from './PlanningList.module.scss';

const PlanningList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => getTasks(state), shallowEqual);
    const array = [false, false, false, false, false, false, false];

    const handleChange = (idx, id) => {
        array.splice(idx, 1, true);
        const body = {
            days: array
        };
        console.log(body);
        dispatch(singleTask(id, body));
    };

    const itemElements = tasks.map(({ _id, ...props }) => <PlanningItem key={_id} {...props} onChange={(idx) => handleChange(idx, _id)}/>);

    return (<ul className={styles.list}>
        {itemElements}
    </ul> );
}

export default PlanningList;

PlanningList.defaultProps = {
    tasks: [],
    id: ''
}

PlanningList.propTypes = {
    tasks: PropTypes.array.isRequired,
    id: PropTypes.string
}