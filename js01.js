let TokyoChuoBank = {
    list: {
        officer: {
            member: [
                { name: "中野渡謙", age: 56, teachLoan() {} },
                { name: "大和田暁", age: 43, teachBankHistory() {} }
            ],
            teach() {}
        },
        employee: {
            member: [{ name:"半沢直樹"}, {name:"渡真利忍"}],
            makeLoan() {}
        }
    },
    plan() {},
    makeSmile() {}
};

// 順に辿っていき値を取得する事が可能
// TokyoChuoBank.list.officer.member[0].name 
// TokyoChuoBank.list.officer.member[0].teachBankHistory();

window.console.log();
window.alert();
window.document.getElementById();