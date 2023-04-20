document.addEventListener('DOMContentLoaded', () => {
    
    const boxDt = document.querySelector('#boxDt');

    boxDt.addEventListener('change', () => {
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url = url + boxDt.value.replaceAll('-','') ;
        // console.log(url)
 
        
        fetch(url)

        .then((resp) => resp.json())  //response는 한줄만 들어가야함
        .then((data) => {
            let boxlist = data.boxOfficeResult.dailyBoxOfficeList;
            let boxTag = '';
            // console.log(data.boxOfficeResult.dailyBoxOfficeList);
            // console.log(boxlist);
            for(let box of boxlist) {
                console.log(box.rank, box.movieNm, box.salesAmt, box.rankInten);
                //변수 문자열은 백틱에다가 중괄호 $
                boxTag = boxTag + '<details>';
                boxTag = boxTag + `<summary role="button" class="contrast">${box.movieNm}</summary>`;
                boxTag = boxTag + '<ul>';
                boxTag = boxTag + `<li>순위 : ${box.rank}</li>`;
                boxTag = boxTag + `<li>매출액 : ${parseInt(box.salesAmt).toLocaleString()}원</li>`;
                boxTag = boxTag + `<li>전일대비순위 : ${box.rankInten}</li>`;
                boxTag = boxTag + '</ul>';
                boxTag = boxTag + '</details>';
            }
            console.log(boxTag);

            document.querySelector('#boxDiv').innerHTML = boxTag;
        })
        .catch((err) => {
            console.log(err);

        });
    })
});



    // fetch(url)
    //     .then((resp) => resp.json())  //response는 한줄만 들어가야함
    //     .then((data) => {
    //         let boxlist = data.boxOfficeResult.dailyBoxOfficeList;
    //         let boxTag = '';
    //         // console.log(data.boxOfficeResult.dailyBoxOfficeList);
    //         // console.log(boxlist);
    //         for(let box of boxlist) {
    //             console.log(box.rank, box.movieNm, box.salesAmt, box.rankInten);
    //             //변수 문자열은 백틱에다가 중괄호 $
    //             boxTag = boxTag + '<details>';
    //             boxTag = boxTag + `<summary> ${box.movieNm}</summary>`;
    //             boxTag = boxTag + '<ul>';
    //             boxTag = boxTag + `<li>순위 : ${box.rank}</li>`;
    //             boxTag = boxTag + `<li>매출액 : ${parseInt(box.salesAmt).toLocaleString()}원</li>`;
    //             boxTag = boxTag + `<li>전일대비순위 : ${box.rankInten}</li>`;
    //             boxTag = boxTag + '</ul>';
    //             boxTag = boxTag + '</details>';
    //         }
    //         console.log(boxTag);

    //         document.querySelector('#boxDiv').innerHTML = boxTag;
    //     })
    //     .catch((err) => {
    //         console.log(err);

    //     });

// });

