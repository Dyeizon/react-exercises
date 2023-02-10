import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext";

export const Main = () => {
    const {darkTheme} = useContext(ThemeContext);

    return (
        <main style={{backgroundColor: darkTheme ? 'rgb(38, 57, 77)' : 'white', color: darkTheme ? 'white' : 'black'}}>
            <h1>Title</h1>
            <h2>Subtitle</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda obcaecati odio nulla quos, dolore nihil ab facere reprehenderit amet numquam ducimus adipisci nisi ullam corrupti! Quaerat facere nesciunt nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem nihil recusandae ipsam eum cupiditate. Blanditiis doloribus dicta assumenda accusantium est iure sint, incidunt tempora, non, totam dolores unde eius!</p>
        </main>
    );
}