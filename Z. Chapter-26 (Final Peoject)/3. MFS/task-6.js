/* 
টাস্ক-৬: এইবার transactionHistory রাখতে পারস। যখন কেউ addMoney করে বা কাউকে send Money করে, সেই রিলেটেড কিছু তথ্য transactionHistory নামক একটা অ্যারেতে রাখতে পারস। প্রত্যেকটা transaction একটা অবজেক্ট হবে। সেখানে কিছু প্রোপার্টি থাকবে। যেমন: sender, receiver, amount ইত্যাদি।
 */

class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.transactionHistory = [];
    }

    addMoney(amount) {
        this.balance += amount;
        const transaction = {
            type: 'addMoney',
            sender: this.name,
            receiver: this.name,
            amount: amount,
            date: new Date().toLocaleString(),
        };
        this.transactionHistory.push(transaction);
        console.log(`${amount} added to your account.`);
    }
    sendMoney(receiver, amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            const transaction = {
                type: 'sendMoney',
                sender: this.name,
                receiver: receiver,
                amount: amount,
                date: new Date().toLocaleString(),
            };
            this.transactionHistory.push(transaction);
            console.log(`${amount} sent to ${receiver}.`);
        } else {
            console.log("Insufficient balance.");
        }
    }
    showTransactionHistory() {
        console.log('Transaction History:');
        this.transactionHistory.forEach((transaction, index) => {
            console.log(`${index + 1}. ${transaction.type} - ${transaction.amount} from ${transaction.sender} to ${transaction.receiver} on ${transaction.date}`);
        });
    }
}

const account1 = new Account('Jhanker', 5000);

account1.addMoney(2000);
account1.sendMoney('Gias', 1000);

account1.showTransactionHistory(); 
