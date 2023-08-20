let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ];

const outside = flattened.reduce((acc, x) => {
  for(let i of x) {
    acc.push(i)
  }
  return acc;
},[])

console.log(outside)