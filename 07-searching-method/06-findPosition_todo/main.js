const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

const foundIndex = tasks.findIndex(x => x.id == 2)
console.log(foundIndex)
  