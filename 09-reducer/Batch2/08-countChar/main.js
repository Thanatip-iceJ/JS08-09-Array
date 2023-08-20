let str = 'I live in Thailand';
let arr = str.toLowerCase().split('')
console.log(arr)

const reduceFn = (acc, x) => {
    if(x !== ' ') {
        if(!acc[x]) acc[x] = 1
        if(acc[x]) acc[x] += 1
    }
    return acc;
}

const result = arr.reduce(reduceFn,{})
console.log(result)

