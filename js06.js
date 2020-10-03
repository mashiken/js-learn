const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

button.addEventListener("click",async function() {
    // データのやり取り
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);

    //DOM 操作
    users.forEach(function(user) {
        const list = document.createElement("li")
        list.innerText = user.name
        lists.appendChild(list);
    });

    //DOM操作 別案
    // for (let index = 0; index < users.length; index++) {
    //     const user = users[index];
    //     const list = document.createElement("li");
    //     list.innerText = user.name;
    //     lists.appendsChild(list);
    // }
    
    //DOM操作 条件分岐
    // users.forEach(function(user){
    //     if (user.id <= 5) {
    //         const list = document.createElement("li")
    //         list.innerText = user.name
    //         lists.appendChild(list);
    //     }
    // });
});


// windowが表示された段階で 表示する事
window.addEventListener("load", function () {
    // データのやり取り
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);

    //DOM 操作
    users.forEach(function(user) {
        const list = document.createElement("li")
        list.innerText = user.name
        lists.appendChild(list);
    });
});


//  リファクタリング
// DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// 関数(メソッド)
function addList(user) {
    const list = document.createElement("li")
    list.innerText = user.name
    lists.appendChild(list);
}

//async function
async function getUsers() {
    // データの処理
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}

async function listUsers() {
　　const users = await getUsers();
    users.forEach(addList);
}

// イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);
