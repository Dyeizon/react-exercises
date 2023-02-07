import './style.css';
import { images } from './images';
import { Image } from './Image';
import { useState } from 'react';

export const Slider = () => {
    const [index, setIndex] = useState(0);

    function nextImage() {
        if(index + 1 >= images.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function previousImage() {
        if(index - 1 < 0) {
            setIndex(images.length - 1);
        }
        else {
            setIndex(index - 1);
        }        
    }

    return (
        <div className="slider-container">
            <div className='slider-images'>
                <Image images={images} index={index} alt='teste'/>
            </div>
            <div className='slider-controllers'>
                <button onClick={() => previousImage()}>&#60;</button>
                <button onClick={() => nextImage()}>&#62;</button>
            </div>
        </div>
    );
}