import React, { useState, createContext } from "react";
import { useEffect } from "react";
import { API } from "../api/API";

export const UserContext = createContext();

export const UserContextProvider = props => {
    const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('refresh')));
    const fetchUser = async () => {
        try {
            let token = localStorage.getItem('refresh')
            if (!token) {
                throw new Error("Not logged in")
            } else {
                const response = await fetch(API + '/token-refresh', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                })
                const userDetail = await response.json()
                if (response.status === 200) {
                    localStorage.setItem('access', userDetail.access_token)
                    setLoggedIn(true)
                } else {
                    throw new Error(userDetail.message)
                }

            }
        } catch (err) {
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            setLoggedIn(false)
            console.log(err)
        }
    }
    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <UserContext.Provider value={{ loggedIn, setLoggedIn, fetchUser }}>
            {props.children}
        </UserContext.Provider>
    );
};