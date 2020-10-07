//  クラス名
class Student {

    avg(math, english) {
        console.log((math + english) / 2);
    }
}

//  クラス使用方法
//  インスタンス化
var a001 = new Student();
a001.avg(80,70);

//  プロパティの定義
a001.name = "sato";
console.log(a001.name);


//  インスタンスを実行した時に呼び出されるメソッドの事
//  初期化メソッド コンストラクタ
class newStudent {
    constructor(name) {
        this.name = name;

    }
    avg(math, english) {
        console.log((math + english) / 2);
    }
}

var a001 = new newStudent();
a001.name = "sato";
console.log(a001.name);

// constructorで引数を取る場合、以下でもOK
var a002 = new newStudent("tanaka");
console.log(a002.name);

// クラス式
var newStudentnew = class {
    constructor(name) {
        this.name = name;

    }
    avg(math, english) {
        console.log((math + english) / 2);
    }
};

var a003 = new newStudentnew("koko");
console.log(a003.name);