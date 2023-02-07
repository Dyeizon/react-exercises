import { useState } from 'react';
import {fruits} from './data';
import './style.css';

export const Search = () => {

    const [filterItems, setFilterItems] = useState([]);
    const items = fruits;
    function handleSearch(e) {
        if(e.target.value === "") {
            setFilterItems([]);
            return;
        }
        const filteredValues = items.filter((item) =>
            item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        );

        setFilterItems(filteredValues);
    }

    return (
        <div className='search-container'>
            <div className='search-div'>
                <p>Type in a fruit name</p>
                <input className='search-input' type='search' onChange={(e) => handleSearch(e)}></input>
            </div>
            {(filterItems.length > 0) && <p className='results-p'>Resultados</p>}
            <ul className='items-list'>
            {filterItems.slice(0, 12).map((item, index) => (
                <li key={index}>{item}</li>
            ))}

            
            </ul>
        </div>
    );
} 