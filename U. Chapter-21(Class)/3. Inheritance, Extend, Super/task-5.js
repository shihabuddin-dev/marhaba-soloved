/* 
৫. Furniture ক্লাস বানিয়ে তার চাইল্ড হিসেবে Chair আর Table তৈরি কর। কমন প্রোপার্টিগুলো Parent-এ রাখ। তারপর Chair আর Table-এর আলাদা আলাদা প্রোপার্টি আর মেথড যোগ কর।
 */

class Furniture {
    constructor(material, color, price) {
        this.material = material;
        this.color = color;
        this.price = price;
    }

    getDetails() {
        console.log(`Material: ${this.material}, Color: ${this.color}, Price: $${this.price}`);
    }
}

class Chair extends Furniture {
    constructor(material, color, price, hasArmrest) {
        super(material, color, price);
        this.hasArmrest = hasArmrest;
    }

    chairType() {
        console.log(this.hasArmrest ? "This chair has armrests." : "This chair has no armrests.");
    }
}

class Table extends Furniture {
    constructor(material, color, price, shape) {
        super(material, color, price);
        this.shape = shape;
    }

    tableType() {
        console.log(`This table is ${this.shape}-shaped.`);
    }
}

const chair = new Chair('Wood', 'Brown', 150, true);
chair.getDetails();
chair.chairType();


const table = new Table('Metal', 'Black', 300, 'Round');
table.getDetails();
table.tableType();
