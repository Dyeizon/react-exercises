import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext";

export const Footer = () => {
    const {darkTheme} = useContext(ThemeContext);
    
    return (
        <footer style={{backgroundColor: darkTheme ? 'black' : '#e67504'}}>
            <p>Dyeizon Procopiuk</p>
            <p>All Rights Reserved ©</p>
        </footer>
    );

}