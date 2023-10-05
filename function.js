// function perkalian

const perkalianArrow = (...input) => {
    let response
    // with forof
    // for (const key of input) {
    //     if (!response) {
    //         response = key
    //     } else {
    //         response *= key
    //     }
    // }

    // with for in
    for (const key in input) {
        if (!response) {
            response = input[key]
        } else {
            response *= input[key]
        }
    }
    return response
}

// function declaration
function perkalianDeclaration(...input) {
   // with forof
   let response
    for (const key of input) {
        if (!response) {
            response = key
        } else {
            response *= key
        }
    }
    return response
}

// function expresion
const perkalianExpresion = function(param1, param2) {
    return param1 * param2
}
console.log(perkalianArrow(2, 2))
console.log(perkalianDeclaration(3, 4))
console.log(perkalianExpresion(5, 5))

console.log(`\n`)

const kurangiRekursif = (input) => {
    if (input <= 0) {
        return
    } else {
        kurangiRekursif(input - 10)
        console.log(input)
    }

    // menampilkan input

}

kurangiRekursif(100)