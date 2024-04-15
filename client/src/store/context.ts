import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "./store";
import { GithubAuthProvider, GoogleAuthProvider, User, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase";
import { changeUser } from "../store/features/userSlice";
import { changeLoader } from "../store/features/loadingSlice";

export const RegisterUser = async (email: string, name: string, password: string) => {
    const dispatch = useAppDispatch();
    dispatch(changeLoader({ loading: true }));
    try {
        const users = useAppSelector(state => state.user);

        // Creating user and updating profile
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser!, { displayName: name });
        dispatch(changeUser({
            name: auth.currentUser?.displayName!,
            img: auth.currentUser?.photoURL!,
            userid: auth.currentUser?.uid!,
            joined: auth.currentUser?.metadata.creationTime!,
            email: auth.currentUser?.email!
        }));
    } catch (error: any) {
        console.error("Registration failed:", error.message);
    } finally {
        dispatch(changeLoader({ loading: false }));
    }
};


export const useSignInUser = async (email: string, password: string) => {
    const dispatch = useAppDispatch();
    dispatch(changeLoader({ loading: true }));
    try {
        // useAppSelector should not be used inside a custom hook function
        // const users = useAppSelector(state => state.user);

        // Creating user and updating profile
        const res = await signInWithEmailAndPassword(auth, email, password);
        dispatch(changeUser({
            name: res.user.displayName!,
            img: res.user.photoURL!,
            userid: res.user.uid,
            joined: res.user.metadata.creationTime!,
            email: res.user.email!
        }));
    } catch (error: any) {
        console.error("Sign-in failed:", error.message);
    } finally {
        dispatch(changeLoader({ loading: false }));
    }
};