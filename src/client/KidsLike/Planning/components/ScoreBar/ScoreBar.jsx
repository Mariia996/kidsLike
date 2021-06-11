import styles from './ScoreBar.module.scss';

const ScoreBar = () => {
    return (<div className={styles.scoreBarContainer}>
        <div className={styles.scoreContainer}>
            <p className={styles.scoreText}><span className={styles.score}>16</span> баллов</p>
        </div>
    </div> );
}

export default ScoreBar;