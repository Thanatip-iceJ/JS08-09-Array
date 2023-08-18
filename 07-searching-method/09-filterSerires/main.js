const array = [9, 17, 23, 5];
const newArr = array.filter(x => x > 10)
console.log(newArr)

const array02 = [1, 2, 3, 4];
const newArr02 = array02.filter(x => x % 2 != 0)
console.log(newArr02)

const array03 = [1, '1', 2, {}];
const newArr03 = array03.filter(x => typeof x == 'number')
console.log(newArr03)

const array04 = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
const newArr04 = array04.filter(x => x.length > 6)
console.log(newArr04)

const array05 = [1, -3, 2, 8, -4, 5];
const newArr05 = array05.filter(x => x > 0)
console.log(newArr05)

const array06 = [1, 3, 4, 5, 6, 7, 8];
const newArr06 = array06.filter(x => x % 3 == 0)
console.log(newArr06)

const array07 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
const newArr07 = array07.filter(x => x[0].toLowerCase() == 'e')
console.log(newArr07)

const array08 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
const newArr08 = array08.filter(x => x == x.toUpperCase())
console.log(newArr08)

const array09 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
const newArr09 = array09.filter(x => x.includes('buri'))
console.log(newArr09)

const array10 = [
    { name: 'Ben', age: 14 },
    { name: 'Phil', age: 18 },
    { name: 'John', age: 32 },
    { name: 'Ann', age: 16 },
    { name: 'Paul', age: 24 }
  ];

const newArr10 = array10.filter(x => x.age > 18)
console.log(newArr10)

const array11 = [
    { id: 1, name: 'Pepsi' },
    { id: 2, name: 'Mirinda' },
    { id: 3, name: 'Coke' },
    { id: 4, name: 'Fanta' },
    { id: 5, name: 'Sprite' }
  ];

const newArr11 = array11.filter(x => x.id !== 4)
console.log(newArr11)

const array12 = [
    { name: 'John', birth: '2001-07-31' },
    { name: 'Jack', birth: '1990-06-24' },
    { name: 'Jim', birth: '1984-12-13' },
    { name: 'Jeff', birth: '1996-02-05' },
    { name: 'Joe', birth: '2002-06-13' }
  ];

const newArr12 = array12.filter(x => {
    let date = new Date(x.birth)
    return date.getMonth() == 5;
    // let month = x.birth.slice(5,7);
    // return month == 6;
})
console.log(newArr12)

  
  







