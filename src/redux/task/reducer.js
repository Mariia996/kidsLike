import { combineReducers } from 'redux';

import { createReducer} from '@reduxjs/toolkit';

import {
    tasksRequest,
    tasksSuccess,
    tasksError,
    addTasksRequest,
    addTasksSuccess,
    addTasksError,
    singleTasksRequest,
    singleTasksSuccess,
    singleTasksError,
    switchTaskRequest,
    switchTasksSuccess,
    switchTasksError
 } from './actions';

const initialStateWeek = [];

const initialStateUpdatedTasks = {};

const initialStateLoading = false;

const initialStateError = null;

const tasks = createReducer(initialStateWeek, {
    [tasksRequest]: (state) => ([...state]),
    [tasksSuccess]: (_, { payload }) => ([...payload.week.tasks]),
    [switchTaskRequest]: (state) => ([...state]),
    [switchTasksSuccess]: (state, { payload }) => {
        const newState = [...state];
        const taskIdx = newState.findIndex(item => item._id === payload.updatedTask.id);
        newState.splice(taskIdx, 1, {...payload.updatedTask, _id: payload.updateTask.id});
        return [...newState]
    },
    [addTasksRequest]: (state) => ([...state]),
    [addTasksSuccess]: (state, { payload }) => {
        const newState = [...state];
        newState.push(payload);
        return [...newState];
    },

});

const week = createReducer(initialStateUpdatedTasks, {
    [tasksRequest]:(state) => ({...state}),
    [tasksSuccess]: (_, { payload }) => payload.week,
});

const updatedTasks = createReducer(initialStateUpdatedTasks, {
    [switchTaskRequest]:(state) => ({...state}),
    [switchTasksSuccess]: (_, { payload }) => payload,
    [singleTasksRequest]: (state) => ({...state}),
    [singleTasksSuccess]: (_, { payload }) => payload,
});


const loadingReducer = createReducer(initialStateLoading, {
    [tasksRequest]: () => true,
    [addTasksRequest]: () => true,
    [singleTasksRequest]: () => true,
    [switchTaskRequest]: () => true,
    [tasksSuccess]: () => false,
    [addTasksSuccess]: () => false,
    [singleTasksSuccess]: () => false,
    [switchTasksSuccess]: () => false,
    [tasksError]: () => false,
    [addTasksError]: () => false,
    [singleTasksError]: () => false,
    [switchTasksError]: () => false,
});

const errorReducer = createReducer(initialStateError, {
    [tasksError]: (_, {payload}) => payload,
    [tasksSuccess]: () => initialStateError,
    [addTasksError]: (_, { payload }) => payload,
    [addTasksSuccess]: () => initialStateError,
    [singleTasksError]: (_, { payload }) => payload,
    [singleTasksSuccess]: () => initialStateError,
    [switchTasksError]: (_, { payload }) => payload,
    [switchTasksSuccess]: () => initialStateError,
});

const reducer = combineReducers({
    tasks,
    week,
    updatedTasks,
    loading: loadingReducer,
    error: errorReducer
});

export default reducer;