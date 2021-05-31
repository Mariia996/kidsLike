import { createAction } from '@reduxjs/toolkit';

const getGiftsRequest = createAction('awards/getGiftsRequest');
const getGiftsSuccess = createAction('awards/getGiftsSuccess');
const getGiftsError = createAction('awards/getGiftsError');

const buyGiftsRequest = createAction('awards/buyGiftsRequest');
const buyGiftsSuccess = createAction('awards/buyGiftsSuccess');
const buyGiftsError = createAction('awards/buyGiftsError');

const actions = {
    getGiftsRequest,
    getGiftsSuccess,
    getGiftsError,
    buyGiftsRequest,
    buyGiftsSuccess,
    buyGiftsError
};

export default actions;