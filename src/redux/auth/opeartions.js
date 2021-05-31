import AuthService from './auth-service';

import {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError
} from './actions';

const authService = new AuthService();

export const register = (body) => async dispatch => {
    dispatch(registerRequest());
    try {
        const data = await authService.register(body);
        dispatch(registerSuccess(data));
    } catch (error) {
        dispatch(registerError(error));
    }
};

export const login = (body) => async dispatch => {
    dispatch(loginRequest());
    try {
        const data = await authService.login(body);
        dispatch(loginSuccess(data));
    } catch (error) {
        dispatch(loginError(error));
    }
};

export const logout = () => async dispatch => {
    dispatch(logoutRequest());
    try {
        const data = await authService.logout();
        dispatch(logoutSuccess(data));
    } catch (error) {
        dispatch(logoutError(error));
    }
};
