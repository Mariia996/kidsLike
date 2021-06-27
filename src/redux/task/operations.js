import TasksService from './task-service';

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

const tasksService = new TasksService();

export const tasks = () => async dispatch => {
    dispatch(tasksRequest());
    try {
        const data = await tasksService.getTasks();
        dispatch(tasksSuccess(data));
    }
    catch (error) {
        dispatch(tasksError(error));
    }
};

export const addTask = (body) => async dispatch => {
    dispatch(addTasksRequest());
    try {
        const data = await tasksService.addTask(body);
        dispatch(addTasksSuccess(data));
    }
    catch (error) {
        dispatch(addTasksError(error));
    }
};

export const switchTask = (id, body) => async dispatch => {
    dispatch(switchTaskRequest());
    try {
        const data = await tasksService.patchSwitchComplete(id, body);
        console.log(data);
        dispatch(switchTasksSuccess(data));
    }
    catch (error) {
        dispatch(switchTasksError(error));
    }
}

export const singleTask = (id, body) => async dispatch => {
    dispatch(singleTasksRequest());
    try {
        const data = await tasksService.patchSingleTask(id, body);
        dispatch(singleTasksSuccess(data));
    }
    catch (error) {
        dispatch(singleTasksError(error));
    }
}