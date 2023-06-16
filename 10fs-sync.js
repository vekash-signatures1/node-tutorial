const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8') // utf8 is optional
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first)
console.log(second)

writeFileSync(
    './content/result-sync.txt', //path to write the result
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' } //it is use to appen child without overwrite the old values in the pointed file
)