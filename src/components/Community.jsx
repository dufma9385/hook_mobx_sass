import React from 'react';
import useStore from '../useStore';
import { useObserver } from 'mobx-react'

import HowView from './HowView';
import Search from './Search';
import BoardList from './BoardList';
import BoardListAll from './BoardListAll';

const Community = () => {
    const { list, search } = useStore();  

    // console.log(search.input);
    // console.log(list.click);

    return useObserver (()=>(
        <div className="App">
        <Search />
        <hr></hr>
        <HowView />
        {search.input === "" ? <BoardListAll show={list.click}/> : <BoardList input={search.input} show={list.click}/>}
        </div>
    ));
}

export default Community;
