let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

const initObj = {}

function reducerFn(acc, x) {
    if(!acc[x]) {
        acc[x] = 1
    } else {
        acc[x]++;
    }
    return acc;
}

const r = names.reduce(reducerFn, initObj);
console.log(r)

