import { useNavigate } from 'react-router-dom';
import './style.css';

export const Home = () => {
    const navigate = useNavigate();

    function handlePageNavigation(e) {
        e.preventDefault();

        const element = document.getElementById('home');
        element.scrollIntoView({behavior: 'smooth'});
        
        const url = e.target.href.split('/')[e.target.href.split('/').length - 1];

        navigate(`/${url}`);
    }
    return (
        <>
            <div className="page-container home-page" id="home">
                <h1>This is the Home</h1>
                <a href="/page01" onClick={(e) => handlePageNavigation(e)}>Go to page 01</a>
                <a href="/page02" onClick={(e) => handlePageNavigation(e)}>Go to page 02</a>
                <a href="/page03" onClick={(e) => handlePageNavigation(e)}>Go to page 03</a>
            </div>
        </>
    );
}