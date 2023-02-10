import './style.css';
import { useNavigate } from "react-router-dom";

export const HomeLink = () => {
    const navigate = useNavigate();

    function scrollToHome(e) {
        e.preventDefault();
        const element = document.getElementById('home');

        if(element) {
            element.scrollIntoView({behavior: 'smooth'});
            navigate('/');
        }
    }

    return (
        <a className='home-link' onClick={(e) => {scrollToHome(e)}} href="/">Go back to home</a>
    );
}