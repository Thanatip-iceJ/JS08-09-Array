const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' }
];


const newObj = products.reduce((acc,x) => {
    products.forEach(x => {
        acc[x.id] = {name: x.name}
    })
    return acc;
},{})  

console.log(newObj)