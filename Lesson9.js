var x = 10;
var y = 2;
var z = 10;
//  算術演算子
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
//  関係演算子
console.log(x > y);
console.log(x <= y);
console.log(x >= z);

console.log(x == y);
console.log(x != y);
//  論理演算子
var a = 8;
var b = 3;
//  and かつ
console.log(a >= 5 && a <= 10);
console.log(b >= 5 && b <= 10);
//  or または
console.log(a == 3 || b == 3);
console.log(a == 1 || b == 1);

//  代入演算子 ・ 複合代入演算子
var c = 8;
var d = 12;
var e = 20;

c += 10;
d += e;
console.log(c);
console.log(d);

// インクリメント・デクリメント
var f = 8;
var g = 8;

f++;
g--;

console.log(f);
console.log(g);