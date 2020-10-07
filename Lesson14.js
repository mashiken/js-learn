class Student{

    constructor(name) {
        this.name = name;
    }

    cal_avg(data) {
        var sum = 0;
        for(var i = 0; i < data.length; i++) {
            sum += data[i];
        }
        var avg = sum / data.length;
        return avg;
    }

    judge(avg) {
        var result;
        if (60 <= avg){
            result = "passed"
        } else {
            result = "failed";
        }
        return result;
    }
}

//  本処理
var a001 = new Student("sato");
var data = [70,60,50,90,30];
var avg = a001.cal_avg(data);
var result = a001.judge(avg);

console.log(data.length);
console.log(a001.name);
console.log(avg);
console.log(result);