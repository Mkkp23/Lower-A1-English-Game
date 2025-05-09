import { createContext, useState } from "react";

const UserDataContext = createContext();

const UserContext = ({ children }) => {
    const [userData, setUserData] = useState({
        name: "",
    });

    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    );
}

export { UserDataContext, UserContext };
