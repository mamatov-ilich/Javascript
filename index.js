document.getElementById("demo").innerHTML = 5 + 6;
window.alert("Hello!")
let a, b, c;
a = 5;
b = 6;
c = a + b;
document.getElementById("demo1").innerHTML = c;
//alert('a' > 'B');
//alert( 'Банан' > 'Аят' );
//alert( '2' > 1 ); // true, сравнивается как 2 > 1
//alert( '01' == 1 ); // true, сравнивается как 1 == 1
//alert( false == 0 ); // true, false становится числом 0
//alert( true == 1 ); // true, так как true становится числом 1.
alert(editor & ACCESS_ADMIN); // 0, доступа нет
alert(editor & ACCESS_ARTICLE_EDIT); // 8, доступ есть
var check = ACCESS_GOODS_VIEW | ACCESS_GOODS_EDIT; // 6, 00110
alert( admin & check ); // не 0, значит есть доступ к просмотру ИЛИ изменению