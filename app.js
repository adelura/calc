let peoples = {
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    M: "M",
    T: "T",
};

// let transactions = [
//     { amount: 10,   payed: peoples.A,    borrower: peoples.M },
//     { amount: 5,    payed: peoples.A,    borrower: peoples.T },
//     { amount: 3,    payed: peoples.M,    borrower: peoples.T },
//     { amount: 2,    payed: peoples.T,    borrower: peoples.A },
// ];
let transactions = [
    { amount: 8,   payed: peoples.A,    borrower: peoples.C },
    { amount: 7,    payed: peoples.A,    borrower: peoples.D },
    { amount: 2,    payed: peoples.B,    borrower: peoples.A },
];

let balance = new Map();

transactions.forEach(function (transaction) {
    modifyStatement(transaction.payed, -transaction.amount);
    modifyStatement(transaction.borrower, transaction.amount);
});

function modifyStatement(who, value) {
    let currentValue = balance.get(who) || 0;

    balance.set(who, currentValue + value);
}

let balanceArray = Array.from(balance);

console.log(JSON.stringify(balanceArray, null, '    '));

let finalTransactions = [];

while (balanceArray.length) {
    balanceArray = balanceArray.sort((a, b) => a[1] - b[1]);

    let first = balanceArray[0];
    let last = balanceArray[balanceArray.length - 1];

    let amount = Math.min(Math.abs(first[1]), Math.abs(last[1]));

    first[1] += amount;
    last[1] -= amount;

    finalTransactions.push({
        amount,
        payee: last[0],
        receiver: first[0]
    });

    if (last[1] === 0) {
        balanceArray.length--;
    }

    if (first[1] === 0) {
        balanceArray.shift();
    }
}

console.log(finalTransactions);