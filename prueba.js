// function merge(arr1, arr2) {
//   for (let i of arr2) {
    
//     for (x in arr1) {
//       if ((i > arr1[x] && i < arr1[parseInt(x)+1]) || arr1[parseInt(x)+1] == undefined || i == arr1[x]) {
//         arr1.splice(parseInt(x)+1, 0, i)
//         break
//       }
//     }
//   }
  
//   return arr1
// }

// console.log(merge([3, 4, 9, 9, 17, 20], [8, 9, 40, 41]))

// function merge(arr1, arr2) {
//   for (let i of arr2) {
    
//     for (let x in arr1) {
//       if ((i > arr1[x] && i < arr1[parseInt(x)+1]) || arr1[parseInt(x)+1] === undefined || i == arr1[x]) {
//         arr1.splice(parseInt(x)+1, 0, i)
//         break;
//       }
//     }
//   }
  
//   return arr1
// }

// console.log(merge([3, 4, 9, 9, 17, 20], [8, 9, 40, 41]))
let matrix = []
let row = [0, 0]
for (i = 0; i < 2; i++) {
    matrix.push(row)
}
matrix[0][0] = 1
console.log(matrix)