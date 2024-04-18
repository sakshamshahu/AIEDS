import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LoadInfo {
    loading : boolean,
    value : number
}

const initialState: LoadInfo = {
    loading : false,
    value : 0,
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
