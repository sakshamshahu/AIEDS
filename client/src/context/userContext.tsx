import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { onAuthStateChanged, sendPasswordResetEmail, signOut, User } from "firebase/auth";
import auth from "../firebase";
import { useAppDispatch, useAppSelector } from "../store/store";
import { changeUser } from "../store/features/userSlice";
import { changeLoader } from "../store/features/loadingSlice";


export interface UserContextInterface {
    UserDetailsFirebase: User | null,
    setUserDetailsFirebase: Dispatch<SetStateAction<User | null>>,
    getuserinfo: (id: string, name: string, email: string, img: string, joined: string) => void;
}

const defaultState = {
    UserDetailsFirebase: null as User | null,
    setUserDetailsFirebase: (user: User) => { },
} as UserContextInterface

export const UserContext = createContext(defaultState);


type UserProviderProps = {
    children: React.ReactNode
}

const UserProvider = ({ children }: UserProviderProps) => {
    const users = useAppSelector(state => state.user);
    const loader = useAppSelector(state => state.loader);

    useEffect(() => {
        console.table(users);
    }, [users])
    const dispatch = useAppDispatch();

    const [UserDetailsFirebase, setUserDetailsFirebase] = useState<User | null>(null!);

    const host = "http://localhost:8000";

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (res) => {
            res ? setUserDetailsFirebase(res) : setUserDetailsFirebase(null);
            // TODO: do the abv for myDetails
        });

        return unsubscribe;
    });


    const getuserinfo = async (id: string, name: string, email: string, img: string, joined: string) => {
        try {
            dispatch(changeLoader({ loading: true, value : 60 }));
            let dater = new Date(joined);
            const response = await fetch(`${host}/adduser`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userid: id, name, email, img, joined: dater })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const json = await response.json();

            dispatch(changeUser({
                name: json.name!,
                img: json.img,
                userid: json.userid,
                joined: json.joined,
                email: json.email
            }));
        } catch (error) {
            console.error('Error fetching user data:', error);
            // Return default UserInfo object in case of error
            return {
                name: "",
                img: null,
                userid: "",
                joined: "",
                email: ""
            };
        }
    }


    // const logoutUser = () => {
    //     signOut(auth);
    // }


    // const forgotPassword = (email: string) => {
    //     return sendPasswordResetEmail(auth, email);
    // }

    return (
        <UserContext.Provider value={{
            UserDetailsFirebase,
            setUserDetailsFirebase,
            getuserinfo,
        }}>
            {children}
        </UserContext.Provider >

    )
}

// value={{ userInfo, setUserInfo, Loading, setLoading, UserDetailsFirebase, setUserDetailsFirebase, RegisterUser, getuserinfo, signInUser, signInUserGitHub, signInUserGoogle, logoutUser, forgotPassword }}

export default UserProvider