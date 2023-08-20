let str = '31 45 12 67 34 86 23 37 19 41';

const arr = str.split(' ')
console.log(arr)

const sum = arr.reduce((acc,x) => {
    if(+x < 40) acc += +x;
    return acc;
}, 0)

console.log(sum)

