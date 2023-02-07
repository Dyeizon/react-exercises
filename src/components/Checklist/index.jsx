import { useState } from 'react';
import { fruits } from './data';

export const Checklist = () => {
    const [items, setItems] = useState(fruits);
    
    return (
        <div className="checklist-container">
            {items.map((item, index) => (
                <fieldset key={index}>
                    <input type="checkbox" id={item} name={item}/>
                    <label for={item}>{item}</label>
                </fieldset>
            ))}
        </div>
    );
}