import { observable } from 'mobx';

const list = observable ({
    boardList: [
        {id:"1", title: "나 오늘 정답률 5% 문제 맞췄다", writer: "홍길동"},
        {id:"2", title: "오늘 AI 맞춤 문제 15개는 다 풀었다.", writer: "안준모"},
        {id:"3", title: "공부 인증함", writer:"홍길동"},
        {id:"4", title: "오늘 공부 인증", writer:"안준모"}
    ]
});

export { list };