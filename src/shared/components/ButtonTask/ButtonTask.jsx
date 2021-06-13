import styles from './ButtonTask.module.scss';

const ButtonTask = ({onClick}) => {
    return ( <button type="button" className={styles.btn} onClick={()=> onClick()}>+</button> );
}

export default ButtonTask;