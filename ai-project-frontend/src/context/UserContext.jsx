import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {

    const [user, setUser] = useState(() => {

        const savedUser = localStorage.getItem("loggedInUser");

        if (!savedUser) {
            return null;
        }

        try {
            return JSON.parse(savedUser);
        } catch {
            localStorage.removeItem("loggedInUser");
            return null;
        }
    });

    const login = (userData) => {

        setUser(userData);

        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(userData)
        );
    };

    const logout = () => {

        setUser(null);

        localStorage.removeItem("loggedInUser");
    };

    return (
        <UserContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {

    return useContext(UserContext);

}