const arr = [2, 5, 10];
////////// arr.map(item, index, array)
const newArr = arr.map((x, i) => x * 3)

console.log(newArr)


let arr1 = [
    {name: 'John', age: 27},
    {name: 'Jo', age: 21},
    {name: 'Jin', age: 25},
    {name: 'Jack', age: 21},
]

const foundedPerson = arr1.find(x => x.age == 21)
console.log(foundedPerson)
