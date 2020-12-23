import { counter } from './components/stores/counter';
import { write } from './components/stores/write';
import { search } from './components/stores/search';
import { list } from './components/stores/list';

const useStore = ()=> {
    return { counter, write, search, list };
};

export default useStore;

// stores 폴더에 생길 모든 스토어들을 한 곳에서 불러들인다.