import './style.css';
import { useState } from 'react';
import { fruits } from './data';
import { CheckItem } from './CheckItem';

export const Checklist = () => {
    const [items] = useState(fruits);
    
    return (
        <div className="checklist-container">
            {items.map((item, index) => (
                <fieldset key={index}>
                    <CheckItem item={item}/>
                </fieldset>
            ))}
        </div>
    );
}