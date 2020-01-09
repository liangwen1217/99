var card ;

var cardnews ='';//卡片內容結構

(function createcard (){
    for(i =2;i<10;i++){
        cardnews+= `<div class="title-number">${i}</div>`

        for(let j =1; j<10;j++){
            cardnews+=`<div class="data-row">${i} × ${j} = ${i * j}</div>` 
        }

        card =document.createElement('div');//建立卡片
        card.setAttribute('class','card');//設定卡片class名稱
        card.innerHTML = cardnews;//結構字串寫入卡片
        document.querySelector(".container").appendChild(card);

        cardnews="";
    }
})();

//解法二

//https://codepen.io/a3803896/pen/gOOeQvo?editors=1010

