import './style.css';
import { HomeLink } from './HomeLink';

export const Page03 = () => {
    return(
        <>
            <div className="page-container" style={{backgroundColor:'yellow'}}>
                <h1>This is page 03</h1>
                <HomeLink/>               
            </div>
            
        </>
    );
}