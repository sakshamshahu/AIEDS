import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

type FirebaseInfo = User | null;

const initialState: FirebaseInfo = null;

const firebaseSlice = createSlice({
    name: 'firebase',
    initialState,
    reducers: {
        changeFirebase: (state: FirebaseInfo, action: PayloadAction<FirebaseInfo>) => {
            state = action.payload;
        },
    },
});

export const { changeFirebase } = firebaseSlice.actions;

export default firebaseSlice.reducer;
