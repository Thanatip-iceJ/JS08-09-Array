let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

const result = alphabets.reduce((acc, x, i) => {
    let found = false;
    for(let item of acc) {
        if(x == item) found = true;
    }
    if(!found)acc.push(x)
    return acc;
}, [])

console.log(result)