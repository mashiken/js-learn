// 変数とは
const foo = document.getElementById("foo");

const fooWidth = foo.offsetWidth;

const fooHeight = foo.offsetHeight;
// camelCase (ラクダ)はjavascript変数名では慣例的に使用
// snake_caseは使わない
const fooArea = fooWidth * fooHeight;

// 再代入 let letNumber = 100; の後 letNumber = 200;
// 再定義 let letNumber = 100; の後 let letNumber = 200;

const foo = 100,
      foo2 = 100,
      foo3 = 1000;
// このような形でも出来るが余り見ない
// const の特徴 再代入出来ない、再定義できない
// const は定数と呼ばれる事もあるが厳密には違う
// object の値 const obj = { foo: 123} を obj.foo 変更出来てしまう為

let bar = 200;
// let の特徴 再代入出来る、再定義出来ない

var baz = 300;
// var 再代入，再定義出来る

// constを主軸で使い,対応出来ない場合はlet,varは極力書かない 
// 厳密な方がバグが少なく、コードも読みやすくなる