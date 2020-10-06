var age = 22;
//  if文
if (age >= 20) {
    console.log("adult");
}
//  if else 文
var age = 18;
if (age >= 20) {
    console.log("adult");
} else {
    console.log("child");
}

//  if elseif 文
var age = 0;

if (age >= 20) {
    console.log("adult");
} else if (age==0) {
    console.log("baby");
} else {
    console.log("child");
}

//  確認問題
var hoge = 5;

if ( hoge >= 10 && hoge < 20 ) {
    console.log("10代");
} else if ( hoge >= 20 && hoge < 30 ) {
    console.log("20代");
} else if ( hoge >= 30 && hoge < 40 ) {
    console.log("30代");
} else {
    console.log("それ以外");
}