import { combineReducers, createReducer } from '@reduxjs/toolkit';

import actions from './actions';

const initialStateGetGifts = {
    gifts: [],
    loading: false,
};

const initialStateBuyGifts = [];

const initialStateError = null;

const getGiftsReduser = createReducer(initialStateGetGifts, {
    [actions.getGiftsRequest]: (state) => ({ ...state, loading: true }),
    [actions.getGiftsSuccess]: (_, { payload }) => ({ gifts: payload, loading: false }),
    [actions.getGiftsError]: (state) => ({ ...state, loading: false }),

});

const buyGiftsReducer = createReducer(initialStateBuyGifts, {
    [actions.buyGiftsRequest]: (state) => ({ ...state, loading: true }),
    [actions.buyGiftsSuccess]: (_, { payload }) => ({ payload, loading: false }),
    [actions.buyGiftsError]: (state) => ({ ...state, loading: false }),
});

const errorReducer = createReducer(initialStateError, {
    [actions.getGiftsError]: (_, { payload }) => payload,
    [actions.getGiftsSuccess]: () => initialStateError,
    [actions.buyGiftsError]: (_, { payload }) => payload,
    [actions.buyGiftsSuccess]: () => initialStateError,
});

const reducer = combineReducers({
    awards: getGiftsReduser,
    selectedAwards: buyGiftsReducer,
    error: errorReducer
});

export default reducer;