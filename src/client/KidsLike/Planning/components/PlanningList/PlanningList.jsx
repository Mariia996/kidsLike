import { useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';

import { getTasks } from '../../../../../redux/task/selectors';
import PlanningItem from '../PlanningItem';

import styles from './PlanningList.module.scss';

const PlanningList = () => {
    const tasks = useSelector(state => getTasks(state), shallowEqual);

    const itemElements = tasks.map(({ _id, ...props }) => <PlanningItem key={_id} {...props} id={_id} />);

    return (<ul className={styles.list}>
        {itemElements}
    </ul> );
}

export default PlanningList;

PlanningList.defaultProps = {
    tasks: [],
}

PlanningList.propTypes = {
    tasks: PropTypes.array.isRequired,
}