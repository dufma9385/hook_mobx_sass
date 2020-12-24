import React from 'react';
import { useObserver } from 'mobx-react';
import useStore from '../useStore';
import EachBoard from './EachBoard';

const BoardList = (input) => {
    const { list, search } = useStore();
    console.log(input.input);

    const viewResult = () => {

    }
    return(
        <div>
            {list.boardList
            .filter(e => e.writer === input.input)
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