import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import styles from './Loader.module.scss';

const LoaderSpinner = () => {
    return (
    <>
    <Loader
        className={styles.loader}
        type="ThreeDots"
        color="#ffbc33"
        height={100}
        width={100}
            />
    </>
    )
};

export default LoaderSpinner;