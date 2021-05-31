import {createReducer, combineReducers} from '@reduxjs/toolkit';

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

const initialStateUser = {
    token: '',
    id: '',
    email: '',
    balance: 0
};

const initialStateLoading = false;

const initialStateIsAuthenticated = false;

const initialStateError = null;

const userReducer = createReducer(initialStateUser, {
    [registerRequest]: (state, _) => ({ ...state }),
    [loginRequest]: (state, _) => ({ ...state }),
    [logoutRequest]: (state, _) => ({ ...state }),
    [registerSuccess]: (_, { payload }) => ({
        token: payload.token,
        ...payload.data
    }),
    [loginSuccess]: (_, { payload }) => ({
        token: payload.token,
        ...payload.data
    }),
    [logoutSuccess]: () => initialStateUser,
});

const loadingReducer = createReducer(initialStateLoading, {
    [registerRequest]: () => true,
    [loginRequest]: () => true,
    [logoutRequest]: () => true,
    [registerSuccess]: () => false,
    [loginSuccess]: () => false,
    [logoutSuccess]: () => false,
    [registerError]: () => false,
    [loginError]: () => false,
    [logoutError]: () => false,
});

const isAuthenticated = createReducer(initialStateIsAuthenticated, {
    [registerSuccess]: () => true,
    [loginSuccess]: () => true,
    [logoutSuccess]: () => false,
    [registerError]: () => false,
    [loginError]: () => false,
    [logoutError]: () => false,
});

const errorReducer = createReducer(initialStateError, {
    [registerError]: (_, { payload }) => payload,
    [registerSuccess]: () => initialStateError,
    [loginError]: (_, { payload }) => payload,
    [loginSuccess]: () => initialStateError,
    [logoutError]: (_, { payload }) => payload,
    [logoutSuccess]: () => initialStateError,
});

const reducer = combineReducers({
    user: userReducer,
    loading: loadingReducer,
    isAuthenticated,
    error: errorReducer
});

export default reducer;