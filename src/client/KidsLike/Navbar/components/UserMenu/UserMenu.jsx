import { NavLink } from 'react-router-dom';
import shortid from 'shortid';
import { menuItems } from './menuItems';

import styles from './UserMenu.module.scss';

const UserMenu = () => {
    const itemElements = menuItems.map(({ to, text }) => {
        return (
            <li key={shortid.generate()} className={styles.navItem}>
                <NavLink to={to} className={styles.navLink} activeClassName={styles.activeNavLink}>{text}</NavLink>
            </li>
        )
    })

    return (<>
        <ul className={styles.navList}>
            {itemElements}
        </ul>
    </>);
}

export default UserMenu;