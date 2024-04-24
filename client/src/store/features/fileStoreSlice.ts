import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FileStoreState {
    files: string[]
}

const initialState : FileStoreState = {
    files : []
}


const fileStoreSlice = createSlice({
    name: 'fileStore',
    initialState,
    reducers: {
        addFileStore(state, action: PayloadAction<FileStoreState>) {
            return { ...state, ...action.payload };
        },
    }
});

export const { addFileStore } = fileStoreSlice.actions;

export default fileStoreSlice.reducer;