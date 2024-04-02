import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, User, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase";

export interface UserInfo {
    // TODO: change details types(as of in the db)
    name: string;
    img: string;
    userid: string;
    joined: string;
    email: string;
}


export interface UserContextInterface {
    userInfo: UserInfo,
    setUserInfo: Dispatch<SetStateAction<UserInfo>>,
    UserDetailsFirebase: User | null,
    setUserDetailsFirebase: Dispatch<SetStateAction<User | null>>,
    Loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    RegisterUser: (email: string, name: string, password: string) => void;
    signInUser: (email: string, password: string) => void;
    signInUserGitHub: () => void;
    signInUserGoogle: () => void;
    logoutUser: () => void;
    forgotPassword: (email: string) => Promise<void>;
    getuserinfo: (id: string, name: string, email: string, img: string, joined: string, color: string) => void;
}

const defaultState = {
    userInfo: {
        name: "",
        img: "",
        userid: "",
        joined: "",
        email: ""
    },
    setUserInfo: (userInfo: UserInfo) => { },
    UserDetailsFirebase: null as User | null,
    setUserDetailsFirebase: (user: User) => { },
    Loading: false,
    setLoading: (Loading: boolean) => { },
} as UserContextInterface

export const UserContext = createContext(defaultState);


type UserProviderProps = {
    children: React.ReactNode
}

const UserProvider = ({ children }: UserProviderProps) => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        img: "",
        userid: "",
        joined: "",
        email: ""
    });
    const [UserDetailsFirebase, setUserDetailsFirebase] = useState<User | null>(null!);
    const [Loading, setLoading] = useState(false);

    const host = "http://localhost:3000";

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (res) => {
            res ? setUserDetailsFirebase(res) : setUserDetailsFirebase(null);
            // TODO: do the abv for myDetails
        });

        return unsubscribe;
    });

    const RegisterUser = (email: string, name: string, password: string) => {
        // try {
        //     createUserWithEmailAndPassword(auth, email, password)
        //         .then(() => {
        //             return updateProfile(auth.currentUser!, {
        //                 displayName: name
        //             })
        //         })
        //         .then(res => console.log(res));
        // } catch {
        //     (err: any) => {
        //         console.error(err.message);
        //     }
        // } finally {
        //     // setLoading -> false
        // }
        try {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    return updateProfile(auth.currentUser!, {
                        displayName: name
                    })
                })
                .then(res => console.log(res));
        } finally {
            setLoading(false);
        }
    };

    const getuserinfo = async (id: string, name: string, email: string, img: string, joined: string) => {
        try {
            const response = await fetch(`${host}/user/${id}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id, name, email, img, joined })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const json = await response.json();
            setUserInfo({
                name: json.username!,
                img: json.img!,
                userid: json.id,
                joined: json.joined!,
                email: json.email!
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
    const signInUser = (email: string, password: string) => {
        setLoading(true);
        try {
            signInWithEmailAndPassword(auth, email, password)
                .then(res => {

                    setUserInfo({
                        name: res.user.displayName!,
                        img: res.user.photoURL!,
                        userid: res.user.uid,
                        joined: res.user.metadata.creationTime!,
                        email: res.user.email!
                    });

                    // getuserinfo(
                    //     res.user.uid,
                    //     res.user.displayName!,
                    //     res.user.email!,
                    //     res.user.photoURL!,
                    //     res.user.metadata.creationTime!,
                    // );
                });
        } catch (err: any) {
            console.error(err.message);
        } finally {
            setLoading(false);
        }
    }
    //TODO: implement ALL THE LOADING HERE NOT IN THE HOME.JSX (prevents the time out thing)
    const signInUserGoogle = () => {
        const provider = new GoogleAuthProvider();
        setLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                console.log(result);
                const user = result.user;
                console.log("user >>>", user);
                setUserInfo({
                    name: user.displayName!,
                    img: user.photoURL!,
                    userid: user.uid,
                    joined: user.metadata.creationTime!,
                    email: user.email!
                });

                // getuserinfo(
                //     user.uid,
                //     user.displayName!,
                //     user.email!,
                //     user.photoURL!,
                //     user.metadata.creationTime!,
                // );
                
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                alert(errorCode)
            }).finally(() => setLoading(false));
    }
    const signInUserGitHub = () => {
        const provider = new GithubAuthProvider();
        setLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                console.log(result);
                const user = result.user;
                console.log("user >>>", user);
                setUserInfo({
                    name: user.displayName!,
                    img: user.photoURL!,
                    userid: user.uid,
                    joined: user.metadata.creationTime!,
                    email: user.email!
                });

                // getuserinfo(
                //     user.uid,
                //     user.displayName!,
                //     user.email!,
                //     user.photoURL!,
                //     user.metadata.creationTime!,
                // );

                // setUser(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                alert(errorCode)
            }).finally(() => setLoading(false));
    }

    const logoutUser = () => {
        signOut(auth);
    }


    const forgotPassword = (email: string) => {
        return sendPasswordResetEmail(auth, email);
    }

    return (
        <UserContext.Provider value={{
            userInfo,
            setUserInfo,
            UserDetailsFirebase,
            setUserDetailsFirebase,
            Loading,
            setLoading,
            RegisterUser,
            getuserinfo,
            signInUser,
            signInUserGitHub,
            signInUserGoogle,
            logoutUser,
            forgotPassword
        }}>
            { children }
        </UserContext.Provider >
        
    )   
}

// value={{ userInfo, setUserInfo, Loading, setLoading, UserDetailsFirebase, setUserDetailsFirebase, RegisterUser, getuserinfo, signInUser, signInUserGitHub, signInUserGoogle, logoutUser, forgotPassword }}

export default UserProvider