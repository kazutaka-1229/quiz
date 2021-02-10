const quiz = [
    {
        question: "さつきのあだ名はなんですか？",
        answers: [
            "さつまいも",
            "ジャガイモ",
            "かぼちゃ",
            "にんじん"
        ],
        correct: "さつまいも"
    }, {
        question:  "バレンタインデーは何日？",
        answers:  [
            "3/14",
            "2/14",
            "12/25",
            "12/29"
        ],
        correct:  "2/14"

    }, {
        question:  "『これはどんな味？』を英語で表記すると正しいのはどれ？",
        answers:  [
            "I am yakiimo",
            "yakiimo is delicious",
            "What dose it tastes like?",
            "What kind of do you like?"
        ],
        correct:  "What dose it tastes like?"
    }, {
        question:   "The new traffic rules described in today’s newspaper apply ___________ to motorcyclists and not to car drivers.",
        answers:  [
            "anthropocentricity",
         "anachronism",
         "absentminded",
         "exclusively"
        ],
        correct:  "exclusively",
    },
];

const quizLength = quiz.length;
let quizeIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義//
const setupQuiz = () => {
document.getElementById('js-question').textContent =quiz[quizeIndex].question;
let buttonIndex = 0;
while(buttonIndex < buttonLength){
    //ここに命令//
    $button[buttonIndex].textContent =quiz[quizeIndex].answers[buttonIndex];
    buttonIndex ++;
  }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizeIndex].correct === e.target.textContent){
        window.alert("正解");
        score++;
    } else {
        window.alert("不正解！");
    }

    quizeIndex++;

    if(quizeIndex < quizLength){
        //問題数がまだあればこちらを実行//
        setupQuiz();
    } else {
        //問題数がもうなければこちらを実行//
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です!');

    }
   
};

//ボタンをクリックしたら正誤判定//
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener("click",(e) => {
    clickHandler(e);
    });
    handlerIndex++;
}
