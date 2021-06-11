import TasksService from './task-service';

import {
    tasksRequest,
    tasksSuccess,
    tasksError,
    addTasksRequest,
    addTasksSuccess,
    addTasksError
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
}