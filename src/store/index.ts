import { filtersReducer } from './reducers/filtersReducer';
import { configureStore } from '@reduxjs/toolkit'

const reducers = {
    filters: filtersReducer
};

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
    reducer: reducers,
})