//함수
//섭씨온도 화씨온도 변환
// const cTof = (temp) => {
//     let ftemp = (temp * (9/5)) + 32;  
//     return ftemp; 
// }

//화씨온도 섭씨온도 변환
// const fTof = (temp) => {
//     let ctemp = (temp - (32)) * (5/9);    
//     return ctemp; 
// }

//addevent 이벤트 추가하는거
//addevent~~~ 읽어오기 id 가져오기 쿼리는 한번만
document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector('#sel1');  //가져오는 위치
    const sel2 = document.querySelector('#sel2');

    const d1 = document.querySelector('#d1')
    const d2 = document.querySelector('#d2')


    //단위표시
    d1.textContent = sel1.value;
    d1.textContent = sel2.value;


    //sel1의 select 값이 변경이 될 때
    sel1.addEventListener('change', (event) => {

        t1.value = '';
        t2.value = '';


        if (sel1.value == '℃') {
            sel2.value = '℉';
        } else if (sel1.value == '℉') {
            sel2.value = '℃';
        }
        d1.textContent = sel1.value;
        d2.textContent = sel2.value;
    });


    sel2.addEventListener('change', (event) => {
       
        t1.value = '';
        t2.value = '';

        if (sel2.value == '℃') {
            sel1.value = '℉';
        } else if (sel2.value == '℉') {
            sel1.value = '℃';
        }
        d1.textContent = sel1.value;
        d2.textContent = sel2.value;
    });
});
//input 에 값이 입력 되었을 때
t1.addEventListener('input', (event) => {
    if (sel1.value == sel2.value) {
        t2.value = t1.value;
    } else if (sel1.value == '℃' && sel2.value == '℉') {
        t2.value = (t1.value * (9 / 5)) + 32;
        //섭씨온도 ->화씨온도
    } else if (sel1.value == '℉' && sel2.value == '℃') {
        t2.value = (t1.value - (32)) * (5 / 9);
        //화씨 ->섭씨온도
    }

});

