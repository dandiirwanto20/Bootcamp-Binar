// class ContohClass {
//     constructor(name, address) {
//         this.name = name
//         this.address = address
//     }
// }

// let person1 = new ContohClass('Dandi', 'Jalan Melayu')

// console.log(person1)
// console.log(typeof person1)

// class Toyota {
//     constructor(jenisMesin, roda, codeRakitan, tonase) {
//         this.jenisMesin = jenisMesin
//         this.roda = roda
//         this.codeRakitan = codeRakitan
//         this.tonase = tonase
//     }

//     print() {
//         console.log(`Jenis Mesin ${this.jenisMesin} roda ${this.roda} code rakitan ${this.codeRakitan} tonase ${this.tonase}`)
//     }

// }
// let toyota = new Toyota('Honda', 4, '1231231', '3453')
// toyota.print()

class Cat {
    // add static property
    static bosCat = 'Dand'

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Add instance method
    introduce() {
        console.log(`Hi my cat name is ${this.name}`)
    }
}

console.log(Cat.bosCat)

// add instance method
Cat.prototype.food = function(name) {
    console.log(`${name} like a ${this.name}`)
}

// Add static method
Cat.feel = function(feeling) {
    console.log(`My cat so ${feeling}`)
}

let bobby = new Cat("Bobby", 20)

console.log(bobby)

console.log(bobby instanceof Cat)
bobby.introduce()
bobby.food('Fish')
Cat.feel('Lazy')