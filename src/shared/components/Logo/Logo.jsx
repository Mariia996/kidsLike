import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from './icon/victory.svg';

import menuItems from '../../../client/KidsLike/Navbar/menuItems';

import styles from './Logo.module.scss';

const Logo = () => {
    const { auth } = menuItems;
    return (<NavLink exact to={auth.to} className={styles.logoLink}>
        <span className={styles.logoText}>KidsLike</span>
        <LogoIcon className={styles.logoIcon}/>
    </NavLink> );
}

export default Logo;