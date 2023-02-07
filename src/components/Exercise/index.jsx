import './style.css';

export const Exercise = ({children, title, desc}) => {
    return (
        <div className='exercise-container'>
            <div className='exercise'>
                <div className='exercise-head'>
                    <h1>{title}</h1>
                    <h2>{desc}</h2>
                </div>

                <div className='exercise-body'>
                    {children}
                </div>
            </div>
        </div>
    );
}