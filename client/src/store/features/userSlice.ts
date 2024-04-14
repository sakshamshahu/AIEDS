import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserInfo {
    // TODO: change details types(as of in the db)
    name: string;
    img: string;
    userid: string;
    joined: string;
    email: string;
}

const initialState: UserInfo = {
    name: "",
    img: "",
    userid: "",
    joined: "",
    email: "",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUser: (state, action: PayloadAction<UserInfo>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;
