import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [value,setValue] = useState("en");
    return (
        <LanguageContext.Provider value={[value,setValue]}>
            {children}
        </LanguageContext.Provider>
    )
}