/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/
const arrowMirrorArray = array => {
     let newArr = []
     for (let i = 0; i < array.length; i++){
          let res1 = array[i]
          newArr.push(res1)
     }
     for (let i = 0; i < array.length; i++){
          let res2 = array[i]
          let rev = array.reverse(res2)
          newArr.push(rev)
     }// return newArr
     console.log(newArr)

}
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  //return null;
}
