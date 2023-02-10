import { useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import './style.css';

export const Context = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
            <div className="mini-page-context">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </ThemeContext.Provider>
        
    );
}