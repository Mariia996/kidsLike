import { createAction } from "@reduxjs/toolkit"

export const tasksRequest = createAction('tasks/tasksRequest');
export const tasksSuccess = createAction('tasks/tasksSuccess');
export const tasksError = createAction('tasks/tasksError');

export const addTasksRequest = createAction('tasks/addTasksRequest');
export const addTasksSuccess = createAction('tasks/addTasksSuccess');
export const addTasksError = createAction('tasks/addTasksError');