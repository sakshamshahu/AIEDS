import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FileInfo {
    file_id:         String,
    time_uploaded:   Date,   
    file_name:       String,
    size:            Number,
    user_id:         String,
    selected:        Boolean
}

export interface FileState {
    files: FileInfo[]
}

const initialState : FileState = {
    files : []
}


const fileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        addFile(state, action: PayloadAction<FileState>) {
            state.files = action.payload.files;  
            // state.files.push({
            //     file_id:            action.payload.,
            //     time_uploaded:      Date,   
            //     file_name:          String,
            //     size:               Int,
            //     user_id:            
            // }) 
        },
    }
});

export const { addFile } = fileSlice.actions;

export default fileSlice.reducer;
