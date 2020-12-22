import React from 'react';
import { useObserver } from 'mobx-react';
import useStore from '../useStore';

const WriteForm = () => {
    const { write } = useStore();
    
    const postBoard = () => {
        write.postBoard();
    }

    return useObserver (() => (
        <div>
            <input type="text" name="title" placeholder="title"></input>
            <textarea name="title" placeholder="contents"></textarea>
            <button onClick={postBoard}>upload</button>
        </div>
    ));
}

export default WriteForm;   
