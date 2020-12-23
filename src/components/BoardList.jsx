import React from 'react';
import { useObserver } from 'mobx-react';
import useStore from '../useStore';
import EachBoard from './EachBoard';

const BoardList = (filterInput) => {
    const { list } = useStore();


    return useObserver (()=>(
        <div>
            {list.boardList.map(e =>
                <EachBoard key={e.id} title = {e.title} writer= {e.writer}/>)}
        </div>
    ));
}

export default BoardList;