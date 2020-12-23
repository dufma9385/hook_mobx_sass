import { observable } from 'mobx';

const search = observable ({
    input: '',

    setInput(value) {
        this.input = value;
    }
});

export { search };