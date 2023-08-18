const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];
  
  const updateTask = (id, newName) => {
    // const found = tasks.find(x => x.id == id)
    // found.name = newName;

    const foundIndex = tasks.findIndex(x => x.id == id)
    tasks[foundIndex].name = newName;
  }

  updateTask(2, 'Travelling')
  console.log(tasks)