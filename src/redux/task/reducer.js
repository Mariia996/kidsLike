import { combineReducers } from 'redux';

import { createReducer} from '@reduxjs/toolkit';

import {
    tasksRequest,
    tasksSuccess,
    tasksError,
    addTasksRequest,
    addTasksSuccess,
    addTasksError
 } from './actions';

const initialStateWeek = [];

const initialStateLoading = false;

const initialStateError = null;

const tasks = createReducer(initialStateWeek, {
    [tasksRequest]: (state) => ([...state]),
    [tasksSuccess]: (_, { payload }) => ([...payload.week.tasks]),
    [addTasksRequest]: (state) => ([...state]),
    [addTasksSuccess]: (state, { payload }) => ([...state, ...payload]),
});

const loadingReducer = createReducer(initialStateLoading, {
    [tasksRequest]: () => true,
    [addTasksRequest]: () => true,
    // [loginRequest]: () => true,
    // [logoutRequest]: () => true,
    [tasksSuccess]: () => false,
    [addTasksSuccess]: () => false,
    // [loginSuccess]: () => false,
    // [logoutSuccess]: () => false,
    [tasksError]: () => false,
    [addTasksError]: () => false,
    // [loginError]: () => false,
    // [logoutError]: () => false,
});

const errorReducer = createReducer(initialStateError, {
    [tasksError]: (_, {payload}) => payload,
    [tasksSuccess]: () => initialStateError,
    [addTasksError]: (_, { payload }) => payload,
    [addTasksSuccess]: () => initialStateError,
    // [loginError]: (_, { payload }) => payload,
    // [loginSuccess]: () => initialStateError,
    // [logoutError]: (_, { payload }) => payload,
    // [logoutSuccess]: () => initialStateError,
});

const reducer = combineReducers({
    tasks,
    loading: loadingReducer,
    error: errorReducer
});

export default reducer;