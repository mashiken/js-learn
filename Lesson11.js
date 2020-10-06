//  for文
//  for(strat値，継続条件、増減式) {}

for(var i = 0; i <= 4; i ++) {
    console.log(i);
}

//  break i が3になった時ループを抜ける
for (var i = 0; i <= 4; i ++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}

//  countinue 繰り返し文である条件に当てはまった時、スキップ
for (var i = 0; i <= 4; i ++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
//  for文のネスト
for (var i = 0; i <= 2; i ++) {
    for (var j = 0; j <= 2; j ++) {
        console.log(i + "" + j);
        console.log(i + j);
    }
}

// 配列の中身を表示
var arr = [2,4,6,8,10];
var sum = 0;

for(var i = 0; i <= 4; i ++) {
    console.log(arr[i]);
    sum += arr[i];
}

console.log(sum);
//  elseif でも書ける
for(var i = 1; i <= 10; i++){
    if(i == 3){
        continue;
    }
    if(i == 7){
        break;
    }
    console.log(i)
}