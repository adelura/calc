import { calculateTransactions } from './calculator.js';

let peoples = {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
    M: 'M',
    T: 'T',
};

// let transactions = [
//     { amount: 10,   payed: peoples.A,    borrower: peoples.M },
//     { amount: 5,    payed: peoples.A,    borrower: peoples.T },
//     { amount: 3,    payed: peoples.M,    borrower: peoples.T },
//     { amount: 2,    payed: peoples.T,    borrower: peoples.A },
// ];
let transactions = [
    { amount: 8,    payed: peoples.A,    borrower: peoples.C },
    { amount: 7,    payed: peoples.A,    borrower: peoples.D },
    { amount: 2,    payed: peoples.B,    borrower: peoples.A },
];

console.table(transactions);

let final = calculateTransactions(transactions);

console.table(final);