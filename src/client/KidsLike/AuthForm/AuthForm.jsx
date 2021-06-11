import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

import { ReactComponent as GoogleIcon } from '../../../images/AuthPage/icons/google.svg';
import Button from '../../../shared/components/Button';

import useForm from '../../../shared/hooks/useForm';
import {fields} from './fields';
import { register, login } from '../../../redux/auth/opeartions';

import styles from './AuthForm.module.scss';

const initialState = {
    email: '',
    password: ''
}

const AuthForm = () => {
    const dispatch = useDispatch();
    const [actionType, setActionType] = useState('');

    const onGoogleClick = (e) => {

    };

    const onLoginClick = (e) => {
        setActionType('login');
    };

    const onRegisterClick = (e) => {
        setActionType('register');
    };

    const onSubmit = (body) => {
        console.log(body);
        const action = (actionType === 'login') ? login(body) : register(body);
        dispatch(action);
    };

    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });

    const emailUnputId = shortid.generate();
    const passwordInputId = shortid.generate();
    const { emailValue, passwordValue } = fields;
    return (<div className={styles.authFormContainer}>
        <h1 className={styles.title}>Выполняй задания, получи классные призы!</h1>

        <div className={styles.formContainer}>

        <p className={styles.text}>Вы можете авторизироваться с помощью Google Account:</p>
        <Button type='submit' onClick={onGoogleClick} className={styles.googleBtn}>
            <GoogleIcon className={styles.googleIcon} />
            Google</Button>

        <p className={styles.text}>Или зайти с помощью e-mail и пароля предварительно зарегистрировавшись:</p>
            <form className={styles.authForm} onSubmit={handleSubmit}>

                <label htmlFor={emailUnputId} className={styles.inputLabel}><span className={styles.star}>*</span>E-mail:</label>
                <input type={emailValue.type}
                    name={emailValue.name}
                    id={emailUnputId}
                    value={data.email}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder={emailValue.placeholder} />

                <label htmlFor={passwordInputId} className={styles.inputLabel}><span className={styles.star}>*</span>Пароль:</label>
                <input type={passwordValue.type}
                    name={passwordValue.name}
                    id={passwordInputId}
                    value={data.password}
                    onChange={handleChange}
                    className={`${styles.inputField} ${styles.passPlaceholder}`}
                    placeholder={passwordValue.placeholder} />

                <div className={styles.btnContainer}>
                    <Button type='submit' onClick={onLoginClick} className={styles.btn}>Войти</Button>
                    <Button type='submit' onClick={onRegisterClick} className={styles.btn}>Зарегистрироваться</Button>
                </div>
            </form>
            </div>
    </div> );
}

export default AuthForm;