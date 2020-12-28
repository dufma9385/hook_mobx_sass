import React from 'react';
import card_view from './images/card_view.svg';
import arrow_right from './images/arrow_right.svg';

const HowView = () => {
    return(
        <div className="howView">
            <p> 최신순 </p>
            <img id="arrow" src= {arrow_right} />
            <img id="card" src= {card_view} />
        </div>            
    )
}

export default HowView;