import { combineReducers, createReducer } from '@reduxjs/toolkit';

import {
    getGiftsRequest,
    getGiftsSuccess,
    getGiftsError,
    buyGiftsRequest,
    buyGiftsSuccess,
    buyGiftsError,
} from './actions';

const initialStateGifts = [];

const selectedGiftsInitialState = [];

const initialStateLoading = false;

const initialStateError = null;

const giftsReduser = createReducer(initialStateGifts, {
    [getGiftsRequest]: (state) => ([...state]),
    [getGiftsSuccess]: (_, { payload }) => payload,
    [buyGiftsRequest]: (state) => ([...state]),
    [buyGiftsSuccess]: (state, { payload }) => {
        const newState = [...state];
        const newItems = newState.filter(item => payload.includes(item.id)).map(item => ({ ...item, isSelected: true }))

        return [...newState]
    },
});

const selectedGifts = createReducer(selectedGiftsInitialState, {
    [buyGiftsRequest]: (state) => ([...state]),
    [buyGiftsSuccess]: (_, { payload }) => payload,
})

const loadingReducer = createReducer(initialStateLoading, {
    [getGiftsRequest]: () => true,
    [buyGiftsRequest]: () => true,
    [getGiftsSuccess]: () => false,
    [buyGiftsSuccess]: () => false,
    [getGiftsError]: () => false,
    [buyGiftsError]: () => false,

});

const errorReducer = createReducer(initialStateError, {
    [getGiftsError]: (_, { payload }) => payload,
    [getGiftsSuccess]: () => initialStateError,
    [buyGiftsError]: (_, { payload }) => payload,
    [buyGiftsSuccess]: () => initialStateError,
});

const reducer = combineReducers({
    rewards: giftsReduser,
    selectedGifts,
    loading: loadingReducer,
    error: errorReducer
});

export default reducer;