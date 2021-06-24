import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import {v4} from 'uuid';

import { getUserEmail } from '../../../../../redux/auth/selectors';
import { logout } from '../../../../../redux/auth/opeartions';
import { menuItems} from './menuItems';
import NavItem from './components/NavItem';
import userAvatar from '../../../../../images/Navbar/avatar.jpg';
import { ReactComponent as LogoutIcon } from '../../../../../images/Navbar/icons/logout.svg';

import styles from './UserMenu.module.scss';

const UserMenu = () => {
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

export default UserMenu;