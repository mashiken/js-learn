// 匿名関数

// 関数式
// 匿名関数 function(text)の間に関数名が本来なら必要だがいらない場合がある
const isTweetable = function(text){
    return text.lengtn <= 140;
};

// コールバック関数
// function 高階関数(コールバック関数) ｛
//     処理
//     コールバック関数();
// }

// 普通の例
function bring(food) {
    if ( /* 手洗いを終えたら */){
        //食材を持って来てもらう処理
    }
}

function peer(food) {
    if ( /* 手洗いを終えたら */){
        //食材の皮をむく処理
    }
}

function cut(food) {
    if ( /* 手洗いを終えたら */){
        //食材を切ってもらう処理
    }
}


// 高階関数を使った場合
// それぞれの関数がコンパクトになり、役割が明確に見やすくなる
function washed(fn) {
    if (/* 手洗いを終えたら */) {
        fn(); //コールバック関数
    }
}

function bring(food) {
    //食材を持って来てもらう処理
}

function peer(food) {
    //食材の皮をむく処理
}

function cut(food) {
    //食材を切ってもらう処理
}

// 実例
function unfollow() {
    console.log("フォローを外しました");
}

// 匿名関数でも可
const cancelTweet = function() {
    console.log("ツイートをキャンセルしました");
}

// 別例
function confirmed(fn) {
    const input = window.prompt("実行しますか？");
    if (input == "実行") {
        fn();
    }
}

confirmed(function () {
    console.log("リポジトリを削除");
});

// コールバック関数 別例
const btn = document.getElementById("button");
btn.addEventListener("click", function() {
    console.log("フォロー解除")
});

const foods = ["にんじん","じゃｙがいも","玉ねぎ"];

foods.forEach(function(food) {
    console.log(food);
});