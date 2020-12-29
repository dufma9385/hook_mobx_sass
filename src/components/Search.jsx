import React, { useState } from 'react';
import { useObserver } from 'mobx-react'
import useStore from '../useStore';


import './style/community/search.scss';
import './style/community/boardList.scss';
import searchIcon from './images/search.svg';

const Search = () => {

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
        <div className="searchBar">
            <img src={searchIcon}/>
            <input type="text" placeholder="커뮤니티 검색" value={input}
                onChange={onChange} onKeyPress={onKeyPress}/>
        </div>
    ));
}

export default Search;