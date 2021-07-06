import {ReactComponent as Done} from '../../../../../images/Task/icons/done.svg'

import styles from './CompletedTask.module.scss';

const CompletedTask = () => {
    return ( <div className={styles.pointer}><Done/></div> );
}

export default CompletedTask;