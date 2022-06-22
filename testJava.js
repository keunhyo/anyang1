var nameAndCountArray = [
    {
        "name":"삼계탕",count:5
    },    {
        "name":"비빔밥",count:6
    },    {
        "name":"시금치 된장국",count:10
    },    {
        "name":"잔멸치볶음",count:4
    },    {
        "name":"무말랭이",count:1
    },    {
        "name":"계란 장조림",count:3
    },    {
        "name":"김치전",count:12
    },    {
        "name":"두부김치",count:1
    },    {
        "name":"떡볶이",count:3
    },    {
        "name":"마라샹궈",count:51
    },    {
        "name":"마파두부",count:0
    },    {
        "name":"쑤안차이위",count:2
    },    {
        "name":"꽁빠오지띵",count:31
    },    {
        "name":"꾸라오로우",count:2
    },    {
        "name":"빵빵지",count:14
    },    {
        "name":"쓰촨파오차이",count:56
    },    {
        "name":"쟈오쯔",count:20
    },    {
        "name":"훈툰",count:1
    },    {
        "name":"마제소바",count:1
    },    {
        "name":"모츠나베",count:5
    },    {
        "name":"나가사키 짬뽕",count:5
    },    {
        "name":"규동",count:5
    },    {
        "name":"오니기리",count:5
    },    {
        "name":"노라마키",count:5
    },    {
        "name":"야끼도리",count:5
    },    {
        "name":"오코노미야끼",count:5
    },    {
        "name":"당고",count:5
    },    {
        "name":"크림파스타",count:5
    },    {
        "name":"베이컨 토마토 리조또",count:5
    },    {
        "name":"감자 뇨끼",count:5
    },    {
        "name":"목살 스테이크",count:5
    },    {
        "name":"연어 스테이크",count:5
    },    {
        "name":"양식 돈가스",count:5
    },    {
        "name":"사워크림 감자구이",count:5
    },    {
        "name":"맥앤 치즈",count:5
    },    {
        "name":"서양식 배숙",count:5
    }
]

function LikeBut(name){
    var butvar = document.getElementById(name);

    for(var i = 0; i< nameAndCountArray.length; i++){
        if(nameAndCountArray[i].name == name){
            if(butvar.style.color == "black"){
                butvar.style.color = "red";
                nameAndCountArray[i].count++;
                butvar.innerHTML=nameAndCountArray[i].count;
            }
            else{
                nameAndCountArray[i].count--;
                butvar.style.color = "black";
                butvar.innerHTML="···";
            }
        }
    }
}

function ranking() {
    nameAndCountArray.sort(NumberCompare);
    var rankingElem = document.getElementById("ranking");
    var printArray = [];
    for (var i = 0; i < nameAndCountArray.length; i++) {
        if( i< 20)
            printArray.push((i + 1) + '등  : ' + nameAndCountArray[i].name + " |  " + nameAndCountArray[i].count + '회');
    }
    rankingElem.innerHTML = printArray.join("<br/><br/>");
}
function NumberCompare(a,b){
    return b.count - a.count;
}