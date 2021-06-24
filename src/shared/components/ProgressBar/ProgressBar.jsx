
import styles from './ProgressBar.module.scss';

const ProgressBar = () => {
    return (<div className={styles.progressContainer}>
        <div className={styles.scoreContainer}>
            <p className={styles.text}>Заработано баллов за эту неделю: <span className={styles.score}>0</span></p>
            <p className={styles.text}>Запланировано баллов на эту неделю: <span className={styles.score}>0</span></p>
        </div>
        <p className={styles.scoreWeek}>Заработано баллов:</p>
        <label htmlFor="scores" className={styles.label}><span className={styles.score}>0</span> / 0</label>
        <progress id="scores" value="0"max="0" className={styles.progress}></progress>
    </div> );
}

export default ProgressBar;