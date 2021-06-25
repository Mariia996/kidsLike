import GiftsServise from './gift-service';
import {
    getGiftsRequest,
    getGiftsSuccess,
    getGiftsError,
    buyGiftsRequest,
    buyGiftsSuccess,
    buyGiftsError,
} from './actions';

const giftsService = new GiftsServise();

export const getGifts = () => async dispatch => {
    dispatch(getGiftsRequest());
    try {
        const data = await giftsService.getGifts();
        dispatch(getGiftsSuccess(data.ruGifts));
    }
    catch (error) {
        dispatch(getGiftsError(error));
    }
};

export const buyGifts = (body) => async dispatch => {
    dispatch(buyGiftsRequest());
    try {
        const data = await giftsService.buyGifts(body);
        dispatch(buyGiftsSuccess(data.purchasedGiftIds));
    }
    catch (error) {
        dispatch(buyGiftsError(error));
    }
};

