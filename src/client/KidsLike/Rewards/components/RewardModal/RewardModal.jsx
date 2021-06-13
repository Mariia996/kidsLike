import { useSelector, shallowEqual } from 'react-redux';
import { getSelectedAwards } from '../../../../../redux/gift/seletors';

import cat from '../../../../../images/Rewards/RewardModal/cat.png';

import styles from './RewardModal.module.scss';

const RewardModal = () => {
    const awards = useSelector((state => getSelectedAwards(state)), shallowEqual);

    const itemElements = awards.map(item => (
        <li key={item.id}>
            <div className={styles.rewardImg}>
                <img src={item.imageUrl} alt="" className={styles.reward} />
            </div>
            <p className={styles.rewardTitle}>{item.title}</p>
        </li>
    ))


    return (
        <div className={styles.modalContainer}>
            <div className={styles.imgContainer}>
                <img src={cat} alt="" className={styles.imgModal} />
            </div>
            <h2 className={styles.title}>Поздравляем! Ты получаешь:</h2>
            <ul className={styles.rewardList}>
                {itemElements}
            </ul>
        </div>
     );
}

export default RewardModal;