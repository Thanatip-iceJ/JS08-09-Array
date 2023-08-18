// const filterRange = (arr, a, b) => {
//     arr.filter(x => x <= a || x >= b)
// // }

const arr1 = [1,2,3,4,5,6,7,8,9,10]

const filterRange = (arr, a, b) => {
    const newArr = arr.filter(x => x >= a && x <= b)
    return newArr
}

filterRange(arr1, 5, 10)