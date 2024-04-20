import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { onAuthStateChanged, sendPasswordResetEmail, signOut, User } from "firebase/auth";
import auth from "../firebase";
import { useAppDispatch, useAppSelector } from "../store/store";
import { changeUser } from "../store/features/userSlice";
import { changeLoader } from "../store/features/loadingSlice";
import { addHistory, SessionInfo } from "../store/features/historySlice";


export interface UserContextInterface {
    UserDetailsFirebase: User | null,
    setUserDetailsFirebase: Dispatch<SetStateAction<User | null>>,
    getuserinfo: (id: string, name: string, email: string, img: string, joined: string) => void;
    saveSession: (session: SessionInfo) => void;
    getSessions: (id: string) => void;
}

const defaultState = {
    UserDetailsFirebase: null as User | null,
    setUserDetailsFirebase: (user: User) => { },
    getuserinfo: () => { },
    saveSession: () => { },
    getSessions: () => { }
} as UserContextInterface

export const UserContext = createContext(defaultState);


type UserProviderProps = {
    children: React.ReactNode
}

const UserProvider = ({ children }: UserProviderProps) => {
    const users = useAppSelector(state => state.user);
    const loader = useAppSelector(state => state.loader);

    useEffect(() => {
        // console.table(users);
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


    // interface SessionInfo {     // Basically the schema of chat_session from the backend
    //     session_id:      string;
    //     userid:          string;
    //     time_started:    string;  
    //     title:           string;
    //     conversation:    string;   
    //     deleted:         Boolean;
    // }
    const getSessions = async (id: string) => {
        try {
            const response = await fetch(`${host}/fetch_sessions`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_id: id })
            })
            const json = await response.json(); 
            // console.log("MY SON IS JSON", json)
            const sessions: SessionInfo[] = json.sessions;
            dispatch(addHistory({
                sessions: sessions
            }))
        } catch (error) {
            console.error('Error fetching user sessions', error);

            return {
                sessions: null
            };
        }
    }
    
    const saveSession = async (session: SessionInfo) => {
        let convo = "";
        for (const mess in session.conversation) {
            convo += mess + "|||";
        }
        try {
            const response = await fetch(`${host}/fetch_sessions`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    session_id: session.session_id,
                    userid: session.userid,
                    time_started: session.time_started,
                    title: session.title, 
                    conversation: session.conversation,
                    deleted: session.deleted
                })
            })
            if (response.ok) {
                // If the request was successful
                return { success: true, message: "session saved successfully" };
            } else {
                // If the request failed
                return { success: false, message: 'Failed to save session' };
            }
        } catch (error) {
            console.error('Error uploading session', error);

            return { success: false, message: 'An error occurred while saving the session' };
        }
    }


    const makeSession = async () => {
        
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
            saveSession,
            getSessions
        }}>
            {children}
        </UserContext.Provider >

    )
}

// value={{ userInfo, setUserInfo, Loading, setLoading, UserDetailsFirebase, setUserDetailsFirebase, RegisterUser, getuserinfo, signInUser, signInUserGitHub, signInUserGoogle, logoutUser, forgotPassword }}

export default UserProvider