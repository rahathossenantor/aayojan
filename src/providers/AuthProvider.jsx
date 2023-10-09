import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [profileAvatar, setProfileAvatar] = useState(null);
    const [loading, setLoading] = useState(true);

    // register user with email and password
    const registerUserWithEmailAndPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // register user with google
    const googleProvider = new GoogleAuthProvider();
    const signInUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // register user with github
    const githubProvider = new GithubAuthProvider();
    const signInUserWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    // sign in user with email and password
    const signInUserWithEmailAndPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // sign out user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();
    }, []);

    const contextData = {
        user,
        profileAvatar,
        loading,
        setProfileAvatar,
        registerUserWithEmailAndPass,
        signInUserWithGoogle,
        signInUserWithGitHub,
        signInUserWithEmailAndPass,
        signOutUser
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;
