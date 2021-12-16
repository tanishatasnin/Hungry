import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import initializeFirebase from '../Firebase.init';


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin,setAdmin]= useState(false)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password,name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user on database

                saveUser(email,name,"POST");
                // __________ 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    const signInWithGoogle = (location, history) => {
               setIsLoading(true);
               signInWithPopup(auth, googleProvider)
                   .then((result) => {
                       const user = result.user;
                       setAuthError('');
                   }).catch((error) => {
                       setAuthError(error.message);
                   }).finally(() => setIsLoading(false));
           }
    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
  
    useEffect(() => {
        fetch(`https://serene-tor-99582.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])




    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
// ++++++++++++++++++++++++ user creation +++++++++++++++++++ 
const saveUser = (email, displayName,method)=>{
const user = {email,displayName};
fetch('https://serene-tor-99582.herokuapp.com/users', {
            method:method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
}

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        signInWithGoogle,
        loginUser,
        logout,
    }
}

export default useFirebase;