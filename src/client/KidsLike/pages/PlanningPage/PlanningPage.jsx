import moment from 'moment';
import { useState, useCallback } from 'react';
import PlanningList from '../../Planning/components/PlanningList';
import Footer from '../../Footer';
import ScoreBar from '../../Planning/components/ScoreBar';
import ButtonTask from '../../../../shared/components/ButtonTask';
import Modal from '../../../../shared/components/Modal';
import PlanningModal from '../../Planning/components/PlanningModal';

import styles from './PlanningPage.module.scss';

const PlanningPage = () => {
    const startOfWeek = moment().startOf('isoWeek').format('DD');
    const endOfWeek = moment().endOf('isoWeek').format('DD.MM.YYYY');

    const [openModal, setOpenModal] = useState(false);
    const toggleModal = useCallback(
        () => {setOpenModal(!openModal)},
        [openModal],
    );

    return (
        <>
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.weekContainer}>
                    <h2 className={styles.title}>План на неделю:</h2>
                    <p className={styles.week}>{startOfWeek} - {endOfWeek}</p>
                </div>
                <div className={styles.scoreBarContainer}>
                    <ScoreBar />
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.morePrizes}>Хочешь получить больше призов - добавь задачи : &#10089;</p>
                        <div className={styles.btnContainerTablet}>
                            <ButtonTask onClick={toggleModal}/>
                        </div>
                    </div>
            </div>
            <PlanningList />
            <div className={styles.btnContainer}>
                <ButtonTask onClick={toggleModal}/>
            </div>
            <div className={styles.footerContainer}>
                <Footer />
            </div>
        </div>
        <div className={styles.scoreBarContainerMob}>
            <ScoreBar/>
        </div>
            {openModal && <Modal onClose={toggleModal}>
                    <PlanningModal onClose={toggleModal}/>
                </Modal>}
        </>
     );
}

export default PlanningPage;