import { NavLink } from 'react-router-dom';
import { routes } from '../../../../../app/components/App/routes';

import planerDesk from '../../../../../images/Planning/planer-desktop.png';

import styles from './TaskMain.module.scss';

const TaskMain = () => {
    return (
        <div className={styles.tasksContainer}>
                <div className={styles.dayContainer}>
                    <p className={styles.noTasks}>На этот день задач нет</p>
                    <NavLink to={routes.planning} className={styles.planningBtn}>Запланировать задачи</NavLink>
                    <img src={planerDesk} alt="" className={styles.imgDesk} />
            </div>
        </div>
     );
}

export default TaskMain;