import { observable } from 'mobx';

const search = observable ({
    input: '',

    setInput(value) {
        this.input = value;
        // console.log(value);
        // alert(this.input);
    }
});

export { search };