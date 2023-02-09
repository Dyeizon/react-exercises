import './style.css';
import {HomeLink} from './HomeLink';

export const Page02 = () => {
    return(
        <>
            <div className="page-container" style={{backgroundColor:'lightblue'}}>
                <h1>This is page 02</h1>
                <HomeLink/>
            </div>
            
        </>
    );
}