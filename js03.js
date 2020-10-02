window.alert();
window.console.log();
window.document.getElementById();
// js01,js02 で学んだメソッド = 関数

// メソッド定義の仕方
const foo = {
    // alert: function() {}, 通常の書き方 alertはプロパティだと思われる
    // 下記は短縮記法
    alert() {},
};

function cut(food) {
    const cutFood = food.slice();
    return cutFood;
};


const cutCarrot = cut(carrot); //人参
const cutPotato = cut(potato); //じゃがいも

// 関数の例
function isTweetable(text) {
    return text.length <= 1;
};

function alertTweetable(text) {
    if (text.length <= 140) {
        alert("you can tweet!");
    }
}