function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX'
    console.log(name, age, country);
}

let hello = 'Hello'
let world = 'World'
let epicPharse = hello + ' ' + world

// es6

function newFunction2(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country)

}

newFunction2()

newFunction2('Ricardo', '27', 'CO')

let epicPharse2 = `${hello} ${world}`

