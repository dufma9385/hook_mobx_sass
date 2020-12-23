import React from 'react';
import { useObserver } from 'mobx-react';
import useStore from '../useStore';

const WriteForm = () => {
    const { write } = useStore();
    
    const postBoard = () => {
        write.postBoard();
    }

    // const onchange = (e) => {
    //     const { value, name } = e.target;
    //     write.setWrite({
    //         [name]:value
    //     })
    //     // console.log(e.target.value);
    // }

    return useObserver (() => (
        <div>
            {/* <input type="text" name="title" value={write.title} onChange={onchange}/>
            <input type="text" name="contents" value={write.contents} onChange={onchange}/> */}
            
            <input type="text" name="title" placeholder="title" value={write.title}
                onChange={({target: {value}}) => write.setTitle(value)}></input>
            <textarea name="contents" placeholder="contents" value={write.contents} 
                onChange={({target: {value}}) => write.setContents(value)} ></textarea>
            <button onClick={postBoard}>upload</button>
        </div>
    ));
}

export default WriteForm;   
