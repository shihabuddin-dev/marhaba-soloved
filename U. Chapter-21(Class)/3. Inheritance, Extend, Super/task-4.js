/* 
8. Animal, Bird আর Fish নিয়ে চিন্তা কর। প্রত্যেকের জন্য মিনিমাম 5টা করে প্রোপার্টি বানিয়ে দেখ, কোনগুলো কমন। কমন প্রোপার্টিগুলো Parent Class-এ রাখ, আর আনকমনগুলো Child Class-এ। সবগুলো ক্লাস থেকে অবজেক্ট তৈরি করে প্রোপার্টিগুলো ঠিকঠাক কাজ করছে কি না, চেক কর।
 */

class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    animalDetails() {
        console.log(`Name: ${this.name}, Color: ${this.color}`);
    }
}

class Bird extends Animal {
    constructor(name, color, canFly, food, price) {
        super(name, color);
        this.canFly = canFly;
        this.food = food;
        this.price = price;
    }
    birdDetails() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Can Fly: ${this.canFly}, Food: ${this.food}, Price: ${this.price}`);
    }
}

class Fish extends Animal {
    constructor(name, color, waterType, taste, price) {
        super(name, color);
        this.waterType = waterType;
        this.taste = taste;
        this.price = price;
    }
    fishDetails() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Water Type: ${this.waterType}, Taste: ${this.taste}, Price: ${this.price}`);
    }
}

const bird = new Bird('Dove', 'Gray', true, 'Grass', 500);
bird.animalDetails();
bird.birdDetails();

const fish = new Fish('Elish', 'White-Gray', 'Freshwater', 'Delicious', 2000);
fish.animalDetails();
fish.fishDetails();