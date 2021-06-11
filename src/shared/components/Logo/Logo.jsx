import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from './icon/victory.svg';

import menuItems from '../../../client/KidsLike/Navbar/menuItems';

import styles from './Logo.module.scss';

const Logo = ({logo, icon}) => {
    const { auth } = menuItems;
    return (<NavLink exact to={auth.to} className={styles.logoLink}>
        <span className={`${styles.logoText} ${logo}`}>KidsLike</span>
        <LogoIcon className={`${styles.logoIcon} ${icon} `}/>
    </NavLink> );
}

export default Logo;