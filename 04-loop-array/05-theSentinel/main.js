let input = prompt('Enter a number');
let sum = 0

while(true) {
    if(input == null || input.trim() == '' || isNaN(input)) break;
    input = prompt('Enter a number');
    sum += +input;
}

console.log(sum)