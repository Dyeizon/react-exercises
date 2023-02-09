import './style.css';
import {HomeLink} from './HomeLink';

export const Page01 = () => {
    return(
        <>
            <div className="page-container" style={{backgroundColor:'lightgreen'}}>
                <h1>This is page 01</h1>
                <HomeLink/>
            </div>
        </>
    );
}