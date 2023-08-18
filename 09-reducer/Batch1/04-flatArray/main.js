let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ];

// const newArr = flattened.reduce((acc,x) => [...acc , ...x] ,[])
const newArr = flattened.reduce((acc,x) => {
  for(let items of x) {
    acc.push(items)
  }
  return acc;
},[])


console.log(newArr)