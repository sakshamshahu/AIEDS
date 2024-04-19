import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SessionInfo {
    session_id:      string;
    userid:          string;
    time_started:    string;  
    title:           string;
    conversation:    string[];   
    deleted:         Boolean;
}

export interface HistoryState {
    sessions: SessionInfo[]
}

const initialState : HistoryState = {
    sessions : []
}

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addHistory(state, action: PayloadAction<HistoryState>) {
            state.sessions = action.payload.sessions;  
            // return { ...state, ...action.payload };  
        },
    }
});

export const { addHistory } = historySlice.actions;

export default historySlice.reducer;
