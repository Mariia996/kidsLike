import axios from "axios";

import BaseHttpService from '../../shared/service/base-http-service';
import actions from './actions';

axios.defaults.baseURL = 'https://kidslike-v1-backend.goit.global';
axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGFlMDIxZjY2MmVmOTAwMTdlZDZmY2MiLCJzaWQiOiI2MGFlMDMxNzY2MmVmOTAwMTdlZDZmY2YiLCJpYXQiOjE2MjIwMTY3OTF9.X8rEnsOrOi0WQ-hcbs7aCYfT4jeaGAdI2Sg2EetjWM4'

export const getGifts = () => async dispatch => {
    dispatch(actions.getGiftsRequest());

    try {
        const { data } = await axios.get('/gift');
        dispatch(actions.getGiftsSuccess(data.ruGifts));
    }
    catch (error) {
        dispatch(actions.getGiftsError(error));
    }
};

export const buyGifts = (body) => async dispatch => {
    dispatch(actions.buyGiftsRequest());

    try {
        const { data } = await axios.patch('/gift', body);
        console.log(data);
        dispatch(actions.getGiftsSuccess(data.purchasedGiftIds));
    }
    catch (error) {
        dispatch(actions.getGiftsError(error));
    }
};

