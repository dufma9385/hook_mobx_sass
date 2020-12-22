import { observable } from 'mobx';

const write = observable ({
    title: '',
    contents: '',

    postBoard(){
        alert(this.title+" : "+this.contents);
    }
});

export { write };