import React from 'react';

const EachBoard = ({ title, writer }) => {
    return (
        <div>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                {writer}
            </div>
            <div>
                10분전
            </div>
        </div>

    );

}

export default EachBoard;