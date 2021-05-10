// 프로퍼티

// Propery
// name 프로 퍼티 이름/ 키를 작성
//

var book = {};
book.title = "JS책";
console.log(book); // {title: JS책}

var book2 = {};
book2["title"] = "JS책";
console.log(book2); // {title: JS책}


var book3 = {title: "JS책"};
var varName = "title";
book3[varName] = "HTML책";
console.log(book3);