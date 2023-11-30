import { createContext } from "react";

// Default user object
const defaultUser = {
    email: "",
    password: "",
    isLoggedIn: false,
};

// Default logOut function
const defaultLogOut = () => {
    console.log("Logging out...");
};

// Create context
const AppContext = createContext({
    user: defaultUser,
    logOut: defaultLogOut,
});

export default AppContext;
