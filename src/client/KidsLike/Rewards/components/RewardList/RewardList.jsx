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

    const itemElements = rewards.map(({ id, ...props }) => (<RewardItem key={id} {...props} onClick={() => onClick(id)}/>))
    return (  <ul className={styles.list}>
            {itemElements}
        </ul> );
}

export default RewardList;

RewardList.defaultProps = {
    rewards: [],
    onClick: () => {}
}

RewardList.propTypes = {
    rewards: PropTypes.array.isRequired,
    onClick: PropTypes.func
}