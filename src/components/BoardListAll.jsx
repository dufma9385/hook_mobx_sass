import React from 'react';
import useStore from '../useStore';
import EachBoard from './EachBoard';


const BoardList = (show) => {
    const { list } = useStore();
    console.log(show);
    return(
        <div>
            <div>
                {list.boardList
                .map(e =>
                    <EachBoard key={e.id} title={e.title} writer={e.writer} img={e.image}/>)}
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