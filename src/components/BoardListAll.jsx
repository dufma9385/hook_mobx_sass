import React from 'react';
import useStore from '../useStore';
import EachBoard from './EachBoard';

const BoardList = (input) => {
    const { list, search } = useStore();

    return(
        <div>
            {list.boardList
            .map(e =>
                <EachBoard key={e.id} title = {e.title} writer= {e.writer}/>)}
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