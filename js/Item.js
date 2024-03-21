class Item {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
}

class Weapon extends Item {
    constructor(name = 'stick', weight, power) {
        super(name, weight);
        this.power = power;
    }
}

class Food extends Item {
    constructor(name, weight, nutritionalValue) {
        super(name, weight);
        this.nutritionalValue = nutritionalValue;
    }
}

export {Item, Weapon, Food};
