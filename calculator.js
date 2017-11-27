function modifyStatement(balance, who, value) {
    let currentValue = balance.get(who) || 0;

    balance.set(who, currentValue + value);
}

export function calculateTransactions (transactions) {
    let balance = new Map();

    transactions.forEach(function (transaction) {
        modifyStatement(balance, transaction.payed, -transaction.amount);
        modifyStatement(balance, transaction.borrower, transaction.amount);
    });

    let balanceArray = Array.from(balance);
    let finalTransactions = [];

    while (balanceArray.length) {
        balanceArray = balanceArray.sort((a, b) => a[1] - b[1]);
        console.table(balanceArray);

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

    return finalTransactions;
}