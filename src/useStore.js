import { counter } from './stores/counter';
import { write } from './stores/write';

const useStore = ()=> {
    return { counter, write };
};

export default useStore;

// stores 폴더에 생길 모든 스토어들을 한 곳에서 불러들인다.