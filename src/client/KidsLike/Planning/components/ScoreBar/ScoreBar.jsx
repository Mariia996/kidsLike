import styles from './ScoreBar.module.scss';

const ScoreBar = () => {
    return (<div className={styles.scoreBarContainer}>
            <div className={styles.scoreText}>
                <span className={styles.textTablet}>Определены задачи на</span>
                <div className={styles.scoreContainer}>
                    <span className={styles.score}>16</span>
                </div>
                <span className={styles.scores}>баллов</span></div>
    </div> );
}

export default ScoreBar;