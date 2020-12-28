import React from 'react';
import useStore from '../useStore';
import EachBoard from './EachBoard';
import HowView from './HowView';
import card_view from './images/card_view.svg';

const BoardList = () => {
    const { list } = useStore();

    return(
        <div>
            <HowView />
            <div>
                {list.boardList
                .map(e =>
                    <EachBoard key={e.id} title = {e.title} writer = {e.writer} img = {e.image}/>)}
            </div>
        </div>
    )
}

export default BoardList;


// .filter(e => e.writer === input.input)

// <div>     
//             {list.boardList
//             .map(e =>
//                 <EachBoard key={e.id} title = {e.title} writer= {e.writer}/>)}
//         </div>