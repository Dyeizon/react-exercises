import { useRef, useState } from "react";

export const CheckItem = ({item}) => {
    const [check, setCheck] = useState(false);
    const lbl = useRef();
    
    function checkItem() {
        if(check) {
            lbl.current.style.textDecoration = '';
        } else {
            lbl.current.style.textDecoration = 'line-through';
        }

        console.log(lbl.current.style.textDecoration);
        setCheck(!check);
    }

    return (
        <>
            <input className='checkbox-item' checked={check} onChange={() => checkItem()} type="checkbox" id={item} name={item}/>
            <label ref={lbl} htmlFor={item}>{item}</label>
        </>

    );
}