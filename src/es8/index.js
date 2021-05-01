const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

const values = Object.values(data)
console.log(values)
console.log(values.length)

// Padding

const string = 'hello'
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12, ' -----'))
console.log('food'.padEnd(12, '  -----'))