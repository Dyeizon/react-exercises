import './style.css';
import { useState } from "react";

export const Accordion = () => {
    const [showContent, setShowContent] = useState(false);

    return (
        <div className="accordion-container">
            <div className="accordion">
                <div className="accordion-header" onClick={() => setShowContent(!showContent)}>
                    <h1>Click here to {showContent ? "hide" : "show"} content</h1>
                </div>
                
                <div className={`accordion-content ${showContent ? "accordion-content-show" : "accordion-content-hide"}`}>
                    <h1>The text inside</h1>
                    <p><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa quod harum veritatis fugit vel, culpa saepe reprehenderit. Illo incidunt vel quidem quae natus dolor animi delectus nisi est sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, eligendi. Neque placeat error enim nulla omnis facere suscipit facilis minima dicta. Sint animi architecto minus inventore praesentium autem ipsum enim?</p>
                </div>
                
            </div>
        </div>
    );
}