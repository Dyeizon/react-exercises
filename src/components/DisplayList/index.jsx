import { useRef, useState } from 'react';
import './style.css';
import { fruits } from './data';

export const DisplayList = () => {
    const [items, setItems] = useState(fruits);
    const [input, setInput] = useState('');
    const refInput = useRef('');
    
    function addItem() {
        if(input <= 0) {
            refInput.current.focus();
            return;
        }

        const newArray = [
            ...items,
            input
        ]

        setItems(newArray);
        setInput('');
        refInput.current.focus();
    }

    return (
        <div className='displaylist-container'>
            <div className='insert-item'>
                <input className='insert-item-input' ref={refInput} type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button className='insert-item-button' onClick={() => addItem()}>Add</button>
            </div>
            <ul className='display-items-list'>
            {items.slice(0,30).map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
    );
}