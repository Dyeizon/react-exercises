import { useEffect, useState } from 'react';
import { CatImage } from './CatImage';
import './style.css';

export const Rest = () => {
    const [url, setUrl] = useState('');

    function changeImage() {
        fetch('https://aws.random.cat/meow', {
            method: 'get'
        }).then((response) => {
            response.json().then((result) => {
                setUrl(result.file);
            })
        });
    }

    useEffect(() => {
        changeImage();
    }, []); 

    return (
        <div className='rest-container'>
            <button className='change-image' onClick={() => changeImage()}>Change Image</button>
            <CatImage url={url}/>
        </div>
    );
}