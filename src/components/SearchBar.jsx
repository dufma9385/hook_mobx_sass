import React from 'react';
import { useObserver } from 'mobx-react'
import useStore from '../useStore';
import EachBoard from './EachBoard';
import BoardList from './BoardList';

const SearchBar = () => {

    const { search, list } = useStore();

    const handleSubmit = (e) => {
        // e.preventDefault();

        alert(search.input);
        
    };

    return useObserver (()=>(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="커뮤니티 검색" value={search.input}
                    onChange={ ({target: { value }}) => search.setInput(value)}/>
            </form>
        </div>
    ));
}

export default SearchBar;