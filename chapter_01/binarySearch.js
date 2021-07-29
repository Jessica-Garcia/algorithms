/*
Binary search only works if the list is sorted.
The function receives an ordered array and an item, if the item is in the array, 
the function returns the position where the item is.
*/

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (list, item) => {
  let lowIndex = 0;
  let highIndex = list.length - 1;

  while (lowIndex <= highIndex) {

    let middleIndex = Math.floor((lowIndex + highIndex) / 2);
    let gess = list[middleIndex];

    if(gess == item) return middleIndex;
    if(gess > item){
      highIndex = middleIndex - 1;
    }else{
      lowIndex = middleIndex + 1;
    }
  }
  return null;
}

console.log(binarySearch(list, 8)); // 7
console.log(binarySearch(list, -1)); // null