document.addEventListener("DOMContentLoaded", () => {

    //console.log가 뭔지


    const bts = document.querySelectorAll('button');
    console.log(bts);
    //querySelector 배열 가져오기
    //int = let
    // document.querySelector('#h2Id').textContent = bts.textContent ;
    
    //case1
    // for(let i=0; i < bts.length; i++) {
    //     console.log(bts[i].textContent);
    // }

    //case2 forEach 배열안에 있는 것을 한개씩 가져옴 forEach는 함수 들어가야함 
    // bts.forEach((item) => {
    //     console.log(item.textContent) ;
    // })

    // bts.forEach((item, idx) => {
    //     console.log(idx, item.textContent) ;
    // })

    //case3
    
    // for(let idx in bts) {
    //     console.log(bts[idx].textContent)
    // }

    //case4
    // for(let item of bts) {
    //     console.log(item.textContent);
    // }

    for(let [k, v] of bts.entries()) {
        console.log(k, v.textContent);
    }
});