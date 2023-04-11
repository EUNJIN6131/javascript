// function show() {
//      alert("안녕하세요");
// event.preventDefault();
//     document.getElementById("h2Id").innerHTML = "안녕하세요2";

// }

//const는 변경되지 않는다라는 뜻
//화살표 함수로 변경
const show = () => {
    event.preventDefault();
    //let이 변수 생성 랜덤수 생성 (1~6)   n이라는 변수에 담아줘야함 n선언되야함
    let n = Math.floor(Math.random() * 6) + 1;
    console.log(n);
    //case
    // document.getElementById("h2ID").innerHTML = '<img src="./img/' + n +'.png">';
    //case 4
    // document.getElementById("h2ID").innerHTML = '<img src="./img/1.png">';
    //case 5
    document.getElementById("h2Id").innerHTML = `<img src="./images/${n}.png">`;

    // let imgTag ;   
    // //if 활용 1)
    // if (n == 1) imgTag = '<img src="./img/1.png">';
    // else if (n == 2) imgTag = '<img src="./img/2.png">';
    // else if (n == 3) imgTag = '<img src="./img/3.png">';
    // else if (n == 4) imgTag = '<img src="./img/4.png">';
    // else if (n == 5) imgTag = '<img src="./img/5.png">';
    // else if (n == 6) imgTag = '<img src="./img/6.png">';

    //switch 활용
    // switch (n)  {
    //    case1 : (n == 1) imgTag = '<img src="./img/1.png">'; break;
    //    case2 : (n == 1) imgTag = '<img src="./img/1.png">'; break;
    //    case3 : (n == 1) imgTag = '<img src="./img/1.png">'; break;
    //    case4 : (n == 1) imgTag = '<img src="./img/1.png">'; break;
    //    case5 : (n == 1) imgTag = '<img src="./img/1.png">'; break;
    //    case6 : (n == 1) imgTag = '<img src="./img/1.png">'; break;
    // }

    // let imgArr = ['<img src="./img/1.png">';
    // '<img src="./img/2.png">';
    // '<img src="./img/3.png">';
    // '<img src="./img/4.png">';
    // '<img src="./img/5.png">';
    // '<img src="./img/6.png">';
    // ]

    // document.getElementById("h2Id").innerHTML = imgArr[n-1]

    // let array = '<img src="./img/1.png">';
    //             '<img src="./img/2.png">';
    //             '<img src="./img/3.png">';
    //             '<img src="./img/4.png">';
    //             '<img src="./img/5.png">';
    //             '<img src="./img/6.png">';

  // document.
}

// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("h2Id").innerHTML = "시작입니다.";
// });

//content가 로드되면 펑션 실행시킨다.
document.addEventListener("DOMContentLoaded", () => {
    //document.getElementById("h2Id").innerHTML = "시작입니다.";
    //document.querySelector('#h2Id').innerHTML = "아이디선택자:시작입니다."


});
    // const bt = document.createElement('button');
    // bt.textContent = "확인";
    // document.getElementById('hdiv').append(bt) ;

//abt a button a태그 만들기
    //const bt = document.createElement('button');



