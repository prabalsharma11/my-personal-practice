//even numbers upto n
//using for loops:
// let n = Number(prompt('enter no'))
// for (let i = 2; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i)
//   }
// }
///using while loops:
// let n = Number(prompt('enter no'))
// let i = 2
// while (i <= n) {
//   if (i % 2 == 0) {
//     console.log(i)
//   }
//   i++
// }
///factorial of a number;
//using for loops:
// let n = Number(prompt('enter no'))
// let fact = 1
// for (let i = 1; i <= n; i++) {
//   fact *= i
// }
// console.log(fact)
//using while loops:
// let n = Number(prompt('enter no'))
// let i = 1
// let fact = 1
// while (i <= n) {
//   fact *= i
//   i++
// }
// console.log(fact)
//// print pyramid numbers:
// let n = Number(prompt('enter no'))
// let i = 1
// while (i <= n) {
//   let j1 = 1
//   let space = n - i
//   let str = ''
//   while (j1 <= space) {
//     str += ' '
//     j1++
//   }
//   let j2 = 1
//   let stars = 2 * i - 1
//   while (j2 <= stars) {
//     str += '*'
//     j2++
//   }

//   i++
//   console.log(str)
// }
// let n = Number(prompt('enter no'))
// let i = 1
// while (i <= n) {
//   let j1 = 1
//   let space = n - i
//   let str = ''
//   while (j1 <= space) {
//     str += ' '
//     j1++
//   }
//   let j2 = 1
//   while (j2 < i) {
//     str += j2
//     j2++
//   }

//   while (j2 >= 1) {
//     str += j2
//     j2--
//   }

//   console.log(str)
//   i++
// }
//star pattern using for loops
// let n = Number(prompt('enter no'))
// for (let i = 1; i <= n; i++) {
//   let str = ''
//   for (let k = 1; k <= i; k++) {
//     str += '*'
//   }
//   console.log(str)
// }
//number right angle pyramid using for loops
// let n = Number(prompt('enter no'))
// for (let i = 1; i <= n; i++) {
//   let str = ''
//   for (let k = 1; k <= i; k++) {
//     str += k
//   }
//   console.log(str)
// }
////pyramid using for loops;
// let n = Number(prompt('enter no'))
// for (let i = 1; i <= n; i++) {
//   let str = ''
//   let spaces = n - i
//   for (let k = 1; k <= spaces; k++) {
//     str += ' '
//   }
//   let stars = 2 * i - 1
//   for (l = 1; l <= stars; l++) {
//     str += '*'
//   }
//   console.log(str)
// }
// let n = Number(prompt('enter no'))
// for (let i = 1; i <= n; i++) {
//   let str = ''
//   let spaces = n - i
//   for (let k = 1; k <= spaces; k++) {
//     str += ' '
//   }
//   for (l = 1; l < i; l++) {
//     str += l
//   }
//   for (; l >= 1; l--) {
//     str += l
//   }
//   console.log(str)
// }
///inverted right angle triangle:
//using while loop:
// let n = Number(prompt('enter no'))
// let i = 1
// while (i <= n) {
//   let j = 0
//   let str = ''
//   while (j <= n - i) {
//     str += '*'
//     j++
//   }
//   console.log(str)
//   i++
// }
//using for loops:
// let n = Number(prompt('enter no'))
// for (let i = 1; i <= n; i++) {
//   let j = 0
//   let str = ''
//   for (; j <= n - i; j++) {
//     str += '*'
//   }
//   console.log(str)
// }
/////k star formation:
//using while loops:
// let n = Number(prompt('enter no'))
// let i = 1
// while (i <= n) {
//   let j1 = 0
//   let str = ''
//   while (j1 < i) {
//     str += '*'
//     j1++
//   }

//   while (j1 <= n - i) {
//     str += '*'
//     j1++
//   }
//   console.log(str)
//   i++
// }
//by for loops:
//using for loops:
// let n = Number(prompt('enter no'))
// for (let i = 1; i <= n; i++) {
//   let str = ''
//   let l = 1
//   for (; l < i; l++) {
//     str += '*'
//   }
//   for (; l <= n - i; l++) {
//     str += '*'
//   }
//   console.log(str)
// }
////diamond pattern
////using while loop:
// let n = Number(prompt('enter no'))
// let i = 1
// while (i <= n) {
//   let j1 = 1
//   let str = ''
//   let spaces = n - i
//   while (j1 <= spaces) {
//     str += ' '
//     j1++
//   }
//   j1 = 1
//   let stars = 2 * i - 1
//   while (j1 <= stars) {
//     str += '*'
//     j1++
//   }
//   console.log(str)
//   i++
// }
// i = n - 1
// while (i >= 1) {
//   let nspc = n - i
//   let j2 = 1
//   let str = ''
//   while (j2 <= nspc) {
//     str += ' '
//     j2++
//   }
//   j2 = 1
//   let strs3 = 2 * i - 1
//   while (j2 <= strs3) {
//     str += '*'
//     j2++
//   }
//   i--
//   console.log(str)
// }
//
////count frequency number:
// let n = prompt('entyer no')
// let d = prompt('enter digit')

// function fn(n, d) {
//   let count = 0
//   let str = String(n)
//   for (let i = 0; i <= str.length; i++) {
//     if (n.charAt(i) == d) {
//       count += 1
//     }
//   }
//   console.log(count)
// }
// fn(n, d)
///place value checker:
// let n = prompt('entyer no')
// function fn(n) {
//   let str = String(n)
//   if (str.charAt(str.length - 2) == 0) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(fn(n))
////calculate biaary to decimal:
// let n = prompt('entyer no')
// function fn(n) {
//   let str = String(n)
//   let ans = 0
//   for (let i = 0; i < str.length; i++) {
//     ans += str.charAt(str.length - i) * 2 ** str.charAt(str.length - i)
//   }
//   return ans
// }
// console.log(fn(n))
// let arr = [1, 2, 4, 5, 6, 7]
/////////////////////////////max difrrence bw two elements
/////part 1
// function maxDifference(arr) {
//   if (arr.length < 2) {
//     return 0 // If array has less than 2 elements, return 0
//   }

//   // Initialize minElement and maxElement with the first element of the array
//   let minElement = arr[0]
//   let maxElement = arr[0]

//   // Traverse the array to find the actual minimum and maximum elements
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < minElement) {
//       minElement = arr[i]
//     }
//     if (arr[i] > maxElement) {
//       maxElement = arr[i]
//     }
//   }

//   // The maximum difference is the absolute difference between max and min elements
//   return Math.abs(maxElement - minElement)
// }

// // Example usage:
// let arr = [5, 1, 9, 2, 7]
// let result = maxDifference(arr)
// console.log('The maximum difference is: ' + result)
////////part 2
// function maxDifference(arr) {
//   if (arr.length < 2) {
//     return 0 // If array has less than 2 elements, return 0
//   }

//   let maxDiff = 0

//   // Nested loops to compare every pair of elements
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let diff = Math.abs(arr[i] - arr[j])
//       if (diff > maxDiff) {
//         maxDiff = diff
//       }
//     }
//   }

//   return maxDiff
// }

// // Example usage:
// let arr = [5, 1, 9, 2, 7]
// let result = maxDifference(arr)
// console.log('The maximum difference is: ' + result)
// for (let i = 0; i < a.length; i++) {
//   if (a[i] == b) {
//     return i
//   }

//   if (i == 0 && b < a[i]) {
//     return 0
//   } else if (i == a.length - 1 && b > a[i]) {
//     return i + 1
//   } else {
//     if (a[i - 1] < b && a[i] > b) {
//       return i
//     } else if (b > a[i] && b < a[i + 1]) {
//       return i + 1
//     }
//   }
// }
//////////////////////////////////////////////////in built meathods
////.include meathod in strings

// let word = ['werb']

// function fs(word) {
//   let str = 'qwertyuiop'
//   let ans = []
//   for (let item of word) {
//     let isMatch = true
//     for (let i = 0; i < item.length; i++) {
//       if (!str.includes(item.charAt(i))) {
//         isMatch = false
//         break // Exit the loop early if a character is not found
//       }
//     }
//     if (isMatch) {
//       ans.push(item) // Only push the item if all characters match
//     }
//   }
//   return ans
// }

// console.log(fs(word))
////imp

// let n = ['werw', 'yyuuyuyuyuy']
// for (let item of n) {
//   console.log(item.length)
// }
////////strings problems
//////////Word from Keyboard(You are given array of strings, you need to print words from that array which can be typed using only one row of Keyboard.

// First row of keyboard = "qwertyuiop"

// Second row of keyboard = "asdfghjkl"

// Third row of keyboard = "zxcvbnm")
////ans:
// function getStrings(arr) {
//   let rw1 = 'qwertyuiop'
//   let rw2 = 'asdfghjkl'
//   let rw3 = 'zxcvbnm'
//   let ans = []

//   for (let item of arr) {
//     let r1 = true
//     let r2 = true
//     let r3 = true

//     for (let i = 0; i < item.length; i++) {
//       if (!rw1.includes(item.charAt(i))) {
//         r1 = false
//       }
//       if (!rw2.includes(item.charAt(i))) {
//         r2 = false
//       }
//       if (!rw3.includes(item.charAt(i))) {
//         r3 = false
//       }
//     }

//     // If the word belongs entirely to one of the rows, add it to the answer array
//     if (r1 || r2 || r3) {
//       ans.push(item)
//     }
//   }

//   return ans
// }

// console.log(getStrings(['were', 'sad', 'top', 'zoo']))
