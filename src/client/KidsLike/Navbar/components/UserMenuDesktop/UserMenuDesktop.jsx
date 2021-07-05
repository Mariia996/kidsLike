import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

import { getUserEmail } from '../../../../../redux/auth/selectors';
import { logout } from '../../../../../redux/auth/opeartions';
import { menuItems} from '../UserMenu/menuItems';
import NavItem from '../UserMenu/components/NavItem';
import userAvatar from '../../../../../images/Navbar/avatar.jpg';
import { ReactComponent as LogoutIcon } from '../../../../../images/Navbar/icons/logout.svg';

import styles from './UserMenuDesktop.module.scss';

const UserMenuDesktop = () => {
    const dispatch = useDispatch();
    const userEmail = useSelector(state => getUserEmail(state), shallowEqual);

    const handleClick = () => {
        dispatch(logout());
    }

    const itemElements = menuItems.map((props) => {
        return (
            <NavItem key={v4()} {...props} />
        );
    });

    return (<>
        <div className={styles.userMenu}>
            <div className={styles.userContainer}>
                <img src={userAvatar} alt="" className={styles.avatar} />
                <p className={styles.userName}>{userEmail}</p>
                <LogoutIcon onClick={handleClick} className={styles.logoutIcon}/>
            </div>
            <ul className={styles.navList}>
                {itemElements}
            </ul>
        </div>
    </>);
}

export default UserMenuDesktop;

UserMenuDesktop.defaultProps = {
    userEmail: ''
}

UserMenuDesktop.propTypes = {
    userEmail: PropTypes.string
}
