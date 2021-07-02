// src 변경
var imgElement = $('.list__item .list-item img');

var linkHref = [];


for(var i = 0; i < imgElement.length; i++){
    // 경로 확인
    // console.log(imgElement.eq(i).attr("src"));

    // 경로교체
    linkHref.push(imgElement.eq(i).attr("src").replace("week1","week2"));

    // 교체된 경로 변경
    console.log(imgElement.eq(i).attr({"src":linkHref[i]}));
}
console.log(linkHref);

// 변경되는 사항
// 1. urlBase 뒤에 상품번호 변경
// 2. 상품명 alt 값

// var index = [0, 1, 2, 3];
// var productCode1 = ["1234", "2341", "3412", "4123"];
// var productName1 = ["딸기", "바나나", "키위", "사과"];

// // 2주차
// var index = [0, 1, 2, 3];
// var productCode2 = ["5678", "6785", "7856", "8567"];
// var productName2 = ["멜론", "레몬", "유자", "망고"];

// // 1주차
// $(".box__week1 .box__item-half .list-item").eq(0).find("a").attr("href", urlBase + productCode1[0]).find('img').attr({"alt": productName1[0]});
// $(".box__week1 .box__item-half .list-item").eq(1).find("a").attr("href", urlBase + productCode1[1]).find('img').attr({"alt": productName1[1]});
// $(".box__week1 .box__item-half .list-item").eq(2).find("a").attr("href", urlBase + productCode1[2]).find('img').attr({"alt": productName1[2]});
// $(".box__week1 .box__item-half .list-item").eq(3).find("a").attr("href", urlBase + productCode1[3]).find('img').attr({"alt": productName1[3]});

// // 2주차
// $(".box__week2 .box__item-half .list-item").eq(0).find("a").attr("href", urlBase + productCode2[0]).find('img').attr({"alt": productName2[0]});
// $(".box__week2 .box__item-half .list-item").eq(1).find("a").attr("href", urlBase + productCode2[1]).find('img').attr({"alt": productName2[1]});
// $(".box__week2 .box__item-half .list-item").eq(2).find("a").attr("href", urlBase + productCode2[2]).find('img').attr({"alt": productName2[2]});
// $(".box__week2 .box__item-half .list-item").eq(3).find("a").attr("href", urlBase + productCode2[3]).find('img').attr({"alt": productName2[3]});

// var arr = [ "딸기", "포도", "배" ];
// console.log(arr);