/* Ejemplo 1*/
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX'
    console.log(name, age, country);
}
newFunction()

// es6
function newFunction2(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country)

}
newFunction2()
newFunction2('Ricardo', '27', 'CO')

/* Ejemplo 2*/
let hello = 'Hello'
let world = 'World'
let epicPharse = hello + ' ' + world

// es6
let epicPharse2 = `${hello} ${world}`

/* Ejemplo 3*/
let lorem = 'Lorem...... \n'
+ 'otra frase epica que necesitamos.'

// es6
let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica`

console.log(lorem)
console.log(lorem2)

/* Ejemplo 4 */

let person = {
    name: 'oscar',
    age: 32,
    country: 'MX'
}
console.log(person.name, person.age)

// es6 
let {name, age} = person
console.log(name, age)

/* Ejemplo 5 */
let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

let educationTeam = ['David', ...team1, ...team2]

console.log(educationTeam)

/* ejemplo 6 */
{
    var globalVar = 'Global Var' //Global
}
{
    let = globalLet = 'Global Let' //scope local
    console.log(globalLet)
}
console.log(globalVar)

/* ejemplo 7 */
let name = 'Oscar'
let age = 32

obj = {name:name, age: age}
//es6
let obj = {name, age}

const square = num => num * num;

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Ups!!')
        }
    })
}

import {externalHello} from '.module'

externalHello()

const condition = true
function* generatorHello () {
    if (condition) {
        yield 'Hello, '
    }
    if (condition) {
        yield 'World'
    }
}

const helloWorld = generatorHello()

console.log(helloWorld.next().value)
console.log(helloWorld.next().value)
console.log(helloWorld.next().value)









