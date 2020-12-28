import React, { useState } from 'react';
import { useObserver } from 'mobx-react'
import useStore from '../useStore';
import BoardList from './BoardList';
import BoardListAll from './BoardListAll';

import './style/community.scss';
import searchIcon from './images/search.svg';

const SearchBar = () => {

    const { search } = useStore();
    const [ input, setInput ] = useState('');

    const onChange = (e) => {
        setInput(e.target.value);
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            onClick(e);
        }
    }

    const onClick = (e) => {
        search.setInput(e.target.value);
        setInput("");
    }
    return useObserver (()=>(
        <div>
            <div className="searchBar">
                <img src={searchIcon}/>
                <input type="text" placeholder="커뮤니티 검색" value={input}
                    onChange={onChange} onKeyPress={onKeyPress}/>
            </div>
            <hr></hr>
            
            {search.input === "" ? <BoardListAll/> : <BoardList input={search.input}/>}
        </div>
    ));
}

export default SearchBar;