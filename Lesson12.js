//  関数
function say_hello() {
    console.log("Hello");
}
//  3回使えば、3個表示出来る
say_hello();

// 関数を変数にいれる事が出来る
var asa = function say_morning() {
    console.log("Morning");
}

asa();

//  引数のある関数
function say_greet(greeting) {
    console.log(greeting);
};

say_greet("Good Morning");
say_greet("Evening");
//  関数の中でしか処理出来ない為、関数内で表示
function cal(x, y) {
    console.log(x * y);
};

cal(6, 3);

// 戻り値になる関数
// 受け取った結果をさらに計算したり、文字列と連結できる
function cal(a, b) {
    return a / b;
};

var result = cal(6, 3);
console.log(result);

// 確認問題
function hoge(a,b,c) {
    return a + b + c;
}

var hogeResult = hoge(10,5,8);
console.log(hogeResult);