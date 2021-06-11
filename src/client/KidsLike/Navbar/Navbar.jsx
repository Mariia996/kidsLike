import { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import Logo from '../../../shared/components/Logo';
import Balancebar from './components/Balancebar';
import AuthbarMobile from './components/AuthbarMobile';
import Authbar from './components/Authbar';
import UserMenu from './components/UserMenu';
import UserMenuDesktop from './components/UserMenuDesktop';
import { ReactComponent as BurgerIcon } from '../../../images/Navbar/icons/menu.svg';
import { ReactComponent as CloseIcon } from '../../../images/Navbar/icons/close.svg';
import { getIsAuthenticated } from '../../../redux/auth/selectors';

import styles from './Navbar.module.scss';

const Navbar = () => {
    const isAuthenticated = useSelector((state) => getIsAuthenticated(state), shallowEqual);

    const [toggleMenu, setToggleMenu] = useState(false);
    const handleCkick = (e) => {
        e.preventDefault();
        setToggleMenu(!toggleMenu);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.logo}><Logo /></div>
                    {isAuthenticated && <Balancebar />}
                    <BurgerIcon onClick={handleCkick} className={styles.burgerIcon} />
                    {toggleMenu && <div className={styles.burgerMenu}>
                        <CloseIcon  onClick={handleCkick} className={styles.closeIcon}/>
                        {isAuthenticated ? <UserMenu /> : <AuthbarMobile />}
                    </div>}
                    <div className={styles.navbar}>
                        {isAuthenticated ? <UserMenuDesktop/> : <Authbar />}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;