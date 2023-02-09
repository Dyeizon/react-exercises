import './style.css';

export const CatImage = ({url}) => {

    return (
        <div className='cat-image' style={{backgroundImage:`url(${url})`}} src={url}/>
    );
}