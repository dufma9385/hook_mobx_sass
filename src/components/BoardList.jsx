import React from 'react';
import useStore from '../useStore';
import EachBoard from './EachBoard';
import HowView from './HowView';


const BoardList = (input) => {
    const { list } = useStore();

    return(
        <div>
            <HowView />
            <div>
                {list.boardList
                .filter(e => e.writer === input.input)
                .map(e =>
                    <EachBoard key={e.id} title = {e.title} writer= {e.writer} img = {e.image}/>)}
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