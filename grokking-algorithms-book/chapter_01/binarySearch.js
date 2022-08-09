/*
Binary search only works if the list is sorted.
The function receives an ordered array and an item, if the item is in the array, 
the function returns the position where the item is.
*/

const list = [0, 10, 25, 32, 44, 51, 67, 79, 85, 93, 102];

const binarySearch = (list, item) => {
    let lowestIndex = 0;
    let highestIndex = list.length - 1;
    
    while (lowestIndex <= highestIndex) {

        let middleIndex = Math.floor((lowestIndex + highestIndex) / 2);
        let shot = list[middleIndex];
        
        if(shot === item) return middleIndex;
        
        if(shot < item ) {

            lowestIndex = middleIndex +1 
        }else {

            highestIndex = middleIndex -1;
        }
    }
    
    return null;
}

console.log(binarySearch(list, 79));
console.log(binarySearch(list, 798));


