import { observable } from 'mobx';

const write = observable ({
    title: '',
    contents: '',
    board: [],

    postBoard() {
       alert(this.title+" : "+this.contents);
    },

    setTitle(value) {
        this.title = value
    },

    setContents(value) {
        this.contents = value
    },

});

export { write };