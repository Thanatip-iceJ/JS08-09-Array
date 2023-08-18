const arr = [-3, 2, 0, -7, 4, 6];
const newArr = arr.map(x => x**2).sort((a,b) => a-b)
console.log(newArr)