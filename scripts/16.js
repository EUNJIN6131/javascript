const show = () => {
    event.preventDefault();

    //랜덤수 생성
    let n = Math.floor(Math.random() * 6) + 1;
    document.getElementById("h2id").innerHTML = `<img src='../IMAGE/${n}.png'>`; 

 
    //사용자 입력 수 : 라디오의 체크값을 찾아야 함
    let user; 
    const radios = document.querySelectorAll('input[type=radio]' ); //'input[속성값]' ; radio check값 찾기


    for(let item of radios){ //for of loop
        console.log(item);
        if(item.checked){
            user = item.value;
            user = Number(user); //정수형 전환 ; Number()로 전환
            break; //체크값을 찾으면 종료됨
        }
    }
    if(n===user){ //if(n===parseInt(user))로도 바꿀 수 있음
        document.querySelector('article h1').textContent = '정답입니다.';
    }
    else{
        document.querySelector('article h1').textContent = '오답입니다.';
    }
   

    
} 