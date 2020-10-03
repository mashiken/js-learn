// API基本的な書き方
async function callApi() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users)
}

callApi();

// その他書き方
function callApi() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(res){
        return res.json();
    })
    .then(function(users) {
        console.log(users);
    })
}

