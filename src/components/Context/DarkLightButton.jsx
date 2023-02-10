import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext";

export const DarkLightButton = () => {
    const {darkTheme, setDarkTheme} = useContext(ThemeContext);

    return (
        <button className="light-dark-button" style={{backgroundColor: darkTheme ? 'white' : 'rgb(38, 57, 77)', color: darkTheme ? 'black' : 'white'}} onClick={() => setDarkTheme(!darkTheme)}>{darkTheme ? 'Light' : 'Dark'} Mode</button>
    );
}