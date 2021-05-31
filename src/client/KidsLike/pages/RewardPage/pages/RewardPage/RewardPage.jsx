import { useState, useEffect, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import {getGifts, buyGifts} from '../../../../../../redux/gift/operations';
import CheckboxToggle from '../../../../../../shared/components/CheckboxToggle';
import { getRewards } from '../../../../../../redux/gift/seletors';
import Modal from '../../../../../../shared/components/Modal';
import RewardModal from '../../../../RewardModal';

import styles from './RewardPage.module.scss';

const RewardPage = () => {
    const dispatch = useDispatch();
    const awards = useSelector((state => getRewards(state)), shallowEqual);

    useEffect(() => {
        dispatch(getGifts());
    }, [dispatch]);


    const [selectAwards, setSelectAwards] = useState([]);
    const addAward = (id) => {
        if (!selectAwards.includes(id)) {
            setSelectAwards([...selectAwards, id])
        }
    };

    const [openModal, setOpenModal] = useState(false);
    const toggleModal = useCallback(
        () => {
            setOpenModal(!openModal);
        },
        [openModal],
    );

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (selectAwards.length > 0) {
            dispatch(buyGifts());
            toggleModal();
        }
    }, [dispatch, selectAwards, toggleModal]);

    const itemElements = awards.map(({ id, title, price, imageUrl }) => (
                 <li className={styles.item} key={id}>
                        <img src={imageUrl} alt="Сладости" className={styles.image}/>
                    <div className={styles.container_card}>
                        <div className={styles.container_info}>
                        <h3 className={styles.gift_name}>{title}</h3>
                                <span className={styles.price}>{price}</span>
                        </div>
                        <div className={styles.container_checkboxtoggle}> <CheckboxToggle onChange={()=>addAward(id)} className={styles.checkbox_toggle} /></div>
                    </div>
                </li>   ))

    return (
        <>
        <ul className={styles.list}>
            {itemElements}
        </ul>
        <div className={styles.container}>
                {openModal && (<Modal onClose={toggleModal}>
                    <RewardModal />
            </Modal>)}
            <button type='submit' onClick={handleSubmit}>Нажми меня</button>
            </div>
        </>
     );
}

// function useSubmitButton(awards) {
//     const dispatch = useDispatch();
//         useEffect(() => dispatch(buyGifts(awards)), [dispatch]);

// }

export default RewardPage;