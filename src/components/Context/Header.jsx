import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext";
import { DarkLightButton } from "./DarkLightButton";

export const Header = () => {
    const {darkTheme} = useContext(ThemeContext);

    return (
        
        <header style={{backgroundColor: darkTheme ? 'black' : '#e67504'}}>
            <h1>Logo</h1>
            <DarkLightButton/>
        </header>
    );
}