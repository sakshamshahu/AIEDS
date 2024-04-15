import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LoadInfo {
    loading : boolean
}

const initialState: LoadInfo = {
    loading : false
};

const loadingSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        changeLoader: (state, action: PayloadAction<LoadInfo>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { changeLoader } = loadingSlice.actions;

export default loadingSlice.reducer;
