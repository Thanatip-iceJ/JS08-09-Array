const arr = ['money', 'non', 'peakpoon', 'fon'];
const height = new Array(150, 160, 170)

height[3] = 180;
console.log(height)
// arr.push('kool')
arr[0] = 'golden'
arr[1] = 'michael'
arr[-1] = 'Pavit' // ถ้าพยายามอัพเดทใน index ที่ไม่มีอยู่จริง == add;
arr[4] = 'git'
console.log(arr)
delete arr[2]
console.log(arr)
console.log(arr.length)
console.log(arr[10]) // undefined
arr[arr.length] = 'mix'
console.log(arr, arr.length)

///////////////////////////

for(let i = 0; i < arr.length; i++) {
    console.log(i, arr[i])
}
////////////////////

const animal = ['spider', 'cat', 'elephant'];

animal.push('dog');
console.log(animal)

let r = animal.push('dog');
console.log(r)

let s = animal.unshift('snake', 'mountain bird')
console.log(s)

///////////// #Loop /////////

// for(let i in animal) {
//     console.log(i , animal[i])
// }

for(let x of animal) {
    console.log(x)
}

function add(x, y) {
    return x + y;
}

console.log(add(5,6))

//////////////////# concat

// const arr3 = [1,2]
// const newArr = arr3.concat(3,4,5,6)

/////////////////////////////
///////// # slice

const arr3 = [0,1,2,3,4,5,6]
const newArr = arr3.slice(0, 4)
console.log(newArr)


