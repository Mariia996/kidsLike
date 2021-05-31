import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderSpinner = () => {
    return (
    <>
    <Loader
        type="ThreeDots"
        color="#ffbc33"
        height={100}
        width={100}
        timeout={3000}
            />
    </>
    )
};

export default LoaderSpinner;