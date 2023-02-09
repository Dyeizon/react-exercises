import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Home} from './Home';
import { Page01 } from './Page01';
import { Page02 } from './Page02';
import { Page03 } from './Page03';

export const RoutesHandler = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={ <Home/> }  path="/" />
                <Route element={ <Page01/> }  path="/page01" />
                <Route element={ <Page02/> }  path="/page02" />
                <Route element={ <Page03/> }  path="/page03" />
            </Routes>
        </BrowserRouter>
    );
}