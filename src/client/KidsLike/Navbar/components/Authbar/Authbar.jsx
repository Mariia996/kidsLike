import { NavLink } from 'react-router-dom';

import menuItems from '../../menuItems';


import styles from './Authbar.module.scss';

const Authbar = () => {
    const { auth, contacts } = menuItems;
    return (<div className={styles.authbar}>
        <ul className={styles.linkList}>
            <li className={styles.linkItem}>
                <NavLink exact to={auth.to} className={styles.navLink} activeClassName={styles.activeNavLink}>{auth.text}</NavLink>
            </li>
            <li className={styles.linkItem}>
                <NavLink exact to={contacts.to} className={styles.navLink} activeClassName={styles.activeNavLink}>{contacts.text}</NavLink>
            </li>
        </ul>


    </div> );
}

export default Authbar;