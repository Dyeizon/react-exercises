import './style.css';

export const Image = ({images, alt, index}) => {
    
    return (
        <img className='slider-image' src={images[images.findIndex(i => i.id === parseInt(index))].url} alt={alt} />
    );
}