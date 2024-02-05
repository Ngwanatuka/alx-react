import { createContext } from "react";

const user = {
    email: "",
    password: "",
    isLoggedIn: false,
    };

const logOut = () => {
    user.isLoggedIn = false;
}

export const AppContext = createContext({
    user: user,
    logOut: logOut,
});

export { user, logOut };