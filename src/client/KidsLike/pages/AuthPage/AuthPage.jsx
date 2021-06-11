import AuthForm from '../../AuthForm';

import picMobile from '../../../../images/AuthPage/headphones-mobile.jpg';
import pic1Tablet from '../../../../images/AuthPage/family-1-tablet.png';
import pic2Tablet from '../../../../images/AuthPage/headphones-tablet.png';
import pic3Tablet from '../../../../images/AuthPage/family-2-tablet.png';
import pic1Desktop from '../../../../images/AuthPage/family-1-desktop.png';
import pic2Desktop from '../../../../images/AuthPage/headphones-desktop.png';
import pic3Desktop from '../../../../images/AuthPage/hi-desktop.png';
import pic4Desktop from '../../../../images/AuthPage/family-2-desktop.png';
import Footer from '../../Footer';

import styles from './AuthPage.module.scss';

const AuthPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.mainContainer}>
                    <div className={styles.desktopImgContainer}>
                        <div className={styles.pic1Desktop}>
                            <img src={pic1Desktop} alt="Семья" />
                        </div>
                        <div className={styles.pic2Desktop}>
                            <img src={pic2Desktop} alt="Наушники" />
                        </div>
                        <div className={styles.pic3Desktop}>
                            <img src={pic3Desktop} alt="Привет от KidsLike" />
                        </div>
                        <div className={styles.pic4Desktop}>
                            <img src={pic4Desktop} alt="День уборки с семьей" />
                        </div>
                    </div>
                    <div className={styles.authContainer}>
                        <AuthForm />
                    </div>
                </div>
                <div className={styles.footerContainer}>
                        <Footer />
                    </div>
            </div>
        <div className={styles.mobImgContainer}>
            <img src={picMobile} alt="Наушники" />
        </div>
            <div className={styles.tabletImgContainer}>
                <div className={styles.pic1Tablet}>
                    <img src={pic1Tablet} alt="Семейный день" />
                </div>
                <div className={styles.pic2Tablet}>
                    <img src={pic2Tablet} alt="Наушники" />
                </div>
                <div className={styles.pic3Tablet}>
                    <img src={pic3Tablet} alt="День уборки с семьей" />
                </div>
            </div>
        </>
     );
}

export default AuthPage;