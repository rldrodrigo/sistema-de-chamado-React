import { useState, createContext, useEffect } from "react";
import firebase from '../services/firebaseConection';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storageUser = localStorage.getItem('SistemaUser');
        function loadStorage(){
            if(storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, []);

    async function signUp(email, password, nome){
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.id;
                
                await firebase.firestore().collection('users')
                .doc(uid).set({
                    nome,
                    avatarUrl: null,
                })
                .then( () => {
                    let data = { 
                        uid,
                        nome,
                        email: value.user.email,
                        avatarUrl: null
                    };

                    setUser(data);
                    storageUser(data);
                    setLoadingAuth(false);
                })
            })
            .catch((error) => {
                console.log(error);
                setLoadingAuth(false);
            })
    }

    function storageUser(data) {
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }

    async function signOut(){
        await firebase.auth().signOut();
        localStorage.removeItem('SistemaUser');
        setUser(null);
    }

    return (
        <AuthContext.Provider 
        value={{ 
            signed: !!user,
            user,
            loading,
            signUp,
            signOut
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;