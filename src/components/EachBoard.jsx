import React from 'react';


const EachBoard = ({ title, writer, img }) => {
    return (
        <div className="getBoardList">
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

    );

}

export default EachBoard;