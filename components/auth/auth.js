import { useState, useEffect, useContext, createContext } from "react";
import Cookies from "js-cookie"
import firebaseClient, {auth} from "../../firebase/initFirebase";
import { getIdToken } from "firebase/auth"

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    firebaseClient();
    const [user, setUser] = useState(null);


    useEffect(() => {
        return auth.onAuthStateChanged(async (user) => {
            console.log("auth changed");
            if (!user) {
                setUser(null);
                Cookies.set(undefined, "token", "", {path: '/'});
                return;
            }

            const token = await getIdToken(auth.currentUser);
            setUser(user);
            Cookies.set(undefined, "token", token, {path: '/'});
        });
    }, []);
    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);