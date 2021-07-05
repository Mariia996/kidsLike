import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ReactComponent as EditIcon } from '../../../../../images/Planning/icons/edit.svg'
import galleryIcon from '../../../../../images/Planning/icons/gallery.svg'
import modalImg from '../../../../../images/Planning/planningModal.jpg';
import useForm from '../../../../../shared/hooks/useForm';
import { addTask } from '../../../../../redux/task/operations';

import styles from './PlanningModal.module.scss';

const initialState = {
    title: '',
    reward: ''
}

const PlanningModal = ({onClose}) => {
    const dispatch = useDispatch();

    const onSubmit = (body) => {
        dispatch(addTask(body))
        onClose()
    }

    const [data, , handleChange, handleSubmit] = useForm({initialState, onSubmit})

    return (<div className={styles.modalContent}>
        <div className={styles.imgContainer}>
            <img src={modalImg} alt="Привет!" className={styles.img} />
        </div>
        <div className={styles.modalFooter}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <img src={galleryIcon} alt="Галерея" className={styles.galleryIcon}/>
                <EditIcon className={styles.EditIcon1}/>
                <input type="text" onChange={handleChange} value={data.title} name="title" placeholder="Добавить задание..." className={styles.inputField}  />
                <EditIcon className={styles.EditIcon2}/>
                <input type="text" onChange={handleChange} value={data.reward} name="reward" placeholder="Добавить баллы..." className={styles.inputField} />
                <button type="submit" className={styles.btn}>Ок</button>
            </form>
        </div>
    </div> );
}

export default PlanningModal;

PlanningModal.defaultProps = {
    onClose: () => {}
}

PlanningModal.propTypes = {
    onClose: PropTypes.func
}
