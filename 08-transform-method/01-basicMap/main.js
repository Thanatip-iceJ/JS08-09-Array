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

const array07 = [100, 200.25, 300.84, 400.3];
const newArr07 = array07.map(x => x.toFixed(2))
log(newArr07)

const array08 = [0, 5, 10, 7, 6, 5, 0];
const newArr08 = array08.map(x => {
    let date = new Date(x)
    date.setMonth(x)
    return date.toLocaleString('en-Us', {month: 'short'});
    // const month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    // return x = month_names_short[x]
})
console.log(newArr08)

const array09 = [1, 16, 81, 256, 625, 1296];
// const newArr09 = array09.map(x => Math.sqrt(Math.sqrt(x)))
const newArr09 = array09.map(x => x**(1/4))
console.log(newArr09)

const array10 = [
    { name: 'apple', age: 14 },
    { name: 'banana', age: 18 },
    { name: 'watermelon', age: 32 }
  ];
const newArr10 = array10.map(x => x.name)
log(newArr10)

const array11 = [
    { name: 'apple', age: 14 },
    { name: 'banana', age: 18 },
    { name: 'watermelon', age: 32 }
  ];

const newArr11 = array11.map(x => x.age)
log(newArr11)

const array12 = [
    { name: 'apple', surname: 'London' },
    { name: 'banana', surname: 'Bangkok' },
    { name: 'watermelon', surname: 'Singapore' }
  ];

const newArr12 = array12.map(x => `${x.name} ${x.surname}`)
log(newArr12)

const array13 = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-01' },
    { name: 'watermelon', birth: '1985-12-01' }
  ];

const newArr13 = array13.map(x => {
    let today = new Date()
    let birthDate = new Date(x.birth)
    let age = today.getFullYear() - birthDate.getFullYear() - (today.getMonth() < birthDate.getMonth() || 
            today.getMonth() == birthDate.getMonth() && today.getDay() < birthDate.getDay())
    x.age = age;
    return x;

  //   const newArr13 = array13.map(x => {
  //     const newFruitObj = Object.assign({}, x);
  //     const fullYear = +x.birth.slice(0,4)
  //     newFruitObj.age = 2021 - fullYear;
  //     return newFruitObj;
  // })
})

log(newArr13)

const array14 = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-10' },
    { name: 'watermelon', birth: '1985-12-30' }
  ];

const newArr14 = array14.map(x => {
    let date = new Date(x.birth)
    let y = date.getFullYear()
    let m = date.toLocaleString('default', { month: 'short' })
    let d = date.getDate()
    let DD_MM_YY = [d, m, y].join(' ')
    return `<tr><td>${x.name}</td><td>${DD_MM_YY}</td></tr>`    
})

log(newArr14)


  
  
  






