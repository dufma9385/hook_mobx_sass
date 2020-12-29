import React, { useState } from 'react';
import { useObserver } from 'mobx-react';
import useStore from '../useStore';

const EachBoard = ({ title, writer, img }) => {

    const { list } = useStore();

    console.log(list.click);

    return useObserver (()=>(
        <div className={"getBoardList"+ list.click}>
            <div className="imgdiv">
                <img src={img} />
            </div>
            <div className="titlediv">
                <p>{title}</p>
                <p>{writer}</p>
                <p id="state">10분전</p>
                <p id="like">좋아요</p>
            </div>
        </div>

    ));

}

export default EachBoard;