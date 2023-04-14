document.addEventListener("DOMContentLoaded", () => {
    const cbt1s = document.querySelectorAll(".cbt1")
    const cbt2s = document.querySelectorAll(".cbt2")
    const cbt3s = document.querySelectorAll(".cbt3")
    const btReset = document.querySelector("#btReset")
    const txt1 = document.querySelector("#txt1")
    //쿼리셀렉터로 id=b1나 class=c1 집어온 것을 가지고 b1.getAtrribute(속성)을 찾아낸다
    //event리스너는 이벤트를 내가 잡겠다라는 의미. 돔컨테트로드는 돔 만들어지고 1번만, 그리고 이벤트리스너
    //셀렉터올은 클래스 (배열이 된다) ,셀렉터는 보통 id값

    //배열의 초기화
    let arr = [];

    //버튼 이벤트 추가
    //reset기능 구현
    btReset.addEventListener('click', (event) => {
        event.preventDefault();
        txt1.value = '';
        arr = [];
    })


    //배열의 자료 추가 (배열의 푸시 arr.push를 하면 된다)(let n of Ns) (for반복문,배열 사용해서 4개 불러옴)
    //input type타입은 value에다가 꽂아야 한다. 
    for (let cbt1 of cbt1s) {
        cbt1.addEventListener('click', (event) => {
            event.preventDefault();
            // console.log(cbt1.textContent)
            switch (cbt1.textContent) {
                case '사과':
                    arr.push('🍎')
                    break;
                case '바나나':
                    arr.push('🍌')
                    break;
                case '오렌지':
                    arr.push('🍊')
                    break;
                case '수박':
                    arr.push('🍉')
                    break;
            }
            console.log(arr)

            txt1.value = arr.join(',');
            // txt1.value = arr.toString();

        });
    }


    //배열에서 없애는 것은 팝 or filter, map 쓴다 
    //filter : 새로운 배열을 만듬    arr.filter((item) => 조건식) 조건식에 맞는 것만 배열이 만들어진다
    //map : 기존 배열을 기반으로 새로운 배열을 만듬  arr.map(item =>    )
    //배열에서 자료삭제
    for (let cbt2 of cbt2s) {
        cbt2.addEventListener('click', (event) => {
            event.preventDefault();
            // console.log(cbt1.textContent)
            let sort = cbt2.textContent.replace('삭제', '');

            //replace 삭제를 공백''으로 바꿈
            //temp 자체가 arr.filter((item) =>  item != '🍎' 같음

            let temp = [];
            for (let item of arr) {
                switch (sort) {
                    case '사과':
                        if (item != '🍎') temp.push(item);
                        break;
                    case '바나나':
                        if (item != '🍌') temp.push(item);
                        break;
                    case '오렌지':
                        if (item != '🍊') temp.push(item);
                        break;
                    case '수박':
                        if (item != '🍉') temp.push(item);
                        break;

                }
                txt1.value = temp.join(',');
                arr = temp;
            }
        });
    }


    //     }
    //     txt1.value = arr.join(',');
    // }

    // switch (sort) {
    //     case '사과':
    //         arr = arr.filter((item) =>  item != '🍎' );
    //         break;
    //     case '바나나':
    //         arr= arr.filter((item) =>  item != '🍌' );
    //         break;
    //     case '오렌지':
    //         arr =arr.filter((item) =>  item != '🍊'  );
    //         break;
    //     case '수박':
    //         arr=arr.filter((item) =>  item != '🍉'  );
    //         break;
    // } 
    // console.log(cbt2, arr)
    // arr = arr.filter 하는 이유가 기존 어레이에 덮어쓰겟다라는 뜻
    // txt1.value = arr.join(',');
    // txt1.value = arr.toString();
    //     });
    // }

    // for (let cbt3 of cbt3s) {
    //     cbt3.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         let sort = cbt3.textContent.split('->')[0];
    //         // console.log(sort)

    //         let temp = [];
    // for (let item of arr) {
    //     switch (sort) {
    //         case '사과':
    //             if (item == '🍎') temp.push('🥕');
    //             else temp.push(item);
    //             break;
    //         case '바나나':
    //             if (item == '🍌') temp.push('🥒');
    //             else temp.push(item);
    //             break;
    //         case '오렌지':
    //             if (item == '🍊') temp.push('🥑');
    //             else temp.push(item);
    //             break;
    //         case '수박':
    //             if (item == '🍉') temp.push('🥦');
    //             else temp.push(item);
    //             break;

    //     }

    
    //삼항연산자 활용
    for (let cbt3 of cbt3s) {
        cbt3.addEventListener('click', (event) => {
            event.preventDefault();
            let sort = cbt3.textContent.split('->')[0].trim();
            console.log(sort)
            let temp = [];
            for (let item of arr) {
                switch (sort) {
                    case '사과':
                        arr = arr.map((item) => item == '🍎' ? '🥕' : item);
                        break;
                    case '바나나':
                        arr = arr.map((item) => item == '🍌' ? '🥒' : item);
                        break;
                    case '오렌지':
                        arr = arr.map((item) => item == '🍊' ? '🥑' : item);
                        break;
                    case '수박':
                        arr = arr.map((item) => item == '🍉' ? '🥦' : item);
                        break;
                }

                console.log(cbt3, arr)
                // arr = arr.filter 하는 이유가 기존 어레이에 덮어쓰겟다라는 뜻
                // arr에 map한 것을 반영했으니 arr = temp 안해도 된다.
                txt1.value = arr.join(',');
                

                // txt1.value = arr.toString();


            };
        });
    };
});