import { createAction } from "@reduxjs/toolkit"

export const tasksRequest = createAction('tasks/tasksRequest');
export const tasksSuccess = createAction('tasks/tasksSuccess');
export const tasksError = createAction('tasks/tasksError');

export const addTasksRequest = createAction('tasks/addTasksRequest');
export const addTasksSuccess = createAction('tasks/addTasksSuccess');
export const addTasksError = createAction('tasks/addTasksError');

export const switchTaskRequest = createAction('tasks/switchTaskRequest');
export const switchTasksSuccess = createAction('tasks/switchTasksSuccess');
export const switchTasksError = createAction('tasks/switchTasksError');

export const singleTasksRequest = createAction('tasks/singleTasksRequest');
export const singleTasksSuccess = createAction('tasks/singleTasksSuccess');
export const singleTasksError = createAction('tasks/singleTasksError');