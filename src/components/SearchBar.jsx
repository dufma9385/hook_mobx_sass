import React, { useState } from 'react';
import { useObserver, observable } from 'mobx-react'
import useStore from '../useStore';
import BoardList from './BoardList';

const SearchBar = () => {

    const { search, list } = useStore();
    const [ input, setInput ] = useState('');

    // const handleSubmit = (e) => {

    //     console.log(search.setInput);

    //     search.setInput (e.target.value);


    //     e.preventDefault();

    //     // alert(search.input);
    // };
    const onChange = (e) => {
        setInput(e.target.value);
        // console.log(e.target.value);
        // search.setInput (e.target.value);
    }

    const onKeyPress = (e) => {
        if(e.key == 'Enter') {
            onClick(e);
        }
    }

    const onClick = (e) => {
        alert("onclick : "+e.target.value);
        search.setInput(e.target.value);
        setInput("");
    }
    return useObserver (()=>(
        <div>
            {/* <form onSubmit={handleSubmit}> */}
                {/* <input type="text" placeholder="커뮤니티 검색" value={search.input}
                    onChange={ ({target: { value }}) => search.setInput(value)}/> */}

                <input type="text" placeholder="커뮤니티 검색" value={input}
                    onChange={onChange} onKeyPress={onKeyPress}/>
                <div>
                    <BoardList input={search.input}/>                    
                </div>
            {/* </form> */}
        </div>
    ));
}

export default SearchBar;