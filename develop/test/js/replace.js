// src 변경
var imgElement = $('.list__item .list-item img');

var linkHref = [];

for(var i = 0; i < imgElement.length; i++){
    // 경로 확인
    // console.log(imgElement.eq(i).attr("src"));

    // 경로교체
    linkHref.push(imgElement.eq(i).attr("src").replace("week1","week2"));

    console.log(linkHref);

    // 교체된 경로 변경
    // console.log(imgElement.eq(i).attr({"src":linkHref[i]}));
}

var arr = [ "딸기", "포도", "배" ];
console.log(arr);