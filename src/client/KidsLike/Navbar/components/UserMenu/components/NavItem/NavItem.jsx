import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.scss';

const NavItem = ({ to, text }) => {
        return (
            <li className={styles.navItem}>
                <NavLink to={to} className={styles.navLink} activeClassName={styles.activeNavLink}>{text}</NavLink>
            </li>
        )
}

export default NavItem;

NavItem.defaultProps = {
    to: '',
    text: ''
}
