import { NavLink } from 'react-router-dom';

import menuItems from '../../menuItems';
import styles from './AuthbarMobile.module.scss';

const Authbar = ({ onClick }) => {
    console.log(onClick);
    const { auth, contacts } = menuItems;
    return (<div className={styles.authbar}>
        <ul className={styles.linkList}>
            <li className={styles.linkItem}>
                <NavLink exact to={auth.to} onClick={onClick} className={styles.navLink} activeClassName={styles.activeNavLink}>{auth.text}</NavLink>
            </li>
            <li className={styles.linkItem}>
                <NavLink exact to={contacts.to} onClick={onClick} className={styles.navLink} activeClassName={styles.activeNavLink}>{contacts.text}</NavLink>
            </li>
        </ul>


    </div> );
}

export default Authbar;