/* 
৬. পোষা প্রাণীদের নিয়ে কাজ কর। Dog, Cat আর Parrot-এর আলাদা ক্লাস বানা। আগে Parent ক্লাস বানিয়ে কমন ফিচারগুলো সেখান থেকে ইনহেরিট কর।
 */

class Pets {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }
    petsDetails() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Price: ${this.price}TK`);
    }
}

class Dog extends Pets {
    constructor(name, color, price, work) {
        super(name, color, price);
        this.work = work;
    }

    getDetails() {
        console.log(`This dog helps us ${this.work}.`);
    }
}

class Cat extends Pets {
    constructor(name, color, price, food) {
        super(name, color, price);
        this.food = food;
    }

    getDetails() {
        console.log(`This cat eats ${this.food}.`);
    }
}

class Parrot extends Pets {
    constructor(name, color, price, canFly) {
        super(name, color, price);
        this.canFly = canFly;
    }

    getDetails() {
        console.log(`This parrot ${this.canFly ? "can fly." : "cannot fly."}`);
    }
}

const dog = new Dog('Boss', 'Brown', 2000, 'to catch thieves');
dog.petsDetails();
dog.getDetails();

const cat = new Cat('Bangla', 'Gray', 800, 'fish and rats');
cat.petsDetails();
cat.getDetails();

const parrot = new Parrot('Sona', 'Green', 1000, true);
parrot.petsDetails();
parrot.getDetails();
