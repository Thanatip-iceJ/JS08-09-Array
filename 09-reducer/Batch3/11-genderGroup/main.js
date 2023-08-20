const persons = [
    { name: 'John', sex: 'M' },
    { name: 'Jody', sex: 'M' },
    { name: 'Susan', sex: 'F' },
    { name: 'Kate', sex: 'F' },
    { name: 'Sid', sex: 'M' }
  ];

const resultObj = persons.reduce((acc, x) => {
    let male = []
    let female = []
    
    persons.forEach(x => {
        if(x.sex == 'M') male.push(x.name)
        if(x.sex == 'F') female.push(x.name)
    })

    acc.M = male;
    acc.F = female;

    return acc;
}, {})

console.log(resultObj)