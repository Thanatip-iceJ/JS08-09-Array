const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

const result = []

for(let i in alphabets) {
    if(alphabets[i] == 'a') result.push(+i)
}

console.log(result)