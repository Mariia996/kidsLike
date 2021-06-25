import PropTypes from 'prop-types';
import CheckboxToggle from '../../../../../shared/components/CheckboxToggle';

import styles from './RewardItem.module.scss';

const RewardItem = ({ title, price, imageUrl, isSelected, onClick}) => {
    return (<li className={styles.item}>
            <img src={imageUrl} alt="Подарки" className={styles.image}/>
                <div className={styles.cardFooter}>
                    <div className={styles.container_info}>
                        <h3 className={styles.title}>{title}</h3>
                        <span className={styles.reward }>{price}</span>
                    </div>
            <div className={styles.checkbox}>
                <CheckboxToggle isCompleted={isSelected} onClick={() => onClick()} className={styles.checkbox_toggle} />
            </div>
                </div>
            </li>  );
}

export default RewardItem;

RewardItem.defaultProps = {
    title: '',
    price: 0,
    imageUrl: '',
    onClick: () => {}
}

RewardItem.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func
}