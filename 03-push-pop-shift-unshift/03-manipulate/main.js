const animals = ['Dog', 'Cat', 'Rat']
animals.push('animals')
animals.unshift('Horse')
animals.push('Giraffe', 'Snake')
animals.shift()
animals.pop()
animals.shift()


console.log(animals) // [ 'Cat', 'Rat', 'animals', 'Giraffe' ]