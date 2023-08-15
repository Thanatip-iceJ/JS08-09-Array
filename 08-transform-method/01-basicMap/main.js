const log = console.log;

const array01 = [1, 2, 30, 400];
const newArr = array01.map(x => x*2)
console.log(newArr)

const array02 = [1, 2, 3, 4];
const newArr02 = array02.map(x => String(x))
log(newArr02)

const array03 = [1, '1', 2, {}];
const newArr03 = array03.map(x => typeof x)
log(newArr03)

const array04 = ['apple', 'banana', 'orange'];
const newArr04 = array04.map(x => x = x.toUpperCase())
log(newArr04)

const array05 = [1, 3, 4, 5, 6, 7, 8];
const newArr05 = array05.map(x => (x % 2 == 0)? 'odd' : 'even')
log(newArr05)

const array06 = [1, -3, 2, 8, -4, 5];
const newArr06 = array06.map(x => Math.abs(x))
log(newArr06)




