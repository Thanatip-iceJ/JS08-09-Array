const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];
  

const deleteTask = (id) => {
    const foundIndex = tasks.findIndex(x => x.id == id)
    console.log(foundIndex)
    tasks.splice(foundIndex, 1)
}

deleteTask(1)
console.log(tasks)