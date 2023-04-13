document.addEventListener("DOMContentLoaded", () => {
    //css는 디자인 html 정적인 기능 java script는 동적인 기능
    //회문 체크 함수
    const palindrome = (t1, t2) => {
        // console.log('palindrome');
        let s = t1.value;
        //입력내용이 없는 경우
        if (s.length == 0) {
            document.querySelector("h2").textContent = '단어를 입력하세요.';
            return;
            // console.log(s)
        }

        //입력내용이 있는 경우
        //방법1.

        let rs = '';
        //for (let i = s.length - 1; i >= 0; i--) {
        //    rs = rs + s[i];
        //}
        //우영우123 이면 증감식   a1.value 값에다가 영우123우 우123영우 123우영
        //console.log("s=", s, ",rs=", rs);
        //숫자합계

        //방법2 : 배열이용
        s = s.split('');       //문자열.split();는 문자열을 분리자로 분리해서 배열만듬 문자열.split('') '공백' 우, 영, 우 문자열 쪼개기 만약 split(,) 쉼표 들어가면 쉼표 단위로 쪼갠다 우영우, 사과   배열이 됨;
        s = s.reverse();        //배열.reverse(); 배열의 요소를 뒤집어줌
        rs = s.join('');          //배열.join()하면 배열의 요소를 문자열로 묶어줌. split으로 나눠졌던 배열이 붙는다.
        console.log("s=", s, ",rs=", rs);




        if (t1.value == rs) {
            t2.value = "회문입니다.";
        } else {
            t2.value = "회문이 아닙니다.";
        }

    }

    const numSum = (t1, t2) => {
        // console.log('numSum');
        let s = t1.value;


        //문자열 순회   //sum = sum + i
        let sum = 0;
        for (let ch of s) {
            // console.log(ch, isNaN(ch));    
            if (!isNaN(ch)) sum = sum + parseInt(ch);
        }
        t2.value = sum ;
    }

    //DOM요소 selector 가져오기

    const txt1 = document.querySelector("a1");
    const txt2 = document.querySelector("a2");
    // const txts = document.querySelectorAll("input[type=text]");  css에서도 사용가능
    // const 찝어 오기
    const bts = document.querySelectorAll(".bt");   //selectorall 쓰면 취소까지 다 불러올 수 있으니 클래스로 묶은 .bt만 가져오기. 쿼리셀렉터올은 배열이 된다 배열=순회
    //버튼 배열에 클릭이벤트 작성

    for (let bt of bts) {
        bt.addEventListener('click', (event) => {
            event.preventDefault();
            // let dist = bt.innerHTML ;
            let dist = bt.getAttribute('id').slice(-1);      //어트리뷰트 안에 속성을 입력해야함  위에 줄이랑 같은 내용 겹침 slice(-1) 단어의 맨 마지막 부분 한글자를 잘라낸다 예 bt1이면 -> bt로
            if (dist === '1') palindrome(a1, a2);                  //bt1이 1 bt2=2    만약 bt1이 문자열'1'번이라면 palindrome 회문, 아니라면 numSum한다.  dist===1 와 dist==='1'은 다르다.
            else numSum(a1, a2);
        });
    }

});