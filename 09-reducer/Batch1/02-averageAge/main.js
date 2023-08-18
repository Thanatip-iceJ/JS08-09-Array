let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];


const getAverageAge = arr => {
    let avg = 0
    let sumAge = arr.reduce((acc,x) => acc + x.age, 0)
    avg = sumAge / arr.length
    return avg.toFixed(2);
}

getAverageAge(arr)
// console.log(arr)