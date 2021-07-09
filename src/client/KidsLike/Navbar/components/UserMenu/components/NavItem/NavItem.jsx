import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.scss';

const NavItem = ({ to, text, onClick }) => {
        return (
            <li className={styles.navItem}>
                <NavLink to={to} onClick={onClick} className={styles.navLink} activeClassName={styles.activeNavLink}>{text}</NavLink>
            </li>
        )
}

export default NavItem;

NavItem.defaultProps = {
    to: '',
    text: ''
}
