import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment';
import { tasks } from '../../../../redux/task/operations';
import useCurrentWeek from './currentWeek';

import TaskMain from '../../Tasks/components/TaskMain';
import ProgressBar from '../../../../shared/components/ProgressBar';
import TaskList from '../../Tasks/components/TaskList';
import TasksDaysList from '../../Tasks/components/TasksDaysList';
import planerMob from '../../../../images/Planning/planer-mobile.png';
import planerTab from '../../../../images/Planning/planer-tablet.png';
import Footer from '../../Footer';

import styles from './MainPage.module.scss';

const MainPage = () => {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(0);

    moment.locale('ru');
    const dateNow = moment().format('dddd, DD-MM-YYYY');
    const startOfWeek = moment().startOf('isoWeek').format('DD');
    const endOfWeek = moment().endOf('isoWeek').format('Do MMMM');

    useEffect(() => {
        dispatch(tasks());
    }, [dispatch]);

    const filteredTasks = useCurrentWeek(isActive);
    console.log(filteredTasks);

    const getActiveIdx = (idx) => {
        setIsActive(idx);
    };


    return (
        <div className={styles.mainContainer}>
            <div className={styles.tasksBtnContainer}>
                <TasksDaysList startOfWeek={startOfWeek} endOfWeek={endOfWeek} onClick={(idx) => getActiveIdx(idx)}/>
            </div>
            <div className={styles.container}>
                <div className={styles.leftSideContainer}>
                    <div className={styles.infoContainer}>
                        <div className={styles.progressContainer}>
                            <ProgressBar />
                        </div>
                        <div className={styles.weekContainer}>
                        <h2 className={styles.week}>Неделя: {startOfWeek}-{endOfWeek}</h2>
                        <div className={styles.currentDayContainer}>
                            <p className={styles.myTasks}>Мои задачи:</p>
                            <p className={styles.currentDay}>{dateNow}</p>
                        </div>
                    </div>
                    </div>
                    {filteredTasks.length === 0 ? <TaskMain /> : <TaskList currentTasks={filteredTasks}/>}
                    {filteredTasks === null && <div className={styles.footerContainerDesk}>
                        <Footer />
                    </div>}

                    {filteredTasks.length !== 0 && (<div className={styles.footerContainer}>
                        <Footer />
                    </div>)}
                </div>
            </div>

            {filteredTasks.length === 0 && (<div className={styles.imgContainer}>
                <img src={planerTab} alt="" className={styles.imgTab} />
                <div className={styles.footerContainerTab}>
                    <Footer />
                </div>
            </div>)}


            <div className={styles.progressMobContainer}>
                {filteredTasks.length === 0 && <img src={planerMob} alt="" className={styles.imgMob} />}
                <ProgressBar />
            </div>
        </div>
    );
};

export default MainPage;