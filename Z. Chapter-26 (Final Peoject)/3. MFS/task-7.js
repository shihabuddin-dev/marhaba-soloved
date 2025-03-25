/* 
টাস্ক-৭: কেউ টাকা সেন্ড করতে চাইলে send মানির জন্য 15 টাকা ফি যোগ করতে পারস। সেক্ষেত্রে যখন টাকা পাঠাবে, তখন চেক করবি, যে টাকা পাঠাবে, তার অ্যাকাউন্টে সেন্ড এমাউন্ট প্লাস 15 টাকার বেশি আছে কি না। আবার যে টাকা রিসিভ করবে, সে কিন্তু এই প্রসেসিং ফি 15 টাকা পাবে না। এই প্রসেসিং ফি 15 টাকা জমা হবে কোম্পানির খাতায়। সেজন্য যেখানে users নামক অ্যারে আছে, সেখানে আরেকটা ভেরিয়েবল ডিক্লেয়ার করে দিতে পারস processing Fee নামে এবং যতবার প্রসেসিং ফি পাবে, ততবার সেখানে টাকার পরিমাণ যোগ হবে 
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
        const processingFee = 15;
        if (this.balance >= amount + processingFee) {
            this.balance -= (amount + processingFee);
            const transaction = {
                type: 'sendMoney',
                sender: this.name,
                receiver: receiver,
                amount: amount,
                fee: processingFee,
                date: new Date().toLocaleString(),
            };
            this.transactionHistory.push(transaction);
            console.log(`${amount} sent to ${receiver} with a processing fee of ${processingFee}.`);
            receiver.addMoney(amount);

            Company.processingFee += processingFee;
        } else {
            console.log("Insufficient balance including processing fee.");
        }
    }

    showTransactionHistory() {
        console.log('Transaction History:');
        this.transactionHistory.forEach((transaction, index) => {
            console.log(`${index + 1}. ${transaction.type} - ${transaction.amount} from ${transaction.sender} to ${transaction.receiver} on ${transaction.date}`);
        });
    }
}

class Company {
    static processingFee = 0;
}

const account1 = new Account('Jhankar', 5000);
const account2 = new Account('Gias', 2000);

account1.sendMoney(account2, 1000);

console.log(`Company Processing Fee Total: ${Company.processingFee} TK`);
account1.showTransactionHistory();
account2.showTransactionHistory();
