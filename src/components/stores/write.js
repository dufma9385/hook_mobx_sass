import { observable, reaction, computed, autorun } from 'mobx';

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

    // setWrite(e) {
    //     // console.log("setWrite "+e.title+" : "+e.contents);
    //     // this.title = e.title
    //     // this.contents = e
    //     console.log(e);
    //     this.title = e.title;
    //     this.contents = e.contents;
    // }
});

// reaction(
//     () => write.title, (value, reaction) => {
//         console.log(`${value}`);
//     }
// );
// reaction(
//     () => write.contents, (value, reaction) => {
//         console.log(`${value}`);
//     }
// );

export { write };