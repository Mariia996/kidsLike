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
    logoutError,
    currentUserRequest,
    currentUserSuccess,
    currentUserError
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
        await authService.logout();
        dispatch(logoutSuccess());
    } catch (error) {
        dispatch(logoutError(error));
    }
};

export const currentUser = () => async dispatch => {
    dispatch(currentUserRequest());
    try {
        const data = await authService.currentUser();
        dispatch(currentUserSuccess(data));
    }
    catch (error) {
        dispatch(currentUserError(error));
    }
}
