import { useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';

import RewardList from '../../Rewards/components/RewardList';
import { buyGifts } from '../../../../redux/gift/operations';
import { ReactComponent as GiftBox } from '../../../../images/Rewards/giftBox.svg';
import { getBuyGiftsErrorMessage } from '../../../../redux/gift/seletors';
import ProgressBar from '../../../../shared/components/ProgressBar';
import Button from '../../../../shared/components/Button';
import Footer from '../../Footer';
import Modal from '../../../../shared/components/Modal';
import RewardModal from '../../Rewards/components/RewardModal';

import styles from './RewardPage.module.scss';

const RewardPage = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => getBuyGiftsErrorMessage(state), shallowEqual);

    const [selectAwards, setSelectAwards] = useState([]);
    const addAward = (id) => {
        if (!selectAwards.includes(id)) {
            setSelectAwards([...selectAwards, id]);
        }
    };

    const [openModal, setOpenModal] = useState(false);
    const toggleModal = useCallback(
        () => {
            setOpenModal(!openModal);
        },
        [openModal],
    );

    const [noReward, setNoReward] = useState(false);
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (selectAwards.length > 0) {
            dispatch(buyGifts({
                giftIds: selectAwards
            }));
            toggleModal();
        } else {
            setNoReward(true);
            toggleModal();
        }
    }, [dispatch, selectAwards, toggleModal]);

    return (
        <>
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                    <div className={styles.titleContainer}>
                    <GiftBox className={styles.titleIcon} />
                    <h2 className={styles.title}>Мои призы</h2>
                </div>
                <div className={styles.progressBar}>
                    <ProgressBar />
                </div>
            </div>

                <RewardList onClick={(id) => addAward(id)} />
                <div className={styles.btnContainer}>
                    <Button type='submit' className={styles.btn} onClick={handleSubmit}>Подтвердить</Button>

                </div>

                {openModal && (<Modal onClose={toggleModal}>
                    {noReward ? <div className={styles.noRewardContainer}>
                        {!error && <p className={styles.noReward}>Вы не выбрали ни одной награды!</p>}
                        {error && <p className={styles.noScores}>У вас недостаточно баллов для покупки наград!</p>}
                    </div>
                       : <RewardModal />}
            </Modal>)}

            <div className={styles.footer}>
                <Footer />
            </div>
        </div>

        <div className={styles.progressBarMob}>
                <ProgressBar />
        </div>
        </>
     );
}

export default RewardPage;

RewardPage.defaultProps = {
    error: null,
}

RewardPage.propTypes = {
    error: PropTypes.bool,

}