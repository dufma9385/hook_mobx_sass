import React, { useState } from 'react';
import { useObserver } from 'mobx-react';


import './style/community/boardList.scss';
import card_view from './images/card_view.svg';
import arrow_right from './images/arrow_right.svg';
import list_view_1 from './images/list_view_1.svg';
import useStore from '../useStore';

const HowView = () => {
    const { list } = useStore();

    const showlist = () => {
        list.setClick("card");
    }
    const showcard = () => {
        list.setClick("list");
    }
    
    return useObserver (()=>(
        <div className="howView">
            <p> 최신순 </p>
            <img className="arrow" src= {arrow_right} />
            <div className="viewlist">
                {list.click === "list" ? 
                    <img src={list_view_1} onClick={showlist}/> :
                    <img src={card_view} onClick={showcard} />
                                     
                }            
            </div>
        </div>            
    ));
}

export default HowView;