let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

const result = alphabets.reduce((acc, char) => {
    let found = false;
    for(let x of acc) {
        if(x == char) found = true;
    }

    if(!found) acc.push(char)
    return acc;
},[])

console.log(result)
