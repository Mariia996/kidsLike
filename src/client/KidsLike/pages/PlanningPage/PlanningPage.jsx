import moment from 'moment';

import PlanningList from '../../Planning/components/PlanningList';
import Footer from '../../Footer';
import ScoreBar from '../../Planning/components/ScoreBar';
import ButtonTask from '../../../../shared/components/ButtonTask';

import styles from './PlanningPage.module.scss';

const PlanningPage = () => {

    const startOfWeek = moment().startOf('isoWeek').format('DD');
    const endOfWeek = moment().endOf('isoWeek').format('DD.MM.YYYY');

    const addTask = () => {
    }

    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.weekContainer}>
                    <h2 className={styles.title}>План на неделю:</h2>
                    <select name="week" id="week" className={styles.select}>
                        <option value="" className={styles.selectText}>{startOfWeek} - {endOfWeek}</option>
                    </select>
                </div>
                <div className={styles.scoreBarContainer}>
                    <ScoreBar />
                </div>
                <p className={styles.morePrizes}>Хочешь получить больше призов - добавь задачи : &#10089;</p>
            </div>
            <PlanningList />
            <div className={styles.btnContainer}>
                <ButtonTask onClick={addTask}/>
            </div>
            <div className={styles.footerContainer}>
                <Footer />
            </div>
            <div className={styles.scoreBarContainerMob}>
                <ScoreBar/>
            </div>
        </div>
     );
}

export default PlanningPage;