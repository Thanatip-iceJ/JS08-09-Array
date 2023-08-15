const arr = [2, 3, 5, 7, 11];
const newArr =  new Array()

// arr.forEach(x => {
//     newArr.push(x ** 2)
// })

// console.log(newArr)

for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] ** 2)
}

console.log(newArr)