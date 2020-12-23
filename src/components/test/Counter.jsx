import React from 'react';
import { useObserver } from 'mobx-react';
import useStore from '../../useStore';

const Counter = () => {

    const { counter } = useStore();

    const increase = () => {
        counter.increase();
    };

    const decrease = () => {
        counter.decrease();
    };

    return useObserver (() => ( // hook관련 mobx 기능 : return시 useObserver를 반환, 
                                // 실제 jsx코드는 콜백으로 추가한다.
        <div>
            <h1>{counter.number}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    ));
};

export default Counter;