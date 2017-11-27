import { calculateTransactions } from './calculator.js';
import transactions from "./transactions.js";

console.table(transactions);

let final = calculateTransactions(transactions);

console.table(final);