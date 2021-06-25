import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { getGifts } from '../../../../../redux/gift/operations';
import { getRewards } from '../../../../../redux/gift/seletors';
import RewardItem from '../RewardItem';

import styles from './RewardList.module.scss';

const RewardList = ({onClick}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGifts());
    }, [dispatch]);

    const rewards = useSelector((state => getRewards(state)), shallowEqual);
    // const payload = [3, 6]

    // const newRewards = [...rewards];
    // const newItems = newRewards.filter(item => payload.includes(item.id)).map(item => ({ ...item, isSelected: true }))
//     const newArray = newRewards.reduce((acc, item, idx, array) => {
//         if (payload.includes(item.id)) {
//             array.split(idx, 1)
//         }
//         return array;
//     }, [])
    const itemElements = rewards.map(({ id, ...props }) => (<RewardItem key={id} {...props} onClick={() => onClick(id)}/>))
    return (  <ul className={styles.list}>
            {itemElements}
        </ul> );
}

export default RewardList;

RewardList.defaultProps = {
    awards: [],
    onClick: () => {}
}

RewardList.propTypes = {
    awards: PropTypes.array.isRequired,
    onClick: PropTypes.func
}