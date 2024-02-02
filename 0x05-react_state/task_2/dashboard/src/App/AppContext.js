import React, {createContext} from 'react';

const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: false,
};

const defaultLogOut = () => {
    return { ...defaultUser, isLoggedIn: false };
};

export const AppContext = createContext({
    user: defaultUser,
    logOut: defaultLogOut,
});