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
    logoutError,
    currentUserRequest,
    currentUserSuccess,
    currentUserError
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
    [currentUserRequest]: (state) => ({ ...state }),
    [registerRequest]: (state, _) => ({ ...state }),
    [loginRequest]: (state, _) => ({ ...state }),
    [logoutRequest]: (state, _) => ({ ...state }),
    [currentUserSuccess]: (_, {payload}) => ({...payload.user}),
    [registerSuccess]: (_, { payload }) => ({
        token: payload.token,
        ...payload.user
    }),
    [loginSuccess]: (_, { payload }) => ({
        token: payload.token,
        ...payload.user
    }),
    [logoutSuccess]: () => initialStateUser,
});

const loadingReducer = createReducer(initialStateLoading, {
    [currentUserRequest]: () => true,
    [registerRequest]: () => true,
    [loginRequest]: () => true,
    [logoutRequest]: () => true,
    [currentUserSuccess]: () => false,
    [registerSuccess]: () => false,
    [loginSuccess]: () => false,
    [logoutSuccess]: () => false,
    [currentUserError]: () => false,
    [registerError]: () => false,
    [loginError]: () => false,
    [logoutError]: () => false,
});

const isAuthenticated = createReducer(initialStateIsAuthenticated, {
    [currentUserSuccess]: () => true,
    [registerSuccess]: () => true,
    [loginSuccess]: () => true,
    [logoutSuccess]: () => false,
    [currentUserError]: () => false,
    [registerError]: () => false,
    [loginError]: () => false,
    [logoutError]: () => false,
});

const errorReducer = createReducer(initialStateError, {
    [currentUserError]: (_, {payload}) => payload,
    [currentUserSuccess]: () => initialStateError,
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