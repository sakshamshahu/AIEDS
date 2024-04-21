import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SessionInfo {
    session_id:      string;
    userid:          string;
    time_started:    string;  
    title:           string;
    conversation:    string[];   
    deleted:         Boolean;
}

const initialState : SessionInfo = {
    session_id:"",
    userid:"",
    time_started:"",  
    title:"",
    conversation:[],  
    deleted: false   
}


const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        addSession(state, action: PayloadAction<SessionInfo>) {
            return { ...state, ...action.payload };  
        },
    }
});

export const { addSession } = sessionSlice.actions;

export default sessionSlice.reducer;
