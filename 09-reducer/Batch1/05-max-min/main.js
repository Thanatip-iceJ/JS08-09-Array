let arr = [3.24, 2.78, 3.86, 1.37, 0.52];


const max = arr.reduce((acc, x) => {
    for(let x of arr) {
        if(x > acc) acc = x;
    }
    return acc
},0)

const min = arr.reduce((acc, x) => {
    for(let x of arr) {
        if(x < acc) acc = x;
    }
    return acc
})

console.log(max)
console.log(min)


