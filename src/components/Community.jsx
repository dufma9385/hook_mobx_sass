import React from 'react';
import SearchBar from './SearchBar';
import useStore from '../useStore';

const Community = () => {
    const { search } = useStore();
    // alert(search.input);
    return(
        <div>
            <SearchBar />
        </div>
        
    )
}

export default Community;